import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error("❌ REDIS_URL is not defined in environment variables");
}

export const redis = new Redis(redisUrl);

// Optional connection events
redis.on("connect", () => {
  console.log("🔗 Redis connected");
});

redis.on("error", (err) => {
  console.error("❌ Redis error:", err);
});
