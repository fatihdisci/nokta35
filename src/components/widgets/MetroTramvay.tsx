const HATLAR = [
  {
    tip: "Metro",
    ad: "M1 · Üçyol — F. Altay",
    durak: 17,
    sefer: "06:00 — 00:00",
  },
  {
    tip: "Tramvay",
    ad: "T1 · Karşıyaka",
    durak: 14,
    sefer: "06:00 — 00:00",
  },
  {
    tip: "Tramvay",
    ad: "T2 · Konak",
    durak: 19,
    sefer: "06:00 — 00:00",
  },
  {
    tip: "Tramvay",
    ad: "T3 · Çiğli",
    durak: 14,
    sefer: "06:00 — 00:00",
  },
]

export function MetroTramvay() {
  return (
    <div className="border-2 border-ink p-5 bg-cream h-full flex flex-col">
      <div className="text-orange text-[10px] uppercase tracking-[0.2em]">
        Metro / Tramvay
      </div>
      <div className="font-serif-display text-2xl mt-1 mb-3">Hatlar</div>

      <ul className="space-y-2 text-xs flex-1">
        {HATLAR.map((h) => (
          <li
            key={h.ad}
            className="border-l-2 border-ink pl-3 py-1"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono uppercase tracking-wide text-ink truncate">
                {h.ad}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-orange shrink-0">
                {h.tip}
              </span>
            </div>
            <div className="text-[10px] font-mono text-gray flex gap-3 mt-1">
              <span>{h.durak} durak</span>
              <span>{h.sefer}</span>
            </div>
          </li>
        ))}
      </ul>

      <a
        href="https://www.izulas.com.tr"
        target="_blank"
        rel="noopener"
        className="mt-3 text-[10px] uppercase tracking-[0.2em] text-orange hover:underline"
      >
        İzulaş güncel sefer →
      </a>
    </div>
  )
}
