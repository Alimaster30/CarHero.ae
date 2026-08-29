"use client";

import { motion, useReducedMotion } from "motion/react";
import { impact } from "@/lib/site";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export function Impact() {
  const reduced = useReducedMotion();

  return (
    <section id="impact" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center">
          <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-navy">
            <RevealText text="Our Impact" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-[44ch] text-[15px] leading-[1.75] text-body">
              Thousands of drivers across the Emirates have been back on the road
              within the hour.
            </p>
          </Reveal>
        </div>

        {/* The reference sets each figure ABOVE its bar, on the page ground -
            the bar itself is purely hatch + fill, which is what makes it read
            as tall as it does. */}
        <dl className="mt-14 grid grid-cols-2 gap-3 sm:gap-[18px] lg:grid-cols-4">
          {impact.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.09}>
              <dd className="text-[26px] font-medium leading-none text-navy sm:text-[32px]">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </dd>

              <div className="hatch relative mt-4 h-[240px] overflow-hidden sm:h-[389px]">
                {/* Filled portion of the bar */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 border-t-[3px] border-brand bg-navy"
                  initial={{ height: reduced ? `${stat.height * 100}%` : "0%" }}
                  whileInView={{ height: `${stat.height * 100}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.15 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <dt className="absolute inset-x-0 bottom-0 px-4 pb-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-white sm:px-5 sm:pb-5 sm:text-[12px]">
                    {stat.label}
                  </dt>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
