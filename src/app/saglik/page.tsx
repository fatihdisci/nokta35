import type { Metadata } from "next"
import { getEczaneler } from "@/lib/data"
import { breadcrumbJsonLd, datasetJsonLd, JsonLdScript } from "@/lib/jsonLd"

export const metadata: Metadata = {
  title: "İzmir Nöbetçi Eczaneler · Güncel Canlı Liste · nokta35",
  description: "İzmir'de bugünün nöbetçi eczaneleri. Konak, Karşıyaka, Bornova, Buca dahil tüm 30 ilçenin nöbetçi eczane adresleri, telefonları ve konum detayları.",
  alternates: {
    canonical: "/saglik",
  },
}
export const revalidate = 1800

export default async function Page() {
  const eczaneler = await getEczaneler()
  const list = eczaneler ?? []

  // Bölgeye göre grupla
  const grouped = new Map<string, typeof list>()
  for (const e of list) {
    const k = (e.Bolge ?? "DİĞER").toUpperCase()
    const arr = grouped.get(k) ?? []
    arr.push(e)
    grouped.set(k, arr)
  }
  const bolgeler = Array.from(grouped.keys()).sort()

  const breadcrumb = breadcrumbJsonLd([{ name: "Sağlık", href: "/saglik" }])
  const dataset = datasetJsonLd({
    name: "İzmir Nöbetçi Eczaneler Canlı Veri Seti",
    description: "İzmir ilindeki tüm ilçelerin bugünkü nöbetçi eczaneleri listesi, telefon numaraları, adresleri ve bölge açıklamaları.",
    url: "/saglik",
    keywords: ["İzmir nöbetçi eczane", "İzmir bugün nöbetçi eczaneler", "Konak nöbetçi eczane", "Karşıyaka nöbetçi eczane", "Bornova nöbetçi eczane"],
  })

  return (
    <>
      <JsonLdScript data={[breadcrumb, dataset]} />
      <section className="container py-8">
      <header className="border-b-2 border-ink pb-3 mb-6 flex items-baseline justify-between">
        <h1 className="font-serif-display text-4xl md:text-5xl">
          Nöbetçi Eczane
        </h1>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
          {list.length} eczane · {bolgeler.length} bölge
        </span>
      </header>

      {list.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-12 text-center">
          Veri alınamadı
        </div>
      ) : (
        <div className="space-y-8">
          {bolgeler.map((bolge) => {
            const items = grouped.get(bolge) ?? []
            return (
              <div key={bolge}>
                <h2 className="font-serif-display text-2xl text-orange mb-3 border-b border-ink pb-1">
                  {bolge}{" "}
                  <span className="text-[10px] uppercase tracking-widest text-gray">
                    ({items.length})
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((e, i) => (
                    <article
                      key={`${bolge}-${i}`}
                      className="border-2 border-ink bg-cream p-4 flex flex-col gap-2 text-xs"
                    >
                      <h3 className="font-serif-display text-lg leading-tight">
                        {e.Adi ?? "—"}
                      </h3>
                      {e.BolgeAciklama && (
                        <div className="text-[10px] uppercase tracking-widest text-orange">
                          {e.BolgeAciklama}
                        </div>
                      )}
                      {e.Adres && (
                        <div className="text-gray leading-snug">{e.Adres}</div>
                      )}
                      {e.Telefon && (
                        <a
                          href={`tel:${e.Telefon}`}
                          className="font-mono text-ink hover:text-orange"
                        >
                          {e.Telefon}
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
    </>
  )
}
