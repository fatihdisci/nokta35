import { redis } from "@/lib/redis"
import { fetchHalCsv, type HalFiyat } from "@/lib/hal"
import { jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const KEY = "hal:sebze"
const TTL = 86400 // 24 saat

export async function GET() {
  try {
    if (redis) {
      const cached = await redis.get<HalFiyat[]>(KEY)
      if (cached && cached.length > 0) {
        return jsonResponse(cached, { maxAge: 3600 })
      }
    }

    const url = process.env.HAL_CSV_URL
    if (!url) {
      return jsonResponse<HalFiyat[]>([], { maxAge: 60 })
    }

    const data = await fetchHalCsv(url)
    if (redis && data.length > 0) {
      await redis.set(KEY, data, { ex: TTL })
    }
    return jsonResponse(data, { maxAge: 3600 })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
