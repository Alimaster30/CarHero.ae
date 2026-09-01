"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const active = testimonials[index];
  const go = (step: number) =>
    setIndex((i) => (i + step + testimonials.length) % testimonials.length);

  // Each column scrolls independently, so each carries the full set and is
  // duplicated once for the seamless -50% loop. The right column starts a few
  // portraits in so the two sides never show the same face at the same height.
  const offset = Math.ceil(testimonials.length / 2);
  const columns = [
    testimonials,
    [...testimonials.slice(offset), ...testimonials.slice(0, offset)],
  ];

  // The column advances on its own, so the grid is always in motion. Pauses on
  // hover/focus and whenever the tab is hidden, and is disabled outright for
  // anyone who prefers reduced motion.
  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  return (
    <section id="testimonials" className="bg-ink py-20 lg:py-28">
      <div className="container-x">
        <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-white">
          <RevealText text="What Our Customers Say" />
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.75] text-body-dark">
            Don&apos;t just take our word for it. Here&apos;s what drivers across
            Dubai say after we&apos;ve got them moving again.
          </p>
        </Reveal>

        <div
          className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,230px)_minmax(0,1fr)] lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Photo ticker ---------------------------------------- */}
          <Reveal direction="right">
            {/* Capped so tiles stay ~110px at every breakpoint - the source
                avatars are only 75px, so a wider column just upscales them. */}
            <div className="relative h-[300px] max-w-[240px] overflow-hidden [mask-image:linear-gradient(180deg,transparent,#000_16%,#000_84%,transparent)]">
              <div className="grid grid-cols-2 gap-2.5">
                {columns.map((column, col) => (
                  <div
                    key={col}
                    className={`flex flex-col gap-2.5 ${
                      reduced ? "" : col === 0 ? "ticker-up" : "ticker-down"
                    } ${paused ? "[animation-play-state:paused]" : ""} ${
                      col === 1 ? "-mt-5" : ""
                    }`}
                  >
                    {[...column, ...column].map((t, i) => {
                      const first = i < column.length;
                      return (
                        /* Outer element owns the one-time entrance, inner element
                           owns the active/inactive state, so the two never fight
                           over the same inline style. */
                        <motion.div
                          key={`${t.name}-${i}`}
                          initial={{ opacity: 0, scale: reduced ? 1 : 0.82 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-40px 0px" }}
                          transition={{
                            duration: 0.55,
                            delay: (i % column.length) * 0.07,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <motion.button
                            type="button"
                            onClick={() => setIndex(testimonials.indexOf(t))}
                            aria-label={`Show review from ${t.name}`}
                            aria-current={active.name === t.name}
                            tabIndex={first ? 0 : -1}
                            aria-hidden={!first}
                            animate={{ opacity: active.name === t.name ? 1 : 0.55 }}
                            whileHover={{ opacity: 0.85, scale: 1.06 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative block aspect-square w-full overflow-hidden bg-white/[0.07] ${
                              active.name === t.name ? "ring-2 ring-brand" : ""
                            }`}
                          >
                            {/* Source avatars are circular crops with transparent
                                corners. Scaling past the square's diagonal (√2)
                                makes the circle cover the tile, so these read as
                                square photos rather than circles in boxes. */}
                            <Image
                              src={t.avatar}
                              alt=""
                              fill
                              sizes="110px"
                              className="scale-[1.45] object-cover"
                            />
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Fixed marker the portraits scroll past, as in the reference */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[104px] grid size-7 -translate-x-1/2 place-items-center bg-brand text-white"
              >
                <Icon name="quote" className="size-3.5" />
              </span>
            </div>
          </Reveal>

          {/* Quote card ------------------------------------------ */}
          <Reveal direction="left" className="min-w-0">
            <div className="flex min-h-[248px] flex-col justify-between bg-white/[0.045] p-6 sm:p-8">
              <div>
                <Icon name="quote" className="size-6 text-brand" />

                <div className="mt-5 flex gap-1" aria-label={`${active.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className={`size-4 ${i < active.rating ? "text-white" : "text-white/25"}`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={active.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5 max-w-[62ch] text-[16px] leading-[1.7] text-white/90"
                  >
                    &ldquo;{active.quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-end justify-between gap-6 border-t border-hairline-dark pt-5">
                <div className="flex items-center gap-3">
                  <span className="relative size-9 shrink-0 overflow-hidden rounded-full">
                    <Image src={active.avatar} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{active.name}</p>
                    <p className="text-[12px] text-body-dark">{active.role}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous review"
                    className="grid size-9 place-items-center bg-white/8 text-white transition-colors hover:bg-brand"
                  >
                    <Icon name="chevron-left" className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next review"
                    className="grid size-9 place-items-center bg-white/8 text-white transition-colors hover:bg-brand"
                  >
                    <Icon name="chevron-right" className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
