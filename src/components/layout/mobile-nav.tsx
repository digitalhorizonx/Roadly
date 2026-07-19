"use client";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 items-center justify-center rounded-full text-ink-800 hover:bg-ink-100"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full origin-top border-b border-ink-200 bg-white shadow-lg transition-all duration-150",
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="px-5 py-4">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-ink-100 pt-3">
              <a
                href={`tel:${site.phone.e164}`}
                className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-3 font-semibold text-ink-950"
              >
                <Phone className="size-4" aria-hidden />
                Call {site.phone.display}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
