import { getBarajlar, getKesintiler, getEczaneler } from "@/lib/data"

function toNum(v: unknown): number {
  if (typeof v === "number") return v
  if (typeof v === "string") return parseFloat(v.replace(",", "."))
  return NaN
}

export async function Ticker() {
  const [barajlar, kesintiler, eczaneler] = await Promise.all([
    getBarajlar(),
    getKesintiler(),
    getEczaneler(),
  ])

  const items: string[] = []

  if (barajlar) {
    for (const b of barajlar.slice(0, 5)) {
      const d = toNum(b.DolulukOrani)
      if (b.BarajKuyuAdi && !Number.isNaN(d)) {
        items.push(`${b.BarajKuyuAdi} %${Math.round(d)}`)
      }
    }
  }

  if (eczaneler) {
    items.push(`${eczaneler.length} nöbetçi eczane`)
  }

  if (kesintiler && kesintiler.length > 0) {
    items.push(`${kesintiler.length} aktif su kesintisi`)
  }

  if (items.length === 0) {
    items.push("İzmir açık veri akışı yükleniyor")
  }

  // double for seamless marquee
  const loop = [...items, ...items]

  return (
    <div className="bg-orange text-cream overflow-hidden border-y-2 border-ink">
      <div className="flex whitespace-nowrap animate-marquee py-2.5">
        {loop.map((text, i) => (
          <span
            key={i}
            className="px-6 text-xs uppercase tracking-[0.2em] flex items-center gap-6"
          >
            {text}
            <span className="text-ink">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
