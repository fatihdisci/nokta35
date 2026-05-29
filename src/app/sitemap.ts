import type { MetadataRoute } from "next"
import { getBarajlar } from "@/lib/data"
import { slugify } from "@/lib/utils"
import { POSTS } from "@/content/blog"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://nokta35.com"
  const now = new Date()

  // ── Statik sayfalar ──────────────────────────────────────────────
  // İlçe bazlı eczane/pazar hub'ları (/saglik, /onemli-yerler) buradan
  // linklenir; alt sayfaları sitemap'e ayrıca eklemeyiz (tarama bütçesi
  // kalıcı, içerik dolu sayfalara yoğunlaşsın diye).
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,                lastModified: now, changeFrequency: "hourly", priority: 1.0 },
    { url: `${base}/su-baraj`,        lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/hava`,            lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/saglik`,          lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/ulasim`,          lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/haberler`,        lastModified: now, changeFrequency: "hourly", priority: 0.8 },
    { url: `${base}/etkinlikler`,     lastModified: now, changeFrequency: "daily",  priority: 0.8 },
    { url: `${base}/onemli-yerler`,   lastModified: now, changeFrequency: "daily",  priority: 0.7 },
    { url: `${base}/blog`,            lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/hakkinda`,        lastModified: now, changeFrequency: "monthly",priority: 0.5 },
    { url: `${base}/veri-kaynaklari`, lastModified: now, changeFrequency: "monthly",priority: 0.5 },
  ]

  // ── Blog yazıları ──────────────────────────────────────────────
  const blogSayfalar: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // ── Baraj detay sayfaları (az sayıda, kalıcı ve içerik dolu) ─────
  let barajSayfalar: MetadataRoute.Sitemap = []
  try {
    const barajlar = await getBarajlar()
    barajSayfalar = (barajlar ?? [])
      .filter((b) => b.BarajKuyuAdi)
      .map((b) => ({
        url: `${base}/baraj/${slugify(b.BarajKuyuAdi!)}`,
        lastModified: now,
        changeFrequency: "hourly" as const,
        priority: 0.7,
      }))
  } catch { /* API kapalıysa baraj listesi sitemap'ten düşer, sayfa yine de dynamicParams ile çalışır */ }

  return [
    ...staticPages,
    ...blogSayfalar,
    ...barajSayfalar,
  ]
}
