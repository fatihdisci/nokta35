import { fetchHavaDurumu } from "@/lib/hava"
import { jsonResponse, errorResponse } from "@/lib/api"

export const revalidate = 0
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const data = await fetchHavaDurumu()
    return jsonResponse(data, { maxAge: 900 })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
