"use client"

import dynamic from "next/dynamic"

const MapWrapper = dynamic(
  () => import("./MapWrapper").then((m) => m.MapWrapper),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-gray">
        Harita yükleniyor…
      </div>
    ),
  },
)

export function MapClient() {
  return <MapWrapper />
}
