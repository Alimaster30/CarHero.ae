import { chromium } from "playwright";

const URL = process.argv[2] || "http://localhost:3212/";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle" });

const targets = [
  ["h1 (hero)", "#home h1"],
  ["hero body", "#home p.max-w-\\[46ch\\]"],
  ["h2 (services)", "#services h2"],
  ["services blurb", "#services .lg\\:sticky p"],
  ["service row name", "#services h3"],
  ["service row body", "#services li p"],
  ["cert eyebrow", "#licensed li p"],
  ["cert title", "#licensed h3"],
  ["process title", "#process h3"],
  ["process body", "#process li p"],
  ["testimonial quote", "#testimonials blockquote"],
  ["whyus feature title", "#why-us h3"],
  ["whyus feature body", "#why-us h3 + p"],
  ["impact figure", "#impact dd"],
  ["impact label", "#impact dt"],
  ["faq question", "#faq h3"],
  ["nav link", "header nav a"],
  ["footer link", "footer nav a"],
];

const rows = [];
for (const [label, sel] of targets) {
  const v = await page.evaluate((s) => {
    const el = document.querySelector(s);
    if (!el) return null;
    const c = getComputedStyle(el);
    return { size: c.fontSize, lh: c.lineHeight, weight: c.fontWeight };
  }, sel);
  rows.push({ element: label, ...(v || { size: "—", lh: "—", weight: "—" }) });
}
console.table(rows);
await browser.close();
