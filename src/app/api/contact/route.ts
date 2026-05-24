import { NextResponse } from "next/server"
import { Resend } from "resend"
import { redis } from "@/lib/redis"

export const runtime = "nodejs"

const RATE_LIMIT_WINDOW = 60 * 60
const RATE_LIMIT_MAX = 5

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 })
    }

    const { name = "", email = "", message = "", website = "" } = body as {
      name?: string
      email?: string
      message?: string
      website?: string
    }

    if (website) {
      return NextResponse.json({ ok: true })
    }

    const cleanName = String(name).trim().slice(0, 100)
    const cleanEmail = String(email).trim().slice(0, 200)
    const cleanMessage = String(message).trim().slice(0, 5000)

    if (!cleanMessage || cleanMessage.length < 5) {
      return NextResponse.json(
        { error: "Mesaj en az 5 karakter olmalı" },
        { status: 400 },
      )
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown"

    if (redis) {
      const rateKey = `contact:rate:${ip}`
      const count = await redis.incr(rateKey)
      if (count === 1) {
        await redis.expire(rateKey, RATE_LIMIT_WINDOW)
      }
      if (count > RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: "Çok fazla deneme. Lütfen sonra tekrar deneyin." },
          { status: 429 },
        )
      }
    }

    const apiKey = process.env.RESEND_API_KEY
    const toAddress = process.env.CONTACT_TO_EMAIL
    const fromAddress = process.env.CONTACT_FROM_EMAIL

    if (!apiKey || !toAddress || !fromAddress) {
      console.error("Contact form env eksik")
      return NextResponse.json(
        { error: "Sunucu yapılandırması eksik" },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)
    const subject = `nokta35 iletişim: ${cleanName || "Ziyaretçi"}`
    const html = `
      <h2>nokta35 iletişim formu</h2>
      <p><strong>Ad:</strong> ${escapeHtml(cleanName) || "—"}</p>
      <p><strong>E-posta:</strong> ${escapeHtml(cleanEmail) || "—"}</p>
      <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
      <hr>
      <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(cleanMessage)}</pre>
    `

    const result = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject,
      html,
      replyTo: cleanEmail || undefined,
    })

    if (result.error) {
      console.error("Resend hatası:", result.error)
      return NextResponse.json(
        { error: "Mesaj gönderilemedi" },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact route hatası:", err)
    return NextResponse.json(
      { error: "Beklenmeyen hata" },
      { status: 500 },
    )
  }
}
