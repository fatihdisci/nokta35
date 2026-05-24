"use client"
import { useEffect, useRef, useState } from "react"
import type { OtoparkItem } from "@/lib/data"
import { WidgetMore } from "./WidgetMore"

const LIMIT = 5
const POLL_MS = 30_000

type Enriched = {
  o: OtoparkItem
  free: number
  occupied: number
  total: number
  pct: number
}

function kapasite(o: OtoparkItem) {
  const free = o.occupancy?.total?.free ?? 0
  const occupied = o.occupancy?.total?.occupied ?? 0
  return { free, occupied, total: free + occupied }
}

function enrich(items: OtoparkItem[]): Enriched[] {
  return items
    .map((o) => {
      const { free, occupied, total } = kapasite(o)
      const pct = total > 0 ? (occupied / total) * 100 : 0
      return { o, free, occupied, total, pct }
    })
    .filter((x) => x.total > 0)
    .sort((a, b) => b.pct - a.pct)
}

export function OtoparkWidget() {
  const [enriched, setEnriched] = useState<Enriched[]>([])
  const [age, setAge] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  async function load() {
    try {
      const res = await fetch("/api/otopark", { cache: "no-store" })
      if (!res.ok) return
      const data: OtoparkItem[] = await res.json()
      setEnriched(enrich(data))
      setAge(Math.floor(Date.now() / 1000))
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    timerRef.current = setInterval(load, POLL_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const [now, setNow] = useState(Math.floor(Date.now() / 1000))
  useEffect(() => {
    const t = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 5000)
    return () => clearInterval(t)
  }, [])

  const diff = age !== null ? now - age : null
  const ageLabel =
    diff === null
      ? null
      : diff < 60
        ? `${diff}s`
        : diff < 3600
          ? `${Math.floor(diff / 60)} dk`
          : `${Math.floor(diff / 3600)} sa`

  const list = enriched.slice(0, LIMIT)

  return (
    <section className="border-2 border-ink bg-cream p-5 flex flex-col">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif-display text-2xl">Otoparklar</h2>
        <div className="flex items-baseline gap-2">
          {ageLabel && (
            <span className="text-[9px] font-mono text-gray/60 tabular-nums" title="Son veri çekimi">
              {ageLabel} önce
            </span>
          )}
          <span className="text-[10px] uppercase tracking-widest text-gray">Anlık</span>
        </div>
      </header>

      {loading ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4 animate-pulse">
          Yükleniyor…
        </div>
      ) : list.length === 0 ? (
        <div className="text-xs text-gray uppercase tracking-widest py-4">
          Veri alınamadı
        </div>
      ) : (
        <>
          <ul className="space-y-3 flex-1">
            {list.map((x, i) => (
              <li key={`${x.o.name ?? i}`} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs gap-2">
                  <span className="uppercase tracking-wide truncate">
                    {x.o.name ?? "—"}
                  </span>
                  <span className="font-mono whitespace-nowrap">
                    {x.occupied}/{x.total}
                  </span>
                </div>
                <div className="h-2 bg-light-gray border border-ink/10">
                  <div
                    className={"h-full " + (x.pct > 80 ? "bg-orange" : "bg-ink")}
                    style={{ width: `${Math.min(100, x.pct)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          {enriched.length > LIMIT && (
            <WidgetMore href="/otoparklar" count={enriched.length} />
          )}
        </>
      )}
    </section>
  )
}
