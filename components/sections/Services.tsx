"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { services } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const list = useRef<HTMLUListElement>(null);

  // Raw pointer position, then a spring so the preview trails the cursor
  // rather than snapping to it.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 300, damping: 32, mass: 0.4 });
  const py = useSpring(y, { stiffness: 300, damping: 32, mass: 0.4 });

  const track = (e: MouseEvent<HTMLUListElement>) => {
    const box = list.current?.getBoundingClientRect();
    if (!box) return;
    x.set(e.clientX - box.left);
    y.set(e.clientY - box.top);
  };

  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-20">
        {/* Sticky title column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-navy">
            <RevealText text="Our Services" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-[38ch] text-[15px] leading-[1.75] text-body">
              From a flat tyre on Sheikh Zayed Road to a full pre-RTA inspection,
              we come to you with the right parts and an honest quote.
            </p>
          </Reveal>
        </div>

        {/* Service rows, with a cursor-following preview of the hovered service */}
        <ul
          ref={list}
          onMouseMove={track}
          onMouseLeave={() => setHovered(null)}
          className="relative divide-y divide-hairline border-t border-hairline"
        >
          {services.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 0.08}>
              <a
                href="#contact"
                onMouseEnter={() => setHovered(i)}
                className="group grid grid-cols-[auto_1fr] items-start gap-4 py-6 transition-[padding] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:sm:pl-3 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.15fr)_auto] sm:items-center sm:gap-6"
              >
                <span className="grid size-9 shrink-0 place-items-center bg-brand text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon name={service.icon} className="size-[18px]" />
                </span>

                <h3 className="eyebrow text-navy transition-colors duration-300 group-hover:text-brand">
                  {service.name}
                </h3>

                <p className="col-span-2 text-[14px] leading-[1.7] text-body sm:col-span-1">
                  {service.body}
                </p>

                <Icon
                  name="arrow-up-right"
                  className="hidden size-4 text-navy/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand sm:block"
                />
              </a>
            </Reveal>
          ))}

          {/* Preview follows the cursor. Pointer-events off so it can never
              steal the hover from the row underneath, and desktop-only since
              it is driven by a fine pointer. */}
          <motion.div
            aria-hidden="true"
            style={{ x: px, y: py }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
          >
            <AnimatePresence mode="wait">
              {hovered !== null && (
                <motion.div
                  key={services[hovered].name}
                  initial={{ opacity: 0, scale: 0.9, rotate: reduced ? 0 : -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.92, rotate: reduced ? 0 : 3 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[190px] w-[280px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_30px_60px_-25px_rgba(16,23,37,0.55)]"
                >
                  {/* Fixed intrinsic size rather than `fill`: with fill+sizes
                      the browser resolved the srcset inconsistently across the
                      AnimatePresence key swap and asked for the 3840w variant. */}
                  <Image
                    src={services[hovered].image}
                    alt=""
                    width={280}
                    height={190}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </ul>
      </div>
    </section>
  );
}
