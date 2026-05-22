import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 86400 * 7

export async function GET() {
  try {
    const data = await cached("izban:istasyonlar", TTL, () =>
      fetchIzmir<unknown[]>("/api/izban/istasyonlar"),
    )
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
