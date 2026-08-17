import { Redis } from "@upstash/redis";

const COUNTER_KEY = "portfolio:visitors";

export function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

export async function getVisitorCount(): Promise<number | null> {
  const redis = getRedis();
  if (!redis) return null;

  const value = await redis.get<number | string>(COUNTER_KEY);
  if (value == null) return 0;
  return typeof value === "number" ? value : Number(value) || 0;
}

export async function incrementVisitorCount(): Promise<number | null> {
  const redis = getRedis();
  if (!redis) return null;

  return redis.incr(COUNTER_KEY);
}

export { COUNTER_KEY };
