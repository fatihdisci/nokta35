import type { Metadata } from "next"
import { getEtkinlikler } from "@/lib/data"
import { EtkinlikList } from "@/components/widgets/EtkinlikList"
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonLd"

export const metadata: Metadata = {
  title: "İzmir Etkinlikler · Kültür & Sanat Takvimi · nokta35",
  description: "İzmir'deki güncel kültür, sanat ve eğlence etkinlikleri. Konserler, tiyatrolar, sergiler ve daha fazlası İzmir Büyükşehir Belediyesi etkinlik takviminden.",
  alternates: {
    canonical: "/etkinlikler",
  },
}

export const revalidate = 3600

export default async function EtkinliklerPage() {
  const etkinlikler = await getEtkinlikler()
  const turler = [...new Set(etkinlikler.map((e) => e.EtkinlikTuru).filter(Boolean) as string[])].sort()
  const ilceler = [...new Set(etkinlikler.map((e) => e.ILCE).filter(Boolean) as string[])].sort()

  const breadcrumb = breadcrumbJsonLd([{ name: "Etkinlikler", href: "/etkinlikler" }])

  return (
    <>
      <JsonLdScript data={breadcrumb} />
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
    </>
  )
}
