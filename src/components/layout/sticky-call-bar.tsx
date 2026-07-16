import { site } from "@/data/site";
import { Phone } from "lucide-react";

/**
 * Fixed bottom call bar on mobile — the highest-converting element for
 * emergency searches. Pure CSS positioning, no JavaScript.
 */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-200 bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <a
        href={`tel:${site.phone.e164}`}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-500 text-base font-semibold text-ink-950 shadow-md active:bg-brand-600"
      >
        <Phone className="size-5" aria-hidden />
        Call Now — {site.phone.display}
      </a>
    </div>
  );
}
