import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Roadly — home"
      className={cn(
        "inline-flex items-center gap-2 text-xl font-bold tracking-tight text-ink-950",
        className
      )}
    >
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className="size-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="9" className="fill-ink-950" />
        <path
          d="M9 23 L16 8 L23 23"
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2 18 H19.8"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      Roadly
    </Link>
  );
}
