import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = process.argv[2] || "motion";
const URL = "http://localhost:3210/";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
await page.goto(URL, { waitUntil: "networkidle" });

// Scroll a section to the top of the viewport, then sample it while it animates.
async function burst(id, label, offsets = [0, 120, 260, 420, 700]) {
  await page.evaluate((i) => {
    const el = document.getElementById(i);
    window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 40);
  }, id);
  let last = 0;
  for (const ms of offsets) {
    await page.waitForTimeout(ms - last);
    last = ms;
    await page.screenshot({ path: `${OUT}/${label}-${String(ms).padStart(4, "0")}ms.png` });
  }
}

await burst("why-us", "whyus");
await burst("licensed", "licensed");
await burst("impact", "impact", [0, 200, 500, 900, 1500]);

// Testimonial ticker: click next twice and sample the transition.
await page.evaluate(() => {
  const el = document.getElementById("testimonials");
  window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 40);
});
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/ticker-0-before.png` });
await page.getByLabel("Next review").click();
await page.waitForTimeout(220);
await page.screenshot({ path: `${OUT}/ticker-1-mid.png` });
await page.waitForTimeout(700);
await page.getByLabel("Next review").click();
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/ticker-2-after.png` });

// Hero scroll-out.
for (const y of [0, 180, 340]) {
  await page.evaluate((v) => window.scrollTo(0, v), y);
  await page.waitForTimeout(350);
  await page.screenshot({ path: `${OUT}/hero-scroll-${y}.png` });
}

console.log("motion frames captured");
await browser.close();
