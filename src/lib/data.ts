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
  adi: string
  tur: string
  mekan: string
  baslangic: string
  bitis: string
  adres: string
  biletLinki: string
  ucretsiz: boolean
  ilce: string
}

function strField(r: RawRecord, ...keys: string[]): string {
  for (const k of keys) {
    if (r[k] !== undefined && r[k] !== null && String(r[k]).trim() !== "") {
      return String(r[k]).trim()
    }
  }
  return ""
}

function normalizeEtkinlik(r: RawRecord): EtkinlikItem {
  const ucretsizVal = r.UcretsizMi ?? r.Ucretsiz ?? r.ucretsizmi ?? r.ucretsiz ?? r.Free ?? ""
  const ucretsiz =
    ucretsizVal === true ||
    ucretsizVal === 1 ||
    String(ucretsizVal).toLowerCase().includes("ücretsiz") ||
    String(ucretsizVal).toLowerCase() === "true" ||
    String(ucretsizVal).toLowerCase() === "evet"

  return {
    _raw: r,
    adi: strField(r, "EtkinlikAdi", "Adi", "ADI", "Ad", "Baslik", "BASLIK", "etkinlikAdi", "name", "Name", "Etkinlik"),
    tur: strField(r, "EtkinlikTuru", "Tur", "TUR", "Kategori", "KATEGORI", "Tip", "TIP", "EtkinlikTur", "type"),
    mekan: strField(r, "Mekan", "MekanAdi", "MEKAN", "mekan", "Salon", "Yer", "YER"),
    baslangic: strField(r, "BaslangicTarihi", "Tarih", "TARIH", "TarihSaat", "BaslangicZamani", "StartDate"),
    bitis: strField(r, "BitisTarihi", "BitisTarih", "BitisZamani", "EndDate"),
    adres: strField(r, "Adres", "ADRES", "adres", "Konum"),
    biletLinki: strField(r, "BiletLinki", "BiletUrl", "BiletLink", "Url", "URL", "Link"),
    ucretsiz,
    ilce: strField(r, "ILCE", "Ilce", "IlceAdi", "ilce"),
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

export type HavaKalitesiItem = {
  _raw: RawRecord
  istasyonAdi: string
  ilce: string
  pm10: number | null
  no2: number | null
  so2: number | null
  co: number | null
  o3: number | null
  tarih: string
}

function numField(r: RawRecord, ...keys: string[]): number | null {
  for (const k of keys) {
    const v = r[k]
    if (v === undefined || v === null) continue
    const n = typeof v === "number" ? v : parseFloat(String(v).replace(",", "."))
    if (!isNaN(n)) return n
  }
  return null
}

// Handle nested Olcumler/Parametreler array pattern
function pollutantFromNested(r: RawRecord, paramName: string): number | null {
  const nested = (r.Olcumler ?? r.Parametreler ?? r.olcumler ?? r.parametreler ?? r.Degerler) as RawRecord[] | undefined
  if (!Array.isArray(nested)) return null
  for (const item of nested) {
    const paramKey = String(item.Parametre ?? item.ParametreAdi ?? item.Kod ?? item.Ad ?? "")
    if (paramKey.toLowerCase() === paramName.toLowerCase()) {
      return numField(item, "Deger", "Ortalama", "Son", "Value", "deger")
    }
  }
  return null
}

function normalizeHavaKalitesi(r: RawRecord): HavaKalitesiItem {
  return {
    _raw: r,
    istasyonAdi: strField(r, "IstasyonAdi", "StasyonAdi", "Adi", "ADI", "IstasyonNo", "istasyonAdi", "name"),
    ilce: strField(r, "ILCE", "Ilce", "IlceAdi", "ilce"),
    pm10: numField(r, "PM10", "Pm10", "pm10", "PM_10", "DegerPM10", "PM10Deger") ?? pollutantFromNested(r, "PM10"),
    no2: numField(r, "NO2", "No2", "no2", "NO_2") ?? pollutantFromNested(r, "NO2"),
    so2: numField(r, "SO2", "So2", "so2", "SO_2") ?? pollutantFromNested(r, "SO2"),
    co: numField(r, "CO", "Co", "co") ?? pollutantFromNested(r, "CO"),
    o3: numField(r, "O3", "o3") ?? pollutantFromNested(r, "O3"),
    tarih: strField(r, "Tarih", "TarihSaat", "Saat", "tarih"),
  }
}

type RawHavaKalitesiResponse = RawRecord[] | {
  havakalitest?: RawRecord[]
  HavaKalitesi?: RawRecord[]
  istasyonlar?: RawRecord[]
  Istasyonlar?: RawRecord[]
  result?: RawRecord[]
}

export const getHavaKalitesi = async (): Promise<HavaKalitesiItem[]> => {
  const raw = await getIzmir<RawHavaKalitesiResponse>("/api/ibb/cevre/havadegerleri", 3600)
  if (!raw) return []
  const arr: RawRecord[] = Array.isArray(raw)
    ? raw
    : (raw.havakalitest ?? raw.HavaKalitesi ?? raw.istasyonlar ?? raw.Istasyonlar ?? raw.result ?? [])
  return arr.map(normalizeHavaKalitesi)
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
