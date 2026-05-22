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

// Raw record from API - field names unknown until runtime
export type RawRecord = Record<string, unknown>

export type EtkinlikItem = {
  _raw: RawRecord
  id: number
  adi: string
  tur: string
  mekan: string
  baslangic: string
  bitis: string
  adres: string
  biletLinki: string
  ucretsiz: boolean
  ilce: string
  resim: string
  aciklama: string
  detayUrl: string
}

function strField(r: RawRecord, ...keys: string[]): string {
  for (const k of keys) {
    if (r[k] !== undefined && r[k] !== null && String(r[k]).trim() !== "") {
      return String(r[k]).trim()
    }
  }
  return ""
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
}

function normalizeEtkinlik(r: RawRecord): EtkinlikItem {
  const ucretsizVal = r.UcretsizMi ?? r.Ucretsiz ?? r.ucretsizmi ?? r.ucretsiz ?? r.Free ?? ""
  const ucretsiz =
    ucretsizVal === true ||
    ucretsizVal === 1 ||
    String(ucretsizVal).toLowerCase().includes("ücretsiz") ||
    String(ucretsizVal).toLowerCase() === "true" ||
    String(ucretsizVal).toLowerCase() === "evet"

  const slug = strField(r, "EtkinlikUrl", "Slug", "slug", "Url", "URL")
  const kisaAciklama = strField(r, "KisaAciklama", "Aciklama", "Ozet", "Tanim", "Description")

  return {
    _raw: r,
    id: typeof r.Id === "number" ? r.Id : 0,
    adi: strField(r, "Adi", "EtkinlikAdi", "ADI", "Ad", "Baslik", "BASLIK", "name", "Name", "Etkinlik"),
    tur: strField(r, "Tur", "EtkinlikTuru", "TUR", "Kategori", "KATEGORI", "Tip", "TIP", "type"),
    mekan: strField(r, "EtkinlikMerkezi", "Mekan", "MekanAdi", "MEKAN", "Salon", "Yer", "YER"),
    baslangic: strField(r, "EtkinlikBaslamaTarihi", "BaslangicTarihi", "Tarih", "TARIH", "TarihSaat", "StartDate"),
    bitis: strField(r, "EtkinlikBitisTarihi", "BitisTarihi", "BitisTarih", "BitisZamani", "EndDate"),
    adres: strField(r, "Adres", "ADRES", "adres", "Konum"),
    biletLinki: strField(r, "BiletSatisLinki", "BiletLinki", "BiletUrl", "BiletLink"),
    ucretsiz,
    ilce: strField(r, "ILCE", "Ilce", "IlceAdi", "ilce"),
    resim: strField(r, "KucukAfis", "Resim", "AfisUrl", "Image", "image"),
    aciklama: kisaAciklama ? stripHtml(kisaAciklama) : "",
    detayUrl: slug ? `https://kultursanat.izmir.bel.tr/etkinlik/${slug}` : "",
  }
}

type RawEtkinlikResponse = RawRecord[] | { etkinlikler?: RawRecord[]; Etkinlikler?: RawRecord[]; result?: RawRecord[]; Result?: RawRecord[] }

export const getEtkinlikler = async (): Promise<EtkinlikItem[]> => {
  const raw = await getIzmir<RawEtkinlikResponse>("/api/ibb/kultursanat/etkinlikler", 3600)
  if (!raw) return []
  const arr: RawRecord[] = Array.isArray(raw)
    ? raw
    : (raw.etkinlikler ?? raw.Etkinlikler ?? raw.result ?? raw.Result ?? [])
  return arr.map(normalizeEtkinlik)
}

// --- Hava Kalitesi ---
// API flat satır listesi döndürür: her satır bir (bölge × gaz) ölçümü
// { BolgeAdi, GazAdi:"PM10"|"SO2"|..., OlcumDegeri:"45", OlcumTarihi }
// Bölgeye göre gruplayıp pivot ediyoruz.

export type HavaKalitesiItem = {
  istasyonAdi: string
  ilce: string
  pm10: number | null
  no2: number | null
  so2: number | null
  co: number | null
  o3: number | null
  tarih: string
}

type RawCevreOlcum = {
  BolgeAdi?: string
  GazAdi?: string
  OlcumDegeri?: string | number
  OlcumTarihi?: string
  BolgeId?: number
  GazId?: number
}

function parseDeger(v?: string | number): number | null {
  if (v === undefined || v === null || v === "") return null
  const n = typeof v === "number" ? v : parseFloat(String(v).replace(",", "."))
  return isNaN(n) ? null : n
}

function groupCevreOlcumler(rows: RawCevreOlcum[]): HavaKalitesiItem[] {
  const map = new Map<string, HavaKalitesiItem>()
  for (const row of rows) {
    const bolge = (row.BolgeAdi ?? "").trim()
    if (!bolge) continue
    if (!map.has(bolge)) {
      map.set(bolge, {
        istasyonAdi: bolge,
        ilce: bolge,
        pm10: null, no2: null, so2: null, co: null, o3: null,
        tarih: row.OlcumTarihi?.slice(0, 10) ?? "",
      })
    }
    const entry = map.get(bolge)!
    const deger = parseDeger(row.OlcumDegeri)
    if (deger === null) continue
    const gaz = (row.GazAdi ?? "").toUpperCase()
    if (gaz === "PM10") entry.pm10 = deger
    else if (gaz === "SO2") entry.so2 = deger
    else if (gaz === "NO2") entry.no2 = deger
    else if (gaz === "CO") entry.co = deger
    else if (gaz === "O3") entry.o3 = deger
  }
  return Array.from(map.values())
}

export const getHavaKalitesi = async (): Promise<HavaKalitesiItem[]> => {
  const raw = await getIzmir<RawCevreOlcum[] | RawRecord>("/api/ibb/cevre/havadegerleri", 3600)
  if (!raw) return []
  const arr = Array.isArray(raw) ? (raw as RawCevreOlcum[]) : []
  return groupCevreOlcumler(arr)
}

export function havaKalitesiAdi(item: HavaKalitesiItem): string {
  return item.istasyonAdi
}

export function havaKalitesiIlce(item: HavaKalitesiItem): string {
  return item.ilce
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
