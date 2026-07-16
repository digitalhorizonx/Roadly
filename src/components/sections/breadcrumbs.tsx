import type { Crumb } from "@/lib/seo/schema";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

/** Visible breadcrumb trail — pairs with breadcrumbSchema() for markup. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5 text-ink-400" aria-hidden />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-ink-700">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-brand-600">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
