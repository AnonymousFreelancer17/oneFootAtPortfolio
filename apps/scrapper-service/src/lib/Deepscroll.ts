 export default async function deepAutoScroll(page: any) {
  console.log("📜 Starting deep auto-scroll...");

  await page.evaluate(async () => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    let lastHeight = document.body.scrollHeight;
    let sameHeightCounter = 0;

    for (let i = 0; i < 60; i++) {
      window.scrollTo(0, document.body.scrollHeight);
      await delay(6000);

      const newHeight = document.body.scrollHeight;
      const lazyImages = document.querySelectorAll("img[data-src], img[data-lazy]");
      lazyImages.forEach((img: any) => {
        if (img.dataset.src) img.src = img.dataset.src;
      });

      if (newHeight === lastHeight) {
        sameHeightCounter++;
        if (sameHeightCounter >= 3) break; // stop if no new content after 3 tries
      } else {
        sameHeightCounter = 0;
      }

      lastHeight = newHeight;
    }

    console.log("✅ Finished auto-scroll, all lazy content loaded.");
  });
}