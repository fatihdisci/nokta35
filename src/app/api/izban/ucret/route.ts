import { cached } from "@/lib/redis"
import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

const TTL = 86400

type Ucret = {
  TamUcret?: number
  OgrenciUcret?: number
  Yas60Ucret?: number
  ToplamKm?: number
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const binis = searchParams.get("binis")
  const inis = searchParams.get("inis")
  const aktarma = searchParams.get("aktarma") ?? "1"
  const hgs = searchParams.get("hgs") ?? "false"

  if (!binis || !inis || !/^\d+$/.test(binis) || !/^\d+$/.test(inis)) {
    return errorResponse("binis ve inis (sayı) gerekli", 400)
  }

  try {
    const data = await cached(
      `izban:ucret:${binis}-${inis}-${aktarma}-${hgs}`,
      TTL,
      () =>
        fetchIzmir<Ucret>(
          `/api/izban/tutarhesaplama/${binis}/${inis}/${aktarma}/${hgs}`,
        ),
    )
    return jsonResponse(data, { maxAge: TTL })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
