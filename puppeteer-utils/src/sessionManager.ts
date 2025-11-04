// libs/puppeteer-utils/src/sessionManager.ts
import { createBrowserSession, safeClose } from "./puppeteerHelper.js";

let activeSessionCount = 0;

export async function rotateSession(scrapeFn:any, useProxy = false, proxyList = []) {
  const proxy = useProxy && proxyList.length > 0
    ? proxyList[Math.floor(Math.random() * proxyList.length)]
    : undefined;

  const { browser, page } = await createBrowserSession(useProxy, proxy);

  try {
    activeSessionCount++;
    console.log(`🧭 Using session #${activeSessionCount} ${proxy ? `via ${proxy}` : ""}`);
    const result = await scrapeFn(page);
    return result;
  } catch (err) {
    console.error("❌ Scrape failed:", err);
    return null;
  } finally {
    await safeClose(browser);
  }
}
