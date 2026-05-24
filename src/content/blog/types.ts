import type { FaqItem } from "@/lib/jsonLd"

export type BlogMeta = {
  slug: string
  title: string
  description: string
  date: string // ISO YYYY-MM-DD
  category: string
  summary: string
  readTime: number // dakika
  faq: FaqItem[] // SEO/GEO için zorunlu soru-cevap bölümü
}
