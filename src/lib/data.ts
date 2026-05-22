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
