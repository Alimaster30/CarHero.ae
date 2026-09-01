"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

/**
 * The reference reveals its feature photography behind a set of brand-blue
 * vertical blinds: the image is fully covered, then each bar narrows to nothing
 * on a stagger, wiping the picture in from left to right.
 */
export function BlindsImage({
  src,
  alt,
  className = "",
  sizes,
  bars = 7,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  bars?: number;
  priority?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />

      {!reduced && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex">
          {Array.from({ length: bars }, (_, i) => (
            <motion.span
              key={i}
              className="h-full flex-1 origin-center bg-brand"
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.075,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
