import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"
import type { EtkinlikItem } from "@/lib/data"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 3600

type RawResponse = EtkinlikItem[] | { etkinlikler?: EtkinlikItem[]; Etkinlikler?: EtkinlikItem[] }

function normalize(raw: RawResponse): EtkinlikItem[] {
  if (Array.isArray(raw)) return raw
  return raw.etkinlikler ?? raw.Etkinlikler ?? []
}

export async function GET() {
  try {
    const data = await cached("etkinlik:list", TTL, async () => {
      const raw = await fetchIzmir<RawResponse>("/api/ibb/kultursanat/etkinlikler")
      return normalize(raw)
    })
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
