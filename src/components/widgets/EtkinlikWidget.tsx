import { getEtkinlikler } from "@/lib/data"
import { WidgetMore } from "./WidgetMore"

const LIMIT = 5

function formatTarih(tarih: string): string {
  if (!tarih) return ""
  try {
    const d = new Date(tarih)
    if (isNaN(d.getTime())) return tarih
    return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long" })
  } catch {
    return tarih
  }
}

export async function EtkinlikWidget() {
  const etkinlikler = await getEtkinlikler()
  const list = etkinlikler.slice(0, LIMIT)

  return (
    <section className="border-2 border-ink bg-cream p-5 flex flex-col">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Etkinlikler</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray">
          {etkinlikler.length > 0 ? `${etkinlikler.length} etkinlik` : "İzmir"}
        </span>
      </header>

      {list.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Yaklaşan etkinlik bilgisi bulunamadı
        </div>
      ) : (
        <>
          <ul className="space-y-3 text-xs flex-1">
            {list.map((e, i) => {
              const content = (
                <>
                  <div className="font-mono uppercase tracking-wide text-ink leading-tight truncate">
                    {e.adi || "—"}
                  </div>
                  {(e.tur || e.ilce) && (
                    <div className="text-[10px] uppercase tracking-widest text-orange mt-0.5">
                      {[e.tur, e.ilce].filter(Boolean).join(" · ")}
                    </div>
                  )}
                  {(e.mekan || e.baslangic) && (
                    <div className="text-gray mt-0.5 font-mono text-[10px]">
                      {e.mekan && <span>{e.mekan}</span>}
                      {e.baslangic && <span className="ml-1 text-ink">· {formatTarih(e.baslangic)}</span>}
                    </div>
                  )}
                </>
              )
              return (
                <li key={e.id || `${e.adi}-${i}`} className="border-l-2 border-orange pl-3 py-1">
                  {e.detayUrl ? (
                    <a href={e.detayUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors block">
                      {content}
                    </a>
                  ) : content}
                </li>
              )
            })}
          </ul>
          <WidgetMore href="/etkinlikler" count={etkinlikler.length} />
        </>
      )}
    </section>
  )
}
