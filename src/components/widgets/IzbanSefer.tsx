"use client"

import { useEffect, useState, useCallback } from "react"

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
  const [currentTime, setCurrentTime] = useState("")

  // Get current local time on client to avoid SSR hydration mismatches
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  // Initial fetch for stations
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

  const sorgu = useCallback(async () => {
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
  }, [kalkis, varis])

  // Trigger query automatically when station selections are ready/change
  useEffect(() => {
    if (kalkis && varis && kalkis !== varis) {
      sorgu()
    }
  }, [kalkis, varis, sorgu])

  // Filter and highlight logic based on current local time
  let displayedSeferler: Sefer[] = []
  let nextSeferIndex = -1

  if (seferler && seferler.length > 0) {
    if (currentTime) {
      const parseTimeToMin = (t: string) => {
        const [h, m] = t.split(":").map(Number)
        return h * 60 + m
      }
      const currentMin = parseTimeToMin(currentTime)

      // The actual next flight is strictly greater than or equal to the actual current time
      const highlightIdxInOriginal = seferler.findIndex((s) => {
        const timeStr = s.HareketSaati?.slice(0, 5) ?? ""
        if (!timeStr) return false
        return parseTimeToMin(timeStr) >= currentMin
      })

      if (highlightIdxInOriginal === -1) {
        // All flights departed for today, show last 18
        displayedSeferler = seferler.slice(-18)
      } else {
        // Show up to 2 past flights for context and fill up to 18
        const startIdx = Math.max(0, highlightIdxInOriginal - 2)
        displayedSeferler = seferler.slice(startIdx, startIdx + 18)
        nextSeferIndex = highlightIdxInOriginal - startIdx
      }
    } else {
      // Fallback if client time not loaded yet
      displayedSeferler = seferler.slice(0, 18)
    }
  }

  return (
    <div className="border-2 border-ink p-5 bg-cream h-full flex flex-col">
      <div className="text-orange text-[10px] uppercase tracking-[0.2em]">
        İZBAN
      </div>
      <div className="font-serif-display text-2xl mt-1 mb-3">Sefer Saatleri</div>

      <div className="grid grid-cols-1 gap-2 mb-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] uppercase font-mono text-gray">Kalkış İstasyonu</span>
            <select
              value={kalkis}
              onChange={(e) => setKalkis(e.target.value)}
              className="border-2 border-ink bg-cream px-2 py-1 text-xs font-mono uppercase tracking-wide focus:outline-none focus:border-orange w-full"
            >
              <option value="">Kalkış</option>
              {istasyonlar.map((i, idx) => (
                <option key={idx} value={getId(i)}>
                  {getAd(i)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] uppercase font-mono text-gray">Varış İstasyonu</span>
            <select
              value={varis}
              onChange={(e) => setVaris(e.target.value)}
              className="border-2 border-ink bg-cream px-2 py-1 text-xs font-mono uppercase tracking-wide focus:outline-none focus:border-orange w-full"
            >
              <option value="">Varış</option>
              {istasyonlar.map((i, idx) => (
                <option key={idx} value={getId(i)}>
                  {getAd(i)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={sorgu}
          disabled={loading || !kalkis || !varis || kalkis === varis}
          className="bg-ink text-cream py-1.5 text-[10px] uppercase tracking-[0.2em] hover:bg-orange transition-colors disabled:opacity-40 w-full"
        >
          {loading ? "Yükleniyor…" : "GÜNCELLE"}
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
          <div className="space-y-3">
            <div className="flex justify-between items-baseline text-[10px] uppercase font-mono text-gray border-b border-light-gray pb-1">
              <span>Seferler ({seferler.length} adet)</span>
              {currentTime && <span>Saat: {currentTime}</span>}
            </div>
            <ul className="grid grid-cols-3 gap-2 text-xs font-mono">
              {displayedSeferler.map((s, idx) => {
                const isNext = idx === nextSeferIndex
                return (
                  <li
                    key={idx}
                    className={`border px-1.5 py-1 text-center transition-all flex flex-col justify-center items-center ${
                      isNext
                        ? "border-orange bg-orange/10 text-orange font-bold ring-2 ring-orange/30 scale-[1.03]"
                        : "border-light-gray text-ink"
                    }`}
                    title={`Varış: ${shortTime(s.VarisSaati)}`}
                  >
                    <div>{shortTime(s.HareketSaati)}</div>
                    {isNext && (
                      <span className="text-[8px] block uppercase tracking-widest text-orange mt-0.5 leading-none font-bold animate-pulse">
                        Sıradaki
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className="text-[9px] font-mono text-gray mt-2 italic leading-relaxed">
              * Seferlerin üzerine gelerek tahmini varış saatini görebilirsiniz. Listelenen saatler İzmir Büyükşehir Belediyesi canlı açık verilerinden anlık süzülmüştür.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
