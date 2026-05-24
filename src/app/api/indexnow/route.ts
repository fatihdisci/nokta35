import { NextRequest, NextResponse } from "next/server"
import { POSTS } from "@/content/blog"
import { submitToIndexNow, INDEXNOW_HOST } from "@/lib/indexnow"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const BASE = `https://${INDEXNOW_HOST}`

const STATIC_PATHS = [
  "/",
  "/blog",
  "/su-baraj",
  "/hava",
  "/saglik",
  "/ulasim",
  "/haberler",
  "/etkinlikler",
  "/onemli-yerler",
  "/hakkinda",
  "/veri-kaynaklari",
]

function allKnownUrls(): string[] {
  const blogUrls = POSTS.map((p) => `${BASE}/blog/${p.slug}`)
  const staticUrls = STATIC_PATHS.map((p) => `${BASE}${p}`)
  return [...staticUrls, ...blogUrls]
}

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.INDEXNOW_SECRET
  if (!secret) return false
  const provided =
    req.headers.get("x-indexnow-secret") ??
    req.nextUrl.searchParams.get("secret")
  return provided === secret
}

/**
 * POST /api/indexnow
 *   Body: { urls?: string[] }
 *   Header: x-indexnow-secret: <INDEXNOW_SECRET>
 *
 * Gövde verilmezse tüm bilinen URL'ler (statik + blog) gönderilir.
 */
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 })
  }

  let urls: string[] | undefined
  try {
    const body = (await req.json().catch(() => null)) as { urls?: string[] } | null
    urls = body?.urls
  } catch {
    urls = undefined
  }

  const target = urls && urls.length > 0 ? urls : allKnownUrls()
  const result = await submitToIndexNow(target)
  return NextResponse.json(result, { status: result.ok ? 200 : 502 })
}

/**
 * GET /api/indexnow?secret=...
 *   Debug amaçlı; aynı işlemi yapar.
 */
export async function GET(req: NextRequest) {
  return POST(req)
}
