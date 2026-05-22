import Link from "next/link"
import { AdSlot } from "@/components/ads/AdSlot"

export function Footer() {
  return (
    <footer className="mt-24 border-t-[3px] border-ink bg-ink text-cream">
      <div className="container py-8 border-b border-gray/30">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3 text-center">
          Kurumsal Sponsor
        </div>
        <AdSlot id="AD-6" size="footer" className="my-0" />
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-12 text-xs">
        <div className="space-y-3">
          <div className="flex items-baseline gap-1">
            <span className="font-serif-display text-xl">nokta</span>
            <span className="text-orange text-xl">·</span>
            <span className="font-serif-display text-xl">35</span>
          </div>
          <p className="text-gray uppercase tracking-widest leading-relaxed">
            Tek noktadan İzmir'e dair her şey. Bağımsız, açık veri tabanlı şehir platformu.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-orange uppercase tracking-widest mb-3">Bölümler</h3>
          <ul className="space-y-2 text-gray">
            <li><Link href="/ulasim" className="hover:text-cream">Ulaşım</Link></li>
            <li><Link href="/su-baraj" className="hover:text-cream">Su & Baraj</Link></li>
            <li><Link href="/saglik" className="hover:text-cream">Sağlık</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-orange uppercase tracking-widest mb-3">Veri Kaynakları</h3>
          <ul className="space-y-2 text-gray">
            <li><a href="https://acikveri.bizizmir.com" target="_blank" rel="noopener" className="hover:text-cream">acikveri.bizizmir.com</a></li>
            <li><a href="https://openapi.izmir.bel.tr" target="_blank" rel="noopener" className="hover:text-cream">openapi.izmir.bel.tr</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-orange uppercase tracking-widest mb-3">İletişim</h3>
          <ul className="space-y-2 text-gray">
            <li>nokta35.com</li>
            <li>Reklam / sponsor için iletişime geçin</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray/30">
        <div className="container py-4 text-[11px] uppercase tracking-widest text-gray flex justify-between">
          <span>© {new Date().getFullYear()} nokta35</span>
          <span>İzmir · v0.1</span>
        </div>
      </div>
    </footer>
  )
}
