import type { Metadata } from "next"
import Link from "next/link"
import { getEczaneler } from "@/lib/data"
import { parseCoord } from "@/lib/api"
import { slugify, IZMIR_ILCELERI } from "@/lib/utils"
import { breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

function slugToTitle(slug: string): string {
  // İzmir ilçe isimleri için doğru Türkçe karakterli karşılığını bul
  const match = IZMIR_ILCELERI.find((i) => slugify(i) === slug)
  if (match) return match
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export const revalidate = 1800
export const dynamicParams = true

type Props = { params: { bolge: string } }

async function getBolgeData(bolgeSlug: string) {
  let tum: Awaited<ReturnType<typeof getEczaneler>> = []
  try { tum = (await getEczaneler()) ?? [] } catch { /* boş geç */ }
  const filtered = tum.filter((e) => slugify(e.Bolge ?? "") === bolgeSlug)
  const bolgeAdi = filtered[0]?.Bolge ?? slugToTitle(bolgeSlug)
  return { filtered, bolgeAdi }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { filtered, bolgeAdi } = await getBolgeData(params.bolge)

  const baslik =
    filtered.length > 0
      ? `${bolgeAdi} Nöbetçi Eczane · Bugün ${filtered.length} Eczane`
      : `${bolgeAdi} Nöbetçi Eczane · Bugün`
  const aciklama =
    filtered.length > 0
      ? `${bolgeAdi} bölgesinde bugün nöbet tutan ${filtered.length} eczane. Adres, telefon ve harita bilgileriyle İzmir ${bolgeAdi} nöbetçi eczane listesi.`
      : `İzmir ${bolgeAdi} bölgesindeki nöbetçi eczane listesi — adres, telefon ve harita konumları ile bugün açık eczaneler.`

  return {
    title: baslik,
    description: aciklama,
    alternates: { canonical: `/eczane/${params.bolge}` },
    openGraph: { title: baslik, description: aciklama },
  }
}

export async function generateStaticParams() {
  const sluglar = new Set<string>(IZMIR_ILCELERI.map((i) => slugify(i)))
  try {
    const eczaneler = await getEczaneler()
    for (const e of eczaneler ?? []) {
      if (e.Bolge) sluglar.add(slugify(e.Bolge))
    }
  } catch { /* fallback'le yetin */ }
  return [...sluglar].filter(Boolean).map((bolge) => ({ bolge }))
}

export default async function EczaneBolgePage({ params }: Props) {
  const { filtered, bolgeAdi } = await getBolgeData(params.bolge)

  const faqItems = [
    {
      question: `${bolgeAdi} bölgesinde bugün kaç nöbetçi eczane var?`,
      answer:
        filtered.length > 0
          ? `Bugün ${bolgeAdi} bölgesinde ${filtered.length} nöbetçi eczane hizmet vermektedir. ${filtered.map((e) => e.Adi).slice(0, 3).join(", ")} bu eczaneler arasındadır.`
          : `${bolgeAdi} bölgesinde bugün için listelenmiş nöbetçi eczane bulunmuyor. Liste her 30 dakikada bir İzmir Büyükşehir Belediyesi açık verisinden güncellenir.`,
    },
    {
      question: `${bolgeAdi} nöbetçi eczane bilgileri güncel mi?`,
      answer: "Evet, veriler İzmir Büyükşehir Belediyesi açık veri sisteminden her 30 dakikada bir otomatik güncellenmektedir.",
    },
  ]

  const breadcrumb = breadcrumbJsonLd([
    { name: "Sağlık", href: "/saglik" },
    { name: `${bolgeAdi} Nöbetçi Eczane`, href: `/eczane/${params.bolge}` },
  ])

  return (
    <>
      <JsonLdScript data={[breadcrumb, faqJsonLd(faqItems)]} />

      <section className="container py-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
          <Link href="/saglik" className="hover:text-orange transition-colors">Nöbetçi Eczane</Link>
          {" · "}
          {bolgeAdi}
        </div>

        <header className="border-b-2 border-ink pb-3 mb-6 flex items-baseline justify-between">
          <h1 className="font-serif-display text-4xl md:text-5xl">
            {bolgeAdi}
          </h1>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
            {filtered.length} nöbetçi eczane
          </span>
        </header>

        {filtered.length === 0 ? (
          <div className="text-xs text-gray uppercase tracking-widest py-12 text-center">
            Bu bölgede bugün nöbetçi eczane bulunmuyor
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((e, i) => {
              const lat = parseCoord(e.LokasyonX)
              const lon = parseCoord(e.LokasyonY)
              const haritaLink =
                !isNaN(lat) && !isNaN(lon) && lat !== 0
                  ? `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`
                  : null

              return (
                <article
                  key={`${bolgeAdi}-${i}`}
                  className="border-2 border-ink bg-cream p-4 flex flex-col gap-2 text-xs"
                  itemScope
                  itemType="https://schema.org/Pharmacy"
                >
                  {e.BolgeAciklama && (
                    <div className="text-[10px] uppercase tracking-widest text-orange">
                      {e.BolgeAciklama}
                    </div>
                  )}
                  <h2
                    className="font-serif-display text-lg leading-tight"
                    itemProp="name"
                  >
                    {e.Adi ?? "—"}
                  </h2>
                  {e.Adres && (
                    <address
                      className="text-gray leading-snug not-italic"
                      itemProp="address"
                    >
                      {e.Adres}
                    </address>
                  )}
                  {e.Telefon && (
                    <a
                      href={`tel:${e.Telefon}`}
                      className="font-mono text-ink hover:text-orange"
                      itemProp="telephone"
                    >
                      {e.Telefon}
                    </a>
                  )}
                  {haritaLink && (
                    <a
                      href={haritaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto self-start text-[9px] uppercase tracking-[0.2em] text-orange border border-orange px-2 py-1 hover:bg-orange hover:text-cream transition-colors"
                    >
                      Haritada Gör →
                    </a>
                  )}
                </article>
              )
            })}
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-light-gray">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray mb-4">
            Diğer bölgeler için →{" "}
            <Link href="/saglik" className="text-orange hover:underline">
              Tüm nöbetçi eczaneler
            </Link>
          </p>
        </div>
      </section>

      <FaqSection items={faqItems} />
    </>
  )
}
