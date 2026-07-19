import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Roadly brand mark: shield badge with a winding road, "24/7" and sparkle,
 * orange swoosh — paired with the Road(navy) + ly(orange) wordmark.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield badge */}
      <path
        d="M24 8.5 38 13.5 V25 C38 34 31.8 39.8 24 43.2 C16.2 39.8 10 34 10 25 V13.5 Z"
        fill="#ffffff"
        stroke="#1d2733"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {/* Winding road */}
      <path
        d="M19.5 41.5 C21.5 34 26 29.5 33.5 25"
        stroke="#1d2733"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <path
        d="M19.5 41.5 C21.5 34 26 29.5 33.5 25"
        stroke="#ffffff"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeDasharray="2.6 2.6"
      />
      {/* 24/7 */}
      <text
        x="13.5"
        y="21.5"
        fill="#1d2733"
        fontSize="7"
        fontWeight="700"
        fontStyle="italic"
        fontFamily="inherit"
      >
        24/7
      </text>
      {/* Orange swoosh over the top */}
      <path
        d="M6.5 16 C12.5 5.5 26 2.5 36.5 7"
        stroke="#f58220"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Sparkle */}
      <path
        d="M39.5 2.5 L41.2 6.8 L45.5 8.5 L41.2 10.2 L39.5 14.5 L37.8 10.2 L33.5 8.5 L37.8 6.8 Z"
        fill="#f58220"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="size-9" />
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold italic tracking-tight">
          <span className="text-ink-900">Road</span>
          <span className="text-brand-600">ly</span>
        </span>
        <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
          24/7 Roadside Assistance
        </span>
      </span>
    </Link>
  );
}
