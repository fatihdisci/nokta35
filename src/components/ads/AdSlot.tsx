import { cn } from "@/lib/utils"

type AdSize = "leaderboard" | "rectangle" | "inline" | "footer"

const SIZE_MAP: Record<AdSize, { h: string; w: string; label: string }> = {
  leaderboard: { h: "h-[95px]", w: "w-full max-w-[728px]", label: "728 × 90" },
  rectangle: { h: "h-[250px]", w: "w-full max-w-[300px]", label: "300 × 250" },
  inline: { h: "h-[95px]", w: "w-full", label: "tam genişlik · 90" },
  footer: { h: "h-[95px]", w: "w-full max-w-[728px]", label: "728 × 90" },
}

export function AdSlot({
  id,
  size,
  className,
}: {
  id: string
  size: AdSize
  className?: string
}) {
  const s = SIZE_MAP[size]
  const mailtoLink = `mailto:iletisim@nokta35.com?subject=nokta35%20Reklam%20ve%20Sponsorluk%20(${id})`

  return (
    <div className={cn("flex justify-center my-6", className)}>
      <a
        href={mailtoLink}
        className={cn(
          "relative flex flex-col items-center justify-center border-2 border-ink bg-cream select-none text-ink cursor-pointer overflow-hidden group transition-all duration-150 hover:bg-light-gray/20 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#1a1a1a]",
          s.h,
          s.w,
        )}
        aria-label={`Reklam alanı ${id}`}
      >
        {/* Diagonal brutalist styling stripes */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)] pointer-events-none" />

        {size === "rectangle" ? (
          <div className="flex flex-col items-center text-center p-5 space-y-3 h-full justify-between z-10">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-[0.25em] text-orange font-bold font-mono">
                · {id} · SPONSORLUK ALANI
              </span>
              <h4 className="font-serif-display text-xl leading-tight font-bold mt-1">
                İZMİR'İN DİJİTAL SOKAKLARINDA YER ALIN
              </h4>
              <p className="text-[10px] text-gray uppercase tracking-wider leading-relaxed font-mono px-2 mt-2">
                Günde binlerce İzmirliye doğrudan ulaşın. Platformumuzu destekleyin.
              </p>
            </div>
            <div className="bg-orange text-cream uppercase text-[10px] tracking-widest font-mono font-bold px-4 py-2 border border-ink shadow-[2px_2px_0px_#1a1a1a] group-hover:bg-ink group-hover:text-orange transition-colors">
              REKLAM VER / SPONSOR OL
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full h-full px-6 z-10">
            <div className="flex flex-col text-left justify-center">
              <span className="text-[8px] uppercase tracking-[0.25em] text-orange font-bold font-mono">
                {id} · REKLAM ALANI ({s.label})
              </span>
              <h4 className="font-serif-display text-base md:text-lg leading-tight font-bold mt-0.5">
                {size === "footer"
                  ? "İZMİR AÇIK VERİ PLATFORMUNU DESTEKLEYİN"
                  : "nokta35 İLE MARKANIZI İZMİR'E DUYURUN"}
              </h4>
              <p className="hidden md:block text-[9px] text-gray uppercase tracking-wider font-mono mt-1">
                Bağımsız şehir verilerine sponsor olun. İletişim: iletisim@nokta35.com
              </p>
            </div>
            <div className="bg-orange text-cream uppercase text-[9px] md:text-[10px] tracking-widest font-mono font-bold px-3 py-1.5 border border-ink shadow-[2px_2px_0px_#1a1a1a] group-hover:bg-ink group-hover:text-orange transition-colors shrink-0">
              REKLAM BİLGİSİ
            </div>
          </div>
        )}
      </a>
    </div>
  )
}

