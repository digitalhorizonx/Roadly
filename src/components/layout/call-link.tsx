import { Button, type ButtonProps } from "@/components/ui/button";
import { site } from "@/data/site";
import { Phone } from "lucide-react";

interface CallLinkProps extends Pick<ButtonProps, "variant" | "size"> {
  label?: string;
  className?: string;
}

/** The primary conversion element — a one-tap phone call. */
export function CallLink({
  label = `Call ${site.phone.display}`,
  variant = "primary",
  size = "md",
  className,
}: CallLinkProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={`tel:${site.phone.e164}`}>
        <Phone aria-hidden />
        {label}
      </a>
    </Button>
  );
}
