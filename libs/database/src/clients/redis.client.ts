import Redis from "ioredis";
import "dotenv/config";


declare global {
  var _redis: Redis | undefined;
}


export const redis =
  global._redis ||
  (() => {
    const url = process.env.REDIS_URL;
    if (!url) throw new Error("❌ REDIS_URL not found in .env");

    console.log("🔗 Connecting to Redis:", url);

    const client = new Redis(url, {
      reconnectOnError: () => true,
      maxRetriesPerRequest: 5,
      retryStrategy: (times) => Math.min(times * 200, 2000),
    });

    client.on("connect", () => console.log("✅ Redis connected"));
    client.on("error", (err) => console.error("❌ Redis error:", err?.message));

    if (process.env.NODE_ENV !== "production") {
      global._redis = client;
    }

    return client;
  })();
