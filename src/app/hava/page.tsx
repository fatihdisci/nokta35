import { getHavaDurumu, havaLabel } from "@/lib/hava"

export const metadata = {
  title: "Hava Durumu",
  description: "İzmir 30 ilçesi için anlık hava durumu, sıcaklık, rüzgar, nem.",
}
export const revalidate = 900

function fmtT(n: number | null | undefined) {
  if (n === null || n === undefined) return "—"
  return `${Math.round(n)}°`
}

function fmtNum(n: number | null | undefined, suf = "") {
  if (n === null || n === undefined) return "—"
  return `${Math.round(n)}${suf}`
}

export default async function Page() {
  const hava = await getHavaDurumu()
  const list = hava ?? []
  const sorted = [...list].sort((a, b) => a.ilce.localeCompare(b.ilce, "tr"))

  const sicakliklar = list
    .map((h) => h.sicaklik)
    .filter((s): s is number => s !== null)
  const ort = sicakliklar.length
    ? Math.round(sicakliklar.reduce((a, b) => a + b, 0) / sicakliklar.length)
    : null
  const min = sicakliklar.length ? Math.min(...sicakliklar) : null
  const max = sicakliklar.length ? Math.max(...sicakliklar) : null

  return (
    <section className="container py-8">
      <header className="border-b-2 border-ink pb-3 mb-6">
        <div className="flex items-baseline justify-between">
          <h1 className="font-serif-display text-4xl md:text-5xl">Hava Durumu</h1>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
            İzmir · 30 ilçe · Open-Meteo
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-4 text-xs">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray">
              Ort.
            </div>
            <div className="font-serif-display text-3xl text-orange">
              {fmtT(ort)}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray">
              En Düşük
            </div>
            <div className="font-serif-display text-3xl text-ink">{fmtT(min)}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray">
              En Yüksek
            </div>
            <div className="font-serif-display text-3xl text-ink">{fmtT(max)}</div>
          </div>
        </div>
      </header>

      {list.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-12 text-center">
          Veri alınamadı
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {sorted.map((h) => {
            const lbl = havaLabel(h.havaKodu)
            return (
              <article
                key={h.ilce}
                className="border-2 border-ink bg-cream p-4 flex flex-col gap-2"
              >
                <div className="flex items-baseline justify-between">
                  <h2 className="font-serif-display text-xl">{h.ilce}</h2>
                  <span className="text-2xl leading-none" aria-hidden>
                    {lbl.ikon}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif-display text-4xl text-orange leading-none">
                    {fmtT(h.sicaklik)}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray text-right max-w-[100px] leading-tight">
                    {lbl.ad}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[10px] uppercase tracking-widest text-gray pt-2 border-t border-light-gray">
                  <div>
                    <div>Hissed.</div>
                    <div className="font-mono text-ink normal-case">
                      {fmtT(h.hissedilen)}
                    </div>
                  </div>
                  <div>
                    <div>Rüzgar</div>
                    <div className="font-mono text-ink normal-case">
                      {fmtNum(h.ruzgar, " km/h")}
                    </div>
                  </div>
                  <div>
                    <div>Nem</div>
                    <div className="font-mono text-ink normal-case">
                      {fmtNum(h.nem, "%")}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
