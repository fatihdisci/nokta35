import { redis, getCacheTimestamp } from "@/lib/redis"
import { fetchHalCsv, type HalFiyat } from "@/lib/hal"

const KEY = "hal:sebze"

async function loadHal(): Promise<HalFiyat[]> {
  try {
    if (redis) {
      const cached = await redis.get<HalFiyat[]>(KEY)
      if (cached && cached.length > 0) return cached
    }
    const url = process.env.HAL_CSV_URL
    if (!url) return []
    const data = await fetchHalCsv(url)
    if (redis && data.length > 0) {
      await redis.set(KEY, data, { ex: 86400 })
      await redis.set(`${KEY}:ts`, Math.floor(Date.now() / 1000), { ex: 86400 + 600 })
    }
    return data
  } catch {
    return []
  }
}

function fmt(n: number | null): string {
  if (n === null) return "—"
  return n.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export async function HalGrid() {
  const [all, ts] = await Promise.all([loadHal(), getCacheTimestamp(KEY)])
  const items = all.slice(0, 8)

  return (
    <section className="container">
      <header className="flex items-baseline justify-between mb-4 border-b-2 border-ink pb-2">
        <h2 className="font-serif-display text-3xl">Hal Fiyatları</h2>
        <div className="flex items-baseline gap-3 text-[10px] uppercase tracking-[0.2em] text-gray">
          {ts && (
            <span className="font-mono normal-case tracking-normal text-[9px] text-gray/60">
              {(() => {
                const diff = Math.floor(Date.now() / 1000) - ts
                if (diff < 3600) return `${Math.floor(diff / 60)} dk önce`
                if (diff < 86400) return `${Math.floor(diff / 3600)} sa önce`
                return `${Math.floor(diff / 86400)} gün önce`
              })()}
            </span>
          )}
          <span>
            {items.length > 0
              ? items[0].tarih ?? "Günlük güncel"
              : "Yapılandırılmadı"}
          </span>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="border-2 border-dashed border-light-gray p-8 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-gray">
            Hal CSV URL'i henüz tanımlanmadı
          </div>
          <div className="text-[11px] text-gray mt-2 normal-case tracking-normal">
            acikveri.bizizmir.com'da Hal Müdürlüğü veri setini bulun,{" "}
            <code className="font-mono text-ink">HAL_CSV_URL</code> env var'ına
            CSV indirme bağlantısını yazın.
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <article
              key={`${it.urun}-${i}`}
              className="border-2 border-ink bg-cream p-4 flex flex-col justify-between aspect-square"
            >
              <div>
                <div className="font-serif-display text-xl leading-tight truncate">
                  {it.urun}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray mt-1">
                  ₺ / {it.birim}
                </div>
              </div>
              <div className="mt-3">
                <div className="font-mono text-2xl text-orange leading-none">
                  {fmt(it.ortalama ?? it.enYuksek ?? it.enDusuk)}
                </div>
                <div className="text-[10px] font-mono text-gray mt-2 flex justify-between">
                  <span>min {fmt(it.enDusuk)}</span>
                  <span>max {fmt(it.enYuksek)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
