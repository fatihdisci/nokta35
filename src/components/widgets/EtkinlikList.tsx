"use client"

import { useState, useMemo } from "react"
import type { EtkinlikItem } from "@/lib/data"

function formatTarih(tarih: string): string {
  if (!tarih) return ""
  try {
    const d = new Date(tarih)
    if (isNaN(d.getTime())) return tarih
    return d.toLocaleDateString("tr-TR", { weekday: "short", day: "numeric", month: "long" })
  } catch {
    return tarih
  }
}

export function EtkinlikList({ etkinlikler }: { etkinlikler: EtkinlikItem[] }) {
  const [seciliTur, setSeciliTur] = useState("tümü")
  const [seciliIlce, setSeciliIlce] = useState("tümü")

  const turler = useMemo(
    () => [...new Set(etkinlikler.map((e) => e.tur).filter(Boolean))].sort(),
    [etkinlikler]
  )
  const ilceler = useMemo(
    () => [...new Set(etkinlikler.map((e) => e.ilce).filter(Boolean))].sort(),
    [etkinlikler]
  )
  const filtered = useMemo(
    () =>
      etkinlikler.filter((e) => {
        const turEsles = seciliTur === "tümü" || e.tur === seciliTur
        const ilceEsles = seciliIlce === "tümü" || e.ilce === seciliIlce
        return turEsles && ilceEsles
      }),
    [etkinlikler, seciliTur, seciliIlce]
  )

  const btnBase = "px-3 py-1.5 text-[10px] uppercase tracking-widest border-2 transition-colors"
  const btnActive = "bg-ink text-cream border-ink"
  const btnPassive = "bg-cream text-ink border-light-gray hover:border-ink"

  if (etkinlikler.length === 0) {
    return (
      <div className="py-12 text-center text-sm text-gray uppercase tracking-widest">
        Etkinlik verisi bulunamadı
      </div>
    )
  }

  return (
    <div>
      {turler.length > 0 && (
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3">Türe Göre Filtrele</div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setSeciliTur("tümü")} className={`${btnBase} ${seciliTur === "tümü" ? btnActive : btnPassive}`}>
              Tümü ({etkinlikler.length})
            </button>
            {turler.map((tur) => (
              <button key={tur} onClick={() => setSeciliTur(tur)} className={`${btnBase} ${seciliTur === tur ? btnActive : btnPassive}`}>
                {tur}
              </button>
            ))}
          </div>
        </div>
      )}

      {ilceler.length > 0 && (
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3">İlçeye Göre Filtrele</div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setSeciliIlce("tümü")} className={`${btnBase} ${seciliIlce === "tümü" ? btnActive : btnPassive}`}>
              Tüm İlçeler
            </button>
            {ilceler.map((ilce) => (
              <button key={ilce} onClick={() => setSeciliIlce(ilce)} className={`${btnBase} ${seciliIlce === ilce ? btnActive : btnPassive}`}>
                {ilce}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-4 border-b border-light-gray pb-3">
        {filtered.length === 0 ? "Sonuç yok" : `${filtered.length} etkinlik gösteriliyor`}
      </div>

      {filtered.length === 0 ? (
        <div className="py-12 text-center text-sm text-gray uppercase tracking-widest">
          Seçilen kriterlere uygun etkinlik bulunamadı
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((e, i) => (
            <article
              key={`${e.adi}-${i}`}
              className="border-2 border-light-gray hover:border-ink bg-cream p-4 transition-colors flex flex-col gap-2"
            >
              {e.tur && (
                <span className="self-start text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 bg-ink text-cream">
                  {e.tur}
                </span>
              )}

              <h3 className="font-mono text-sm uppercase tracking-wide text-ink leading-tight">
                {e.adi || "—"}
              </h3>

              <div className="space-y-0.5 text-[11px] flex-1">
                {e.ilce && <div className="text-orange uppercase tracking-widest font-mono">{e.ilce}</div>}
                {e.mekan && <div className="text-gray uppercase tracking-wide">{e.mekan}</div>}
                {e.adres && e.adres !== e.mekan && (
                  <div className="text-gray normal-case tracking-normal leading-snug">{e.adres}</div>
                )}
                {(e.baslangic || e.bitis) && (
                  <div className="text-ink/70 font-mono text-[10px] mt-1">
                    {formatTarih(e.baslangic)}
                    {e.bitis && e.bitis !== e.baslangic && <span> → {formatTarih(e.bitis)}</span>}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mt-auto flex-wrap">
                {e.ucretsiz && (
                  <span className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-orange text-orange">
                    Ücretsiz
                  </span>
                )}
                {e.biletLinki && (
                  <a
                    href={e.biletLinki}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] uppercase tracking-[0.2em] text-orange hover:underline border border-orange px-2 py-1 hover:bg-orange hover:text-cream transition-colors"
                  >
                    Bilet →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
