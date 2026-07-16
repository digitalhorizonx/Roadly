import { cn } from "@/lib/utils";
import * as React from "react";

/**
 * Minimal Slot implementation (shadcn/ui pattern) — merges props onto the
 * single child element, letting <Button asChild><a/></Button> render an <a>.
 */
export function Slot({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  if (React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      ...props,
      className: cn(className, children.props.className),
    });
  }
  return null;
}
