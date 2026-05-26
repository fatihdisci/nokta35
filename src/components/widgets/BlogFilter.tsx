"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import type { BlogMeta } from "@/content/blog/types"

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

type Props = {
  posts: (BlogMeta & { slug: string })[]
  kategoriler: string[]
  totalCount: number
}

export function BlogFilter({ posts, kategoriler, totalCount }: Props) {
  const [arama, setArama] = useState("")
  const [selectedKat, setSelectedKat] = useState("tümü")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = arama.trim().toLowerCase()
    return posts.filter((p) => {
      const katEsles = selectedKat === "tümü" || p.category === selectedKat
      if (!katEsles) return false
      if (!q) return true
      return (
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    })
  }, [posts, arama, selectedKat])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const pagePosts = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  function setKat(k: string) {
    setSelectedKat(k)
    setPage(1)
  }

  function handleArama(val: string) {
    setArama(val)
    setPage(1)
  }

  const btnBase =
    "px-3 py-1.5 text-[10px] uppercase tracking-widest border-2 transition-colors whitespace-nowrap"
  const btnActive = "bg-ink text-cream border-ink"
  const btnPassive = "bg-cream text-ink border-light-gray hover:border-ink"

  return (
    <>
      {/* Arama */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <input
            type="search"
            placeholder="Yazılarda ara…"
            value={arama}
            onChange={(e) => handleArama(e.target.value)}
            className="w-full border-2 border-ink bg-cream text-ink text-sm px-4 py-2.5 pr-10 font-mono placeholder:text-gray focus:outline-none focus:border-orange transition-colors"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray text-sm pointer-events-none">
            ↵
          </span>
        </div>
      </div>

      {/* Kategori filtreleri */}
      <div className="mb-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3">
          Kategoriye Göre Filtrele
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setKat("tümü")}
            className={`${btnBase} ${selectedKat === "tümü" ? btnActive : btnPassive}`}
          >
            Tümü ({totalCount})
          </button>
          {kategoriler.map((k) => {
            const count = posts.filter((p) => p.category === k).length
            return (
              <button
                key={k}
                onClick={() => setKat(k)}
                className={`${btnBase} ${selectedKat === k ? btnActive : btnPassive}`}
              >
                {k} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Sonuç sayısı / aktif filtre */}
      <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-gray border-b border-light-gray pb-3 flex items-center gap-3 flex-wrap">
        <span>
          <span className="text-ink">{filtered.length}</span> yazı gösteriliyor
          {selectedKat !== "tümü" && (
            <> · <span className="text-orange">{selectedKat}</span></>
          )}
          {arama && (
            <> · &ldquo;<span className="text-orange">{arama}</span>&rdquo;</>
          )}
        </span>
        {(selectedKat !== "tümü" || arama) && (
          <button
            onClick={() => { setKat("tümü"); setArama("") }}
            className="text-orange hover:underline"
          >
            Temizle ✕
          </button>
        )}
      </div>

      {/* Yazı grid */}
      {pagePosts.length === 0 ? (
        <div className="py-16 text-center text-sm text-gray uppercase tracking-widest">
          Sonuç bulunamadı
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pagePosts.map((p) => (
            <article
              key={p.slug}
              className="border-2 border-light-gray hover:border-ink bg-cream p-5 transition-colors flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-2 mb-3">
                <button
                  onClick={() => setKat(p.category)}
                  className={`text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 transition-colors ${
                    selectedKat === p.category
                      ? "bg-orange text-cream"
                      : "bg-ink text-cream hover:bg-orange"
                  }`}
                >
                  {p.category}
                </button>
                <span className="text-[10px] text-gray font-mono">
                  {formatDate(p.date)} · {p.readTime} dk
                </span>
              </div>

              <h2 className="font-serif-display text-2xl leading-snug mb-3">
                <Link
                  href={`/blog/${p.slug}`}
                  className="hover:text-orange transition-colors"
                >
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
      )}

      {/* Sayfalama */}
      {totalPages > 1 && (
        <nav className="mt-10 flex items-center justify-between gap-4 flex-wrap">
          <span className="text-[10px] uppercase tracking-widest text-gray font-mono">
            {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} / {filtered.length} yazı
          </span>
          <div className="flex items-center gap-1 flex-wrap">
            {safePage > 1 && (
              <button
                onClick={() => setPage(safePage - 1)}
                className="text-[10px] uppercase tracking-widest px-3 py-1.5 border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                ← Önceki
              </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={
                  "text-[10px] font-mono px-2.5 py-1.5 border-2 transition-colors " +
                  (n === safePage
                    ? "border-orange bg-orange text-cream"
                    : "border-light-gray hover:border-ink")
                }
              >
                {n}
              </button>
            ))}
            {safePage < totalPages && (
              <button
                onClick={() => setPage(safePage + 1)}
                className="text-[10px] uppercase tracking-widest px-3 py-1.5 border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                Sonraki →
              </button>
            )}
          </div>
        </nav>
      )}
    </>
  )
}
