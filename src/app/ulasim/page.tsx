import type { Metadata } from "next"
import { Placeholder } from "@/components/layout/Placeholder"

export const metadata: Metadata = {
  title: "Ulaşım · nokta35",
  description: "İzmir ESHOT hatları, İZBAN sefer saatleri, metro ve tramvay hatları anlık durum bilgileri - Yakında hizmetinizde.",
  alternates: {
    canonical: "/ulasim",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function Page() {
  return (
    <Placeholder
      title="Ulaşım"
      faz="Yapım aşamasında"
      desc="Tüm ESHOT hatları, İZBAN, metro ve tramvay için detaylı sayfa. Ana sayfada özet versiyon mevcut."
    />
  )
}
