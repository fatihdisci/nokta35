import { getEczaneler } from "@/lib/data"

export async function EczanePanel() {
  const eczaneler = await getEczaneler()
  const list = eczaneler?.slice(0, 6) ?? []

  return (
    <section className="border-2 border-ink bg-cream p-5">
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
        <ul className="space-y-3 text-xs">
          {list.map((e, i) => (
            <li
              key={`${e.Adi ?? i}`}
              className="border-l-2 border-orange pl-3 py-1"
            >
              <div className="font-mono uppercase tracking-wide text-ink">
                {e.Adi ?? "—"}
              </div>
              {e.Bolge && (
                <div className="text-[10px] uppercase tracking-widest text-orange mt-0.5">
                  {e.Bolge}
                </div>
              )}
              {e.Adres && (
                <div className="text-gray mt-0.5 leading-snug normal-case tracking-normal">
                  {e.Adres}
                </div>
              )}
              {e.Telefon && (
                <div className="text-ink mt-0.5 font-mono">{e.Telefon}</div>
              )}
            </li>
          ))}
        </ul>
      )}

      {eczaneler && eczaneler.length > list.length && (
        <a
          href="/saglik"
          className="block mt-4 text-[10px] uppercase tracking-[0.2em] text-orange hover:underline"
        >
          Tümünü gör →
        </a>
      )}
    </section>
  )
}
