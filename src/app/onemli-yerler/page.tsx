import type { Metadata } from "next"
import { getPazarYerleri, GUN_ADLARI } from "@/lib/data"
import { PazarList } from "@/components/widgets/PazarList"
import { breadcrumbJsonLd, datasetJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"
import { istanbulGunu } from "@/lib/utils"

export const revalidate = 1800

export const metadata: Metadata = {
  title: "İzmir Semt Pazarları · Hangi Gün Nerede Pazar Var",
  description: "İzmir'deki tüm semt pazarları: Karşıyaka, Konak, Bornova, Buca, Çeşme ve 30 ilçede hangi gün nerede pazar kurulduğu, adresleri ve konumları.",
  alternates: { canonical: "/onemli-yerler" },
  keywords: [
    "İzmir semt pazarları",
    "İzmir pazar yerleri",
    "hangi gün pazar",
    "izmir pazartesi pazarı",
    "izmir cuma pazarı",
    "semt pazarı nerede",
  ],
}

export default async function OnemliYerlerPage() {
  const pazarlar = await getPazarYerleri()
  const bugunIndex = istanbulGunu()
  const bugunAcik = pazarlar.filter((p) => p.gun === bugunIndex)

  const gunSayilari: Record<number, number> = {}
  pazarlar.forEach((p) => {
    if (p.gun !== undefined) gunSayilari[p.gun] = (gunSayilari[p.gun] ?? 0) + 1
  })

  const faqItems = [
    {
      question: "İzmir'de bugün kaç semt pazarı kurulu?",
      answer: bugunAcik.length > 0
        ? `Bugün (${GUN_ADLARI[bugunIndex]}) İzmir genelinde ${bugunAcik.length} semt pazarı kurulmaktadır. Bu pazarlar ${[...new Set(bugunAcik.map(p => p.ILCE).filter(Boolean))].slice(0, 4).join(", ")} ve diğer ilçelerde bulunmaktadır.`
        : `Bugün (${GUN_ADLARI[bugunIndex]}) İzmir'de kayıtlı açık pazar bulunmamaktadır.`,
    },
    {
      question: "İzmir'de semt pazarları hangi günler kurulur?",
      answer: `İzmir genelindeki ${pazarlar.length} semt pazarı haftanın her günü farklı ilçelerde kurulmaktadır. Günlük ve ilçe bazlı filtreleme ile aradığınız pazarı kolayca bulabilirsiniz.`,
    },
    {
      question: "İzmir semt pazarı verileri nereden alınıyor?",
      answer: "Semt pazarı konum ve gün bilgileri İzmir Büyükşehir Belediyesi'nin CBS (Coğrafi Bilgi Sistemi) açık veri platformundan alınmaktadır. Veriler günlük olarak güncellenmektedir.",
    },
  ]

  const breadcrumb = breadcrumbJsonLd([{ name: "Semt Pazarları", href: "/onemli-yerler" }])
  const dataset = datasetJsonLd({
    name: "İzmir Semt Pazarları Konum ve Gün Veri Seti",
    description: "İzmir Büyükşehir Belediyesi CBS sisteminden alınan semt pazarı konumları, ilçe bilgileri ve hangi günlerde kurulduğu verileri.",
    url: "/onemli-yerler",
    keywords: ["İzmir semt pazarları", "İzmir pazar yerleri", "hangi gün pazar"],
  })
  const faqSchema = faqJsonLd(faqItems)

  return (
    <>
      <JsonLdScript data={[breadcrumb, dataset, faqSchema]} />

      {/* Hero */}
      <section className="container py-12">
        <div className="text-xs uppercase tracking-[0.2em] text-gray mb-4">
          Önemli Yerler · İzmir
        </div>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[0.95] text-ink">
          Semt <span className="text-orange">Pazarları</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-gray uppercase tracking-wide leading-relaxed">
          İzmir genelinde {pazarlar.length} pazar yeri — günlük ve ilçe bazlı filtrele,
          haritada bul.
        </p>
      </section>

      {/* Özet bant */}
      <div className="bg-ink text-cream py-4 mb-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif-display text-3xl text-orange">{pazarlar.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray mt-1">Toplam Pazar</div>
            </div>
            <div>
              <div className="font-serif-display text-3xl text-orange">{bugunAcik.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray mt-1">
                Bugün ({GUN_ADLARI[bugunIndex]})
              </div>
            </div>
            <div>
              <div className="font-serif-display text-3xl text-orange">
                {new Set(pazarlar.map((p) => p.ILCE).filter(Boolean)).size}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray mt-1">İlçe</div>
            </div>
            <div>
              <div className="font-serif-display text-3xl text-orange">
                {Object.keys(gunSayilari).length}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray mt-1">Aktif Gün</div>
            </div>
          </div>
        </div>
      </div>

      {/* Liste + filtreler */}
      <section className="container pb-16">
        <PazarList pazarlar={pazarlar} bugunIndex={bugunIndex} />
      </section>

      <FaqSection items={faqItems} />

      {/* Kaynak notu */}
      <div className="container pb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray/60 border-t border-light-gray pt-4">
          Kaynak: İzmir Büyükşehir Belediyesi CBS Açık Veri Sistemi ·{" "}
          <a
            href="https://openapi.izmir.bel.tr/api/ibb/cbs/pazaryerleri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray"
          >
            openapi.izmir.bel.tr
          </a>
        </p>
      </div>
    </>
  )
}
