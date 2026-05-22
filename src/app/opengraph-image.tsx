import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "nokta35 — Tek noktadan İzmir'e dair her şey"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f4f1ea",
          color: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* üst şerit */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 80,
            background: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            padding: "0 80px",
            color: "#f4f1ea",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            borderBottom: "6px solid #d63800",
          }}
        >
          nokta<span style={{ color: "#d63800", margin: "0 6px" }}>·</span>35
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 120 }}>
          <div
            style={{
              fontSize: 24,
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: 24,
            }}
          >
            İzmir · Açık Veri Paneli
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Tek noktadan
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginTop: 8,
            }}
          >
            <span style={{ color: "#d63800" }}>İzmir'e</span> dair her şey.
          </div>
        </div>

        {/* alt şerit */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#888",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontFamily: "monospace",
            borderTop: "2px solid #1a1a1a",
            paddingTop: 20,
          }}
        >
          <span>Baraj · Otobüs · Eczane · Otopark</span>
          <span>nokta35.com</span>
        </div>
      </div>
    ),
    size,
  )
}
