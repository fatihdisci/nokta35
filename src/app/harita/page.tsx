import { MapClient } from "@/components/map/MapClient"

export const metadata = {
  title: "Harita",
  description:
    "İzmir canlı harita: otobüs konumları, nöbetçi eczane, otopark doluluk, pazar yerleri tek ekranda.",
}

export default function Page() {
  return (
    <section className="container py-8">
      <header className="flex items-baseline justify-between mb-4 border-b-2 border-ink pb-2">
        <h1 className="font-serif-display text-4xl">Harita</h1>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
          Canlı katmanlar
        </span>
      </header>
      <div className="relative h-[calc(100vh-220px)] min-h-[500px] border-2 border-ink bg-light-gray overflow-hidden">
        <MapClient />
      </div>
    </section>
  )
}
