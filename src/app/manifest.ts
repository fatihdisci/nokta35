import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "nokta35 — İzmir açık veri paneli",
    short_name: "nokta35",
    description: "Tek noktadan İzmir'e dair her şey.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1ea",
    theme_color: "#1a1a1a",
    lang: "tr",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  }
}
