import type { Metadata } from "next"
import Link from "next/link"
import { getEczaneler } from "@/lib/data"
import { parseCoord } from "@/lib/api"
import { slugify } from "@/lib/utils"
import { breadcrumbJsonLd, datasetJsonLd, JsonLdScript, faqJsonLd } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

export const metadata: Metadata = {
  title: "İzmir Nöbetçi Eczaneler · Güncel Canlı Liste",
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

  const faqItems = [
    {
      question: "İzmir'de bugün kaç tane nöbetçi eczane var?",
      answer: list.length > 0
        ? `Bugün İzmir genelinde aktif olarak hizmet veren toplam ${list.length} adet nöbetçi eczane bulunmaktadır. Bu eczaneler İzmir'in ${bolgeler.length} farklı nöbetçi bölgesine dağılmıştır.`
        : "Bugün İzmir genelinde nöbetçi eczane listesi güncellenmektedir. Lütfen kısa bir süre sonra tekrar kontrol ediniz.",
    },
    {
      question: "İzmir nöbetçi eczane verileri güncel mi?",
      answer: "Evet, sayfamızdaki nöbetçi eczane verileri doğrudan İzmir Büyükşehir Belediyesi açık veri sisteminden her 30 dakikada bir otomatik olarak güncellenmektedir. Bu sayede en doğru telefon ve adres bilgilerine anlık olarak erişebilirsiniz.",
    },
    {
      question: "Aradığım İzmir ilçesindeki nöbetçi eczaneyi nasıl bulabilirim?",
      answer: "Sayfamızda nöbetçi eczaneler bölgelerine göre (Karşıyaka, Konak, Bornova, Buca vb.) gruplanmıştır. İlgili bölge başlığı altında o bölgedeki nöbetçi eczanelerin isimlerini, adres açıklamalarını ve telefon numaralarını listeleyebilirsiniz.",
    }
  ]

  const faqSchema = faqJsonLd(faqItems)

  return (
    <>
      <JsonLdScript data={[breadcrumb, dataset, faqSchema]} />
      <section className="container py-8">
        <header className="border-b-2 border-ink pb-3 mb-6">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif-display text-4xl md:text-5xl">
              İzmir Nöbetçi Eczaneler
            </h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              {list.length} eczane · {bolgeler.length} bölge
            </span>
          </div>

          <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-ink">
            <p>
              İzmir'de her gün yüzlerce eczane nöbetçi olarak hizmet verir.
              Eczane nöbeti, <strong>İzmir Eczacı Odası</strong> tarafından
              ilçe ve bölge esasına göre planlanır; gece, hafta sonu ve resmi
              tatillerde de en yakın eczaneye 24 saat erişimi mümkün kılar.
              Bu sayfada bugünün nöbetçi eczaneleri 30 ilçeyi kapsayan
              bölgelere ayrılmış olarak listelenir.
            </p>
            <p className="text-gray">
              Adres, telefon ve harita yön tarifi her kart üzerinden anında
              görüntülenebilir.{" "}
              <a href="/blog/nobetci-eczane-sistemi" className="text-orange underline">
                Nöbetçi eczane sistemi nasıl işler?
              </a>{" "}
              ve{" "}
              <a href="/blog/acil-servis-mi-asm-mi" className="text-orange underline">
                Acil servis mi, ASM mi?
              </a>{" "}
              yazılarımıza da göz atabilirsiniz.
            </p>
          </div>
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
                  <h2 className="font-serif-display text-2xl text-orange mb-3 border-b border-ink pb-1 flex items-baseline gap-3">
                    <Link
                      href={`/eczane/${slugify(bolge)}`}
                      className="hover:underline"
                    >
                      {bolge}
                    </Link>
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
                        {e.LokasyonX && e.LokasyonY && (() => {
                          const lat = parseCoord(e.LokasyonX)
                          const lon = parseCoord(e.LokasyonY)
                          return !isNaN(lat) && !isNaN(lon) && lat !== 0 ? (
                            <a
                              href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto self-start text-[9px] uppercase tracking-[0.2em] text-orange border border-orange px-2 py-1 hover:bg-orange hover:text-cream transition-colors"
                            >
                              Haritada Gör →
                            </a>
                          ) : null
                        })()}
                      </article>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
      <section className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          <div className="border-2 border-ink p-6 bg-cream">
            <h2 className="font-serif-display text-2xl mb-4 text-ink">
              Nöbetçi Eczane Nasıl Çalışır?
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-ink">
              <p>
                Türkiye'de eczane nöbet sistemi 6197 sayılı Eczacılar ve Eczaneler
                Hakkında Kanun ile düzenlenir. <strong>Her ilçe ve bölge için</strong>{" "}
                il eczacı odası tarafından nöbet listesi hazırlanır; eczaneler
                belirlenen gün ve gecelerde 24 saat açık kalmakla yükümlüdür.
              </p>
              <p>
                Nöbetçi eczanede yalnızca acil ilaç temini yapılır; rutin alımlar
                için mesai saatleri içinde diğer eczaneler tercih edilmelidir.
                Reçeteli ilaç için reçete (e-reçete kapsamında dijital de
                olabilir) gerekir.
              </p>
            </div>
          </div>

          <div className="border-2 border-ink p-6 bg-cream">
            <h2 className="font-serif-display text-2xl mb-4 text-ink">
              Acil Sağlık Numaraları
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-ink">
              <ul className="space-y-2">
                <li>
                  <strong className="text-orange">112</strong> — Acil sağlık
                  hizmetleri (ambulans). Hayati tehlike durumunda doğrudan arayın.
                </li>
                <li>
                  <strong className="text-orange">184</strong> — Sağlık Bakanlığı
                  iletişim merkezi (SABİM). Sağlık hizmetleri hakkında bilgi ve
                  şikâyet hattı.
                </li>
                <li>
                  <strong className="text-orange">182</strong> — MHRS Merkezi
                  Hekim Randevu Sistemi telefon hattı.
                </li>
              </ul>
              <p className="text-xs text-gray italic pt-2 border-t border-light-gray">
                Hayati tehlike yoksa öncelikle aile hekiminize veya ASM'ye
                başvurunuz; acil servisler ağır vakalara öncelik verir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqItems} />
    </>
  )
}

