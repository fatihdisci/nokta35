import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
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
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.05em",
        }}
      >
        n<span style={{ color: "#d63800" }}>·</span>35
      </div>
    ),
    size,
  )
}
