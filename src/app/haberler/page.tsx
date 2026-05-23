import type { Metadata } from "next"
import { getIzmirHaberleri } from "@/lib/news"
import { HaberList } from "@/components/widgets/HaberList"
import { breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

export const metadata: Metadata = {
  title: "İzmir Haberleri · Güncel Son Dakika Haber Akışı",
  description: "İzmir'le ilgili güncel haberler: Yeni Asır, Hürriyet, NTV, AA ve onlarca kaynaktan derlenen tek noktada son dakika İzmir haber akışı.",
  alternates: { canonical: "/haberler" },
  keywords: [
    "İzmir haberleri",
    "İzmir son dakika",
    "İzmir güncel haber",
    "Yeni Asır",
    "İzmir haber akışı",
  ],
}

export const revalidate = 1800

export default async function HaberlerPage() {
  const haberler = await getIzmirHaberleri()
  const kaynaklar = [...new Set(haberler.map((h) => h.kaynak).filter(Boolean))].sort()

  const breadcrumb = breadcrumbJsonLd([{ name: "Haberler", href: "/haberler" }])
  const faqItems = [
    {
      question: "İzmir haberleri hangi kaynaklardan derleniyor?",
      answer: kaynaklar.length > 0
        ? `nokta35 üzerindeki İzmir haberleri Google News altyapısıyla ${kaynaklar.length} farklı yayın kuruluşundan otomatik olarak derlenmektedir. Kaynaklar arasında ${kaynaklar.slice(0, 5).join(", ")} gibi yerel ve ulusal yayın organları bulunmaktadır. Her haberin başlığına tıklayarak orijinal kaynağa yönlendirilirsiniz.`
        : "İzmir haberleri Google News altyapısı üzerinden çeşitli ulusal ve yerel yayın kuruluşlarından otomatik derlenmektedir.",
    },
    {
      question: "İzmir haberleri ne sıklıkla güncellenir?",
      answer: "Haber akışı her 30 dakikada bir Google News RSS kaynağından otomatik olarak güncellenmektedir. Bu sayede İzmir ile ilgili son dakika haberlerine en hızlı şekilde erişebilirsiniz.",
    },
    {
      question: "Haberlerin tam metnini nereden okuyabilirim?",
      answer: "nokta35 yalnızca başlık ve kısa özet göstererek haber kaynaklarının telif haklarına saygı duyar. Her haber kartındaki 'Haberi Oku' butonuna tıklayarak haberin orijinal yayınlandığı siteye yönlendirilir ve tam metni okuyabilirsiniz.",
    },
  ]

  return (
    <>
      <JsonLdScript data={[breadcrumb, faqJsonLd(faqItems)]} />
      <section className="container py-8">
        <header className="border-b-2 border-ink pb-3 mb-6">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif-display text-4xl md:text-5xl">Haberler</h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              Google News · İzmir
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Toplam Haber
              </div>
              <div className="font-serif-display text-3xl text-orange">
                {haberler.length}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Kaynak
              </div>
              <div className="font-serif-display text-3xl text-ink">
                {kaynaklar.length}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Güncelleme
              </div>
              <div className="font-serif-display text-3xl text-ink">30dk</div>
            </div>
          </div>
        </header>

        <HaberList haberler={haberler} />

        <footer className="mt-12 pt-6 border-t border-light-gray text-[10px] uppercase tracking-[0.2em] text-gray leading-relaxed">
          Tüm haber içerikleri ve telif hakları orijinal kaynaklara aittir.
          nokta35 yalnızca başlık ve kısa özet göstererek kullanıcıyı kaynağa
          yönlendirir.
          <br />
          Kaynak: Google News · İzmir
        </footer>
      </section>
      <FaqSection items={faqItems} />
    </>
  )
}
