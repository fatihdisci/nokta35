import type { Metadata } from "next"
import { IzbanSefer } from "@/components/widgets/IzbanSefer"
import { MetroTramvay } from "@/components/widgets/MetroTramvay"
import { FaqSection } from "@/components/widgets/FaqSection"
import { AdSlot } from "@/components/ads/AdSlot"
import { breadcrumbJsonLd, governmentServiceJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd"

export const metadata: Metadata = {
  title: "İzmir Canlı Ulaşım Rehberi · İZBAN Sefer Saatleri, ESHOT & Metro · nokta35",
  description: "İzmir genelinde İZBAN sefer saatleri canlı sorgulama, metro ve tramvay hatları güncel durak ve sefer bilgileri, ESHOT otobüs entegrasyonu ve coğrafi ulaşım rehberi.",
  alternates: {
    canonical: "/ulasim",
  },
}

export const revalidate = 3600 // Cache for 1 hour

export default function UlasimPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Ulaşım", href: "/ulasim" }])
  const service = governmentServiceJsonLd({
    name: "İzmir Canlı Toplu Ulaşım Bilgilendirme Sistemi",
    description: "İzmir genelinde kuzeyde Aliağa'dan güneyde Selçuk'a kadar uzanan İZBAN banliyö hattı, şehir içi Metro ve Tramvay şebekesi ile ESHOT otobüs hatlarının sefer saatleri ve güzergah bilgileri.",
    provider: "İzmir Büyükşehir Belediyesi",
    providerUrl: "https://www.izmir.bel.tr",
    serviceType: "Public Transit Information Service",
    url: "/ulasim",
  })

  const faqItems = [
    {
      question: "İzmir İZBAN sefer saatleri nereden canlı sorgulanır?",
      answer: "İzmir genelinde kuzeyde Aliağa ve güneyde Selçuk arasında hizmet veren İZBAN banliyö hattının en güncel sefer saatlerini nokta35 Ulaşım rehberi üzerinden kalkış ve varış istasyonlarını seçerek canlı sorgulayabilirsiniz. Sorgulama sonuçları, İzmir Büyükşehir Belediyesi açık veri altyapısıyla anlık senkronize edilerek, bulunduğunuz saate en yakın seferleri öne çıkaracak şekilde gösterilir.",
    },
    {
      question: "İzmir metrosu hangi saatler arasında ve ne sıklıkla çalışıyor?",
      answer: "İzmir Metrosu (M1 Evka 3 - Fahrettin Altay hattı), haftanın her günü sabah saat 06:00 ile gece yarısı 00:00 arasında yoğun saatlerde 3 ila 5 dakika aralıklarla kesintisiz hizmet vermektedir. Cuma ve Cumartesi geceleri ise İzmir Büyükşehir Belediyesi'nin 'Baykuş Seferleri' uygulaması sayesinde metro seferleri 24 saat kesintisiz devam etmektedir.",
    },
    {
      question: "İzmir'deki tramvay hatları hangileridir?",
      answer: "İzmir'de aktif olarak çalışan 3 ana tramvay hattı vardır: T1 Karşıyaka Tramvayı (Ataşehir - Alaybey), T2 Konak Tramvayı (Fahrettin Altay - Halkapınar) ve Çiğli Tramvayı (T3 Ataşehir Kavşağı - Mavişehir). Tramvay hatları modern ve çevre dostu ulaşım alternatifleri sunmakta olup sabah 06:00 - 00:00 saatleri arasında çalışmaktadır.",
    },
    {
      question: "İzmirim Kart bakiye sorgulama ve online yükleme nasıl yapılır?",
      answer: "İzmirim Kart bakiye sorgulaması, ESHOT Genel Müdürlüğü resmi web sitesi (eshot.gov.tr) veya mobil uygulaması üzerinden akıllı kart numarası girilerek online olarak kolayca gerçekleştirilebilir. Ayrıca nokta35 Ulaşım rehberindeki hızlı bağlantıları kullanarak doğrudan resmi sorgulama ekranlarına yönelebilirsiniz.",
    }
  ]

  const faqSchema = faqJsonLd(faqItems)

  return (
    <>
      <JsonLdScript data={[breadcrumb, service, faqSchema]} />

      <section className="container py-8">
        <header className="border-b-2 border-ink pb-3 mb-6">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif-display text-4xl md:text-5xl">Ulaşım</h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              Canlı İzmir Rehberi
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">İZBAN İstasyon</div>
              <div className="font-serif-display text-3xl text-ink">41</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">Metro Hat</div>
              <div className="font-serif-display text-3xl text-orange">M1</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">Tramvay Hat</div>
              <div className="font-serif-display text-3xl text-ink">3</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">Entegre Hat</div>
              <div className="font-serif-display text-3xl text-ink">30+ İlçe</div>
            </div>
          </div>
        </header>

        <div className="container px-0 mb-6">
          <AdSlot id="AD-1" size="leaderboard" />
        </div>

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7">
            <IzbanSefer />
          </div>
          <div className="lg:col-span-5">
            <MetroTramvay />
          </div>
        </div>

        {/* Informative Brutalist Card */}
        <div className="mt-6 border-2 border-ink p-5 bg-cream">
          <div className="text-orange text-[10px] uppercase tracking-[0.2em] mb-1">
            Rehber & Entegrasyon
          </div>
          <h2 className="font-serif-display text-2xl mb-3 text-ink">
            ESHOT Otobüsleri & İzmirim Kart Bilgi Kartı
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
            <div className="space-y-3 leading-relaxed">
              <p>
                <strong>🚌 ESHOT Canlı Otobüs Konumları:</strong> ESHOT otobüs hatlarının anlık konumlarını ve durağınıza yaklaşan otobüsleri görmek için ana sayfamızdaki <a href="/harita" className="text-orange underline font-bold hover:text-ink transition-colors">Canlı İzmir Haritası</a> katmanını kullanabilirsiniz. Harita üzerinden istediğiniz otobüs hattını aktif ederek GPS koordinatlarını 30 saniyede bir güncellenen verilerle izleyebilirsiniz.
              </p>
              <p>
                <strong>⚡ Aktarmalı Ulaşım Sistemi:</strong> İzmir toplu ulaşımında (İZBAN, Metro, Tramvay, ESHOT ve İzdeniz gemileri) 120 dakika süresince geçerli olan entegre aktarma sistemi kullanılmaktadır. İlk biniş sonrasındaki aktarmalar hat türüne göre indirimli veya ücretsiz olarak kartınızdan düşülür.
              </p>
            </div>
            <div className="space-y-3 flex flex-col justify-between">
              <div className="space-y-2 leading-relaxed">
                <p>
                  <strong>💳 İzmirim Kart İşlemleri:</strong> Kartınızın bakiyesini sorgulamak veya online bakiye yüklemesi yapmak için resmi ESHOT kanallarını kullanabilirsiniz.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://www.eshot.gov.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink px-2.5 py-1 hover:bg-orange hover:text-cream transition-all uppercase tracking-wider text-[10px] bg-light-gray/20 font-bold"
                  >
                    ESHOT Resmi Web Sitesi →
                  </a>
                  <a
                    href="https://www.izmirimkart.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink px-2.5 py-1 hover:bg-orange hover:text-cream transition-all uppercase tracking-wider text-[10px] bg-light-gray/20 font-bold"
                  >
                    Online Kart Yükleme →
                  </a>
                </div>
              </div>
              <div className="text-[10px] text-gray italic border-t border-light-gray pt-2">
                * Bu platform tamamen bağımsız bir sivil teknoloji projesi olup, resmi sefer saatleri ve kurallar için belediyenin resmi duyurularını dikkate alınız.
              </div>
            </div>
          </div>
        </div>

        <div className="container px-0 mt-6">
          <AdSlot id="AD-3" size="inline" />
        </div>
      </section>

      <FaqSection items={faqItems} />

      <section className="container py-4">
        <AdSlot id="AD-5" size="leaderboard" />
      </section>
    </>
  )
}
