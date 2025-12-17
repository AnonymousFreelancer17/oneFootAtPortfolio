// utils/killLimeRoadPopup.ts
import { Page, Browser } from "puppeteer";

export default async function killLimeRoadPopup(
  page: Page,
  browser: Browser,
  url: string
) {
  console.log("🔵 killLimeRoadPopup: INIT");

  // -------------------------------------------------------------
  // 1) PREEMPTIVE OVERRIDES BEFORE ANY SITE JS RUNS
  // -------------------------------------------------------------
  await page.evaluateOnNewDocument(() => {
    try {
      console.log("[PREEMPTIVE] Running script-blocker");

      try {
        localStorage.setItem("limeroad_nup_shown", "1");
      } catch (e) {}

      // Disable popups & dialogs
      (window as any).open = () => null;
      (window as any).alert = () => false;
      (window as any).confirm = () => false;
      (window as any).prompt = () => null;

      // Disable jQuery popup triggers
      try {
        if ((window as any).$) {
          (window as any).$.click = function () {};
        }
      } catch {}

      // Block internal popup function
      (window as any).alakhNiranjan = null;

      // Patch appendChild
      const originalAppend = Element.prototype.appendChild;
      (Element.prototype as any).appendChild = function (child: any) {
        try {
          const id = child?.id || "";
          const cls = child?.className || "";

          if (/gender|popup|nup|hvh100|new-user/i.test(id + " " + cls)) {
            console.log("[BLOCKED appendChild]", id, cls);
            return child; // prevent insert
          }
        } catch {}
        return originalAppend.call(this, child);
      };

      // Patch insertBefore
      const originalInsertBefore = Element.prototype.insertBefore;
      (Element.prototype as any).insertBefore = function (node: any, ref: any) {
        try {
          const id = node?.id || "";
          const cls = node?.className || "";

          if (/gender|popup|nup|hvh100|new-user/i.test(id + " " + cls)) {
            console.log("[BLOCKED insertBefore]", id, cls);
            return node;
          }
        } catch {}
        return originalInsertBefore.call(this, node, ref);
      };
    } catch (err) {
      console.warn("❌ Preemptive overrides failed:", err);
    }
  });

  // -------------------------------------------------------------
  // 2) NETWORK REQUEST BLOCKER
  // -------------------------------------------------------------
  await page.setRequestInterception(true);

  const blockList = [
    "feed_nup_v1",
    "feed_nup",
    "nup",
    "genderSelectPopup",
    "gender",
    "onboarding",
    "popup",
  ];

  page.on("request", (req:any) => {
    const u = req.url();
    if (blockList.some((b) => u.includes(b))) {
      console.log("🚫 BLOCKED REQUEST:", u);
      return req.abort();
    }
    req.continue();
  });

  // -------------------------------------------------------------
  // 3) KILL POPUP WINDOWS & ALERTS
  // -------------------------------------------------------------
  page.on("popup", async (popup) => {
    console.log("🚫 popup window blocked");
    try {
      if (popup) {
        await popup.close();
      }
    } catch {}
  });

  page.on("dialog", async (dlg) => {
    console.log("🚫 dialog dismissed");
    try {
      await dlg.dismiss();
    } catch {}
  });

  browser.on("targetcreated", async () => {
    try {
      const pages = await browser.pages();
      if (pages.length > 1) {
        console.log("🚫 extra tab blocked");
        const last = pages[pages.length - 1];
        if (last && !last.isClosed()) await last.close();
      }
    } catch {}
  });

  // -------------------------------------------------------------
  // 4) GO TO PAGE
  // -------------------------------------------------------------
  console.log("🌐 Navigating:", url);
  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  // -------------------------------------------------------------
  // 5) REMOVE CURRENT POPUPS (Fail-safe)
  // -------------------------------------------------------------
  await page.evaluate(() => {
    console.log("[REMOVE] running manual popup removal");

    const sel = [
      "#genderSelectPopup",
      ".new-user-popup",
      ".hvh100",
      ".pF",
      ".gender-container",
      ".title-container",
      ".signup-modal",
      ".modal-backdrop",
      ".modal",
    ];

    sel.forEach((s) => {
      document.querySelectorAll(s).forEach((el) => {
        console.log("[REMOVE]", s);
        el.remove();
      });
    });

    document.documentElement.classList.add("nup-removed");
  });

  // -------------------------------------------------------------
  // 6) ADD CSS TO FORCE HIDE POPUP
  // -------------------------------------------------------------
  await page.addStyleTag({
    content: `
      #genderSelectPopup,
      .new-user-popup,
      .hvh100,
      .pF,
      .gender-container,
      .title-container,
      .modal,
      .signup-modal,
      .modal-backdrop {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `,
  });

  // -------------------------------------------------------------
  // 7) MUTATION OBSERVER → DELETE POPUP IF IT APPEARS AGAIN
  // -------------------------------------------------------------
  await page.evaluate(() => {
    console.log("[MUTATION] MutationObserver active");

    const dangerous = /(gender|popup|nup|new-user|modal|hvh100|pF)/i;

    const kill = (node: any) => {
      if (!node) return;
      const id = node.id || "";
      const cls = node.className || "";
      if (dangerous.test(id + " " + cls)) {
        console.log("[MUTATION REMOVE]", id, cls);
        node.remove();
      }
    };

    const observer = new MutationObserver((muts) => {
      muts.forEach((m) => {
        m.addedNodes.forEach((n) => kill(n));
        if (m.type === "attributes") kill(m.target);
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["id", "class", "style"],
    });
  });

  console.log("✅ Popup killer active");

  return true;
}
