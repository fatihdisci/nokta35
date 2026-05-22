export const IZMIR_API = "https://openapi.izmir.bel.tr"

export async function fetchIzmir<T>(path: string, init?: RequestInit): Promise<T> {
  const url = path.startsWith("http") ? path : `${IZMIR_API}${path}`
  const res = await fetch(url, {
    ...init,
    headers: { Accept: "application/json", ...(init?.headers ?? {}) },
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error(`Izmir API ${res.status} on ${path}`)
  }
  return (await res.json()) as T
}

export function parseCoord(s: string | number | null | undefined): number {
  if (s === null || s === undefined) return NaN
  if (typeof s === "number") return s
  return parseFloat(String(s).replace(",", "."))
}

export function jsonResponse<T>(data: T, opts?: { maxAge?: number }) {
  const sMaxAge = opts?.maxAge ?? 30
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": `public, s-maxage=${sMaxAge}, stale-while-revalidate=${sMaxAge * 2}`,
    },
  })
}

export function errorResponse(message: string, status = 500) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  })
}
