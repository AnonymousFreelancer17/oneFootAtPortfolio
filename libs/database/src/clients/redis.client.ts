import Redis from "ioredis";
declare global {
  // allow global caching in dev mode
  var __redisClient: Redis | undefined;
}

const createRedis = () => {
  const url = process.env.REDIS_URL;
  if (!url) throw new Error("❌ REDIS_URL missing in .env");

  const client = new Redis(url, {
    tls: {}, // required for Upstash
    maxRetriesPerRequest: null, // Upstash requires disabling this
    enableReadyCheck: false,    // Upstash requires disabling this
    reconnectOnError: () => true,
  });

  client.on("connect", () => console.log("✅ Redis connected"));
  client.on("error", (err) => console.error("❌ Redis error:", err?.message));

  return client;
};

export const redis =
  process.env.NODE_ENV === "production"
    ? createRedis()
    : global.__redisClient ?? (global.__redisClient = createRedis());
