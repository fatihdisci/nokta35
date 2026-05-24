import type { Metadata } from "next"
import Link from "next/link"
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonLd"

export const metadata: Metadata = {
  title: "Veri Kaynakları",
  description:
    "nokta35'in kullandığı açık veri kaynakları ve her veri türünün güncellenme sıklığı.",
  alternates: { canonical: "/veri-kaynaklari" },
}

type Kaynak = {
  baslik: string
  saglayici: string
  guncelleme: string
  aciklama: string
}

const KAYNAKLAR: Kaynak[] = [
  {
    baslik: "Baraj Doluluk",
    saglayici: "İZSU",
    guncelleme: "saatlik",
    aciklama: "İzmir barajlarının anlık doluluk oranı, su yüksekliği ve hacim verileri.",
  },
  {
    baslik: "Su Kesintileri",
    saglayici: "İZSU",
    guncelleme: "saatlik",
    aciklama: "Aktif arıza ve planlı su kesintileri.",
  },
  {
    baslik: "Nöbetçi Eczaneler",
    saglayici: "İBB",
    guncelleme: "30 dakikada bir",
    aciklama: "Bugünün nöbetçi eczaneleri, adresleri ve telefonları.",
  },
  {
    baslik: "Ulaşım",
    saglayici: "ESHOT / İZBAN",
    guncelleme: "anlık",
    aciklama: "Otobüs, banliyö treni hat ve sefer bilgileri.",
  },
  {
    baslik: "Semt Pazarları",
    saglayici: "İBB CBS",
    guncelleme: "günlük",
    aciklama: "Semt pazarlarının ilçe, mahalle ve kuruldukları gün bilgileri.",
  },
  {
    baslik: "Kültür Sanat Etkinlikleri",
    saglayici: "İBB",
    guncelleme: "günlük",
    aciklama: "Kültür sanat etkinliklerinin adı, mekanı ve tarihi.",
  },
  {
    baslik: "Hava Durumu",
    saglayici: "Açık hava durumu servisi",
    guncelleme: "15 dakikada bir",
    aciklama: "İzmir ilçeleri için sıcaklık, yağış ve rüzgar bilgileri.",
  },
  {
    baslik: "Hava Kalitesi",
    saglayici: "Çevre Bakanlığı",
    guncelleme: "15 dakikada bir",
    aciklama: "İzmir istasyonlarındaki hava kalitesi ölçümleri.",
  },
  {
    baslik: "Haberler",
    saglayici: "Google News",
    guncelleme: "30 dakikada bir",
    aciklama: "İzmir'le ilgili güncel haberler.",
  },
]

export default function VeriKaynaklariPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Veri Kaynakları", href: "/veri-kaynaklari" },
  ])

  return (
    <>
      <JsonLdScript data={breadcrumb} />

      <section className="container py-12">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
          Veri Kaynakları
        </div>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[0.95] text-ink">
          Veriler nereden <br />
          <span className="text-orange">geliyor?</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-gray uppercase tracking-wide leading-relaxed">
          Sitedeki tüm veriler resmi kurumların kamuya açık veri kanallarından
          otomatik çekilir.
        </p>
      </section>

      <section className="container pb-16">
        <div className="space-y-4">
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

              <p className="text-sm leading-relaxed">{k.aciklama}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t-2 border-ink pt-6">
          <h2 className="font-serif-display text-2xl mb-3">Veri sahipliği</h2>
          <p className="text-sm leading-relaxed max-w-3xl">
            Bu sayfada listelenen tüm verilerin sahipliği ilgili kamu kurumlarına
            aittir. nokta35 yalnızca bu açık verileri toplayıp tek sayfada
            görselleştirir.
          </p>
          <p className="text-sm mt-4">
            Proje hakkında daha fazla bilgi için{" "}
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
