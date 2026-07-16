import { CallLink } from "@/components/layout/call-link";
import { CoverageSection } from "@/components/sections/coverage-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StepsSection } from "@/components/sections/steps-section";
import { TrustBadges } from "@/components/sections/trust-badges";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { generalFaqs } from "@/data/faqs";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { getPrimaryCity, localizeFaqs, routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, localBusinessSchema } from "@/lib/seo/schema";
import { getState } from "@/data/states";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Roadly — 24/7 Roadside Assistance in Chicago, IL",
  description:
    "Fast 24 hour roadside assistance in Chicago: towing, jump starts, flat tires, fuel delivery & lockouts. Upfront pricing, avg. 30–45 min arrival. Call now.",
  path: routes.home,
});

export default function HomePage() {
  const city = getPrimaryCity();
  const state = getState(city.stateSlug);
  const faqs = localizeFaqs(generalFaqs.slice(0, 6), city);
  const steps = getService("roadside-assistance")!.steps.map((s) => ({
    title: s.title,
    description: s.description
      .replaceAll("{city}", city.name)
      .replaceAll("{arrival}", city.avgArrival),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-brand-50/70 to-transparent"
        />
        <Container className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="success" className="mb-6">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Open now · Avg. {city.avgArrival} arrival in {city.name}
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-6xl">
              24/7 Roadside Assistance You Can Count&nbsp;On
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              Dead battery, flat tire, empty tank or a car that won't move —
              one call puts a licensed professional on the way to you anywhere
              in {city.name}, {state.abbr}. Upfront pricing. No membership
              required.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallLink size="xl" />
              <Button asChild variant="outline" size="xl">
                <Link href={routes.services}>Explore Services</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink-500">
              Talk to a live dispatcher in seconds — {site.hours.toLowerCase()}.
            </p>
          </div>
          <div className="mt-16 border-t border-ink-100 pt-10">
            <TrustBadges />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-ink-50 py-20 sm:py-24" aria-labelledby="services-heading">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title={`Roadside services in ${city.name}`}
            description="Whatever stopped you, we have a truck and a technician for it — around the clock."
          />
          <div className="mt-12">
            <ServicesGrid city={city} />
          </div>
        </Container>
      </section>

      <StepsSection steps={steps} />
      <CoverageSection city={city} />
      <ReviewsSection />
      <FaqSection
        items={faqs}
        description="Quick answers before you call. More on our FAQ page."
      />
      <FinalCta />

      <JsonLd
        data={[
          localBusinessSchema({ city, state, path: routes.home }),
          faqSchema(faqs, routes.home),
        ]}
      />
    </>
  );
}
