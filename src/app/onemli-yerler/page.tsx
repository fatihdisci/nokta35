import type { Metadata } from "next"
import { getPazarYerleri, GUN_ADLARI } from "@/lib/data"
import { PazarList } from "@/components/widgets/PazarList"
import { JsonLdScript } from "@/lib/jsonLd"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Semt Pazarları · İzmir",
  description:
    "İzmir'deki tüm semt pazarları: hangi gün nerede pazar kurulur, ilçe ve güne göre filtrele, haritada bul.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "İzmir Semt Pazarları",
  description: "İzmir Büyükşehir Belediyesi açık verilerinden derlenen semt pazarı konumları",
  url: "https://nokta35.com/onemli-yerler",
}

export default async function OnemliYerlerPage() {
  const pazarlar = await getPazarYerleri()
  const bugunIndex = new Date().getDay()
  const bugunAcik = pazarlar.filter((p) => p.gun === bugunIndex)

  const gunSayilari: Record<number, number> = {}
  pazarlar.forEach((p) => {
    if (p.gun !== undefined) gunSayilari[p.gun] = (gunSayilari[p.gun] ?? 0) + 1
  })

  return (
    <>
      <JsonLdScript data={jsonLd} />

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
