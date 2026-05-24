import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 3600

type RawOlcum = {
  BolgeAdi?: string
  GazAdi?: string
  OlcumDegeri?: string | number
  OlcumTarihi?: string
}

export async function GET() {
  try {
    const data = await cached("cevre:havakalitest:v2", TTL, async () => {
      const raw = await fetchIzmir<RawOlcum[]>("/api/ibb/cevre/havadegerleri")
      return Array.isArray(raw) ? raw : []
    })
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
