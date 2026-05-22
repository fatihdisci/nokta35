import type { Metadata } from "next"
import { Playfair_Display, JetBrains_Mono } from "next/font/google"
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
  title: "nokta35 — Tek noktadan İzmir'e dair her şey",
  description:
    "İzmir Büyükşehir Belediyesi açık verilerini gerçek zamanlı görselleştiren bağımsız şehir veri platformu.",
  metadataBase: new URL("https://nokta35.com"),
  openGraph: {
    title: "nokta35",
    description: "Tek noktadan İzmir'e dair her şey.",
    url: "https://nokta35.com",
    siteName: "nokta35",
    locale: "tr_TR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${jetbrains.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
