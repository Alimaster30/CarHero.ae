"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

const ACTIONS = [
  {
    label: "WhatsApp us!",
    href: site.whatsappHref,
    icon: "whatsapp" as const,
    tone: "text-[#25D366]",
    external: true,
  },
  {
    label: "Call your hero now",
    href: site.hotlineHref,
    icon: "phone" as const,
    tone: "text-navy",
    external: false,
  },
];

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);

  // Dismiss on outside click or Escape, like the reference widget.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={root}
      className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7"
    >
      <AnimatePresence>
        {open && (
          <motion.ul
            className="flex flex-col items-end gap-3"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transition: { staggerChildren: 0.07, staggerDirection: -1 } },
              closed: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {ACTIONS.map((action) => (
              <motion.li
                key={action.label}
                variants={{
                  open: { opacity: 1, y: 0, scale: 1 },
                  closed: { opacity: 0, y: reduced ? 0 : 14, scale: reduced ? 1 : 0.85 },
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={action.href}
                  {...(action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-2.5"
                >
                  <span className="bg-[#e7e7e7] px-3 py-1.5 text-[13px] font-medium text-navy shadow-[0_6px_18px_-8px_rgba(0,0,0,0.5)] transition-colors group-hover:bg-white">
                    {action.label}
                  </span>
                  <span
                    className={`grid size-12 place-items-center rounded-full bg-white shadow-[0_8px_22px_-8px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-110 ${action.tone}`}
                  >
                    <Icon name={action.icon} className="size-6" />
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Trigger, with the pulsing halo from the reference */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Contact CarHero"}
        className="relative grid size-14 place-items-center rounded-full bg-[#45dd5a] text-white shadow-[0_10px_28px_-8px_rgba(69,221,90,0.8)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-[60px]"
      >
        {!reduced && (
          <span
            aria-hidden="true"
            className="wa-halo absolute inset-0 rounded-full bg-[#45dd5a]"
          />
        )}
        {/* The reference keeps the handset icon in both states - it just
            settles slightly when the menu is open. */}
        <motion.span
          animate={{ scale: open ? 0.92 : 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Icon name="phone" className="size-6 sm:size-7" />
        </motion.span>
      </button>
    </div>
  );
}
