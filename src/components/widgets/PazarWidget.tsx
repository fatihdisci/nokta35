import { getPazarYerleri, GUN_ADLARI } from "@/lib/data"
import { istanbulGunu } from "@/lib/utils"
import { WidgetMore } from "./WidgetMore"

const LIMIT = 5

export async function PazarWidget() {
  const bugun = istanbulGunu()
  const pazarlar = await getPazarYerleri()
  const bugunAcik = pazarlar.filter((p) => p.gun === bugun)
  const list = bugunAcik.slice(0, LIMIT)

  return (
    <section className="border-2 border-ink bg-cream p-5 flex flex-col">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Semt Pazarları</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray">
          {bugunAcik.length > 0 ? `${bugunAcik.length} bugün` : GUN_ADLARI[bugun]}
        </span>
      </header>

      {list.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Bugün ({GUN_ADLARI[bugun]}) kurulu pazar yok
        </div>
      ) : (
        <>
          <ul className="space-y-3 text-xs flex-1">
            {list.map((p, i) => (
              <li key={`${p.ADI}-${i}`} className="border-l-2 border-orange pl-3 py-1">
                <div className="font-mono uppercase tracking-wide text-ink truncate">
                  {p.ADI}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-orange mt-0.5">
                  {p.ILCE}{p.MAHALLE ? ` · ${p.MAHALLE}` : ""}
                </div>
                {p.YOL && (
                  <div className="text-gray mt-0.5 leading-snug normal-case tracking-normal truncate">
                    {p.YOL}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <WidgetMore href="/onemli-yerler" count={bugunAcik.length} />
        </>
      )}
    </section>
  )
}
