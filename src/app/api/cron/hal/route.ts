import { redis } from "@/lib/redis"
import { fetchHalCsv } from "@/lib/hal"

export const dynamic = "force-dynamic"

const KEY = "hal:sebze"
const TTL = 86400 * 2 // 2 gün — cron gecikse de hayatta kalsın

export async function GET(request: Request) {
  // Vercel Cron, Authorization: Bearer <CRON_SECRET> header'ı gönderir.
  // Manuel tetiklemeye karşı koruma.
  const auth = request.headers.get("authorization")
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 })
  }

  const url = process.env.HAL_CSV_URL
  if (!url) {
    return Response.json({ ok: false, reason: "HAL_CSV_URL not set" }, { status: 200 })
  }

  try {
    const data = await fetchHalCsv(url)
    if (!redis) {
      return Response.json({ ok: false, reason: "Redis not configured", count: data.length })
    }
    await redis.set(KEY, data, { ex: TTL })
    return Response.json({ ok: true, count: data.length, at: new Date().toISOString() })
  } catch (e) {
    return Response.json(
      { ok: false, error: (e as Error).message },
      { status: 500 },
    )
  }
}
