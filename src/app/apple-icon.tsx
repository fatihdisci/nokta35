import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a1a1a",
          color: "#f4f1ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          borderBottom: "12px solid #d63800",
        }}
      >
        n<span style={{ color: "#d63800" }}>·</span>35
      </div>
    ),
    size,
  )
}
