"use client"

import { useEffect, useState } from "react"

type Istasyon = {
  IstasyonId?: number | string
  IstasyonAdi?: string
  IstasyonSirasi?: number
  Boylam?: string | number
  Enlem?: string | number
}

type Sefer = {
  HareketSaati?: string
  VarisSaati?: string
  HareketIstasyonAdi?: string
  VarisIstasyonAdi?: string
}

function shortTime(s?: string) {
  if (!s) return "—"
  // "00:09:00" → "00:09"
  return s.slice(0, 5)
}

function getId(i: Istasyon): string {
  return String(i.IstasyonId ?? "")
}
function getAd(i: Istasyon): string {
  return String(i.IstasyonAdi ?? "")
}

export function IzbanSefer() {
  const [istasyonlar, setIstasyonlar] = useState<Istasyon[]>([])
  const [kalkis, setKalkis] = useState("")
  const [varis, setVaris] = useState("")
  const [seferler, setSeferler] = useState<Sefer[] | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("/api/izban/istasyonlar")
      .then((r) => r.json())
      .then((j: Istasyon[]) => {
        const list = Array.isArray(j) ? j : []
        setIstasyonlar(list)
        if (list.length >= 2) {
          setKalkis(getId(list[0]))
          setVaris(getId(list[list.length - 1]))
        }
      })
      .catch(() => setErr("İstasyon listesi alınamadı"))
  }, [])

  async function sorgu() {
    if (!kalkis || !varis || kalkis === varis) return
    setLoading(true)
    setErr(null)
    try {
      const r = await fetch(`/api/izban/sefer?kalkis=${kalkis}&varis=${varis}`)
      if (!r.ok) throw new Error(`Hata ${r.status}`)
      const j = (await r.json()) as Sefer[]
      setSeferler(Array.isArray(j) ? j : [])
    } catch (e) {
      setErr((e as Error).message)
      setSeferler([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border-2 border-ink p-5 bg-cream h-full flex flex-col">
      <div className="text-orange text-[10px] uppercase tracking-[0.2em]">
        İZBAN
      </div>
      <div className="font-serif-display text-2xl mt-1 mb-3">Sefer Saatleri</div>

      <div className="grid grid-cols-1 gap-2 mb-3">
        <select
          value={kalkis}
          onChange={(e) => setKalkis(e.target.value)}
          className="border-2 border-ink bg-cream px-2 py-1 text-xs font-mono uppercase tracking-wide focus:outline-none focus:border-orange"
        >
          <option value="">Kalkış</option>
          {istasyonlar.map((i, idx) => (
            <option key={idx} value={getId(i)}>
              {getAd(i)}
            </option>
          ))}
        </select>
        <select
          value={varis}
          onChange={(e) => setVaris(e.target.value)}
          className="border-2 border-ink bg-cream px-2 py-1 text-xs font-mono uppercase tracking-wide focus:outline-none focus:border-orange"
        >
          <option value="">Varış</option>
          {istasyonlar.map((i, idx) => (
            <option key={idx} value={getId(i)}>
              {getAd(i)}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={sorgu}
          disabled={loading || !kalkis || !varis || kalkis === varis}
          className="bg-ink text-cream py-1.5 text-[10px] uppercase tracking-[0.2em] hover:bg-orange transition-colors disabled:opacity-40"
        >
          {loading ? "Yükleniyor…" : "Sefer Saatleri"}
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-auto">
        {err && (
          <div className="text-[11px] text-orange uppercase tracking-widest">
            {err}
          </div>
        )}
        {seferler && seferler.length === 0 && !err && (
          <div className="text-[11px] text-gray uppercase tracking-widest">
            Sefer bulunamadı
          </div>
        )}
        {seferler && seferler.length > 0 && (
          <ul className="grid grid-cols-3 gap-1 text-xs font-mono">
            {seferler.slice(0, 18).map((s, i) => (
              <li
                key={i}
                className="border border-light-gray px-1 py-0.5 text-center"
                title={`Varış: ${shortTime(s.VarisSaati)}`}
              >
                {shortTime(s.HareketSaati)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
