import type { Metadata } from "next"
import { getHavaDurumu, havaLabel } from "@/lib/hava"
import { breadcrumbJsonLd, datasetJsonLd, JsonLdScript, faqJsonLd } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

export const metadata: Metadata = {
  title: "İzmir Anlık Hava Durumu · 30 İlçe Canlı Sıcaklık · nokta35",
  description: "İzmir ve 30 ilçesinin (Konak, Karşıyaka, Bornova, Buca, Çeşme vb.) anlık hava durumu, rüzgar hızı, nem oranı ve hissedilen sıcaklık değerleri.",
  alternates: {
    canonical: "/hava",
  },
}
export const revalidate = 900

function fmtT(n: number | null | undefined) {
  if (n === null || n === undefined) return "—"
  return `${Math.round(n)}°`
}

function fmtNum(n: number | null | undefined, suf = "") {
  if (n === null || n === undefined) return "—"
  return `${Math.round(n)}${suf}`
}

export default async function Page() {
  const hava = await getHavaDurumu()
  const list = hava ?? []
  const sorted = [...list].sort((a, b) => a.ilce.localeCompare(b.ilce, "tr"))

  const sicakliklar = list
    .map((h) => h.sicaklik)
    .filter((s): s is number => s !== null)
  const ort = sicakliklar.length
    ? Math.round(sicakliklar.reduce((a, b) => a + b, 0) / sicakliklar.length)
    : null
  const min = sicakliklar.length ? Math.min(...sicakliklar) : null
  const max = sicakliklar.length ? Math.max(...sicakliklar) : null

  const breadcrumb = breadcrumbJsonLd([{ name: "Hava Durumu", href: "/hava" }])
  const dataset = datasetJsonLd({
    name: "İzmir 30 İlçe Hava Durumu Veri Seti",
    description: "Open-Meteo ve meteoroloji istasyonları aracılığıyla sağlanan İzmir'in 30 ilçesine ait anlık sıcaklık, hissedilen sıcaklık, rüzgar hızı ve nem oranları.",
    url: "/hava",
    keywords: ["İzmir hava durumu", "İzmir ilçeleri hava durumu", "İzmir anlık sıcaklık", "İzmir nem oranları"],
  })

  const faqItems = [
    {
      question: "İzmir genelinde anlık ortalama sıcaklık kaç derecedir?",
      answer: ort !== null
        ? `Şu an İzmir genelinde ölçülen anlık ortalama sıcaklık ${fmtT(ort)}'dir. İlçeler arasındaki güncel sıcaklık değerleri ${fmtT(min)} ile ${fmtT(max)} arasında değişiklik göstermektedir.`
        : "İzmir genelinde anlık ortalama sıcaklık verileri şu anda güncellenmektedir.",
    },
    {
      question: "İzmir'de ölçülen en yüksek ve en düşük sıcaklıklar ne kadardır?",
      answer: min !== null && max !== null
        ? `İzmir'in 30 ilçesinden toplanan anlık verilere göre, şu an en yüksek sıcaklık ${fmtT(max)}, en düşük sıcaklık ise ${fmtT(min)} olarak ölçülmüştür.`
        : "Sıcaklık uç değerleri istasyonlardan anlık çekilen verilere göre güncellenmektedir.",
    },
    {
      question: "İzmir hava durumu verileri güncel mi ve hangi kaynaktan alınıyor?",
      answer: "Evet, sayfamızdaki tüm İzmir hava durumu verileri Open-Meteo API entegrasyonu aracılığıyla her 15 dakikada bir otomatik olarak güncellenir. Rüzgar hızı, hissedilen sıcaklık ve nem oranları ilçeler bazında canlı sunulur.",
    }
  ]

  const faqSchema = faqJsonLd(faqItems)

  return (
    <>
      <JsonLdScript data={[breadcrumb, dataset, faqSchema]} />
      <section className="container py-8">
        <header className="border-b-2 border-ink pb-3 mb-6">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif-display text-4xl md:text-5xl">Hava Durumu</h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              İzmir · 30 ilçe · Open-Meteo
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-4 text-xs">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Ort.
              </div>
              <div className="font-serif-display text-3xl text-orange">
                {fmtT(ort)}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                En Düşük
              </div>
              <div className="font-serif-display text-3xl text-ink">{fmtT(min)}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                En Yüksek
              </div>
              <div className="font-serif-display text-3xl text-ink">{fmtT(max)}</div>
            </div>
          </div>
        </header>

        {list.length === 0 ? (
          <div className="text-xs text-gray uppercase tracking-widest py-12 text-center">
            Veri alınamadı
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {sorted.map((h) => {
              const lbl = havaLabel(h.havaKodu)
              return (
                <article
                  key={h.ilce}
                  className="border-2 border-ink bg-cream p-4 flex flex-col gap-2"
                >
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-serif-display text-xl">{h.ilce}</h2>
                    <span className="text-2xl leading-none" aria-hidden>
                      {lbl.ikon}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif-display text-4xl text-orange leading-none">
                      {fmtT(h.sicaklik)}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray text-right max-w-[100px] leading-tight">
                      {lbl.ad}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[10px] uppercase tracking-widest text-gray pt-2 border-t border-light-gray">
                    <div>
                      <div>Hissed.</div>
                      <div className="font-mono text-ink normal-case">
                        {fmtT(h.hissedilen)}
                      </div>
                    </div>
                    <div>
                      <div>Rüzgar</div>
                      <div className="font-mono text-ink normal-case">
                        {fmtNum(h.ruzgar, " km/h")}
                      </div>
                    </div>
                    <div>
                      <div>Nem</div>
                      <div className="font-mono text-ink normal-case">
                        {fmtNum(h.nem, "%")}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>
      <FaqSection items={faqItems} />
    </>
  )
}

