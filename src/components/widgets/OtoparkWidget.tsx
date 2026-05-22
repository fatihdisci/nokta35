import { getOtoparklar, otoparkKapasite } from "@/lib/data"

export async function OtoparkWidget() {
  const otoparklar = await getOtoparklar()

  const enriched = (otoparklar ?? [])
    .map((o) => {
      const { free, occupied, total } = otoparkKapasite(o)
      const pct = total > 0 ? (occupied / total) * 100 : 0
      return { o, free, occupied, total, pct }
    })
    .filter((x) => x.total > 0)
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 5)

  return (
    <section className="border-2 border-ink bg-cream p-5">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Otoparklar</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray">
          Anlık doluluk
        </span>
      </header>

      {enriched.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Veri alınamadı
        </div>
      ) : (
        <ul className="space-y-3">
          {enriched.map((x, i) => (
            <li key={`${x.o.name ?? i}`} className="space-y-1">
              <div className="flex justify-between items-baseline text-xs gap-2">
                <span className="uppercase tracking-wide truncate">
                  {x.o.name ?? "—"}
                </span>
                <span className="font-mono whitespace-nowrap">
                  {x.occupied}/{x.total}
                </span>
              </div>
              <div className="h-2 bg-light-gray border border-ink/10">
                <div
                  className={
                    "h-full " + (x.pct > 80 ? "bg-orange" : "bg-ink")
                  }
                  style={{ width: `${Math.min(100, x.pct)}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
