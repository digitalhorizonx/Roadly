import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { CoverageSection } from "@/components/sections/coverage-section";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { getState } from "@/data/states";
import { routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, localBusinessSchema, type Crumb } from "@/lib/seo/schema";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Coverage Area — Chicago & Surrounding Suburbs",
  description:
    "Roadly covers all of Chicago plus Evanston, Skokie, Oak Park, Cicero and more — every neighborhood, every expressway, 24 hours a day.",
  path: routes.coverage,
});

const crumbs: Crumb[] = [
  { name: "Home", path: routes.home },
  { name: "Coverage Area", path: routes.coverage },
];

export default function CoveragePage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              Where Roadly works
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 sm:text-xl">
              We currently serve Chicago and its inner suburbs, with trucks
              staged across the North, West and South Sides so help is close
              wherever you break down. Expansion to more Illinois cities — and
              beyond — is underway.
            </p>
          </div>
        </Container>
      </section>

      {cities.map((city) => {
        const state = getState(city.stateSlug);
        return (
          <div key={city.slug}>
            <section className="border-y border-ink-200 bg-ink-50 py-14">
              <Container className="max-w-3xl text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
                  Driving in {city.name}, {state.abbr}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-600">
                  {city.drivingConditions}
                </p>
              </Container>
            </section>

            <CoverageSection city={city} />

            <section className="bg-ink-50 py-20 sm:py-24">
              <Container>
                <SectionHeading
                  eyebrow="Available services"
                  title={`Every service, everywhere in ${city.name}`}
                  description="Each service below is available across the full coverage area — tap one for details, pricing context and FAQs."
                />
                <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Card className="group relative flex items-center justify-between p-4 transition-shadow hover:shadow-md">
                        <Link
                          href={routes.serviceCity(service.slug, city.slug)}
                          className="font-medium text-ink-900 after:absolute after:inset-0"
                        >
                          {service.name} in {city.name}
                        </Link>
                        <ArrowRight
                          className="size-4 text-brand-600 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </Card>
                    </li>
                  ))}
                </ul>
              </Container>
            </section>
          </div>
        );
      })}

      <FinalCta
        title="Just outside our coverage area?"
        description="Call anyway. We can often still reach you, and when we can't, we'll point you to a partner we trust instead of leaving you searching."
      />

      <JsonLd
        data={[
          localBusinessSchema({
            city: cities[0],
            state: getState(cities[0].stateSlug),
            path: routes.coverage,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
