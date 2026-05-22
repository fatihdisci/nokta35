import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nokta35.com"
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "hourly", priority: 1 },
    { url: `${base}/otoparklar`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/su-baraj`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/hava`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/saglik`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/harita`, lastModified: now, changeFrequency: "weekly", priority: 0.3 },
    { url: `${base}/ulasim`, lastModified: now, changeFrequency: "weekly", priority: 0.3 },
  ]
}
