import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 3600

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const kalkis = searchParams.get("kalkis")
  const varis = searchParams.get("varis")
  if (!kalkis || !varis || !/^\d+$/.test(kalkis) || !/^\d+$/.test(varis)) {
    return errorResponse("kalkis ve varis (sayı) gerekli", 400)
  }

  try {
    const data = await cached(`izban:sefer:${kalkis}-${varis}`, TTL, () =>
      fetchIzmir<unknown[]>(`/api/izban/sefersaatleri/${kalkis}/${varis}`),
    )
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
