import { getIzmirHaberleri, formatHaberZamani } from "@/lib/news"
import { WidgetMore } from "./WidgetMore"

const LIMIT = 5

export async function HaberWidget() {
  const haberler = await getIzmirHaberleri()
  const list = haberler.slice(0, LIMIT)

  return (
    <section className="border-2 border-ink bg-cream p-5 flex flex-col">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Haberler</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray">
          {haberler.length > 0 ? "Google News · İzmir" : "Güncel"}
        </span>
      </header>

      {list.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Haber verisi alınamadı
        </div>
      ) : (
        <>
          <ul className="space-y-3 text-xs flex-1">
            {list.map((h, i) => (
              <li key={`${h.link}-${i}`} className="border-l-2 border-orange pl-3 py-1">
                <a
                  href={h.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange transition-colors"
                >
                  <div className="font-mono text-ink leading-snug line-clamp-2 normal-case">
                    {h.baslik}
                  </div>
                  <div className="flex items-baseline justify-between gap-2 mt-1">
                    <span className="text-[10px] uppercase tracking-widest text-orange truncate">
                      {h.kaynak || "Kaynak"}
                    </span>
                    <span className="text-[10px] text-gray font-mono whitespace-nowrap">
                      {formatHaberZamani(h.tarih)}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <WidgetMore href="/haberler" count={haberler.length} />
        </>
      )}
    </section>
  )
}
