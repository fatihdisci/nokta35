import type { MetadataRoute } from "next"
import { getEczaneler, getPazarYerleri } from "@/lib/data"
import { slugify } from "@/lib/utils"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://nokta35.com"
  const now = new Date()

  // ── Statik sayfalar ──────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,             lastModified: now, changeFrequency: "hourly", priority: 1.0 },
    { url: `${base}/otoparklar`,   lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/su-baraj`,     lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/hava`,         lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/saglik`,       lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/ulasim`,       lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/haberler`,     lastModified: now, changeFrequency: "hourly", priority: 0.8 },
    { url: `${base}/etkinlikler`,  lastModified: now, changeFrequency: "daily",  priority: 0.8 },
    { url: `${base}/onemli-yerler`,lastModified: now, changeFrequency: "daily",  priority: 0.7 },
  ]

  // ── Dinamik: eczane bölge sayfaları ─────────────────────────────
  let eczaneSayfalar: MetadataRoute.Sitemap = []
  try {
    const eczaneler = await getEczaneler()
    const bolgeler = [...new Set((eczaneler ?? []).map((e) => e.Bolge).filter(Boolean))]
    eczaneSayfalar = bolgeler.map((b) => ({
      url: `${base}/eczane/${slugify(b!)}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    }))
  } catch { /* API kapalıysa statik sayfalar yeterli */ }

  // ── Dinamik: pazar ilçe sayfaları ────────────────────────────────
  let pazarSayfalar: MetadataRoute.Sitemap = []
  try {
    const pazarlar = await getPazarYerleri()
    const ilceler = [...new Set(pazarlar.map((p) => p.ILCE).filter(Boolean))]
    pazarSayfalar = ilceler.map((i) => ({
      url: `${base}/pazar/${slugify(i)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  } catch { /* API kapalıysa statik sayfalar yeterli */ }

  return [...staticPages, ...eczaneSayfalar, ...pazarSayfalar]
}
