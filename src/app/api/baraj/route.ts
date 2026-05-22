import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 3600

export async function GET() {
  try {
    const data = await cached("baraj:durum", TTL, () =>
      fetchIzmir<unknown[]>("/api/izsu/barajdurum"),
    )
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
