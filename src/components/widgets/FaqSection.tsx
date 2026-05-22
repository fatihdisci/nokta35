import { FaqItem } from "@/lib/jsonLd"

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="container py-12 border-t-2 border-ink mt-12">
      <header className="mb-8">
        <h2 className="font-serif-display text-3xl md:text-4xl text-ink">Sıkça Sorulan Sorular</h2>
        <p className="text-xs text-gray uppercase tracking-widest mt-2">
          İzmir Canlı Veri Platformu · Soru & Cevap
        </p>
      </header>
      <div className="space-y-4 max-w-3xl">
        {items.map((item, i) => (
          <details
            key={i}
            className="group border-2 border-ink bg-cream p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-light-gray/30"
          >
            <summary className="flex items-center justify-between font-serif-display text-lg md:text-xl text-ink font-bold select-none list-none">
              <span>{item.question}</span>
              <span className="text-orange text-2xl transition-transform duration-300 group-open:rotate-45 leading-none select-none">
                +
              </span>
            </summary>
            <p className="mt-4 text-xs md:text-sm text-ink/90 leading-relaxed font-mono border-t-2 border-ink/10 pt-4">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
