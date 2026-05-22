import type { Metadata } from "next"
import { getEtkinlikler } from "@/lib/data"
import { EtkinlikList } from "@/components/widgets/EtkinlikList"
import { breadcrumbJsonLd, datasetJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

export const metadata: Metadata = {
  title: "İzmir Etkinlikler · Kültür & Sanat Takvimi",
  description: "İzmir'deki güncel kültür, sanat ve eğlence etkinlikleri. Konserler, tiyatrolar, sergiler ve daha fazlası İzmir Büyükşehir Belediyesi etkinlik takviminden.",
  alternates: {
    canonical: "/etkinlikler",
  },
}

export const revalidate = 3600

export default async function EtkinliklerPage() {
  const etkinlikler = await getEtkinlikler()
  const turler = [...new Set(etkinlikler.map((e) => e.tur).filter(Boolean))].sort()
  const ilceler = [...new Set(etkinlikler.map((e) => e.ilce).filter(Boolean))].sort()

  const ucretsizSayisi = etkinlikler.filter((e) => e.ucretsiz).length
  const dataset = datasetJsonLd({
    name: "İzmir Kültür Sanat Etkinlikleri Veri Seti",
    description: "İzmir Büyükşehir Belediyesi kültür ve sanat etkinlikleri: konserler, festivaller, sergiler, tiyatro gösterileri ve diğer etkinliklerin tarihleri, mekanları ve bilet bilgileri.",
    url: "/etkinlikler",
    keywords: ["İzmir etkinlikler", "İzmir konser", "İzmir festival", "İzmir tiyatro", "İzmir sanat etkinlikleri"],
  })
  const faqItems = [
    {
      question: "İzmir'de şu an kaç kültür sanat etkinliği var?",
      answer: etkinlikler.length > 0
        ? `İzmir Büyükşehir Belediyesi takviminde şu an ${etkinlikler.length} etkinlik yer almaktadır. Bunların ${ucretsizSayisi} tanesi ücretsiz olup herkese açıktır.`
        : "İzmir Büyükşehir Belediyesi etkinlik takvimi güncellenmektedir. Lütfen kısa süre sonra tekrar kontrol ediniz.",
    },
    {
      question: "İzmir etkinliklerinde ücretsiz olanlar var mı?",
      answer: ucretsizSayisi > 0
        ? `Evet, şu an takvimde yer alan ${etkinlikler.length} etkinliğin ${ucretsizSayisi} tanesi ücretsizdir. Ücretsiz etkinlikleri bulmak için tür filtresini kullanabilir ya da her kartın alt kısmındaki "Ücretsiz" etiketine bakabilirsiniz.`
        : "Etkinlik bilet bilgileri etkinlik kartlarında yer almaktadır. Ücretsiz etkinlikler kartlarda özel olarak işaretlenmektedir.",
    },
    {
      question: "İzmir kültür sanat etkinlikleri nerede düzenleniyor?",
      answer: turler.length > 0
        ? `Etkinlikler Ahmed Adnan Saygun Sanat Merkezi, İzmir Kültür Parkı ve şehrin çeşitli sanat merkezlerinde düzenlenmektedir. Türe göre filtrelemek için sayfadaki filtre butonlarını kullanabilirsiniz: ${turler.slice(0, 4).join(", ")} ve daha fazlası.`
        : "Etkinlikler İzmir genelindeki kültür merkezleri, parklar ve sanat alanlarında düzenlenmektedir.",
    },
  ]
  const faqSchema = faqJsonLd(faqItems)

  const breadcrumb = breadcrumbJsonLd([{ name: "Etkinlikler", href: "/etkinlikler" }])

  return (
    <>
      <JsonLdScript data={[breadcrumb, dataset, faqSchema]} />
      <div className="container py-8">
        <header className="border-b-2 border-ink pb-4 mb-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
            İzmir Kültür & Sanat
          </div>
          <h1 className="font-serif-display text-4xl md:text-5xl text-ink">Etkinlikler</h1>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="border border-light-gray p-3">
              <div className="font-mono text-2xl text-orange">{etkinlikler.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray mt-1">Toplam</div>
            </div>
            {turler.length > 0 && (
              <div className="border border-light-gray p-3">
                <div className="font-mono text-2xl text-orange">{turler.length}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray mt-1">Tür</div>
              </div>
            )}
            {ilceler.length > 0 && (
              <div className="border border-light-gray p-3">
                <div className="font-mono text-2xl text-orange">{ilceler.length}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray mt-1">İlçe</div>
              </div>
            )}
          </div>
        </header>

        <EtkinlikList etkinlikler={etkinlikler} />

        <footer className="mt-12 pt-6 border-t border-light-gray text-[10px] uppercase tracking-[0.2em] text-gray">
          Kaynak: İzmir Büyükşehir Belediyesi · openapi.izmir.bel.tr
        </footer>
      </div>

      <FaqSection items={faqItems} />
    </>
  )
}
