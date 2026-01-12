import fs from "fs";
import path from "path";

/* ----------------------------------------
   🔹 BASE CACHE DIRECTORY
---------------------------------------- */
const BASE_CACHE_DIR = path.resolve(
  "apps/scrapper-service/tmp_cache"
);

/* ----------------------------------------
   🔹 HELPERS
---------------------------------------- */
function ensureDir(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function resolveCachePath(route: string) {
  // "limeroad/categories" → limeroad/categories.json
  return path.join(BASE_CACHE_DIR, `${route}.json`);
}

/* ----------------------------------------
   🔹 PUBLIC API
---------------------------------------- */

/**
 * Check if cache exists
 */
export function cacheExists(route: string): boolean {
  return fs.existsSync(resolveCachePath(route));
}

/**
 * Read cache safely
 */
export function readCache<T>(route: string): T | null {
  try {
    const filePath = resolveCachePath(route);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch (err) {
    console.error("❌ Cache read failed:", err);
    return null;
  }
}

/**
 * Write cache safely
 */
export function writeCache<T>(route: string, data: T): void {
  try {
    const filePath = resolveCachePath(route);
    ensureDir(filePath);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("❌ Cache write failed:", err);
  }
}

/**
 * Get or Set cache (🔥 ONE-LINER USAGE)
 */
export async function getOrSetCache<T>(
  route: string,
  fetcher: () => Promise<T>
): Promise<T> {
  const cached = readCache<T>(route);
  if (cached) {
    console.log(`⚡ Cache hit → ${route}`);
    return cached;
  }

  console.log(`🧭 Cache miss → ${route}`);
  const data = await fetcher();
  writeCache(route, data);

  return data;
}

/**
 * Force delete cache (admin / refresh)
 */
export function clearCache(route: string) {
  const filePath = resolveCachePath(route);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}
