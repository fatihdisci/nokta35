import Link from "next/link"

export function WidgetMore({
  href,
  count,
}: {
  href: string
  count: number
}) {
  return (
    <Link
      href={href}
      className="block mt-4 text-[10px] uppercase tracking-[0.2em] text-orange hover:underline border-t border-light-gray pt-3"
    >
      Tümünü gör ({count}) →
    </Link>
  )
}
