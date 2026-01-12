// controllers/geo.controller.ts
import axios from "axios";
import { Request, Response } from "express";
// import  {redis}  from "@libs/database";

/* ----------------------------------
   CONFIG
---------------------------------- */
const GEO_CACHE_KEY = "geo:location";
const CACHE_TTL = 60 * 60 * 24; // 24 hours (seconds)

/* ----------------------------------
   TYPES
---------------------------------- */
export type GeoCache = {
  country: string;
  countryCode: string;
  callingCode: string;
  currency: string;
  timezone: string;
  language: string;
  ip: string;
  region: string;
  city: string;
  postalCode: string;
  cachedAt: number;
};

/* ----------------------------------
   HELPERS
---------------------------------- */
function getClientIp(req: Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }
  return req.socket.remoteAddress || "";
}

/* ----------------------------------
   CONTROLLER
---------------------------------- */
export async function getGeoLocation(req: Request, res: Response) {
  try {
    /* ---------------------------
       1️⃣ Redis Cache Check
    --------------------------- */
    // const cached = await redis.get(GEO_CACHE_KEY);
    // if (cached) {
    //   return res.json({
    //     ...JSON.parse(cached),
    //     source: "redis",
    //   });
    // }

    /* ---------------------------
       2️⃣ Get client IP
    --------------------------- */
    const ip = getClientIp(req);

    /* ---------------------------
       3️⃣ Fetch from Provider
    --------------------------- */
    const { data } = await axios.get("https://ipapi.co/json/", {
      timeout: 5000,
      headers: {
        "User-Agent": "geo-service/1.0",
      },
    });

    const geo: GeoCache = {
      country: data.country_name || "India",
      countryCode: data.country_code || "IN",
      callingCode: data.country_calling_code || "+91",
      currency: data.currency || "INR",
      timezone: data.timezone || "Asia/Kolkata",
      language: data.languages?.split(",")[0] || "en-IN",
      region: data.region || "",
      city: data.city || "",
      postalCode: data.postal || "",
      ip: data.ip || ip,
      cachedAt: Date.now(),
    };

    /* ---------------------------
       4️⃣ Save to Redis
    --------------------------- */
    // await redis.set(
    //   GEO_CACHE_KEY,
    //   JSON.stringify(geo),
    //   "EX",
    //   CACHE_TTL
    // );

    return res.json({
      ...geo,
      source: "api",
    });
  } catch (err: any) {
    /* ---------------------------
       5️⃣ Rate limit / fallback
    --------------------------- */
    if (err.response?.status === 429) {
      return res.json({
        country: "India",
        countryCode: "IN",
        callingCode: "+91",
        currency: "INR",
        timezone: "Asia/Kolkata",
        language: "en-IN",
        region: "",
        city: "",
        postalCode: "",
        ip: "",
        source: "fallback",
      });
    }

    console.error("Geo error:", err.message);
    return res.status(500).json({
      error: "Failed to detect location",
    });
  }
}
