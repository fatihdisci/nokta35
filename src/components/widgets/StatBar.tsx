import {
  getBarajlar,
  getEczaneler,
  getKesintiler,
} from "@/lib/data"
import { getHavaDurumu } from "@/lib/hava"

function toNum(v: unknown): number {
  if (typeof v === "number") return v
  if (typeof v === "string") return parseFloat(v.replace(",", "."))
  return NaN
}

type Stat = { label: string; value: string; unit?: string }

export async function StatBar() {
  const [barajlar, eczaneler, kesintiler, hava] = await Promise.all([
    getBarajlar(),
    getEczaneler(),
    getKesintiler(),
    getHavaDurumu(),
  ])

  const ortBaraj =
    barajlar && barajlar.length
      ? Math.round(
          barajlar.reduce((s, b) => s + (toNum(b.DolulukOrani) || 0), 0) /
            barajlar.length,
        )
      : null

  const konak = hava?.find((h) => h.ilce === "Konak")
  const ortSicaklik = (() => {
    if (!hava) return null
    const s = hava.map((h) => h.sicaklik).filter((x): x is number => x !== null)
    if (!s.length) return null
    return Math.round(s.reduce((a, b) => a + b, 0) / s.length)
  })()

  const stats: Stat[] = [
    {
      label: "Ort. Baraj",
      value: ortBaraj !== null ? `${ortBaraj}` : "—",
      unit: "%",
    },
    {
      label: "Nöbetçi Eczane",
      value: eczaneler ? `${eczaneler.length}` : "—",
    },
    {
      label: "Su Kesintisi",
      value: kesintiler ? `${kesintiler.length}` : "—",
    },
    {
      label: "Konak",
      value:
        konak && konak.sicaklik !== null ? `${Math.round(konak.sicaklik)}` : "—",
      unit: "°",
    },
    {
      label: "Ort. Hava",
      value: ortSicaklik !== null ? `${ortSicaklik}` : "—",
      unit: "°",
    },
  ]

  return (
    <section className="border-y-2 border-ink bg-cream">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y md:divide-y-0 divide-light-gray">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-5 flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              {s.label}
            </span>
            <span className="font-serif-display text-3xl text-ink leading-none">
              {s.value}
              {s.unit && (
                <span className="text-orange text-base ml-1 font-mono">
                  {s.unit}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
