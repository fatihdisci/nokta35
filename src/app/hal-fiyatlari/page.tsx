import type { Metadata } from "next"
import { Placeholder } from "@/components/layout/Placeholder"

export const metadata: Metadata = {
  title: "Hal Fiyatları",
  description: "İzmir sebze, meyve, balık hal fiyatları — yakında.",
  alternates: { canonical: "/hal-fiyatlari" },
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <Placeholder
      title="Hal Fiyatları"
      faz="Yapım aşamasında"
      desc="Sebze, meyve, balık hal fiyatları — günlük güncel, filtreli liste, geçmiş grafikleri. Ana sayfada 8 ürünlük özet mevcut."
    />
  )
}
