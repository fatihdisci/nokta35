import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 20

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const durak = searchParams.get("durak")
  if (!durak || !/^\d+$/.test(durak)) {
    return errorResponse("durak parametresi (sayı) gerekli", 400)
  }

  try {
    const data = await cached(`eshot:durak:${durak}`, TTL, () =>
      fetchIzmir<unknown[]>(`/api/iztek/duragayaklasanotobusler/${durak}`),
    )
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
