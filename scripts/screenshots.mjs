import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = process.argv[2] || "shots";
const URL = "http://localhost:3302/";
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  await page.goto(URL, { waitUntil: "networkidle" });

  // Walk the page so every scroll-triggered reveal fires, then return to top.
  const total = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < total; y += Math.round(vp.height * 0.7)) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(160);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);

  // Full page in one image.
  await page.screenshot({ path: `${OUT}/${vp.name}-full.png`, fullPage: true });

  // Plus one viewport-sized frame per section, for close reading.
  const ids = await page.evaluate(() =>
    [...document.querySelectorAll("section[id]")].map((s) => s.id)
  );
  for (const id of ids) {
    await page.evaluate((i) => {
      const el = document.getElementById(i);
      window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 8);
    }, id);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `${OUT}/${vp.name}-${id}.png` });
  }

  console.log(vp.name, "sections:", ids.join(", "), "height:", total);
  await page.close();
}

await browser.close();
