import { cached } from "@/lib/redis"
import { getPazarYerleri } from "@/lib/data"
import { jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 86400

export async function GET() {
  try {
    const data = await cached("cbs:pazaryerleri:v2", TTL, () => getPazarYerleri())
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
