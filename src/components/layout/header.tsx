import { CallLink } from "@/components/layout/call-link";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { site } from "@/data/site";
import { routes } from "@/lib/content";
import { Clock } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: routes.services, label: "Services" },
  { href: routes.coverage, label: "Coverage Area" },
  { href: routes.about, label: "About" },
  { href: routes.faq, label: "FAQ" },
  { href: routes.blog, label: "Blog" },
  { href: routes.contact, label: "Contact" },
];

export function Header() {
  return (
    <>
      {/* Emergency banner */}
      <div className="bg-ink-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2 text-center text-xs font-medium sm:text-sm">
          <Clock className="size-3.5 shrink-0 text-brand-400" aria-hidden />
          <span>
            24/7 Emergency Line —{" "}
            <a
              href={`tel:${site.phone.e164}`}
              className="font-semibold text-brand-400 underline-offset-2 hover:underline"
            >
              {site.phone.display}
            </a>{" "}
            <span className="hidden sm:inline">· Avg. arrival 30–45 min</span>
          </span>
        </div>
      </div>

      {/* Sticky header with desktop CTA */}
      <header className="sticky top-0 z-40 border-b border-ink-200/70 bg-white/90 backdrop-blur-md">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <CallLink size="sm" />
          </div>
          <MobileNav items={navItems} />
        </div>
      </header>
    </>
  );
}
