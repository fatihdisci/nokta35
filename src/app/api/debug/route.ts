import { fetchIzmir } from "@/lib/api"
export const dynamic = "force-dynamic"
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const tip = searchParams.get("tip") ?? "etkinlik"
  const path = tip === "cevre"
    ? "/api/ibb/cevre/havadegerleri"
    : "/api/ibb/kultursanat/etkinlikler"
  try {
    const raw = await fetchIzmir<unknown>(path)
    const sample = Array.isArray(raw) ? raw.slice(0, 2) : 
      (typeof raw === "object" && raw !== null ? { keys: Object.keys(raw as object), first: Object.values(raw as object)[0]?.slice?.(0,2) ?? Object.values(raw as object)[0] } : raw)
    return Response.json({ path, sample })
  } catch (e) {
    return Response.json({ error: String(e) })
  }
}
