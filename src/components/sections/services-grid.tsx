import { Card } from "@/components/ui/card";
import { services } from "@/data/services";
import type { CityData } from "@/data/types";
import { routes } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/** Grid of all services, linking to each service's page for the given city. */
export function ServicesGrid({ city }: { city: CityData }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Card
            key={service.slug}
            className="group relative transition-shadow hover:shadow-md"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-semibold text-ink-950">
              <Link
                href={routes.serviceCity(service.slug, city.slug)}
                className="after:absolute after:inset-0"
              >
                {service.name}
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              {service.excerpt}
            </p>
            <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              {service.shortName} in {city.name}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </p>
          </Card>
        );
      })}
    </div>
  );
}
