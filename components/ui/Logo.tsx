import Link from "next/link";
import { Icon } from "./Icon";

/**
 * Mirrors the reference lockup: a brand-blue rounded tile holding a wrench
 * glyph, followed by a two-tone wordmark.
 * The full-colour CarHero artwork lives at /images/logo/carhero-logo.png if you
 * would rather drop that in here.
 */
export function Logo({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="#home"
      aria-label="CarHero - home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid size-8 place-items-center rounded-[7px] bg-brand text-white transition-transform duration-300 group-hover:-rotate-12">
        <Icon name="wrench" className="size-[18px]" />
      </span>
      <span className="text-[19px] leading-none tracking-[-0.01em]">
        <span className={tone === "dark" ? "font-semibold text-white" : "font-semibold text-navy"}>
          Car
        </span>
        <span className={tone === "dark" ? "text-white/55" : "text-body"}>Hero</span>
      </span>
    </Link>
  );
}
