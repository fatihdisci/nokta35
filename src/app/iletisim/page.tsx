import type { Metadata } from "next"
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonLd"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "İletişim · nokta35",
  description:
    "nokta35.com ile iletişime geçin. Veri hatası bildirimi, öneri veya işbirliği için mesaj gönderebilirsiniz.",
  alternates: { canonical: "/iletisim" },
}

export default function IletisimPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "İletişim", href: "/iletisim" }])

  return (
    <>
      <JsonLdScript data={breadcrumb} />

      <section className="container py-12">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
          İletişim
        </div>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[0.95] text-ink">
          Bize <span className="text-orange">ulaşın</span>
        </h1>

        <div className="mt-10 max-w-2xl">
          <p className="text-sm leading-relaxed mb-8">
            Veri hatası bildirimi, öneri veya işbirliği için formu
            kullanabilirsiniz. Mesajınız e-posta uygulamanız aracılığıyla
            iletilir.
          </p>

          <ContactForm />

          <div className="mt-12 border-t border-light-gray pt-6 text-xs text-gray space-y-1">
            <p>
              <strong className="text-ink">nokta35.com</strong> — bağımsız
              sivil teknoloji projesi
            </p>
            <p>İzmir, Türkiye</p>
            <p>
              Veri kaynaklarımız hakkında:{" "}
              <a href="/veri-kaynaklari" className="text-orange hover:underline">
                /veri-kaynaklari
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
