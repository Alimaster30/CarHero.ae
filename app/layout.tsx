import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carhero.ae"),
  title: {
    default: "CarHero - Roadside Car Help Anywhere in Dubai",
    template: "%s | CarHero",
  },
  description:
    "Licensed roadside tyre changes, battery replacement, mobile car servicing and Pre-RTA testing across Dubai. One hotline, no apps, no hidden charges. Call 058-58-1-HERO.",
  keywords: [
    "roadside assistance Dubai",
    "mobile tyre change Dubai",
    "car battery replacement Dubai",
    "mobile car service UAE",
    "pre-RTA test Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "CarHero",
    title: "CarHero - Roadside Car Help Anywhere in Dubai",
    description:
      "Tyres, batteries, mobile servicing and Pre-RTA testing brought to you. Licensed by the DED and RTA. No apps, no sign-ups, no hidden charges.",
    images: ["/images/hero/workshop.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1c58f4",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
