import { getHavaDurumu, havaLabel } from "@/lib/hava"
import { WidgetMore } from "./WidgetMore"

const LIMIT = 5

function fmtT(n: number | null) {
  if (n === null || n === undefined) return "—"
  return `${Math.round(n)}°`
}

export async function HavaWidget() {
  const hava = await getHavaDurumu()

  if (!hava || hava.length === 0) {
    return (
      <section className="border-2 border-ink bg-cream p-5">
        <h2 className="font-serif-display text-2xl mb-2">Hava Durumu</h2>
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Veri alınamadı
        </div>
      </section>
    )
  }

  // Konak'ı ilk göster, sonra en sıcak 4 ilçe
  const konak = hava.find((h) => h.ilce === "Konak")
  const rest = hava
    .filter((h) => h.ilce !== "Konak")
    .filter((h) => h.sicaklik !== null)
    .sort((a, b) => (b.sicaklik ?? 0) - (a.sicaklik ?? 0))
  const list = (konak ? [konak, ...rest] : rest).slice(0, LIMIT)

  return (
    <section className="border-2 border-ink bg-cream p-5 flex flex-col">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Hava Durumu</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray">
          İzmir · canlı
        </span>
      </header>

      <ul className="space-y-2 text-xs flex-1">
        {list.map((h, i) => {
          const lbl = havaLabel(h.havaKodu)
          return (
            <li
              key={`${h.ilce}-${i}`}
              className="flex items-baseline justify-between border-b border-light-gray pb-2 last:border-0"
            >
              <span className="uppercase tracking-wide font-mono text-ink truncate pr-2">
                {h.ilce}
              </span>
              <span className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="text-[10px] uppercase tracking-widest text-gray hidden sm:inline">
                  {lbl.ad}
                </span>
                <span className="font-serif-display text-xl text-orange leading-none">
                  {fmtT(h.sicaklik)}
                </span>
              </span>
            </li>
          )
        })}
      </ul>

      <WidgetMore href="/hava" count={hava.length} />
    </section>
  )
}
