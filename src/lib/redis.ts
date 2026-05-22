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
  } catch {
    // ignore cache write errors
  }
  return fresh
}
