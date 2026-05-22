import Link from "next/link"

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/ulasim", label: "Ulaşım" },
  { href: "/su-baraj", label: "Su & Baraj" },
  { href: "/saglik", label: "Sağlık" },
  { href: "/otoparklar", label: "Otopark" },
  { href: "/hal-fiyatlari", label: "Hal" },
  { href: "/harita", label: "Harita" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-cream border-b-[3px] border-orange">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1 group">
          <span className="font-serif-display text-2xl leading-none">nokta</span>
          <span className="text-orange text-2xl leading-none">·</span>
          <span className="font-serif-display text-2xl leading-none">35</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-orange transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden text-xs uppercase tracking-widest text-orange">
          İzmir
        </div>
      </div>
    </header>
  )
}
