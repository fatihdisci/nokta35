import Link from "next/link"

export function Placeholder({
  title,
  faz,
  desc,
}: {
  title: string
  faz: string
  desc: string
}) {
  return (
    <section className="container py-20">
      <div className="border-2 border-ink bg-cream p-10 max-w-3xl">
        <div className="text-[10px] uppercase tracking-[0.2em] text-orange mb-3">
          {faz}
        </div>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[0.95] text-ink mb-4">
          {title}
        </h1>
        <p className="text-sm text-gray uppercase tracking-wide leading-relaxed mb-6">
          {desc}
        </p>
        <Link
          href="/"
          className="inline-block bg-ink text-cream px-4 py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-orange transition-colors"
        >
          ← Ana Sayfa
        </Link>
      </div>
    </section>
  )
}
