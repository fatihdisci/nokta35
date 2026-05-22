import type { Metadata, Viewport } from "next"
import { Playfair_Display, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"

import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { organizationJsonLd, JsonLdScript } from "@/lib/jsonLd"

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
    "İzmir Büyükşehir Belediyesi açık verilerini gerçek zamanlı görselleştiren bağımsız şehir veri platformu. Baraj doluluk, nöbetçi eczane, otopark, ESHOT/İZBAN.",
  applicationName: "nokta35",
  keywords: [
    "İzmir",
    "açık veri",
    "baraj doluluk",
    "nöbetçi eczane",
    "ESHOT",
    "İZBAN",

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
    description: "Baraj, otobüs, eczane, otopark — tek noktadan.",
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-VB5V8C9MP0"

  return (
    <html lang="tr" className={`${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9695860606070067"
          crossOrigin="anonymous"
        />
        <JsonLdScript data={organizationJsonLd()} />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

