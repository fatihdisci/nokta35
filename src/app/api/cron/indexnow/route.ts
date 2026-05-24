import { NextRequest, NextResponse } from "next/server"
import { POSTS } from "@/content/blog"
import { submitToIndexNow, INDEXNOW_HOST } from "@/lib/indexnow"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const BASE = `https://${INDEXNOW_HOST}`

function allUrls(): string[] {
  const statics = [
    "/", "/blog", "/su-baraj", "/hava", "/saglik",
    "/ulasim", "/haberler", "/etkinlikler", "/onemli-yerler",
    "/hakkinda", "/veri-kaynaklari",
  ].map((p) => `${BASE}${p}`)

  const blogs = POSTS.map((p) => `${BASE}/blog/${p.slug}`)
  return [...statics, ...blogs]
}

function isVercelCron(req: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) return false
  const auth = req.headers.get("authorization")
  return auth === `Bearer ${cronSecret}`
}

/**
 * GET /api/cron/indexnow
 * Vercel Cron Jobs tarafından haftalık çağrılır.
 * CRON_SECRET değişkeni Vercel tarafından otomatik Bearer token olarak gönderilir.
 */
export async function GET(req: NextRequest) {
  if (!isVercelCron(req)) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 })
  }

  const result = await submitToIndexNow(allUrls())
  return NextResponse.json(result, { status: result.ok ? 200 : 502 })
}
