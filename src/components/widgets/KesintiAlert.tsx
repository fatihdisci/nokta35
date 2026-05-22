import { getKesintiler } from "@/lib/data"

export async function KesintiAlert() {
  const kesintiler = await getKesintiler()
  const list = kesintiler?.slice(0, 4) ?? []

  if (!kesintiler) {
    return (
      <section className="border-2 border-ink bg-cream p-5">
        <h2 className="font-serif-display text-2xl mb-2">Su Kesintisi</h2>
        <div className="text-xs text-gray uppercase tracking-widest">
          Veri alınamadı
        </div>
      </section>
    )
  }

  if (kesintiler.length === 0) {
    return (
      <section className="border-2 border-ink bg-cream p-5">
        <h2 className="font-serif-display text-2xl mb-2">Su Kesintisi</h2>
        <div className="text-xs uppercase tracking-widest text-gray">
          Aktif kesinti yok ·{" "}
          <span className="text-ink">İZSU normal akış</span>
        </div>
      </section>
    )
  }

  return (
    <section className="border-2 border-orange bg-orange/10 p-5">
      <header className="flex items-baseline justify-between mb-3">
        <h2 className="font-serif-display text-2xl text-ink">Su Kesintisi</h2>
        <span className="text-[10px] uppercase tracking-widest text-orange font-bold">
          {kesintiler.length} aktif
        </span>
      </header>
      <ul className="space-y-3 text-xs">
        {list.map((k, i) => (
          <li key={i} className="border-l-2 border-ink pl-3">
            <div className="uppercase tracking-wide font-mono text-ink">
              {k.IlceAdi ?? "—"}
              {k.Mahalleler && (
                <span className="text-gray normal-case tracking-normal">
                  {" · "}
                  {k.Mahalleler}
                </span>
              )}
            </div>
            {k.KesintiSuresi && (
              <div className="text-orange font-mono mt-1 text-[11px] leading-snug">
                {k.KesintiSuresi}
              </div>
            )}
            {k.Aciklama && (
              <div className="text-gray mt-1 leading-snug normal-case tracking-normal">
                {k.Aciklama}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
