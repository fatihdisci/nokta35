import { IZMIR_API } from "./api"

async function getIzmir<T>(path: string, revalidate: number): Promise<T | null> {
  try {
    const res = await fetch(`${IZMIR_API}${path}`, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

export type BarajItem = {
  BarajKuyuAdi?: string
  BarajKuyuId?: number
  DolulukOrani?: number | string
  SuYuksekligi?: number | string
  MaksimumSuKapasitesi?: number | string
  KullanılabilirGolSuHacmi?: number | string
  Boylam?: string | number
  Enlem?: string | number
}

export type EczaneItem = {
  Adi?: string
  Adres?: string
  Telefon?: string
  Bolge?: string
  BolgeAciklama?: string
  // !! Dikkat: API'de X = enlem (lat), Y = boylam (lon)
  LokasyonX?: string | number
  LokasyonY?: string | number
}

export type OtoparkOccupancy = {
  total?: { free?: number; occupied?: number }
}

export type OtoparkItem = {
  name?: string
  status?: string
  address?: string
  provider?: string
  lat?: number
  lng?: number
  occupancy?: OtoparkOccupancy
  isPaid?: boolean
}

export type KesintiItem = {
  IlceAdi?: string
  Mahalleler?: string
  Aciklama?: string
  KesintiSuresi?: string
  Tip?: string
  ArizaDurumu?: string
}

export const getBarajlar = () =>
  getIzmir<BarajItem[]>("/api/izsu/barajdurum", 3600)

export const getEczaneler = () =>
  getIzmir<EczaneItem[]>("/api/ibb/nobetcieczaneler", 3600)

export const getOtoparklar = () =>
  getIzmir<OtoparkItem[]>("/api/ibb/izum/otoparklar", 30)

export const getKesintiler = () =>
  getIzmir<KesintiItem[]>("/api/izsu/arizakaynaklisukesintileri", 3600)

export function otoparkKapasite(o: OtoparkItem) {
  const free = o.occupancy?.total?.free ?? 0
  const occupied = o.occupancy?.total?.occupied ?? 0
  return { free, occupied, total: free + occupied }
}

const GUN_PATTERNS: [RegExp, number][] = [
  [/cumartesi/i, 6],
  [/pazartesi/i, 1],
  [/sal[ıi]/i, 2],
  [/[çc]ar[şs]amba/i, 3],
  [/per[şs]embe/i, 4],
  [/cuma/i, 5],
  [/pazar(?!tesi)/i, 0],
]

export function parsePazarGun(aciklama?: string): number | undefined {
  if (!aciklama) return undefined
  for (const [pattern, day] of GUN_PATTERNS) {
    if (pattern.test(aciklama)) return day
  }
  return undefined
}

export const GUN_ADLARI = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

export type PazarYeriItem = {
  ILCE: string
  MAHALLE: string
  YOL?: string
  ADI: string
  ACIKLAMA?: string
  BOYLAM: number
  ENLEM: number
  gun?: number
}

export type EtkinlikItem = {
  EtkinlikAdi: string
  EtkinlikTuru?: string
  Mekan?: string
  BaslangicTarihi?: string
  BitisTarihi?: string
  Adres?: string
  BiletLinki?: string
  UcretsizMi?: boolean | string
  ILCE?: string
  ENLEM?: number
  BOYLAM?: number
}

type RawEtkinlikResponse = EtkinlikItem[] | { etkinlikler?: EtkinlikItem[]; Etkinlikler?: EtkinlikItem[] }

export const getEtkinlikler = async (): Promise<EtkinlikItem[]> => {
  const raw = await getIzmir<RawEtkinlikResponse>("/api/ibb/kultursanat/etkinlikler", 3600)
  if (!raw) return []
  if (Array.isArray(raw)) return raw
  return raw.etkinlikler ?? raw.Etkinlikler ?? []
}

export type HavaKalitesiItem = {
  IstasyonAdi?: string
  StasyonAdi?: string
  Adi?: string
  ILCE?: string
  Ilce?: string
  PM10?: number | string
  PM25?: number | string
  NO2?: number | string
  SO2?: number | string
  CO?: number | string
  O3?: number | string
  Tarih?: string
  Saat?: string
}

export function havaKalitesiAdi(item: HavaKalitesiItem): string {
  return item.IstasyonAdi ?? item.StasyonAdi ?? item.Adi ?? ""
}

export function havaKalitesiIlce(item: HavaKalitesiItem): string {
  return item.ILCE ?? item.Ilce ?? ""
}

export function pm10Seviye(pm10: number): { label: string; renk: string } {
  if (pm10 <= 50) return { label: "İyi", renk: "text-green-600" }
  if (pm10 <= 100) return { label: "Orta", renk: "text-yellow-600" }
  if (pm10 <= 200) return { label: "Hassas", renk: "text-orange" }
  return { label: "Sağlıksız", renk: "text-red-600" }
}

export function parsePollutant(val?: number | string): number | null {
  if (val === undefined || val === null) return null
  const n = typeof val === "number" ? val : parseFloat(String(val).replace(",", "."))
  return isNaN(n) ? null : n
}

type RawHavaKalitesiResponse = HavaKalitesiItem[] | { havakalitest?: HavaKalitesiItem[]; HavaKalitesi?: HavaKalitesiItem[]; istasyonlar?: HavaKalitesiItem[] }

export const getHavaKalitesi = async (): Promise<HavaKalitesiItem[]> => {
  const raw = await getIzmir<RawHavaKalitesiResponse>("/api/ibb/cevre/havadegerleri", 3600)
  if (!raw) return []
  if (Array.isArray(raw)) return raw
  return raw.havakalitest ?? raw.HavaKalitesi ?? raw.istasyonlar ?? []
}

type RawPazarResponse = { onemliyer?: Record<string, unknown>[] }

export const getPazarYerleri = async (): Promise<PazarYeriItem[]> => {
  const data = await getIzmir<RawPazarResponse>("/api/ibb/cbs/pazaryerleri", 86400)
  const rows = data?.onemliyer ?? []
  return rows.map((r) => {
    const aciklama = r.ACIKLAMA ? String(r.ACIKLAMA) : undefined
    return {
      ILCE: String(r.ILCE ?? ""),
      MAHALLE: String(r.MAHALLE ?? ""),
      YOL: r.YOL ? String(r.YOL) : undefined,
      ADI: String(r.ADI ?? ""),
      ACIKLAMA: aciklama,
      BOYLAM: parseFloat(String(r.BOYLAM ?? "0").replace(",", ".")),
      ENLEM: parseFloat(String(r.ENLEM ?? "0").replace(",", ".")),
      gun: parsePazarGun(aciklama),
    }
  })
}
