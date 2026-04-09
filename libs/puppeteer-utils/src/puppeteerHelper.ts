import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { getRandomUserAgent } from "./userAgents.js";

puppeteer.use(StealthPlugin());

export async function createBrowserSession(
  useProxy: boolean = false,
  proxy?: string,
  maxPages: number = 5 // 🔥 number of parallel tabs
) {
  const args = [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-blink-features=AutomationControlled",
  ];

  if (useProxy && proxy) args.push(`--proxy-server=${proxy}`);

  const browser = await puppeteer.launch({
    headless: true,
    args,
  });

  const context = await browser.createBrowserContext();

  const pages = [];

  for (let i = 0; i < maxPages; i++) {
    const page = await context.newPage();

    const ua = getRandomUserAgent();

    await page.setUserAgent(ua);
    await page.setViewport({
      width: Math.floor(Math.random() * (1920 - 1366)) + 1366,
      height: Math.floor(Math.random() * (1080 - 768)) + 768,
    });

    await page.setExtraHTTPHeaders({
      "Accept-Language": "en-US,en;q=0.9",
    });

    pages.push(page);
  }

  return { browser, context, pages };
}

export async function safeClose(browser: any) {
  if (!browser) return;

  try {
    const pages = await browser.pages();

    // 🔥 Close all pages safely
    await Promise.all(
      pages.map(async (page:any) => {
        try {
          if (!page.isClosed()) {
            await page.close();
          }
        } catch (err) {
          console.warn("⚠️ Failed to close page");
        }
      })
    );

    // 🔥 Close browser context if exists
    try {
      const contexts = browser.browserContexts?.() || [];
      await Promise.all(
        contexts.map(async (ctx: any) => {
          try {
            await ctx.close();
          } catch {
            console.warn("⚠️ Failed to close context");
          }
        })
      );
    } catch {}

    // 🔥 Finally close browser
    if (browser.isConnected()) {
      await browser.close();
    }

    console.log("🧹 Browser session closed safely");
  } catch (err) {
    console.error("❌ Error during safeClose:", err);

    // 🔥 Force kill (last fallback)
    try {
      browser.process()?.kill("SIGKILL");
      console.log("💀 Browser force killed");
    } catch {}
  }
}