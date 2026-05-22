import { Suspense } from "react"
import type { Metadata } from "next"
import { Ticker } from "@/components/layout/Ticker"
import { StatBar } from "@/components/widgets/StatBar"
import { BarajWidget } from "@/components/widgets/BarajWidget"
import { EczanePanel } from "@/components/widgets/EczanePanel"
import { KesintiAlert } from "@/components/widgets/KesintiAlert"
import { OtoparkWidget } from "@/components/widgets/OtoparkWidget"
import { HavaWidget } from "@/components/widgets/HavaWidget"

import { IzbanSefer } from "@/components/widgets/IzbanSefer"
import { MetroTramvay } from "@/components/widgets/MetroTramvay"
import { AdSlot } from "@/components/ads/AdSlot"
import { faqJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

export const metadata: Metadata = {
  title: "nokta35 · Tek noktadan İzmir'e dair her şey",
  description: "İzmir Büyükşehir Belediyesi açık verilerini gerçek zamanlı görselleştiren bağımsız şehir veri platformu. Baraj doluluk oranları, nöbetçi eczaneler, otopark kapasiteleri, hava durumu ve ulaşım saatleri.",
  alternates: {
    canonical: "/",
  },
}

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

  const faqItems = [
    {
      question: "nokta35 nedir ve hangi İzmir verilerini sunar?",
      answer: "nokta35, İzmir Büyükşehir Belediyesi, İZSU, İZELMAN ve İZUM gibi resmi kurumların açık veri kaynaklarını entegre ederek İzmir'e dair anlık şehir verilerini tek bir panelde toplayan bağımsız ve reklamsız şehir veri platformudur. Sitemizden baraj doluluk oranlarını, nöbetçi eczaneleri, su kesintilerini, otopark doluluk durumlarını, güncel hava durumunu ve ulaşım sefer saatlerini canlı takip edebilirsiniz.",
    },
    {
      question: "nokta35 platformundaki İzmir verileri ne sıklıkla güncellenir?",
      answer: "Verilerimizin güncelleme sıklığı veri türüne göre değişir. Otopark doluluk ve otobüs konumları gibi canlı veriler 30 saniyede bir güncellenirken; nöbetçi eczaneler 30 dakikada bir, baraj dolulukları ve su kesintileri saatlik, hava durumu ise her 15 dakikada bir otomatik olarak güncellenmektedir.",
    },
    {
      question: "nokta35 İzmir şehir platformu resmi bir web sitesi midir?",
      answer: "Hayır, nokta35 herhangi bir resmi kuruma veya belediyeye bağlı olmayan, İzmir'in dijital ekosistemini ve açık veri kullanımını desteklemek amacıyla geliştirilmiş tamamen bağımsız bir sivil teknoloji (civic tech) projesidir.",
    }
  ]

  const faqSchema = faqJsonLd(faqItems)

  return (
    <>
      <JsonLdScript data={faqSchema} />
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
          Barajlardan eczaneye, otoparktan hava durumuna —
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

      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<WidgetSkeleton title="Barajlar" />}>
          <BarajWidget />
        </Suspense>
        <Suspense fallback={<WidgetSkeleton title="Nöbetçi Eczane" />}>
          <EczanePanel />
        </Suspense>
        <Suspense fallback={<WidgetSkeleton title="Su Kesintisi" />}>
          <KesintiAlert />
        </Suspense>
        <Suspense fallback={<WidgetSkeleton title="Otoparklar" />}>
          <OtoparkWidget />
        </Suspense>
        <Suspense fallback={<WidgetSkeleton title="Hava Durumu" />}>
          <HavaWidget />
        </Suspense>
        <div className="flex items-center justify-center">
          <AdSlot id="AD-2" size="rectangle" className="my-0" />
        </div>
      </section>

      <div className="container">
        <AdSlot id="AD-3" size="inline" />
      </div>

      <div className="container">
        <AdSlot id="AD-4" size="inline" />
      </div>

      <section className="container">
        <header className="flex items-baseline justify-between mb-4 border-b-2 border-ink pb-2">
          <h2 className="font-serif-display text-3xl">Ulaşım</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
            İZBAN · Metro · Tramvay
          </span>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IzbanSefer />
          <MetroTramvay />
        </div>
      </section>

      <FaqSection items={faqItems} />

      <div className="container">
        <AdSlot id="AD-5" size="leaderboard" />
      </div>
    </>
  )
}

