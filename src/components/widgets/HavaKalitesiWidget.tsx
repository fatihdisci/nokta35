import { getHavaKalitesi, pm10Seviye } from "@/lib/data"
import { WidgetMore } from "./WidgetMore"

const LIMIT = 5

export async function HavaKalitesiWidget() {
  const istasyonlar = await getHavaKalitesi()
  const withPm10 = istasyonlar.filter((s) => s.pm10 !== null).sort((a, b) => (b.pm10 ?? 0) - (a.pm10 ?? 0))
  const list = withPm10.slice(0, LIMIT)

  return (
    <section className="border-2 border-ink bg-cream p-5 flex flex-col">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Hava Kalitesi</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray">
          {istasyonlar.length > 0 ? `${istasyonlar.length} istasyon` : "PM10"}
        </span>
      </header>

      {list.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Ölçüm verisi bulunamadı
        </div>
      ) : (
        <>
          <ul className="space-y-2 text-xs flex-1">
            {list.map((s, i) => {
              const pm10 = s.pm10 as number
              const sev = pm10Seviye(pm10)
              const adi = s.istasyonAdi || s.ilce || `İstasyon ${i + 1}`
              return (
                <li key={`${adi}-${i}`} className="flex items-baseline justify-between border-b border-light-gray pb-2 last:border-0">
                  <span className="uppercase tracking-wide font-mono text-ink truncate pr-2 max-w-[55%]">
                    {adi}
                  </span>
                  <span className="flex items-baseline gap-2 whitespace-nowrap">
                    <span className={`text-[10px] uppercase tracking-widest ${sev.renk}`}>{sev.label}</span>
                    <span className="font-mono text-sm text-orange">{pm10.toFixed(0)} µg/m³</span>
                  </span>
                </li>
              )
            })}
          </ul>
          <WidgetMore href="/hava#kalite" count={istasyonlar.length} />
        </>
      )}
    </section>
  )
}
