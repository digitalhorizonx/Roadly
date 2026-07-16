import type { FaqItem } from "@/data/types";
import { ChevronDown } from "lucide-react";

/**
 * FAQ accordion built on native <details>/<summary> — fully server-rendered,
 * zero JavaScript, and every answer is in the HTML for search engines.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              aria-hidden
              className="size-5 shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="mt-3 leading-relaxed text-ink-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
