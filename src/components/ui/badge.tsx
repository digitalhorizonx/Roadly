import { cn } from "@/lib/utils";
import * as React from "react";

const styles = {
  brand: "bg-brand-50 text-brand-700 ring-brand-200",
  neutral: "bg-ink-100 text-ink-700 ring-ink-200",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
} as const;

function Badge({
  className,
  variant = "neutral",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof styles }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
