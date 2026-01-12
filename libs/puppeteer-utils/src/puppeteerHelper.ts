// libs/puppeteer-utils/src/puppeteerHelper.ts
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { getRandomUserAgent } from "./userAgents.js";

puppeteer.use(StealthPlugin());

export async function createBrowserSession(
  useProxy: boolean = false,
  proxy?: string
) {
  const args = [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-blink-features=AutomationControlled",
    "--start-maximized"
  ];

  if (useProxy && proxy) args.push(`--proxy-server=${proxy}`);

  const browser = await (puppeteer as any).launch({
    headless: true,
    defaultViewport: null,
    args,
  });

  const context = await browser.createBrowserContext();
  const page = await context.newPage();

  // Set random user-agent and viewport
  const ua = getRandomUserAgent();
  await page.setUserAgent(ua);
  await page.setViewport({
    width: Math.floor(Math.random() * (1920 - 1366)) + 1366,
    height: Math.floor(Math.random() * (1080 - 768)) + 768,
  });

  // Extra headers
  await page.setExtraHTTPHeaders({
    "Accept-Language": "en-US,en;q=0.9",
  });

  return { browser, page };
}

export async function safeClose(browser:any) {
  try {
    if (browser) await browser.close();
  } catch (err) {
    console.warn("Browser close failed:", err);
  }
}
