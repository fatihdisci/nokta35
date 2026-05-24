"use client"

export type LayerKey = "otobus" | "eczane" | "pazar"

const LAYERS: { key: LayerKey; label: string; dot: string }[] = [
  { key: "otobus", label: "Otobüs", dot: "bg-orange" },
  { key: "eczane", label: "Eczane", dot: "bg-ink" },
  { key: "pazar", label: "Pazar", dot: "bg-orange" },
]

export function LayerControl({
  active,
  onChange,
}: {
  active: Record<LayerKey, boolean>
  onChange: (next: Record<LayerKey, boolean>) => void
}) {
  return (
    <div className="bg-cream border-2 border-ink p-2 flex flex-col gap-1 min-w-[140px]">
      <div className="text-[10px] uppercase tracking-[0.2em] text-gray px-1 pb-1 border-b border-light-gray">
        Katmanlar
      </div>
      {LAYERS.map((l) => {
        const on = active[l.key]
        return (
          <button
            key={l.key}
            type="button"
            onClick={() => onChange({ ...active, [l.key]: !on })}
            className={
              "flex items-center gap-2 px-2 py-1 text-xs uppercase tracking-widest border-l-2 " +
              (on
                ? "border-orange bg-cream text-ink"
                : "border-transparent text-gray hover:text-ink")
            }
          >
            <span
              className={
                "w-2 h-2 rounded-full " + (on ? l.dot : "bg-light-gray")
              }
            />
            {l.label}
          </button>
        )
      })}
    </div>
  )
}
