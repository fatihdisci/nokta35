import { getEczaneler } from "@/lib/data"
import { WidgetMore } from "./WidgetMore"

const LIMIT = 5

export async function EczanePanel() {
  const eczaneler = await getEczaneler()
  const list = eczaneler?.slice(0, LIMIT) ?? []

  return (
    <section className="border-2 border-ink bg-cream p-5 flex flex-col">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Nöbetçi Eczane</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray">
          {eczaneler ? `${eczaneler.length} bugün` : "—"}
        </span>
      </header>

      {list.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Veri alınamadı
        </div>
      ) : (
        <>
          <ul className="space-y-3 text-xs flex-1">
            {list.map((e, i) => (
              <li key={`${e.Adi ?? i}`} className="border-l-2 border-orange pl-3 py-1">
                <div className="font-mono uppercase tracking-wide text-ink truncate">
                  {e.Adi ?? "—"}
                </div>
                {e.Bolge && (
                  <div className="text-[10px] uppercase tracking-widest text-orange mt-0.5">
                    {e.Bolge}
                  </div>
                )}
                {e.Adres && (
                  <div className="text-gray mt-0.5 leading-snug normal-case tracking-normal line-clamp-2">
                    {e.Adres}
                  </div>
                )}
              </li>
            ))}
          </ul>
          {eczaneler && eczaneler.length > LIMIT && (
            <WidgetMore href="/saglik" count={eczaneler.length} />
          )}
        </>
      )}
    </section>
  )
}
