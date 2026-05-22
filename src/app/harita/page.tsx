import { Placeholder } from "@/components/layout/Placeholder"

export const metadata = {
  title: "Harita",
  description:
    "İzmir canlı harita: otobüs, eczane, otopark, pazar yerleri — yakında.",
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
