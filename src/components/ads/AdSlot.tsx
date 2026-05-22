import { cn } from "@/lib/utils"

type AdSize = "leaderboard" | "rectangle" | "inline" | "footer"

const SIZE_MAP: Record<AdSize, { h: string; w: string; label: string }> = {
  leaderboard: { h: "h-[90px]", w: "w-full max-w-[728px]", label: "728 × 90" },
  rectangle: { h: "h-[250px]", w: "w-full max-w-[300px]", label: "300 × 250" },
  inline: { h: "h-[90px]", w: "w-full", label: "tam genişlik · 90" },
  footer: { h: "h-[90px]", w: "w-full max-w-[728px]", label: "728 × 90" },
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
  return (
    <div className={cn("flex justify-center my-6", className)}>
      <div
        className={cn(
          "flex flex-col items-center justify-center border-2 border-dashed border-light-gray bg-cream/50",
          s.h,
          s.w,
        )}
        aria-label={`Reklam alanı ${id}`}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
          Reklam · {id}
        </span>
        <span className="text-[10px] text-gray mt-1">{s.label}</span>
      </div>
    </div>
  )
}
