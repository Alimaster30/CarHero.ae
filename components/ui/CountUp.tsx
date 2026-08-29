"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Numbers on the reference site tick up from zero the first time they scroll
 * into view (hero stats, Our Impact bars, Featured Videos view counts).
 */
export function CountUp({
  to,
  suffix = "",
  duration = 1800,
  format = true,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  format?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutQuint, matching the site's --ease-out-quint
      const eased = 1 - Math.pow(1 - t, 5);
      setValue(to * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reduced]);

  const rounded = Math.round(value);

  return (
    <span ref={ref} className={className}>
      {format ? rounded.toLocaleString("en-US") : rounded}
      {suffix}
    </span>
  );
}
