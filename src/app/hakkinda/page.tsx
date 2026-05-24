import type { Metadata } from "next"
import Link from "next/link"
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonLd"

export const metadata: Metadata = {
  title: "Hakkında · nokta35 Nedir?",
  description:
    "nokta35.com; İzmir'in açık verilerini gerçek zamanlı görselleştiren bağımsız bir sivil teknoloji projesidir. Hiçbir resmi kurumla bağlantısı yoktur.",
  alternates: { canonical: "/hakkinda" },
}

export default function HakkindaPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Hakkında", href: "/hakkinda" }])

  return (
    <>
      <JsonLdScript data={breadcrumb} />

      <section className="container py-12">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
          Hakkında
        </div>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[0.95] text-ink">
          nokta35 <span className="text-orange">nedir?</span>
        </h1>

        <div className="mt-8 max-w-3xl space-y-6 text-sm leading-relaxed">
          <p>
            <strong>nokta35.com</strong>, İzmir'le ilgili güncel şehir verilerini
            tek bir sayfada toplayan bağımsız bir projedir. Baraj doluluk, nöbetçi
            eczane, hava durumu, hava kalitesi, ulaşım ve etkinlik bilgileri
            gibi günlük hayatta ihtiyaç duyulan verileri sade bir arayüzle sunar.
          </p>

          <div className="border-2 border-orange bg-orange/5 p-5 my-8">
            <h2 className="font-serif-display text-xl mb-2">
              nokta35 resmi bir kurum değildir
            </h2>
            <p className="text-xs leading-relaxed">
              nokta35; İzmir Büyükşehir Belediyesi veya herhangi bir resmi
              kurumla bağlantısı bulunmayan tamamen bağımsız bir projedir.
              Verilerin sahipliği ve doğruluğu kaynak kurumlara aittir.
            </p>
          </div>

          <h2 className="font-serif-display text-2xl mt-10 mb-3 border-b border-ink pb-1">
            Amaç
          </h2>
          <p>
            İzmir'in günlük hayatta sık ihtiyaç duyulan şehir verilerine
            (nöbetçi eczane, hava, ulaşım, baraj durumu) tek noktadan kolayca
            ulaşılmasını sağlamak.
          </p>

          <h2 className="font-serif-display text-2xl mt-8 mb-3 border-b border-ink pb-1">
            Veriler nereden geliyor?
          </h2>
          <p>
            Sitedeki tüm veriler, İzmir Büyükşehir Belediyesi ve bağlı
            kuruluşların kamuya açtığı veri sistemleri ile ulusal kaynaklardan
            otomatik olarak çekilir.{" "}
            <Link href="/veri-kaynaklari" className="text-orange hover:underline">
              Veri kaynakları
            </Link>{" "}
            sayfasından detayları görebilirsiniz.
          </p>
        </div>
      </section>
    </>
  )
}
