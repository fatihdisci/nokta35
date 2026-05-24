import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"
import type { RawRecord } from "@/lib/data"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 3600

type RawResponse = RawRecord[] | { etkinlikler?: RawRecord[]; Etkinlikler?: RawRecord[]; result?: RawRecord[] }

function normalize(raw: RawResponse): RawRecord[] {
  if (Array.isArray(raw)) return raw
  return raw.etkinlikler ?? raw.Etkinlikler ?? raw.result ?? []
}

export async function GET() {
  try {
    const data = await cached("etkinlik:list:v2", TTL, async () => {
      const raw = await fetchIzmir<RawResponse>("/api/ibb/kultursanat/etkinlikler")
      return normalize(raw)
    })
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
