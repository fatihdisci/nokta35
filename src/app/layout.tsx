import type { Metadata, Viewport } from "next"
import { Playfair_Display, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nokta35.com"),
  title: {
    default: "nokta35 — Tek noktadan İzmir'e dair her şey",
    template: "%s · nokta35",
  },
  description:
    "İzmir Büyükşehir Belediyesi açık verilerini gerçek zamanlı görselleştiren bağımsız şehir veri platformu. Baraj doluluk, nöbetçi eczane, otopark, ESHOT/İZBAN, hal fiyatları.",
  applicationName: "nokta35",
  keywords: [
    "İzmir",
    "açık veri",
    "baraj doluluk",
    "nöbetçi eczane",
    "ESHOT",
    "İZBAN",
    "hal fiyatları",
    "şehir paneli",
    "izmir büyükşehir",
    "nokta35",
  ],
  authors: [{ name: "Fatih Dişçi" }],
  creator: "Fatih Dişçi",
  publisher: "nokta35",
  alternates: { canonical: "/" },
  openGraph: {
    title: "nokta35 — Tek noktadan İzmir'e dair her şey",
    description:
      "İzmir açık verilerini gerçek zamanlı görselleştiren bağımsız şehir paneli.",
    url: "https://nokta35.com",
    siteName: "nokta35",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nokta35 — İzmir açık veri paneli",
    description: "Baraj, otobüs, eczane, hal fiyatları — tek noktadan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "civic",
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9695860606070067"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
