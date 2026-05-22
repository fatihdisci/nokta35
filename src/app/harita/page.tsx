import type { Metadata } from "next"
import { Placeholder } from "@/components/layout/Placeholder"

export const metadata: Metadata = {
  title: "Harita · nokta35",
  description: "İzmir canlı harita: otobüs, eczane, otopark, pazar yerleri — yakında.",
  alternates: {
    canonical: "/harita",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function Page() {
  return (
    <Placeholder
      title="Harita"
      faz="Yakında"
      desc="Canlı otobüs konumları, nöbetçi eczane, otopark doluluk ve pazar yerleri tek haritada. Şimdilik veriler kategorilerine göre kendi sayfalarında."
    />
  )
}
