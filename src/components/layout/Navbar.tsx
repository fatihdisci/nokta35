"use client"

import { useState } from "react"
import Link from "next/link"

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/ulasim", label: "Ulaşım" },
  { href: "/su-baraj", label: "Su & Baraj" },
  { href: "/saglik", label: "Sağlık" },
  { href: "/otoparklar", label: "Otopark" },
  { href: "/hava", label: "Hava" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink text-cream border-b-[3px] border-orange">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1 group z-50">
          <span className="font-serif-display text-2xl leading-none">nokta</span>
          <span className="text-orange text-2xl leading-none">·</span>
          <span className="font-serif-display text-2xl leading-none">35</span>
        </Link>
        
        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-9 h-9 border-2 border-orange/60 bg-ink hover:bg-orange/10 transition-colors z-50"
          aria-label="Menü"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-5 h-3 flex flex-col justify-between">
              <span className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${isOpen ? 'rotate-45 absolute top-1' : ''}`} />
              <span className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${isOpen ? '-rotate-45 absolute top-1' : ''}`} />
            </div>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-ink/95 flex flex-col justify-center p-8 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200 z-40">
            <nav className="flex flex-col space-y-4 pt-16">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-cream text-3xl font-serif-display uppercase tracking-wider hover:text-orange transition-colors py-3 border-b border-light-gray/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="text-[10px] text-gray uppercase tracking-[0.2em] pt-8 font-mono text-center">
              İzmir Açık Veri Portalı · nokta35
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
