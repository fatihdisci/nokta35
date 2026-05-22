import type { Metadata } from "next"
import { getBarajlar, getKesintiler } from "@/lib/data"
import { breadcrumbJsonLd, datasetJsonLd, JsonLdScript } from "@/lib/jsonLd"

export const metadata: Metadata = {
  title: "İzmir Baraj Doluluk Oranları ve Su Kesintileri · nokta35",
  description: "İzmir barajlarının (Tahtalı, Balçova, Ürkmez, Gördes) anlık doluluk yüzdeleri, su yükseklikleri, aktif kapasiteleri ve İZSU güncel su kesintileri listesi.",
  alternates: {
    canonical: "/su-baraj",
  },
}
export const revalidate = 600

function toNum(v: unknown): number {
  if (typeof v === "number") return v
  if (typeof v === "string") return parseFloat(v.replace(",", "."))
  return NaN
}

function fmtM3(m3?: number | string) {
  const n = toNum(m3)
  if (Number.isNaN(n)) return "—"
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} m³ × 10⁶`
  return n.toLocaleString("tr-TR")
}

export default async function Page() {
  const [barajlar, kesintiler] = await Promise.all([
    getBarajlar(),
    getKesintiler(),
  ])

  const ortDoluluk =
    barajlar && barajlar.length
      ? Math.round(
          barajlar.reduce((s, b) => s + (toNum(b.DolulukOrani) || 0), 0) /
            barajlar.length,
        )
      : 0

  const breadcrumb = breadcrumbJsonLd([{ name: "Su & Baraj", href: "/su-baraj" }])
  const dataset = datasetJsonLd({
    name: "İzmir Baraj Doluluk Oranları ve Aktif Su Kesintileri Veri Seti",
    description: "İzmir barajları (Tahtalı, Balçova, Ürkmez, Gördes, Alaçatı Kutlu Aktaş) anlık doluluk yüzdeleri, su hacimleri ve İZSU Genel Müdürlüğü tarafından bildirilen güncel ilçe bazlı su kesintileri.",
    url: "/su-baraj",
    keywords: ["İzmir baraj doluluk", "İzmir su kesintileri", "İZSU kesinti sorgulama", "İzmir baraj su seviyesi", "Tahtalı barajı doluluk"],
  })

  return (
    <>
      <JsonLdScript data={[breadcrumb, dataset]} />
      <section className="container py-8">
        <header className="border-b-2 border-ink pb-3 mb-6">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif-display text-4xl md:text-5xl">Barajlar</h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              İZSU · canlı
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Toplam Baraj
              </div>
              <div className="font-serif-display text-3xl text-ink">
                {barajlar?.length ?? 0}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray">
                Ort. Doluluk
              </div>
              <div className="font-serif-display text-3xl text-orange">
                %{ortDoluluk}
              </div>
            </div>
          </div>
        </header>

        {!barajlar || barajlar.length === 0 ? (
          <div className="text-xs text-gray uppercase tracking-widest py-8 text-center">
            Veri alınamadı
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {barajlar.map((b, i) => {
              const d = toNum(b.DolulukOrani)
              const pct = Number.isNaN(d) ? 0 : Math.max(0, Math.min(100, d))
              const color =
                pct < 25 ? "bg-orange" : pct < 50 ? "bg-orange/70" : "bg-ink"
              return (
                <article
                  key={b.BarajKuyuId ?? i}
                  className="border-2 border-ink bg-cream p-5 flex flex-col gap-3"
                >
                  <div className="flex justify-between items-baseline">
                    <h2 className="font-serif-display text-2xl leading-tight">
                      {b.BarajKuyuAdi ?? "—"}
                    </h2>
                    <span className="font-mono text-2xl text-orange">
                      %{Number.isNaN(d) ? "—" : Math.round(d)}
                    </span>
                  </div>
                  <div className="h-3 bg-light-gray border border-ink/10">
                    <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] uppercase tracking-widest text-gray pt-2 border-t border-light-gray">
                    <div>
                      <div>Yükseklik</div>
                      <div className="font-mono text-ink normal-case">
                        {toNum(b.SuYuksekligi).toFixed(2)} m
                      </div>
                    </div>
                    <div>
                      <div>Maks. Kap.</div>
                      <div className="font-mono text-ink normal-case">
                        {fmtM3(b.MaksimumSuKapasitesi)}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>

      <section className="container py-8">
        <header className="border-b-2 border-ink pb-3 mb-6 flex items-baseline justify-between">
          <h2 className="font-serif-display text-4xl md:text-5xl">
            Su Kesintileri
          </h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-orange">
            {kesintiler ? `${kesintiler.length} aktif` : "—"}
          </span>
        </header>

        {!kesintiler || kesintiler.length === 0 ? (
          <div className="text-xs uppercase tracking-widest text-gray py-8 text-center">
            {kesintiler === null ? "Veri alınamadı" : "Aktif kesinti yok"}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kesintiler.map((k, i) => (
              <article
                key={i}
                className="border-2 border-orange bg-orange/5 p-5 space-y-2"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <div className="font-mono uppercase tracking-wide text-ink">
                    {k.IlceAdi ?? "—"}
                  </div>
                  {k.Tip && (
                    <span className="text-[10px] uppercase tracking-widest text-orange whitespace-nowrap">
                      {k.Tip}
                    </span>
                  )}
                </div>
                {k.Mahalleler && (
                  <div className="text-xs text-gray">{k.Mahalleler}</div>
                )}
                {k.KesintiSuresi && (
                  <div className="text-xs text-orange font-mono leading-snug">
                    {k.KesintiSuresi}
                  </div>
                )}
                {k.Aciklama && (
                  <div className="text-xs text-gray leading-snug">
                    {k.Aciklama}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
