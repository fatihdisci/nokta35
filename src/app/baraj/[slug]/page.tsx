import type { Metadata } from "next"
import Link from "next/link"
import { getBarajlar } from "@/lib/data"
import { slugify } from "@/lib/utils"
import { breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"
import { notFound } from "next/navigation"

export const revalidate = 3600
export const dynamicParams = true

type Props = { params: { slug: string } }

function toNum(v: unknown): number {
  if (typeof v === "number") return v
  if (typeof v === "string") return parseFloat(v.replace(",", "."))
  return NaN
}

function fmtNum(n: number, digits = 0): string {
  if (Number.isNaN(n)) return "—"
  return n.toLocaleString("tr-TR", { maximumFractionDigits: digits })
}

function fmtHacim(m3?: number | string): string {
  const n = toNum(m3)
  if (Number.isNaN(n)) return "—"
  if (n >= 1_000_000) return `${(n / 1_000_000).toLocaleString("tr-TR", { maximumFractionDigits: 2 })} milyon m³`
  return `${fmtNum(n)} m³`
}

async function getBarajData(slug: string) {
  let barajlar: Awaited<ReturnType<typeof getBarajlar>> = []
  try { barajlar = (await getBarajlar()) ?? [] } catch { /* boş geç */ }
  const baraj = barajlar.find((b) => slugify(b.BarajKuyuAdi ?? "") === slug)
  return { baraj, hepsi: barajlar }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { baraj } = await getBarajData(params.slug)
  if (!baraj) return { title: "Baraj Doluluk", robots: { index: false } }

  const ad = baraj.BarajKuyuAdi!
  const doluluk = Math.round(toNum(baraj.DolulukOrani))
  const baslik = `${ad} Doluluk Oranı · ${Number.isNaN(doluluk) ? "Güncel" : `%${doluluk}`}`
  const aciklama = `${ad} güncel doluluk oranı, su yüksekliği, kapasite ve kullanılabilir su hacmi. İZSU canlı verisi.`

  return {
    title: baslik,
    description: aciklama,
    alternates: { canonical: `/baraj/${params.slug}` },
    openGraph: { title: baslik, description: aciklama },
  }
}

export async function generateStaticParams() {
  try {
    const barajlar = await getBarajlar()
    return (barajlar ?? [])
      .filter((b) => b.BarajKuyuAdi)
      .map((b) => ({ slug: slugify(b.BarajKuyuAdi!) }))
  } catch {
    return []
  }
}

function Bar({ pct }: { pct: number }) {
  const renk = pct < 25 ? "bg-orange" : pct < 50 ? "bg-orange/70" : "bg-ink"
  return (
    <div className="h-3 bg-light-gray border border-ink/20 w-full">
      <div
        className={`h-full transition-all ${renk}`}
        style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
      />
    </div>
  )
}

export default async function BarajDetayPage({ params }: Props) {
  const { baraj, hepsi } = await getBarajData(params.slug)
  if (!baraj) notFound()

  const ad = baraj.BarajKuyuAdi!
  const doluluk = toNum(baraj.DolulukOrani)
  const suYuksek = toNum(baraj.SuYuksekligi)
  const maxKap = toNum(baraj.MaksimumSuKapasitesi)
  const mevcutHacim = toNum(baraj.KullanılabilirGolSuHacmi)
  const lat = toNum(baraj.Enlem)
  const lon = toNum(baraj.Boylam)

  const dolulukYuvarlak = Math.round(doluluk)

  const otherBarajlar = (hepsi ?? []).filter(
    (b) => slugify(b.BarajKuyuAdi ?? "") !== params.slug,
  )

  const faqItems = [
    {
      question: `${ad}'nın güncel doluluk oranı nedir?`,
      answer: Number.isNaN(doluluk)
        ? `${ad} için anlık doluluk verisi şu an İZSU sisteminden alınamıyor. Veriler her saat güncellenmektedir.`
        : `${ad}'nın güncel doluluk oranı %${dolulukYuvarlak} olarak ölçülmüştür. Veri İZSU Genel Müdürlüğü canlı API'sinden alınmaktadır.`,
    },
    {
      question: `${ad} doluluk verisi nereden alınıyor?`,
      answer: `Bu sayfadaki tüm sayısal değerler doğrudan İzmir Büyükşehir Belediyesi açık veri sisteminin (openapi.izmir.bel.tr) İZSU baraj durumu endpoint'inden alınmaktadır. Veriler saat başı güncellenir.`,
    },
    {
      question: "İzmir'in diğer barajlarının doluluk oranlarını nereden görebilirim?",
      answer: "Tüm İzmir barajlarının (Tahtalı, Balçova, Ürkmez, Gördes, Alaçatı Kutlu Aktaş) güncel doluluk listesi /su-baraj sayfasında yer almaktadır.",
    },
  ]

  const breadcrumb = breadcrumbJsonLd([
    { name: "Su & Baraj", href: "/su-baraj" },
    { name: ad, href: `/baraj/${params.slug}` },
  ])

  return (
    <>
      <JsonLdScript data={[breadcrumb, faqJsonLd(faqItems)]} />

      <section className="container py-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-2">
          <Link href="/su-baraj" className="hover:text-orange transition-colors">
            Su &amp; Baraj
          </Link>
          {" · "}
          {ad}
        </div>

        <header className="border-b-2 border-ink pb-3 mb-8 flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="font-serif-display text-4xl md:text-5xl">{ad}</h1>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
            İZSU canlı · saatlik
          </span>
        </header>

        {/* Doluluk panel */}
        <div className="border-2 border-ink bg-cream p-6 mb-8">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              Doluluk Oranı
            </span>
            <span className="font-serif-display text-5xl text-orange">
              {Number.isNaN(doluluk) ? "—" : `%${dolulukYuvarlak}`}
            </span>
          </div>
          {!Number.isNaN(doluluk) && <Bar pct={doluluk} />}
        </div>

        {/* Diğer ölçümler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border-2 border-light-gray bg-cream p-4">
            <div className="text-[10px] uppercase tracking-widest text-gray mb-2">
              Su Yüksekliği
            </div>
            <div className="font-serif-display text-3xl text-ink">
              {Number.isNaN(suYuksek) ? "—" : `${fmtNum(suYuksek, 2)} m`}
            </div>
          </div>
          <div className="border-2 border-light-gray bg-cream p-4">
            <div className="text-[10px] uppercase tracking-widest text-gray mb-2">
              Mevcut Hacim
            </div>
            <div className="font-serif-display text-2xl text-ink">
              {fmtHacim(mevcutHacim)}
            </div>
          </div>
          <div className="border-2 border-light-gray bg-cream p-4">
            <div className="text-[10px] uppercase tracking-widest text-gray mb-2">
              Maksimum Kapasite
            </div>
            <div className="font-serif-display text-2xl text-ink">
              {fmtHacim(maxKap)}
            </div>
          </div>
        </div>

        {/* Konum + Harita */}
        {!Number.isNaN(lat) && !Number.isNaN(lon) && lat !== 0 && (
          <div className="mb-8">
            <h2 className="font-serif-display text-2xl mb-3 border-b border-ink pb-1">
              Konum
            </h2>
            <div className="text-xs text-gray font-mono mb-3">
              {fmtNum(lat, 4)}°, {fmtNum(lon, 4)}°
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] uppercase tracking-[0.2em] text-orange border-2 border-orange px-4 py-2 hover:bg-orange hover:text-cream transition-colors"
            >
              Google Maps'te Aç →
            </a>
          </div>
        )}

        {/* Ölçü birimleri açıklaması (jenerik, kaynaklı) */}
        <div className="border-t border-light-gray pt-6 mb-8">
          <h2 className="font-serif-display text-2xl mb-3">Veri ne anlama geliyor?</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <dt className="font-mono uppercase tracking-widest text-gray mb-1">
                Doluluk oranı
              </dt>
              <dd className="leading-relaxed">
                Mevcut su hacminin maksimum kapasiteye oranı. Düşük değerler
                (genelde %25 altı) kuraklık riskinin işaretidir.
              </dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-widest text-gray mb-1">
                Su yüksekliği
              </dt>
              <dd className="leading-relaxed">
                Baraj göl tabanından su yüzeyine kadar olan dikey yükseklik (metre).
              </dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-widest text-gray mb-1">
                Kullanılabilir hacim
              </dt>
              <dd className="leading-relaxed">
                Şu anda barajda biriken ve kullanıma hazır olan toplam su hacmi.
              </dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-widest text-gray mb-1">
                Maksimum kapasite
              </dt>
              <dd className="leading-relaxed">
                Barajın taşıyabileceği tasarım üst sınırı.
              </dd>
            </div>
          </dl>
        </div>

        {/* Diğer barajlar - internal linking */}
        {otherBarajlar.length > 0 && (
          <div className="border-t border-light-gray pt-6">
            <h2 className="font-serif-display text-2xl mb-3">Diğer Barajlar</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {otherBarajlar.map((b) => {
                const d = toNum(b.DolulukOrani)
                const s = slugify(b.BarajKuyuAdi ?? "")
                return (
                  <li key={s}>
                    <Link
                      href={`/baraj/${s}`}
                      className="flex justify-between border border-light-gray hover:border-ink p-3 transition-colors"
                    >
                      <span>{b.BarajKuyuAdi}</span>
                      <span className="font-mono text-orange">
                        {Number.isNaN(d) ? "—" : `%${Math.round(d)}`}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        <footer className="mt-10 pt-6 border-t border-light-gray text-[10px] uppercase tracking-[0.2em] text-gray">
          Kaynak: İZSU Genel Müdürlüğü · openapi.izmir.bel.tr/api/izsu/barajdurum
        </footer>
      </section>

      <FaqSection items={faqItems} />
    </>
  )
}
