import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 30

export async function GET() {
  try {
    const data = await cached("otopark:doluluk", TTL, () =>
      fetchIzmir<unknown[]>("/api/ibb/izum/otoparklar"),
    )
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
