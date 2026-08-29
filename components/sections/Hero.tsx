"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { hero, infoBar, site } from "@/lib/site";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealText } from "@/components/ui/Reveal";

function StatCard({
  value,
  suffix,
  label,
  tone,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  tone: "brand" | "navy";
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="flex-1">
      <div
        className={`group flex h-[150px] flex-col justify-between p-5 transition-transform duration-500 hover:-translate-y-1 sm:h-[207px] sm:p-7 ${
          tone === "brand" ? "bg-brand" : "bg-navy"
        }`}
      >
        <p className="text-[34px] font-medium leading-none text-white sm:text-[42px]">
          <CountUp to={value} suffix={suffix} />
        </p>
        <div className="flex items-end justify-between gap-3">
          <p className="text-[12px] font-semibold text-white/90">{label}</p>
          <Icon
            name="arrow-up-right"
            className="size-4 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // The reference fades and lifts the hero copy away as the photo scrolls up.
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end start"],
  });
  const copyOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.45], [0, -70]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section id="home" ref={section} className="relative">
      {/* Copy block ------------------------------------------------- */}
      <motion.div
        style={reduced ? undefined : { opacity: copyOpacity, y: copyY }}
        className="container-x relative z-20 pt-14 pb-0 sm:pt-16 lg:pt-20"
      >
        <h1 className="max-w-[15ch] text-display font-medium leading-[1.06] tracking-[-0.025em] text-navy">
          <RevealText text={hero.heading[0]} />{" "}
          <span className="block">
            <RevealText text={hero.heading[1]} delay={0.18} />
          </span>
        </h1>

        <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <Reveal delay={0.3} className="lg:pl-[114px]">
            <p className="max-w-[46ch] text-[15px] leading-[1.75] text-body">
              {hero.body}
            </p>
          </Reveal>

          {/* Dotted grid motif */}
          <div
            aria-hidden="true"
            className="dot-grid hidden h-[70px] w-[200px] justify-self-end lg:block"
          />
        </div>

        {/* Stat cards overlap the photo below */}
        <div className="mt-8 flex max-w-[711px] gap-4 sm:gap-[25px] lg:ml-[114px] lg:-mb-[86px]">
          {hero.stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              tone={stat.tone}
              delay={0.4 + i * 0.1}
            />
          ))}
        </div>
      </motion.div>

      {/* Full-bleed photograph, drifting slowly on scroll ----------- */}
      <div className="relative z-10 h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[540px]">
        <motion.div style={reduced ? undefined : { scale: imageScale }} className="absolute inset-0">
          <Image
            src={hero.image}
            alt="A CarHero mechanic working under the bonnet of a customer's car"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Floating info bar ----------------------------------------- */}
      <div className="container-x relative z-20 -mt-16 lg:-mt-14">
        <Reveal>
          <div className="border-l-[3px] border-brand bg-white p-5 shadow-[0_24px_60px_-32px_rgba(16,23,37,0.4)] sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[1fr_1fr_auto] lg:items-center lg:gap-8">
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center bg-brand-50 text-brand">
                  <Icon name="pin" className="size-[18px]" />
                </span>
                <div>
                  <p className="text-[12px] text-body">{infoBar.location.label}</p>
                  <p className="text-[14px] font-medium text-navy">
                    {infoBar.location.value}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:border-l lg:border-hairline lg:pl-8">
                <span className="grid size-9 shrink-0 place-items-center bg-brand-50 text-brand">
                  <Icon name="clock" className="size-[18px]" />
                </span>
                <div>
                  <p className="text-[12px] text-body">{infoBar.hours.label}</p>
                  <p className="text-[14px] font-medium text-navy">
                    {infoBar.hours.value}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.hotlineHref}
                  className="inline-flex h-11 items-center justify-center bg-brand px-6 text-[12px] font-semibold uppercase tracking-[0.09em] text-white transition-all duration-300 hover:bg-brand-600 hover:-translate-y-0.5"
                >
                  Book Appointment
                </a>
                <a
                  href={site.hotlineHref}
                  className="inline-flex h-11 items-center justify-center gap-2 border border-hairline px-6 text-[12px] font-semibold uppercase tracking-[0.09em] text-brand transition-all duration-300 hover:border-brand hover:-translate-y-0.5"
                >
                  <Icon name="phone" className="size-4" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
