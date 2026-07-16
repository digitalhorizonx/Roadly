import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getService } from "@/data/services";
import type { CityData, ServiceData } from "@/data/types";
import { routes } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/** Internal-linking block: related services in the same city. */
export function RelatedServices({
  service,
  city,
}: {
  service: ServiceData;
  city: CityData;
}) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is ServiceData => Boolean(s));

  if (related.length === 0) return null;

  return (
    <section className="py-20 sm:py-24" aria-labelledby="related-heading">
      <Container>
        <SectionHeading
          eyebrow="Related services"
          title={`More ways we help in ${city.name}`}
          description="One dispatcher, one fleet — whatever the road throws at you."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {related.map((rel) => {
            const Icon = rel.icon;
            return (
              <Card key={rel.slug} className="group relative transition-shadow hover:shadow-md">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-3 font-semibold text-ink-950">
                  <Link
                    href={routes.serviceCity(rel.slug, city.slug)}
                    className="after:absolute after:inset-0"
                  >
                    {rel.shortName} in {city.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{rel.excerpt}</p>
                <ArrowRight
                  className="mt-3 size-4 text-brand-600 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
