import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"
import type { HavaKalitesiItem } from "@/lib/data"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 3600

type RawResponse = HavaKalitesiItem[] | {
  havakalitest?: HavaKalitesiItem[]
  HavaKalitesi?: HavaKalitesiItem[]
  istasyonlar?: HavaKalitesiItem[]
}

function normalize(raw: RawResponse): HavaKalitesiItem[] {
  if (Array.isArray(raw)) return raw
  return raw.havakalitest ?? raw.HavaKalitesi ?? raw.istasyonlar ?? []
}

export async function GET() {
  try {
    const data = await cached("cevre:havakalitest", TTL, async () => {
      const raw = await fetchIzmir<RawResponse>("/api/ibb/cevre/havadegerleri")
      return normalize(raw)
    })
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
