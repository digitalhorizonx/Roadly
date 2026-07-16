import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { FinalCta } from "@/components/sections/final-cta";
import { ServicesGrid } from "@/components/sections/services-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { getPrimaryCity, routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, type Crumb } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Roadside Services — Towing, Jump Starts, Lockouts & More",
  description:
    "Every Roadly service in one place: 24/7 towing, jump starts, battery replacement, flat tire changes, fuel delivery, lockouts, recovery & inspections.",
  path: routes.services,
});

const crumbs: Crumb[] = [
  { name: "Home", path: routes.home },
  { name: "Services", path: routes.services },
];

export default function ServicesPage() {
  const city = getPrimaryCity();

  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              Every roadside problem, handled
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 sm:text-xl">
              Nine services, one phone number, zero memberships. Every Roadly
              truck runs fully equipped, so the technician who reaches you can
              almost always fix the problem on the spot — and tow you if they
              can't.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <ServicesGrid city={city} />
        </Container>
      </section>

      <FinalCta
        title="Not sure which service you need?"
        description="You don't have to diagnose anything. Call, describe what happened, and our dispatcher sends the right truck with the right equipment."
      />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
