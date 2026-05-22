import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 86400 * 7

type PazarYanit = {
  sayfa_numarasi?: number
  sayfadaki_kayitsayisi?: number
  kayit_sayisi?: number
  onemliyer?: unknown[]
}

export async function GET() {
  try {
    const data = await cached("cbs:pazaryerleri", TTL, async () => {
      const j = await fetchIzmir<PazarYanit>("/api/ibb/cbs/pazaryerleri")
      return Array.isArray(j?.onemliyer) ? j.onemliyer : []
    })
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
