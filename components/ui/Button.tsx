import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "outline" | "ghost-dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-[0.08em] " +
  "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-600 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(28,88,244,0.7)]",
  outline:
    "bg-white text-navy border border-hairline hover:border-brand hover:text-brand hover:-translate-y-0.5",
  "ghost-dark":
    "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[12px]",
  md: "h-11 px-6 text-xs",
  lg: "h-13 px-8 text-[14px]",
};

interface ButtonProps extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {icon && icon !== "arrow-up-right" && (
        <Icon name={icon} className="size-4 shrink-0" />
      )}
      {children}
      {icon === "arrow-up-right" && (
        <Icon name="arrow-up-right" className="size-4 shrink-0" />
      )}
    </Link>
  );
}
