import { Redis } from "@upstash/redis"

const url = process.env.UPSTASH_REDIS_REST_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN

export const redis =
  url && token ? new Redis({ url, token }) : null

export async function cached<T>(
  key: string,
  ttlSeconds: number,
  fetcher: () => Promise<T>,
): Promise<T> {
  if (!redis) return fetcher()

  try {
    const hit = await redis.get<T>(key)
    if (hit !== null && hit !== undefined) return hit
  } catch {
    // ignore cache read errors
  }

  const fresh = await fetcher()
  try {
    await redis.set(key, fresh, { ex: ttlSeconds })
    // track when we last fetched from the source
    await redis.set(`${key}:ts`, Math.floor(Date.now() / 1000), {
      ex: ttlSeconds + 600,
    })
  } catch {
    // ignore cache write errors
  }
  return fresh
}

export async function getCacheTimestamp(key: string): Promise<number | null> {
  if (!redis) return null
  try {
    return await redis.get<number>(`${key}:ts`)
  } catch {
    return null
  }
}
