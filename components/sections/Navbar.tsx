"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-hairline),0_8px_24px_-18px_rgba(16,23,37,0.35)]" : ""
      }`}
    >
      <div className="container-x flex h-[62px] items-center justify-between gap-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[14px] text-navy/80 transition-colors duration-200 hover:text-brand
                         after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.hotlineHref}
            className="flex items-center gap-2 text-[13.5px] text-navy/75 transition-colors hover:text-brand"
          >
            <Icon name="phone" className="size-4" />
            {site.hotlinePretty}
          </a>
          <a
            href={site.hotlineHref}
            className="inline-flex h-9 items-center bg-brand px-5 text-[12px] font-semibold uppercase tracking-[0.09em] text-white
                       transition-all duration-300 hover:bg-brand-600 hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-9 place-items-center bg-brand text-white lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="size-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hairline bg-white lg:hidden"
          >
            <nav className="container-x flex flex-col py-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline py-3.5 text-[16px] text-navy last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 pb-2">
                <a
                  href={site.hotlineHref}
                  className="inline-flex h-11 items-center justify-center gap-2 bg-brand text-xs font-semibold uppercase tracking-[0.09em] text-white"
                >
                  <Icon name="phone" className="size-4" />
                  Call {site.hotlinePretty}
                </a>
                <a
                  href={site.whatsappHref}
                  className="inline-flex h-11 items-center justify-center gap-2 border border-hairline text-xs font-semibold uppercase tracking-[0.09em] text-navy"
                >
                  <Icon name="whatsapp" className="size-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
