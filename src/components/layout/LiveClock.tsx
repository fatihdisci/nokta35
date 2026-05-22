"use client"

import { useState, useEffect } from "react"

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const tick = () => setNow(new Date())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!now) {
    // SSR / ilk yükleme: placeholder (layout shift olmasın)
    return <div className="text-xs uppercase tracking-[0.2em] text-gray mb-4 h-4" />
  }

  const opts = { timeZone: "Europe/Istanbul" } as const
  const tarih = now.toLocaleDateString("tr-TR", {
    ...opts,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const saat = now.toLocaleTimeString("tr-TR", {
    ...opts,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })

  return (
    <div className="text-xs uppercase tracking-[0.2em] text-gray mb-4">
      {tarih} · <span className="font-mono">{saat}</span> · İzmir
    </div>
  )
}
