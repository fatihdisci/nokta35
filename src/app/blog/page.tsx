import type { Metadata } from "next"
import { POSTS } from "@/content/blog"
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { BlogFilter } from "@/components/widgets/BlogFilter"

export const metadata: Metadata = {
  title: "Blog · Şehir, Hava, Su ve Sağlık Üzerine Rehber Yazılar",
  description:
    "nokta35 blog: hava kalitesi, su tasarrufu, baraj doluluk, nöbetçi eczane sistemi ve şehir hayatına dair pratik, doğrulanabilir bilgi.",
  alternates: { canonical: "/blog" },
  keywords: [
    "blog", "hava kalitesi", "su tasarrufu", "baraj", "nöbetçi eczane",
    "şehir rehberi", "AKİ", "PM2.5",
  ],
}

export default function BlogIndexPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Blog", href: "/blog" }])

  const sorted = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const kategoriler = [...new Set(POSTS.map((p) => p.category))].sort()

  return (
    <>
      <JsonLdScript data={breadcrumb} />

      <section className="container py-12">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
          Blog
        </div>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[0.95] text-ink">
          Şehir, <span className="text-orange">veri</span> ve gündelik hayat üzerine.
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-gray uppercase tracking-wide leading-relaxed">
          {POSTS.length} yazı · {kategoriler.length} kategori · doğrulanabilir
          kaynaklara dayalı pratik rehberler
        </p>
      </section>

      <section className="container pb-16">
        <BlogFilter
          posts={sorted}
          kategoriler={kategoriler}
          totalCount={POSTS.length}
        />
      </section>
    </>
  )
}
