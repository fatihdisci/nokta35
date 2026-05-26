import type { Metadata } from "next"
import Link from "next/link"
import { POSTS } from "@/content/blog"
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonLd"

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

const PAGE_SIZE = 9

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return iso
  }
}

function buildHref(sayfa: number, kategori: string): string {
  const params = new URLSearchParams()
  if (kategori !== "tümü") params.set("kategori", kategori)
  if (sayfa > 1) params.set("sayfa", String(sayfa))
  const qs = params.toString()
  return qs ? `/blog?${qs}` : "/blog"
}

type Props = { searchParams: { sayfa?: string; kategori?: string } }

export default function BlogIndexPage({ searchParams }: Props) {
  const breadcrumb = breadcrumbJsonLd([{ name: "Blog", href: "/blog" }])

  // Sort all posts newest first
  const sorted = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const kategoriler = [...new Set(POSTS.map((p) => p.category))].sort()
  const selectedKat = searchParams?.kategori ?? "tümü"

  const filtered =
    selectedKat === "tümü"
      ? sorted
      : sorted.filter((p) => p.category === selectedKat)

  const rawPage = parseInt(searchParams?.sayfa ?? "1", 10)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const page = Math.max(1, Math.min(isNaN(rawPage) ? 1 : rawPage, totalPages))
  const pagePosts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const btnBase =
    "px-3 py-1.5 text-[10px] uppercase tracking-widest border-2 transition-colors whitespace-nowrap"
  const btnActive = "bg-ink text-cream border-ink"
  const btnPassive = "bg-cream text-ink border-light-gray hover:border-ink"

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

      {/* Kategori filtresi */}
      <section className="container pb-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3">
          Kategoriye Göre Filtrele
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/blog"
            className={`${btnBase} ${selectedKat === "tümü" ? btnActive : btnPassive}`}
          >
            Tümü ({POSTS.length})
          </Link>
          {kategoriler.map((k) => {
            const count = POSTS.filter((p) => p.category === k).length
            return (
              <Link
                key={k}
                href={buildHref(1, k)}
                className={`${btnBase} ${selectedKat === k ? btnActive : btnPassive}`}
              >
                {k} ({count})
              </Link>
            )
          })}
        </div>

        {selectedKat !== "tümü" && (
          <div className="mb-6 text-[10px] uppercase tracking-[0.2em] text-gray border-b border-light-gray pb-3">
            <span className="text-ink">{filtered.length}</span> yazı · {selectedKat}
            {" — "}
            <Link href="/blog" className="text-orange hover:underline">
              Filtreyi Kaldır
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pagePosts.map((p) => (
            <article
              key={p.slug}
              className="border-2 border-light-gray hover:border-ink bg-cream p-5 transition-colors flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-2 mb-3">
                <Link
                  href={buildHref(1, p.category)}
                  className={`text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 transition-colors ${
                    selectedKat === p.category
                      ? "bg-orange text-cream"
                      : "bg-ink text-cream hover:bg-orange"
                  }`}
                >
                  {p.category}
                </Link>
                <span className="text-[10px] text-gray font-mono">
                  {formatDate(p.date)} · {p.readTime} dk okuma
                </span>
              </div>

              <h2 className="font-serif-display text-2xl leading-snug mb-3">
                <Link href={`/blog/${p.slug}`} className="hover:text-orange transition-colors">
                  {p.title}
                </Link>
              </h2>

              <p className="text-sm text-gray leading-relaxed flex-1">
                {p.summary}
              </p>

              <Link
                href={`/blog/${p.slug}`}
                className="mt-4 self-start text-[10px] uppercase tracking-[0.2em] text-orange border border-orange px-3 py-1.5 hover:bg-orange hover:text-cream transition-colors"
              >
                Yazıyı Oku →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {totalPages > 1 && (
        <nav className="container pb-16 flex items-center justify-between gap-4 flex-wrap">
          <span className="text-[10px] uppercase tracking-widest text-gray font-mono">
            {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} / {filtered.length} yazı
          </span>

          <div className="flex items-center gap-1 flex-wrap">
            {page > 1 && (
              <Link
                href={buildHref(page - 1, selectedKat)}
                className="text-[10px] uppercase tracking-widest px-3 py-1.5 border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                ← Önceki
              </Link>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={buildHref(n, selectedKat)}
                className={
                  "text-[10px] font-mono px-2.5 py-1.5 border-2 transition-colors " +
                  (n === page
                    ? "border-orange bg-orange text-cream"
                    : "border-light-gray hover:border-ink")
                }
              >
                {n}
              </Link>
            ))}

            {page < totalPages && (
              <Link
                href={buildHref(page + 1, selectedKat)}
                className="text-[10px] uppercase tracking-widest px-3 py-1.5 border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                Sonraki →
              </Link>
            )}
          </div>
        </nav>
      )}
    </>
  )
}
