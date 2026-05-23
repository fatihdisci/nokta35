import type { Metadata } from "next"
import Link from "next/link"
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonLd"

export const metadata: Metadata = {
  title: "Hakkında · nokta35 Nedir?",
  description:
    "nokta35.com; İzmir Büyükşehir Belediyesi açık verilerini gerçek zamanlı görselleştiren bağımsız bir sivil teknoloji projesidir. Hiçbir resmi kurumla bağlantısı yoktur.",
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
            <strong>nokta35.com</strong>, İzmir Büyükşehir Belediyesi'nin ve bağlı
            kuruluşlarının (İZSU, İZELMAN, İZUM, ESHOT, İZTEK, İZBAN) kamuya açık
            verilerini tek bir sayfada gerçek zamanlı olarak görselleştiren bağımsız
            bir sivil teknoloji (civic tech) projesidir.
          </p>

          <p>
            Site, baraj doluluk oranları, nöbetçi eczaneler, otopark kapasiteleri,
            hava durumu, hava kalitesi, ESHOT &amp; İZBAN ulaşım bilgileri, semt
            pazarları, etkinlikler ve su kesintileri gibi şehir verilerini
            doğrudan resmi açık veri API'lerinden çekerek vatandaşların erişimine
            sunar.
          </p>

          <div className="border-2 border-orange bg-orange/5 p-5 my-8">
            <h2 className="font-serif-display text-xl mb-2">
              Önemli: nokta35 resmi bir kurum değildir
            </h2>
            <p className="text-xs leading-relaxed">
              nokta35; İzmir Büyükşehir Belediyesi veya herhangi bir resmi
              kurumla bağlantısı bulunmayan, tamamen bağımsız bir kişisel projedir.
              Verilerin sahipliği ve doğruluğu kaynak kurumlara aittir. Olası
              hatalardan veya gecikmelerden site sorumlu tutulamaz.
            </p>
          </div>

          <h2 className="font-serif-display text-2xl mt-10 mb-3 border-b border-ink pb-1">
            Amaç
          </h2>
          <p>
            İzmir'in açık veri ekosistemini daha erişilebilir kılmak; vatandaşların
            günlük hayatta ihtiyaç duyduğu şehir verilerine (nöbetçi eczane, hava,
            ulaşım, baraj durumu) tek noktadan, reklamsız bir arayüzle ulaşmasını
            sağlamak.
          </p>

          <h2 className="font-serif-display text-2xl mt-8 mb-3 border-b border-ink pb-1">
            Teknik altyapı
          </h2>
          <ul className="space-y-1 font-mono text-xs">
            <li>Frontend: Next.js 14 (App Router) + TypeScript</li>
            <li>Stil: Tailwind CSS</li>
            <li>Önbellek: Upstash Redis</li>
            <li>Harita: MapLibre GL JS (OpenStreetMap)</li>
            <li>Barındırma: Vercel</li>
            <li>Açık kaynak: <a href="https://github.com/fatihdisci/nokta35" target="_blank" rel="noopener" className="text-orange hover:underline">github.com/fatihdisci/nokta35</a></li>
          </ul>

          <h2 className="font-serif-display text-2xl mt-8 mb-3 border-b border-ink pb-1">
            Veri kaynakları
          </h2>
          <p>
            Sitedeki tüm veriler aşağıdaki kamu açık veri kaynaklarından alınır:
          </p>
          <ul className="space-y-1 text-xs font-mono">
            <li><a href="https://acikveri.bizizmir.com" target="_blank" rel="noopener" className="text-orange hover:underline">acikveri.bizizmir.com</a> — İBB açık veri portalı</li>
            <li><a href="https://openapi.izmir.bel.tr" target="_blank" rel="noopener" className="text-orange hover:underline">openapi.izmir.bel.tr</a> — İBB canlı API</li>
            <li>Open-Meteo — Hava durumu</li>
            <li>Google News — Haber akışı</li>
          </ul>
          <p className="mt-3">
            Kullanılan her API'nin detayı için{" "}
            <Link href="/veri-kaynaklari" className="text-orange hover:underline">
              Veri Kaynakları
            </Link>{" "}
            sayfasını inceleyebilirsiniz.
          </p>

          <h2 className="font-serif-display text-2xl mt-8 mb-3 border-b border-ink pb-1">
            Gelir modeli
          </h2>
          <p>
            Site Google AdSense reklamları ile ayakta kalır. Veriler ücretsizdir,
            ücretsiz kalacaktır. Reklam yerleşimi okumayı engellemeyecek şekilde
            tasarlanmıştır.
          </p>

          <h2 className="font-serif-display text-2xl mt-8 mb-3 border-b border-ink pb-1">
            İletişim
          </h2>
          <p>
            Geri bildirim, hata raporu veya iş birliği için GitHub repo'su
            üzerinden iletişime geçebilirsiniz:{" "}
            <a
              href="https://github.com/fatihdisci/nokta35/issues"
              target="_blank"
              rel="noopener"
              className="text-orange hover:underline"
            >
              github.com/fatihdisci/nokta35/issues
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
