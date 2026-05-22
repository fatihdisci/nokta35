import type { Metadata } from "next"
import { getOtoparklar, otoparkKapasite } from "@/lib/data"
import { breadcrumbJsonLd, datasetJsonLd, JsonLdScript, faqJsonLd } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

export const metadata: Metadata = {
  title: "İzmir Otopark Doluluk Oranları · İZELMAN & İZUM",
  description: "İzmir genelindeki tüm İZELMAN ve İZUM otoparklarının anlık boş ve dolu kapasiteleri, konumları, ücretli/ücretsiz durumları ve güncel doluluk yüzdeleri.",
  alternates: {
    canonical: "/otoparklar",
  },
}
export const revalidate = 30

function Bar({ pct }: { pct: number }) {
  const color = pct > 80 ? "bg-orange" : "bg-ink"
  return (
    <div className="h-2 bg-light-gray border border-ink/10 w-full">
      <div
        className={`h-full ${color}`}
        style={{ width: `${Math.min(100, pct)}%` }}
      />
    </div>
  )
}

export default async function OtoparklarPage() {
  const otoparklar = await getOtoparklar()

  const list = (otoparklar ?? [])
    .map((o) => {
      const { free, occupied, total } = otoparkKapasite(o)
      const pct = total > 0 ? (occupied / total) * 100 : 0
      return { o, free, occupied, total, pct }
    })
    .sort((a, b) => b.pct - a.pct)

  const totDolu = list.reduce((s, x) => s + x.occupied, 0)
  const totKap = list.reduce((s, x) => s + x.total, 0)
  const totBos = totKap - totDolu
  const ortDoluluk = totKap > 0 ? Math.round((totDolu / totKap) * 100) : 0

  const breadcrumb = breadcrumbJsonLd([{ name: "Otoparklar", href: "/otoparklar" }])
  const dataset = datasetJsonLd({
    name: "İzmir Otopark Kapasite ve Anlık Doluluk Veri Seti",
    description: "İzmir Büyükşehir Belediyesi İZELMAN ve İZUM otoparkları anlık doluluk oranları, boş/dolu yer sayıları, otopark kapasiteleri ve konum bilgileri.",
    url: "/otoparklar",
    keywords: ["İzmir otopark doluluk", "İZELMAN otopark", "İzmir ücretsiz otoparklar", "İzmir otopark kapasiteleri"],
  })

  const faqItems = [
    {
      question: "İzmir otoparklarının anlık ortalama doluluk oranı ne kadar?",
      answer: `İzmir genelindeki otoparkların güncel ortalama doluluk oranı %${ortDoluluk} olarak hesaplanmıştır. İzlenen toplam ${list.length} otoparkta şu anda ${totDolu} araç park etmiş durumdadır.`,
    },
    {
      question: "İzmir genelinde anlık kaç boş otopark yeri var?",
      answer: `Şu an İzmir genelinde İZELMAN ve İZUM otoparklarındaki toplam ${totKap} araçlık kapasitenin ${totBos} kadarı boştur ve park edilmeye hazırdır. Boş yer durumu verileri her 30 saniyede bir güncellenmektedir.`,
    },
    {
      question: "Hangi İzmir otoparklarında doluluk oranı en yüksektir?",
      answer: list.length > 0
        ? `Şu anda en yüksek doluluk oranına sahip otopark ${list[0]?.o?.name ?? "listemizin ilk sırasındaki otoparktır"} (%${Math.round(list[0]?.pct ?? 0)} doluluk). Diğer tüm otoparkların güncel doluluk sıralamasını ve boş yer durumlarını sayfamızdan inceleyebilirsiniz.`
        : "Otopark doluluk oranları anlık olarak güncellenmekte ve en doludan en boşa doğru sıralanmaktadır.",
    }
  ]

  const faqSchema = faqJsonLd(faqItems)

  return (
    <>
      <JsonLdScript data={[breadcrumb, dataset, faqSchema]} />
      <section className="container py-8">
        <header className="border-b-2 border-ink pb-3 mb-6">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif-display text-4xl md:text-5xl">Otoparklar</h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              Anlık · İZELMAN / İzum
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Toplam Otopark
              </div>
              <div className="font-serif-display text-3xl text-ink">{list.length}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Ort. Doluluk
              </div>
              <div className="font-serif-display text-3xl text-orange">
                %{ortDoluluk}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Toplam Kapasite
              </div>
              <div className="font-serif-display text-3xl text-ink">{totKap}</div>
            </div>
          </div>
        </header>

        {list.length === 0 ? (
          <div className="text-xs text-gray uppercase tracking-widest py-12 text-center">
            Veri alınamadı
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((x, i) => (
              <article
                key={`${x.o.name ?? i}`}
                className="border-2 border-ink bg-cream p-4 flex flex-col gap-3"
              >
                <div className="flex justify-between items-start gap-2">
                  <h2 className="font-serif-display text-lg leading-tight">
                    {x.o.name ?? "—"}
                  </h2>
                  <span
                    className={
                      "text-[10px] uppercase tracking-widest shrink-0 " +
                      (x.o.status === "Opened" ? "text-ink" : "text-orange")
                    }
                  >
                    {x.o.status === "Opened" ? "Açık" : x.o.status ?? "—"}
                  </span>
                </div>

                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray">
                    {x.occupied}/{x.total} dolu
                  </span>
                  <span className="text-orange">%{Math.round(x.pct)}</span>
                </div>
                <Bar pct={x.pct} />

                <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray pt-2 border-t border-light-gray">
                  <span>{x.o.provider ?? "—"}</span>
                  <span>{x.o.isPaid ? "Ücretli" : "Ücretsiz"}</span>
                </div>
                {x.o.lat && x.o.lng && (
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${x.o.lat},${x.o.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-[9px] uppercase tracking-[0.2em] text-orange border border-orange px-2 py-1 hover:bg-orange hover:text-cream transition-colors"
                  >
                    Haritada Gör →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
      <FaqSection items={faqItems} />
    </>
  )
}

