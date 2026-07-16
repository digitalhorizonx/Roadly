import { Logo } from "@/components/layout/logo";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { routes } from "@/lib/content";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

const companyLinks = [
  { href: routes.about, label: "About Roadly" },
  { href: routes.coverage, label: "Coverage Area" },
  { href: routes.faq, label: "FAQ" },
  { href: routes.blog, label: "Blog" },
  { href: routes.contact, label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const primaryCity = cities[0];

  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + NAP */}
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              {site.tagline}. Fast, professional help for drivers — towing, jump
              starts, tire changes, fuel delivery and more.
            </p>
            <address className="mt-5 space-y-2 text-sm not-italic text-ink-600">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-ink-400" aria-hidden />
                <a
                  href={`tel:${site.phone.e164}`}
                  className="font-semibold text-ink-900 hover:text-brand-600"
                >
                  {site.phone.display}
                </a>
              </p>
              <p className="text-ink-500">{site.hours}</p>
            </address>
          </div>

          {/* Services (internal links per city) */}
          <nav aria-label="Services">
            <h2 className="text-sm font-semibold text-ink-950">
              Services in {primaryCity.name}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={routes.serviceCity(service.slug, primaryCity.slug)}
                    className="text-sm text-ink-600 hover:text-brand-600"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className="text-sm font-semibold text-ink-950">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-600 hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coverage */}
          <nav aria-label="Coverage">
            <h2 className="text-sm font-semibold text-ink-950">Where We Work</h2>
            <ul className="mt-4 space-y-2.5">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={routes.serviceCity("roadside-assistance", city.slug)}
                    className="text-sm text-ink-600 hover:text-brand-600"
                  >
                    {city.name}, IL
                  </Link>
                </li>
              ))}
              <li>
                <Link href={routes.coverage} className="text-sm text-ink-600 hover:text-brand-600">
                  Full coverage area →
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-ink-200 pt-6 text-xs text-ink-500">
          <p>
            © {year} {site.legalName}. All rights reserved. Serving Chicago and
            surrounding Illinois communities, 24 hours a day.
          </p>
        </div>
      </div>
    </footer>
  );
}
