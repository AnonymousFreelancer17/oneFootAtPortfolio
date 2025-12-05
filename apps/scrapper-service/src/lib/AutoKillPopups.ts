export default async function removeGenderPopup(page: any) {
  try {
    await page.waitForSelector('div[id*="gender"] button', {
      timeout: 8000
    }).catch(() => null);

    await page.evaluate(() => {
      const btns = document.querySelectorAll('button');
      btns.forEach((btn: any) => {
        if (btn.innerText.toLowerCase().includes("women") ||
            btn.innerText.toLowerCase().includes("men")) {
            btn.click();
        }
      });

      // Force remove modal
      const modal = document.querySelector('[role="dialog"], .gender-selection');
      if (modal) modal.remove();
      document.body.style.overflow = "auto";
    });

    console.log("✔ Gender popup removed.");
  } catch (err) {
    console.log("⚠ Could not find/remove gender popup:", err);
  }
}
