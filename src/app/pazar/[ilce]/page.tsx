import type { Metadata } from "next"
import Link from "next/link"
import { getPazarYerleri, GUN_ADLARI } from "@/lib/data"
import { slugify, istanbulGunu, IZMIR_ILCELERI } from "@/lib/utils"
import { breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

export const revalidate = 3600
export const dynamicParams = true

type Props = { params: { ilce: string } }

function slugToTitle(slug: string): string {
  const match = IZMIR_ILCELERI.find((i) => slugify(i) === slug)
  if (match) return match
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

async function getIlceData(ilceSlug: string) {
  let pazarlar: Awaited<ReturnType<typeof getPazarYerleri>> = []
  try { pazarlar = await getPazarYerleri() } catch { /* boş geç */ }
  const filtered = pazarlar.filter((p) => slugify(p.ILCE ?? "") === ilceSlug)
  const ilceAdi = filtered[0]?.ILCE ?? slugToTitle(ilceSlug)
  return { filtered, ilceAdi }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { filtered, ilceAdi } = await getIlceData(params.ilce)

  const baslik =
    filtered.length > 0
      ? `${ilceAdi} Semt Pazarları · Hangi Gün Nerede`
      : `${ilceAdi} Semt Pazarları · İzmir`
  const aciklama =
    filtered.length > 0
      ? `${ilceAdi} ilçesindeki ${filtered.length} semt pazarı: hangi gün kurulduğu, adresi ve konumu. İzmir ${ilceAdi} pazar yerleri.`
      : `İzmir ${ilceAdi} ilçesindeki semt pazarları, kurulduğu günler ve mahalle konumları. İBB CBS açık verisi.`

  return {
    title: baslik,
    description: aciklama,
    alternates: { canonical: `/pazar/${params.ilce}` },
    openGraph: { title: baslik, description: aciklama },
  }
}

export async function generateStaticParams() {
  const sluglar = new Set<string>(IZMIR_ILCELERI.map((i) => slugify(i)))
  try {
    const pazarlar = await getPazarYerleri()
    for (const p of pazarlar) {
      if (p.ILCE) sluglar.add(slugify(p.ILCE))
    }
  } catch { /* fallback'le yetin */ }
  return [...sluglar].filter(Boolean).map((ilce) => ({ ilce }))
}

export default async function PazarIlcePage({ params }: Props) {
  const { filtered, ilceAdi } = await getIlceData(params.ilce)

  const bugunIndex = istanbulGunu()
  const bugunPazarlar = filtered.filter((p) => p.gun === bugunIndex)

  const gunlukGrup = new Map<number, typeof filtered>()
  for (const p of filtered) {
    if (p.gun === undefined) continue
    const arr = gunlukGrup.get(p.gun) ?? []
    arr.push(p)
    gunlukGrup.set(p.gun, arr)
  }
  const gunler = Array.from(gunlukGrup.keys()).sort()

  const faqItems = [
    {
      question: `${ilceAdi}'da bugün pazar var mı?`,
      answer: bugunPazarlar.length > 0
        ? `Evet, bugün (${GUN_ADLARI[bugunIndex]}) ${ilceAdi} ilçesinde ${bugunPazarlar.length} semt pazarı kurulmaktadır: ${bugunPazarlar.map((p) => p.ADI || p.MAHALLE).join(", ")}.`
        : `Bugün (${GUN_ADLARI[bugunIndex]}) ${ilceAdi} ilçesinde pazar kurulmamaktadır. Haftanın diğer günlerindeki pazarlar için aşağıya bakabilirsiniz.`,
    },
    {
      question: `${ilceAdi} ilçesinde kaç semt pazarı var?`,
      answer: `${ilceAdi} ilçesinde toplam ${filtered.length} semt pazarı kayıtlıdır. Bu pazarlar haftanın ${gunler.length} farklı gününde kurulmaktadır.`,
    },
  ]

  const breadcrumb = breadcrumbJsonLd([
    { name: "Semt Pazarları", href: "/onemli-yerler" },
    { name: `${ilceAdi} Pazarları`, href: `/pazar/${params.ilce}` },
  ])

  return (
    <>
      <JsonLdScript data={[breadcrumb, faqJsonLd(faqItems)]} />

      <section className="container py-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
          <Link href="/onemli-yerler" className="hover:text-orange transition-colors">
            Semt Pazarları
          </Link>
          {" · "}
          {ilceAdi}
        </div>

        <header className="border-b-2 border-ink pb-3 mb-6 flex items-baseline justify-between">
          <h1 className="font-serif-display text-4xl md:text-5xl">
            {ilceAdi} <span className="text-orange">Pazarları</span>
          </h1>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
            {filtered.length} pazar · {gunler.length} gün
          </span>
        </header>

        {bugunPazarlar.length > 0 && (
          <div className="mb-8 p-4 border-2 border-orange bg-orange/5">
            <div className="text-[10px] uppercase tracking-widest text-orange mb-3">
              Bugün Açık ({GUN_ADLARI[bugunIndex]})
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bugunPazarlar.map((p, i) => (
                <div key={i} className="font-serif-display text-lg">
                  {p.ADI || p.MAHALLE}
                  {p.YOL && (
                    <div className="text-xs text-gray font-mono mt-1">{p.YOL}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="border-2 border-light-gray bg-cream p-8 text-center">
            <p className="text-sm text-gray uppercase tracking-widest">
              Bu ilçe için kayıtlı semt pazarı bulunamadı
            </p>
            <p className="text-[11px] text-gray mt-3 max-w-md mx-auto">
              İzmir Büyükşehir Belediyesi CBS sistemi {ilceAdi} ilçesi için pazar yeri
              kaydı paylaşmıyor olabilir. Diğer ilçelerin pazar listesi için ana sayfaya
              bakınız.
            </p>
          </div>
        )}

        <div className="space-y-6">
          {gunler.map((gunIndex) => {
            const gunPazarlar = gunlukGrup.get(gunIndex) ?? []
            const bugun = gunIndex === bugunIndex
            return (
              <div key={gunIndex}>
                <h2
                  className={`font-serif-display text-2xl mb-3 border-b pb-1 ${
                    bugun ? "text-orange border-orange" : "text-ink border-ink"
                  }`}
                >
                  {GUN_ADLARI[gunIndex]}{" "}
                  {bugun && (
                    <span className="text-[10px] uppercase tracking-widest">
                      · Bugün
                    </span>
                  )}
                  <span className="text-[10px] uppercase tracking-widest text-gray ml-2">
                    ({gunPazarlar.length})
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {gunPazarlar.map((p, i) => (
                    <article
                      key={i}
                      className="border-2 border-light-gray bg-cream p-4 text-xs"
                      itemScope
                      itemType="https://schema.org/LocalBusiness"
                    >
                      <h3
                        className="font-serif-display text-lg leading-tight"
                        itemProp="name"
                      >
                        {p.ADI || p.MAHALLE}
                      </h3>
                      {p.MAHALLE && p.ADI && p.MAHALLE !== p.ADI && (
                        <div className="text-[10px] uppercase tracking-widest text-gray mt-1">
                          {p.MAHALLE}
                        </div>
                      )}
                      {p.YOL && (
                        <div className="text-gray mt-1" itemProp="address">
                          {p.YOL}
                        </div>
                      )}
                      {p.BOYLAM && p.ENLEM && (
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${p.ENLEM},${p.BOYLAM}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-[9px] uppercase tracking-[0.2em] text-orange border border-orange px-2 py-1 hover:bg-orange hover:text-cream transition-colors"
                        >
                          Haritada Gör →
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-light-gray">
          <Link
            href="/onemli-yerler"
            className="text-[10px] uppercase tracking-[0.2em] text-orange hover:underline"
          >
            ← Tüm İzmir Semt Pazarları
          </Link>
        </div>
      </section>

      <FaqSection items={faqItems} />
    </>
  )
}
