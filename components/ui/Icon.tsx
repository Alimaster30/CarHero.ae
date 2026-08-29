import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "wrench"
  | "tyre"
  | "battery"
  | "clipboard"
  | "badge"
  | "star"
  | "shield"
  | "phone"
  | "pin"
  | "check"
  | "clock"
  | "bolt"
  | "tag"
  | "search"
  | "question"
  | "arrow-up-right"
  | "arrow-right"
  | "chevron-left"
  | "chevron-right"
  | "chevron-down"
  | "plus"
  | "minus"
  | "play"
  | "menu"
  | "close"
  | "quote"
  | "facebook"
  | "instagram"
  | "whatsapp"
  | "linkedin";

const paths: Record<IconName, ReactElement> = {
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.5-.6-.6-2.5 2.1-2.1a4 4 0 0 0-.9-.1" />
  ),
  tyre: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21" />
    </>
  ),
  battery: (
    <>
      <rect x="2" y="7" width="16" height="10" rx="2" />
      <path d="M22 10v4M6 10.5v3M9.5 12h-3M13 12h3" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z" />
      <path d="M8 6H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7" />
    </>
  ),
  star: (
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  bolt: <path d="M13 3 5.5 13.5H11l-1 7.5 8-11H12l1-7Z" />,
  tag: (
    <>
      <path d="M3.5 11.2V4.5a1 1 0 0 1 1-1h6.7a1 1 0 0 1 .7.3l8 8a1 1 0 0 1 0 1.4l-6.7 6.7a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1-.3-.7Z" />
      <circle cx="8" cy="8" r="1.4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  question: <path d="M9.3 9a2.8 2.8 0 1 1 3.9 2.6c-.8.4-1.2 1-1.2 1.9v.5M12 17.5v.5" />,
  "arrow-up-right": <path d="M7 17 17 7M9 7h8v8" />,
  "arrow-right": <path d="M4 12h15m-6-6 6 6-6 6" />,
  "chevron-left": <path d="m14.5 6-6 6 6 6" />,
  "chevron-right": <path d="m9.5 6 6 6-6 6" />,
  "chevron-down": <path d="m6 9.5 6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  quote: (
    <path d="M9.6 5.5C6.5 6.9 4.8 9.4 4.8 12.6v5.9h6.6v-6.6H8.1c0-2 .8-3.4 2.7-4.4l-1.2-2Zm9.6 0c-3.1 1.4-4.8 3.9-4.8 7.1v5.9h6.6v-6.6h-3.3c0-2 .8-3.4 2.7-4.4l-1.2-2Z" />
  ),
  facebook: (
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8h3.2Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" />
    </>
  ),
  whatsapp: (
    <path d="M20 11.6a8 8 0 0 1-11.9 7L4 20l1.5-4a8 8 0 1 1 14.5-4.4Zm-11.4-3c-.3 0-.7.1-1 .5-.4.4-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.15-1.3-.05-.1-.25-.2-.5-.3l-1.8-.9c-.25-.1-.4-.15-.6.1l-.8 1c-.15.2-.3.2-.55.1a6.6 6.6 0 0 1-3.3-2.9c-.25-.4 0-.6.15-.8l.4-.5c.15-.2.2-.3.3-.5.1-.2 0-.4 0-.55l-.8-1.9c-.2-.5-.4-.45-.55-.45h-.4Z" />
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V17M8 7.6v.1M12 17v-3.6a2 2 0 0 1 4 0V17" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  /** Solid icons (social glyphs, play, quote) fill instead of stroke. */
  filled?: boolean;
}

const SOLID: IconName[] = ["facebook", "whatsapp", "play", "quote", "star", "bolt"];

export function Icon({ name, filled, className = "", ...rest }: IconProps) {
  const solid = filled ?? SOLID.includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
