export function DataAge({ ts }: { ts: number | null }) {
  if (!ts) return null
  const diff = Math.floor(Date.now() / 1000) - ts
  let label: string
  if (diff < 60) label = `${diff}s`
  else if (diff < 3600) label = `${Math.floor(diff / 60)} dk`
  else if (diff < 86400) label = `${Math.floor(diff / 3600)} sa`
  else label = `${Math.floor(diff / 86400)} gün`
  return (
    <span
      className="text-[9px] font-mono text-gray/60 tabular-nums"
      title="Kaynaktan son veri çekimi"
    >
      {label} önce
    </span>
  )
}
