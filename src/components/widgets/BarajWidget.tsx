import { getBarajlar } from "@/lib/data"

function toNum(v: unknown): number {
  if (typeof v === "number") return v
  if (typeof v === "string") return parseFloat(v.replace(",", "."))
  return NaN
}

function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, n))
}

export async function BarajWidget() {
  const barajlar = await getBarajlar()

  return (
    <section className="border-2 border-ink bg-cream p-5">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Barajlar</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray">
          Doluluk oranı
        </span>
      </header>

      {!barajlar || barajlar.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Veri alınamadı
        </div>
      ) : (
        <ul className="space-y-3">
          {barajlar.map((b, i) => {
            const d = toNum(b.DolulukOrani)
            const pct = Number.isNaN(d) ? 0 : clamp(d)
            const color =
              pct < 25 ? "bg-orange" : pct < 50 ? "bg-orange/70" : "bg-ink"
            return (
              <li key={b.BarajKuyuId ?? i} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="uppercase tracking-wide">
                    {b.BarajKuyuAdi ?? "—"}
                  </span>
                  <span className="font-mono text-ink">
                    %{Number.isNaN(d) ? "—" : Math.round(d)}
                  </span>
                </div>
                <div className="h-2 bg-light-gray border border-ink/10">
                  <div
                    className={`h-full ${color}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
