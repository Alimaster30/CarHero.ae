"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { faqs, site, testimonials } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealText } from "@/components/ui/Reveal";

function FaqItem({
  q,
  a,
  open,
  onToggle,
  id,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-hairline py-6">
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <span className="grid size-8 shrink-0 place-items-center bg-brand text-white">
          <Icon name="question" className="size-4" />
        </span>
        <h3 className="pt-1 text-[16px] leading-snug text-navy">{q}</h3>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[52ch] pl-12 pt-4 text-[14px] leading-[1.75] text-body">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="mt-5 flex w-full items-center justify-between text-[12px] font-semibold uppercase tracking-[0.09em] text-navy transition-colors hover:text-brand"
      >
        {open ? "Show Less" : "Show More"}
        <Icon
          name="plus"
          className={`size-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        />
      </button>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-navy">
          <RevealText text="Frequently asked questions" />
        </h2>

        <div className="mt-10 grid gap-x-14 border-t border-hairline lg:grid-cols-2">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              id={`faq-panel-${i}`}
              q={faq.q}
              a={faq.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        {/* Ask your question card */}
        <Reveal delay={0.1}>
          <div id="contact" className="mt-14 border border-hairline bg-surface-muted px-6 py-12 text-center scroll-mt-24">
            <h3 className="text-[26px] font-medium tracking-[-0.02em] text-navy sm:text-[30px]">
              Still stuck at the roadside?
            </h3>
            <p className="mx-auto mt-3 max-w-[46ch] text-[14px] leading-[1.7] text-body">
              Call the hotline and speak to a person. No app, no sign-up, and a
              price quoted before anyone is dispatched.
            </p>

            <div className="mt-6 flex justify-center -space-x-2.5">
              {testimonials.slice(0, 5).map((t) => (
                <span
                  key={t.name}
                  className="relative size-9 overflow-hidden rounded-full ring-2 ring-surface-muted"
                >
                  <Image src={t.avatar} alt="" fill sizes="36px" className="object-cover" />
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.hotlineHref}
                className="inline-flex h-12 items-center gap-2 bg-brand px-8 text-[12px] font-semibold uppercase tracking-[0.09em] text-white transition-all duration-300 hover:bg-brand-600 hover:-translate-y-0.5"
              >
                Call {site.hotlinePretty}
                <Icon name="arrow-up-right" className="size-4" />
              </a>
              <a
                href={site.whatsappHref}
                className="inline-flex h-12 items-center gap-2 border border-hairline bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.09em] text-navy transition-all duration-300 hover:border-brand hover:text-brand hover:-translate-y-0.5"
              >
                <Icon name="whatsapp" className="size-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
