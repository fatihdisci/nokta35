import { Suspense } from "react"
import { Ticker } from "@/components/layout/Ticker"
import { MapClient } from "@/components/map/MapClient"
import { StatBar } from "@/components/widgets/StatBar"
import { BarajWidget } from "@/components/widgets/BarajWidget"
import { EczanePanel } from "@/components/widgets/EczanePanel"
import { KesintiAlert } from "@/components/widgets/KesintiAlert"
import { HalGrid } from "@/components/widgets/HalGrid"
import { EshotYaklasan } from "@/components/widgets/EshotYaklasan"
import { IzbanSefer } from "@/components/widgets/IzbanSefer"
import { IzbanUcret } from "@/components/widgets/IzbanUcret"
import { MetroTramvay } from "@/components/widgets/MetroTramvay"
import { AdSlot } from "@/components/ads/AdSlot"

export const revalidate = 60

function WidgetSkeleton({ title }: { title: string }) {
  return (
    <section className="border-2 border-light-gray bg-cream p-5">
      <h2 className="font-serif-display text-2xl mb-3">{title}</h2>
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-3 bg-light-gray animate-pulse" />
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  const today = new Date().toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <>
      <section className="container py-12">
        <div className="text-xs uppercase tracking-[0.2em] text-gray mb-4">
          {today} · İzmir
        </div>
        <h1 className="font-serif-display text-5xl md:text-7xl leading-[0.95] text-ink">
          Tek noktadan
          <br />
          <span className="text-orange">İzmir'e</span> dair her şey.
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-gray uppercase tracking-wide leading-relaxed">
          Barajlardan otobüslere, nöbetçi eczaneden hal fiyatlarına —
          açık veri ile gerçek zamanlı şehir paneli.
        </p>
      </section>

      <Suspense fallback={<div className="h-10 bg-orange/20" />}>
        <Ticker />
      </Suspense>

      <Suspense fallback={<div className="h-24 bg-light-gray" />}>
        <StatBar />
      </Suspense>

      <div className="container">
        <AdSlot id="AD-1" size="leaderboard" />
      </div>

      <section className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="relative h-[480px] md:h-[560px] border-2 border-ink bg-light-gray overflow-hidden">
            <MapClient />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Suspense fallback={<WidgetSkeleton title="Barajlar" />}>
              <BarajWidget />
            </Suspense>
            <Suspense fallback={<WidgetSkeleton title="Su Kesintisi" />}>
              <KesintiAlert />
            </Suspense>
          </div>
        </div>
        <aside className="space-y-6">
          <Suspense fallback={<WidgetSkeleton title="Nöbetçi Eczane" />}>
            <EczanePanel />
          </Suspense>
          <AdSlot id="AD-2" size="rectangle" className="my-0" />
        </aside>
      </section>

      <div className="container">
        <AdSlot id="AD-3" size="inline" />
      </div>

      <Suspense
        fallback={
          <section className="container">
            <div className="h-12 bg-light-gray animate-pulse mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square bg-light-gray animate-pulse" />
              ))}
            </div>
          </section>
        }
      >
        <HalGrid />
      </Suspense>

      <div className="container">
        <AdSlot id="AD-4" size="inline" />
      </div>

      <section className="container">
        <header className="flex items-baseline justify-between mb-4 border-b-2 border-ink pb-2">
          <h2 className="font-serif-display text-3xl">Ulaşım</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
            ESHOT · İZBAN · Metro
          </span>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EshotYaklasan />
          <IzbanSefer />
          <MetroTramvay />
        </div>
      </section>

      <IzbanUcret />

      <div className="container">
        <AdSlot id="AD-5" size="leaderboard" />
      </div>
    </>
  )
}
