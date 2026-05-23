"use client"

import { useState, useMemo } from "react"
import type { HaberItem } from "@/lib/news"
import { formatHaberZamani } from "@/lib/news"

export function HaberList({ haberler }: { haberler: HaberItem[] }) {
  const [seciliKaynak, setSeciliKaynak] = useState("tümü")

  const kaynaklar = useMemo(
    () => [...new Set(haberler.map((h) => h.kaynak).filter(Boolean))].sort(),
    [haberler]
  )

  const filtered = useMemo(
    () =>
      haberler.filter((h) =>
        seciliKaynak === "tümü" ? true : h.kaynak === seciliKaynak
      ),
    [haberler, seciliKaynak]
  )

  const btnBase =
    "px-3 py-1.5 text-[10px] uppercase tracking-widest border-2 transition-colors"
  const btnActive = "bg-ink text-cream border-ink"
  const btnPassive = "bg-cream text-ink border-light-gray hover:border-ink"

  if (haberler.length === 0) {
    return (
      <div className="py-12 text-center text-sm text-gray uppercase tracking-widest">
        Haber verisi alınamadı
      </div>
    )
  }

  return (
    <div>
      {kaynaklar.length > 1 && (
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3">
            Kaynağa Göre Filtrele
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSeciliKaynak("tümü")}
              className={`${btnBase} ${seciliKaynak === "tümü" ? btnActive : btnPassive}`}
            >
              Tümü ({haberler.length})
            </button>
            {kaynaklar.map((k) => (
              <button
                key={k}
                onClick={() => setSeciliKaynak(k)}
                className={`${btnBase} ${seciliKaynak === k ? btnActive : btnPassive}`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-4 border-b border-light-gray pb-3">
        {filtered.length === 0
          ? "Sonuç yok"
          : `${filtered.length} haber gösteriliyor`}
      </div>

      {filtered.length === 0 ? (
        <div className="py-12 text-center text-sm text-gray uppercase tracking-widest">
          Bu kaynağa ait haber bulunamadı
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((h, i) => (
            <article
              key={`${h.link}-${i}`}
              className="border-2 border-light-gray hover:border-ink bg-cream p-4 transition-colors flex flex-col gap-2"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 bg-ink text-cream">
                  {h.kaynak || "Kaynak"}
                </span>
                <span className="text-[10px] text-gray font-mono whitespace-nowrap">
                  {formatHaberZamani(h.tarih)}
                </span>
              </div>

              <h2 className="font-serif-display text-lg leading-snug text-ink">
                {h.baslik}
              </h2>

              {h.ozet && (
                <p className="text-[11px] text-gray leading-snug line-clamp-3">
                  {h.ozet}
                </p>
              )}

              <a
                href={h.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start text-[9px] uppercase tracking-[0.2em] text-orange border border-orange px-2 py-1 hover:bg-orange hover:text-cream transition-colors"
              >
                Haberi Oku →
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
