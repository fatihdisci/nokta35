import {
  getBarajlar,
  getEczaneler,
  getOtoparklar,
  getKesintiler,
  otoparkKapasite,
} from "@/lib/data"

function toNum(v: unknown): number {
  if (typeof v === "number") return v
  if (typeof v === "string") return parseFloat(v.replace(",", "."))
  return NaN
}

type Stat = { label: string; value: string; unit?: string }

export async function StatBar() {
  const [barajlar, eczaneler, otoparklar, kesintiler] = await Promise.all([
    getBarajlar(),
    getEczaneler(),
    getOtoparklar(),
    getKesintiler(),
  ])

  const ortBaraj =
    barajlar && barajlar.length
      ? Math.round(
          barajlar.reduce((s, b) => s + (toNum(b.DolulukOrani) || 0), 0) /
            barajlar.length,
        )
      : null

  let totDolu = 0
  let totKap = 0
  if (otoparklar) {
    for (const o of otoparklar) {
      const { occupied, total } = otoparkKapasite(o)
      totDolu += occupied
      totKap += total
    }
  }
  const doluluk = totKap > 0 ? Math.round((totDolu / totKap) * 100) : null

  const stats: Stat[] = [
    {
      label: "Ort. Baraj",
      value: ortBaraj !== null ? `${ortBaraj}` : "—",
      unit: "%",
    },
    {
      label: "Otobüs",
      value: "canlı",
    },
    {
      label: "Nöbetçi Eczane",
      value: eczaneler ? `${eczaneler.length}` : "—",
    },
    {
      label: "Otopark",
      value: doluluk !== null ? `${doluluk}` : "—",
      unit: "% dolu",
    },
    {
      label: "Su Kesintisi",
      value: kesintiler ? `${kesintiler.length}` : "—",
    },
    {
      label: "Hava",
      value: "—",
    },
  ]

  return (
    <section className="border-y-2 border-ink bg-cream">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-light-gray">
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
