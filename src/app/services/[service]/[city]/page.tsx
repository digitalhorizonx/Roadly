import { CallLink } from "@/components/layout/call-link";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { CoverageSection } from "@/components/sections/coverage-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { RelatedServices } from "@/components/sections/related-services";
import { StepsSection } from "@/components/sections/steps-section";
import { TrustBadges } from "@/components/sections/trust-badges";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getAllServiceCityParams,
  getServiceCityBundle,
  localize,
  localizeFaqs,
  routes,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
  type Crumb,
} from "@/lib/seo/schema";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ service: string; city: string }>;
}

/** All pages are pre-rendered at build time; refreshed daily via ISR. */
export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceCityParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const bundle = getServiceCityBundle(serviceSlug, citySlug);
  if (!bundle) return {};
  const { service, city } = bundle;

  return buildMetadata({
    title: localize(service.metaTitle, city),
    description: localize(service.metaDescription, city),
    path: routes.serviceCity(service.slug, city.slug),
  });
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { service: serviceSlug, city: citySlug } = await params;
  const bundle = getServiceCityBundle(serviceSlug, citySlug);
  if (!bundle) notFound();

  const { service, city, state } = bundle;
  const path = routes.serviceCity(service.slug, city.slug);
  const localNote = city.localNotes[service.slug];
  const faqs = localizeFaqs([...service.faqs, ...city.faqs], city);
  const steps = service.steps.map((s) => ({
    title: localize(s.title, city),
    description: localize(s.description, city),
  }));
  const Icon = service.icon;

  const crumbs: Crumb[] = [
    { name: "Home", path: routes.home },
    { name: "Services", path: routes.services },
    { name: `${service.shortName} in ${city.name}`, path },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-brand-50/70 to-transparent"
        />
        <Container className="relative py-14 sm:py-20">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Badge variant="success" className="mb-5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available now · Avg. {city.avgArrival} arrival
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              {localize(service.h1, city)}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              {localize(service.heroLead, city)}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallLink size="lg" />
              <Button asChild variant="outline" size="lg">
                <Link href={routes.contact}>Request Help Online</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-500">
              Upfront pricing · No membership required · 24/7 dispatch
            </p>
          </div>
          <div className="mt-14 border-t border-ink-100 pt-9">
            <TrustBadges />
          </div>
        </Container>
      </section>

      {/* Overview + local context */}
      <section className="py-20 sm:py-24" aria-labelledby="overview-heading">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2
              id="overview-heading"
              className="text-3xl font-semibold tracking-tight text-ink-950"
            >
              {service.name} in {city.name}, done right
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-700 sm:text-lg">
              {service.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{localize(paragraph, city)}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <Card className="bg-ink-50/60">
              <span className="flex size-11 items-center justify-center rounded-xl bg-ink-950 text-brand-400">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">
                Local knowledge, {city.name} edition
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{localNote}</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Common situations */}
      <section className="bg-ink-50 py-20 sm:py-24" aria-labelledby="situations-heading">
        <Container>
          <SectionHeading
            eyebrow="Common situations"
            title={`When ${city.name} drivers call us for ${service.shortName.toLowerCase()}`}
            description="If your situation isn't listed, call anyway — these are just the most common."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.situations.map((situation) => (
              <Card key={situation.title}>
                <h3 className="font-semibold text-ink-950">{situation.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {localize(situation.description, city)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24" aria-labelledby="benefits-heading">
        <Container>
          <SectionHeading
            eyebrow="Why Roadly"
            title={`Why drivers in ${city.name} choose us`}
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden />
                <div>
                  <h3 className="font-semibold text-ink-950">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {localize(benefit.description, city)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <StepsSection
        title={`How ${service.shortName.toLowerCase()} works with Roadly`}
        steps={steps}
      />

      <CoverageSection city={city} />

      <FaqSection
        title={`${service.shortName} in ${city.name} — FAQs`}
        description="Straight answers to what drivers ask before they call."
        items={faqs}
      />

      <RelatedServices service={service} city={city} />

      <FinalCta
        title={`Need ${service.shortName.toLowerCase()} in ${city.name} right now?`}
        description={`A live dispatcher will confirm your location, quote the price upfront, and send the nearest truck — average arrival ${city.avgArrival}.`}
      />

      <JsonLd
        data={[
          serviceSchema(service, city, state),
          localBusinessSchema({ city, state, path }),
          faqSchema(faqs, path),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
