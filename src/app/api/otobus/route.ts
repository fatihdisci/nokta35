import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 30

type HatYanit = { HatOtobusKonumlari?: unknown[] }

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hatId = searchParams.get("hat")
  if (!hatId || !/^\d+$/.test(hatId)) {
    return errorResponse("hat parametresi (sayı) gerekli", 400)
  }

  try {
    const data = await cached(`otobus:hat:${hatId}`, TTL, () =>
      fetchIzmir<HatYanit>(`/api/iztek/hatotobuskonumlari/${hatId}`),
    )
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
