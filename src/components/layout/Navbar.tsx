"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/ulasim", label: "Ulaşım" },
  { href: "/su-baraj", label: "Su & Baraj" },
  { href: "/saglik", label: "Sağlık" },
  { href: "/hava", label: "Hava" },
  { href: "/onemli-yerler", label: "Pazarlar" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/haberler", label: "Haberler" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-ink text-cream border-b-[3px] border-orange">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1 z-50 shrink-0" onClick={() => setIsOpen(false)}>
          <span className="font-serif-display text-xl leading-none">nokta</span>
          <span className="text-orange text-xl leading-none">·</span>
          <span className="font-serif-display text-xl leading-none">35</span>
        </Link>

        {/* Desktop Menu — hidden on mobile, scrolls if needed */}
        <nav className="hidden md:flex items-center gap-4 text-[11px] uppercase tracking-widest overflow-x-auto ml-6">
          {NAV_ITEMS.filter((i) => i.href !== "/").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap transition-colors hover:text-orange ${
                pathname === item.href ? "text-orange" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-9 h-9 border-2 border-orange/60 bg-ink hover:bg-orange/10 transition-colors z-50 shrink-0"
          aria-label="Menü"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-5 h-3 flex flex-col justify-between">
              <span className={`block w-5 h-0.5 bg-cream transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-5 h-0.5 bg-cream transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-ink z-40 flex flex-col pt-14 overflow-y-auto">
            <nav className="flex flex-col px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-serif-display uppercase tracking-wider py-4 border-b border-white/10 transition-colors ${
                    pathname === item.href ? "text-orange" : "text-cream hover:text-orange"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="text-[10px] text-gray uppercase tracking-[0.2em] py-6 font-mono text-center mt-auto">
              İzmir Açık Veri Portalı · nokta35
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
