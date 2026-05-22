"use client"

import { useEffect, useState, useTransition } from "react"

type Yaklasan = {
  HatNumarasi?: string | number
  HatAdi?: string
  KalanDurakSayisi?: number | string
  KoorX?: string
  KoorY?: string
}

export function EshotYaklasan() {
  const [durak, setDurak] = useState("10001")
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [data, setData] = useState<Yaklasan[] | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [pending, start] = useTransition()

  async function fetchData(d: string) {
    setErr(null)
    try {
      const r = await fetch(`/api/eshot-yaklasan?durak=${d}`)
      if (!r.ok) throw new Error(`Hata ${r.status}`)
      const j = (await r.json()) as Yaklasan[]
      setData(Array.isArray(j) ? j : [])
    } catch (e) {
      setErr((e as Error).message)
      setData([])
    }
  }

  useEffect(() => {
    if (!submitted) return
    void fetchData(submitted)
    const t = setInterval(() => void fetchData(submitted), 20_000)
    return () => clearInterval(t)
  }, [submitted])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!/^\d+$/.test(durak)) return
    start(() => setSubmitted(durak))
  }

  return (
    <div className="border-2 border-ink p-5 bg-cream h-full flex flex-col">
      <div className="text-orange text-[10px] uppercase tracking-[0.2em]">
        ESHOT
      </div>
      <div className="font-serif-display text-2xl mt-1 mb-3">
        Yaklaşan Otobüsler
      </div>

      <form onSubmit={onSubmit} className="flex gap-2 mb-3">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={durak}
          onChange={(e) => setDurak(e.target.value)}
          placeholder="Durak ID"
          className="flex-1 border-2 border-ink bg-cream px-2 py-1 text-xs font-mono uppercase tracking-widest focus:outline-none focus:border-orange"
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-ink text-cream px-3 py-1 text-[10px] uppercase tracking-[0.2em] hover:bg-orange transition-colors"
        >
          Sorgula
        </button>
      </form>

      <div className="flex-1 min-h-0 overflow-auto">
        {!submitted && (
          <div className="text-[11px] text-gray uppercase tracking-widest">
            Durak ID girip sorgula
          </div>
        )}
        {err && (
          <div className="text-[11px] text-orange uppercase tracking-widest">
            {err}
          </div>
        )}
        {submitted && data && data.length === 0 && !err && (
          <div className="text-[11px] text-gray uppercase tracking-widest">
            Bu durağa yaklaşan otobüs yok
          </div>
        )}
        {data && data.length > 0 && (
          <ul className="space-y-2 text-xs">
            {data.slice(0, 8).map((y, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 border-b border-light-gray pb-1"
              >
                <span className="font-mono text-orange font-bold w-12 shrink-0">
                  {y.HatNumarasi ?? "—"}
                </span>
                <span className="flex-1 truncate text-ink">{y.HatAdi ?? "—"}</span>
                <span className="font-mono text-ink whitespace-nowrap">
                  {y.KalanDurakSayisi ?? "—"} durak
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
