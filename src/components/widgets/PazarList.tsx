"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import type { PazarYeriItem } from "@/lib/data"
import { GUN_ADLARI } from "@/lib/data"
import { slugify } from "@/lib/utils"

const GUN_ORDER = [1, 2, 3, 4, 5, 6, 0]

function mapsUrl(enlem: number, boylam: number, adi: string) {
  return `https://www.google.com/maps/search/?api=1&query=${enlem},${boylam}&query_place_id=${encodeURIComponent(adi)}`
}

export function PazarList({
  pazarlar,
  bugunIndex,
}: {
  pazarlar: PazarYeriItem[]
  bugunIndex: number
}) {
  const [seciliGun, setSeciliGun] = useState<number | null>(bugunIndex)
  const [seciliIlce, setSeciliIlce] = useState("tümü")

  const ilceler = useMemo(
    () => [...new Set(pazarlar.map((p) => p.ILCE).filter(Boolean))].sort(),
    [pazarlar]
  )

  const filtered = useMemo(
    () =>
      pazarlar.filter((p) => {
        const gunEsles = seciliGun === null || p.gun === seciliGun
        const ilceEsles = seciliIlce === "tümü" || p.ILCE === seciliIlce
        return gunEsles && ilceEsles
      }),
    [pazarlar, seciliGun, seciliIlce]
  )

  const gunSayilari = useMemo(() => {
    const map: Record<number, number> = {}
    pazarlar.forEach((p) => {
      if (p.gun !== undefined) map[p.gun] = (map[p.gun] ?? 0) + 1
    })
    return map
  }, [pazarlar])

  const btnBase =
    "px-3 py-1.5 text-[10px] uppercase tracking-widest border-2 transition-colors"
  const btnActive = "bg-ink text-cream border-ink"
  const btnPassive = "bg-cream text-ink border-light-gray hover:border-ink"
  const btnToday = "border-orange text-orange hover:bg-orange hover:text-cream"

  return (
    <div>
      {/* Gün filtresi */}
      <div className="mb-6">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3">
          Güne Göre Filtrele
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSeciliGun(null)}
            className={`${btnBase} ${seciliGun === null ? btnActive : btnPassive}`}
          >
            Tümü ({pazarlar.length})
          </button>
          {GUN_ORDER.map((g) => (
            <button
              key={g}
              onClick={() => setSeciliGun(g)}
              className={`${btnBase} ${
                seciliGun === g
                  ? btnActive
                  : g === bugunIndex
                  ? btnToday
                  : btnPassive
              }`}
            >
              {GUN_ADLARI[g]}
              {g === bugunIndex && " ·bugün"}
              {gunSayilari[g] ? ` (${gunSayilari[g]})` : ""}
            </button>
          ))}
        </div>
      </div>

      {/* İlçe filtresi */}
      <div className="mb-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3">
          İlçeye Göre Filtrele
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSeciliIlce("tümü")}
            className={`${btnBase} ${seciliIlce === "tümü" ? btnActive : btnPassive}`}
          >
            Tüm İlçeler
          </button>
          {ilceler.map((ilce) => (
            <button
              key={ilce}
              onClick={() => setSeciliIlce(ilce)}
              className={`${btnBase} ${seciliIlce === ilce ? btnActive : btnPassive}`}
            >
              {ilce}
            </button>
          ))}
        </div>
      </div>

      {/* Sonuç sayısı */}
      <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-4 border-b border-light-gray pb-3">
        {filtered.length === 0
          ? "Sonuç yok"
          : `${filtered.length} pazar yeri gösteriliyor`}
      </div>

      {/* Liste */}
      {filtered.length === 0 ? (
        <div className="py-12 text-center text-sm text-gray uppercase tracking-widest">
          Seçilen kriterlere uygun pazar yeri bulunamadı
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => {
            const hasCoords = !isNaN(p.ENLEM) && !isNaN(p.BOYLAM) && p.ENLEM !== 0
            return (
              <article
                key={`${p.ADI}-${i}`}
                className="border-2 border-light-gray hover:border-ink bg-cream p-4 transition-colors flex flex-col gap-2"
              >
                {/* Gün etiketi */}
                {p.gun !== undefined && (
                  <span
                    className={`self-start text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 ${
                      p.gun === bugunIndex
                        ? "bg-orange text-cream"
                        : "bg-ink text-cream"
                    }`}
                  >
                    {GUN_ADLARI[p.gun]}
                    {p.gun === bugunIndex && " · bugün"}
                  </span>
                )}

                {/* Pazar adı */}
                <h3 className="font-mono text-sm uppercase tracking-wide text-ink leading-tight">
                  {p.ADI}
                </h3>

                {/* Konum bilgisi */}
                <div className="space-y-0.5 text-[11px]">
                  <Link
                    href={`/pazar/${slugify(p.ILCE)}`}
                    className="text-orange uppercase tracking-widest font-mono hover:underline"
                  >
                    {p.ILCE}
                  </Link>
                  {p.MAHALLE && (
                    <div className="text-gray uppercase tracking-wide">
                      {p.MAHALLE}
                    </div>
                  )}
                  {p.YOL && (
                    <div className="text-gray normal-case tracking-normal leading-snug">
                      {p.YOL}
                    </div>
                  )}
                  {p.ACIKLAMA && p.ACIKLAMA !== p.ADI && (
                    <div className="text-gray/70 normal-case tracking-normal text-[10px] italic leading-snug mt-1">
                      {p.ACIKLAMA}
                    </div>
                  )}
                </div>

                {/* Harita linki */}
                {hasCoords && (
                  <a
                    href={mapsUrl(p.ENLEM, p.BOYLAM, p.ADI)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start text-[9px] uppercase tracking-[0.2em] text-orange hover:underline border border-orange px-2 py-1 hover:bg-orange hover:text-cream transition-colors"
                  >
                    Haritada Gör →
                  </a>
                )}
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
