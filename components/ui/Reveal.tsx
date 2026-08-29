"use client";

import { Fragment, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 36 },
  down: { x: 0, y: -36 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 },
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  const from = reduced ? offset.none : offset[direction];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/**
 * Headings on the reference site resolve one CHARACTER at a time - each glyph
 * rises into place on a short stagger, so a long heading reads as a cascade.
 * Words stay whole (`inline-block`) so wrapping is unaffected, and the visible
 * glyphs are hidden from assistive tech in favour of the label on the wrapper.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.022,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  let index = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, w) => {
        const chars = [...word];
        const rendered = (
          <span aria-hidden="true" className="inline-block whitespace-pre">
            {chars.map((char, c) => {
              const i = index++;
              return (
                <motion.span
                  key={`${char}-${c}`}
                  className="inline-block whitespace-pre"
                  initial={{ opacity: 0, y: reduced ? 0 : "0.55em" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: delay + i * stagger,
                    ease: EASE,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
        index += 1; // the space between words keeps the cascade even

        return (
          <Fragment key={`${word}-${w}`}>
            {rendered}
            {w < words.length - 1 ? <span aria-hidden="true"> </span> : null}
          </Fragment>
        );
      })}
    </span>
  );
}
