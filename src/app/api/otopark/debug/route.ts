import { fetchIzmir, jsonResponse, errorResponse } from "@/lib/api"

export const dynamic = "force-dynamic"
export const revalidate = 0

// Returns first 3 raw otopark items directly from İzmir API (no Redis).
// Use /api/otopark/debug to inspect the actual field names from the source.
export async function GET() {
  try {
    const data = await fetchIzmir<unknown[]>("/api/ibb/izum/otoparklar")
    const sample = Array.isArray(data) ? data.slice(0, 3) : data
    return jsonResponse({ count: Array.isArray(data) ? data.length : null, sample, ts: Date.now() })
  } catch (e) {
    return errorResponse((e as Error).message)
  }
}
