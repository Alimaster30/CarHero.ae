"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Icon } from "./Icon";

/**
 * Before/after comparison slider matching the reference "Our Work" cards:
 * two labelled chips and a circular arrow handle that reveals the repaired
 * side as it is dragged. Pointer-, keyboard- and touch-driven.
 */
export function BeforeAfter({
  before,
  after,
  title,
  className = "",
  sizes = "(min-width: 1024px) 560px, 100vw",
}: {
  before: string;
  after: string;
  title: string;
  className?: string;
  sizes?: string;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX: number) => {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={frame}
      className={`group relative select-none overflow-hidden ${className}`}
      onPointerDown={(e) => {
        (e.target as Element).setPointerCapture?.(e.pointerId);
        setDragging(true);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging && setFromClientX(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* After (revealed underneath) */}
      <Image
        src={after}
        alt={`${title} - after`}
        fill
        sizes={sizes}
        className="object-cover"
      />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${title} - before`}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 bg-black/65 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 bg-black/65 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/85"
        style={{ left: `${pos}%` }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Reveal the repaired result for ${title}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <span
        className="pointer-events-none absolute top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white ring-1 ring-white/60 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110"
        style={{ left: `${pos}%` }}
      >
        <Icon name="arrow-right" className="size-4" />
      </span>
    </div>
  );
}
