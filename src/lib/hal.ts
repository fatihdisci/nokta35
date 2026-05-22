import Papa from "papaparse"

export type HalFiyat = {
  urun: string
  birim: string
  enDusuk: number | null
  enYuksek: number | null
  ortalama: number | null
  tarih: string | null
}

const CANDIDATE_KEYS = {
  urun: [
    "ÜRÜN", "URUN", "Ürün", "ÜRÜN ADI", "URUN_ADI", "UrunAdi",
    "MAL", "MAL ADI", "MAL_ADI", "Ad", "AD",
  ],
  birim: ["BİRİM", "BIRIM", "Birim", "BIRIMI", "BirimAdi"],
  enDusuk: ["EN DÜŞÜK", "EN_DUSUK", "EnDusuk", "MIN", "MİN", "ASGARI", "ASGARİ"],
  enYuksek: [
    "EN YÜKSEK", "EN_YUKSEK", "EnYuksek", "MAX", "MAKS", "AZAMI",
  ],
  ortalama: ["ORTALAMA", "ORT", "Ortalama", "ORT_FIYAT"],
  tarih: ["TARİH", "TARIH", "Tarih", "TARIHI", "BildirimTarihi"],
}

function findKey(row: Record<string, unknown>, candidates: string[]): string | null {
  const keys = Object.keys(row)
  for (const c of candidates) {
    const k = keys.find((x) => x.trim().toLocaleLowerCase("tr-TR") === c.toLocaleLowerCase("tr-TR"))
    if (k) return k
  }
  // partial match fallback
  for (const c of candidates) {
    const norm = c.toLocaleLowerCase("tr-TR")
    const k = keys.find((x) => x.toLocaleLowerCase("tr-TR").includes(norm))
    if (k) return k
  }
  return null
}

function parseNum(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null
  if (typeof v === "number") return Number.isFinite(v) ? v : null
  const s = String(v).replace(/\./g, "").replace(",", ".").trim()
  const n = parseFloat(s)
  return Number.isFinite(n) ? n : null
}

export function parseHalCsv(csvText: string): HalFiyat[] {
  const parsed = Papa.parse<Record<string, unknown>>(csvText, {
    header: true,
    skipEmptyLines: true,
  })

  const rows = parsed.data
  if (!rows.length) return []

  const sample = rows[0]
  const kUrun = findKey(sample, CANDIDATE_KEYS.urun)
  const kBirim = findKey(sample, CANDIDATE_KEYS.birim)
  const kMin = findKey(sample, CANDIDATE_KEYS.enDusuk)
  const kMax = findKey(sample, CANDIDATE_KEYS.enYuksek)
  const kOrt = findKey(sample, CANDIDATE_KEYS.ortalama)
  const kTarih = findKey(sample, CANDIDATE_KEYS.tarih)

  if (!kUrun) return []

  const out: HalFiyat[] = []
  for (const row of rows) {
    const urun = String(row[kUrun] ?? "").trim()
    if (!urun) continue
    out.push({
      urun,
      birim: kBirim ? String(row[kBirim] ?? "kg").trim() || "kg" : "kg",
      enDusuk: kMin ? parseNum(row[kMin]) : null,
      enYuksek: kMax ? parseNum(row[kMax]) : null,
      ortalama: kOrt ? parseNum(row[kOrt]) : null,
      tarih: kTarih ? String(row[kTarih] ?? "").trim() || null : null,
    })
  }
  return out
}

export async function fetchHalCsv(url: string): Promise<HalFiyat[]> {
  const res = await fetch(url, {
    headers: { Accept: "text/csv,*/*" },
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`Hal CSV ${res.status}`)
  const text = await res.text()
  return parseHalCsv(text)
}
