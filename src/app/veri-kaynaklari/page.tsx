import type { Metadata } from "next"
import Link from "next/link"
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonLd"

export const metadata: Metadata = {
  title: "Veri Kaynakları · Hangi API'lerden Çekiyoruz",
  description:
    "nokta35'in kullandığı tüm açık veri kaynakları: İBB openapi.izmir.bel.tr, İZSU, ESHOT, İZBAN, Open-Meteo, Google News. Her veri setinin güncellenme sıklığı.",
  alternates: { canonical: "/veri-kaynaklari" },
}

type Kaynak = {
  baslik: string
  endpoint: string
  saglayici: string
  guncelleme: string
  aciklama: string
  link: string
}

const KAYNAKLAR: Kaynak[] = [
  {
    baslik: "Baraj Doluluk",
    endpoint: "/api/izsu/barajdurum",
    saglayici: "İZSU",
    guncelleme: "saatlik",
    aciklama: "İzmir barajlarının (Tahtalı, Balçova, Ürkmez, Gördes, Alaçatı) anlık doluluk oranı, su yüksekliği, kapasite ve hacim verileri.",
    link: "https://openapi.izmir.bel.tr/api/izsu/barajdurum",
  },
  {
    baslik: "Su Kesintileri",
    endpoint: "/api/izsu/arizakaynaklisukesintileri",
    saglayici: "İZSU",
    guncelleme: "saatlik",
    aciklama: "Aktif arıza ve planlı su kesintileri: ilçe, mahalle, başlangıç-bitiş saati ve açıklama.",
    link: "https://openapi.izmir.bel.tr/api/izsu/arizakaynaklisukesintileri",
  },
  {
    baslik: "Nöbetçi Eczaneler",
    endpoint: "/api/ibb/nobetcieczaneler",
    saglayici: "İBB",
    guncelleme: "30 dakikada bir",
    aciklama: "Bugünün tüm nöbetçi eczaneleri: isim, adres, telefon, GPS konumu.",
    link: "https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler",
  },
  {
    baslik: "Otopark Doluluk",
    endpoint: "/api/ibb/izum/otoparklar",
    saglayici: "İZUM",
    guncelleme: "30 saniyede bir",
    aciklama: "İZELMAN ve İZUM otoparklarının anlık dolu/boş yer sayısı, kapasitesi, ücret bilgisi.",
    link: "https://openapi.izmir.bel.tr/api/ibb/izum/otoparklar",
  },
  {
    baslik: "Otobüs Konumları",
    endpoint: "/api/iztek/hatotobuskonumlari/{hatId}",
    saglayici: "İZTEK / ESHOT",
    guncelleme: "30 saniyede bir",
    aciklama: "Belirli hatta hizmet veren otobüslerin canlı GPS konumu.",
    link: "https://openapi.izmir.bel.tr",
  },
  {
    baslik: "İZBAN Sefer Saatleri",
    endpoint: "/api/izban/sefersaatleri/{kalkisId}/{varisId}",
    saglayici: "İZBAN",
    guncelleme: "haftalık",
    aciklama: "Banliyö tren hattının iki istasyon arası sefer kalkış saatleri.",
    link: "https://openapi.izmir.bel.tr/api/izban/istasyonlar",
  },
  {
    baslik: "Semt Pazarları",
    endpoint: "/api/ibb/cbs/pazaryerleri",
    saglayici: "İBB CBS",
    guncelleme: "günlük",
    aciklama: "İzmir genelindeki tüm semt pazarları: ilçe, mahalle, hangi gün kurulduğu, konum.",
    link: "https://openapi.izmir.bel.tr/api/ibb/cbs/pazaryerleri",
  },
  {
    baslik: "Kültür Sanat Etkinlikleri",
    endpoint: "/api/ibb/kultursanat/etkinlikler",
    saglayici: "İBB",
    guncelleme: "günlük",
    aciklama: "İBB tarafından düzenlenen veya duyurulan kültür sanat etkinlikleri: ad, mekan, tarih, bilet linki.",
    link: "https://kultursanat.izmir.bel.tr",
  },
  {
    baslik: "Hava Durumu",
    endpoint: "Open-Meteo Forecast API",
    saglayici: "Open-Meteo",
    guncelleme: "15 dakikada bir",
    aciklama: "30 İzmir ilçesi için saatlik sıcaklık, yağış, rüzgar tahmini. Ücretsiz, kayıt gerektirmez.",
    link: "https://open-meteo.com",
  },
  {
    baslik: "Hava Kalitesi",
    endpoint: "/api/cevre",
    saglayici: "T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı",
    guncelleme: "15 dakikada bir",
    aciklama: "İzmir istasyonlarında PM10, PM2.5, NO2, O3 ölçümleri ve AKİ değerleri.",
    link: "https://sim.csb.gov.tr",
  },
  {
    baslik: "Haberler",
    endpoint: "Google News RSS",
    saglayici: "Google News",
    guncelleme: "30 dakikada bir",
    aciklama: "İzmir araması ile Google News RSS akışı. Sadece AA ve İzmir'e özel yerel kaynaklar gösterilir.",
    link: "https://news.google.com",
  },
]

export default function VeriKaynaklariPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Veri Kaynakları", href: "/veri-kaynaklari" },
  ])

  const provider = [...new Set(KAYNAKLAR.map((k) => k.saglayici))]

  return (
    <>
      <JsonLdScript data={breadcrumb} />

      <section className="container py-12">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
          Veri Kaynakları
        </div>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[0.95] text-ink">
          Hangi API'lerden <br />
          <span className="text-orange">veri çekiyoruz?</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-gray uppercase tracking-wide leading-relaxed">
          {KAYNAKLAR.length} açık veri kaynağı · {provider.length} farklı sağlayıcı
        </p>
      </section>

      <section className="container pb-16">
        <div className="space-y-6">
          {KAYNAKLAR.map((k) => (
            <article
              key={k.baslik}
              className="border-2 border-light-gray bg-cream p-5 hover:border-ink transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3 border-b border-light-gray pb-3">
                <h2 className="font-serif-display text-2xl">{k.baslik}</h2>
                <div className="flex gap-3 text-[10px] uppercase tracking-widest font-mono">
                  <span className="bg-ink text-cream px-2 py-0.5">
                    {k.saglayici}
                  </span>
                  <span className="text-orange">{k.guncelleme}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-3">{k.aciklama}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] font-mono text-gray border-t border-light-gray pt-3">
                <div>
                  <span className="text-[9px] uppercase tracking-widest mr-2">
                    Endpoint:
                  </span>
                  <code className="text-ink">{k.endpoint}</code>
                </div>
                <div className="md:text-right">
                  <a
                    href={k.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange hover:underline"
                  >
                    Kaynağa git →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t-2 border-ink pt-6">
          <h2 className="font-serif-display text-2xl mb-3">Veri sahipliği</h2>
          <p className="text-sm leading-relaxed max-w-3xl">
            Bu sayfada listelenen tüm verilerin sahipliği ilgili kamu kurumlarına
            aittir. nokta35 yalnızca bu kamuya açık verileri toplayıp tek sayfada
            görselleştirir. Verilerin doğruluğundan ve güncelliğinden kaynak
            kurum sorumludur.
          </p>
          <p className="text-sm mt-4">
            Proje hakkında detaylı bilgi için{" "}
            <Link href="/hakkinda" className="text-orange hover:underline">
              Hakkında
            </Link>{" "}
            sayfasına bakabilirsiniz.
          </p>
        </div>
      </section>
    </>
  )
}
