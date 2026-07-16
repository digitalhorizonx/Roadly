import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { generalFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { getPrimaryCity, localizeFaqs, routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, type Crumb } from "@/lib/seo/schema";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "FAQ — Pricing, Arrival Times & How Roadly Works",
  description:
    "Answers about Roadly's 24/7 roadside assistance: what it costs, how fast we arrive, insurance reimbursement, payments and what to do while you wait.",
  path: routes.faq,
});

const crumbs: Crumb[] = [
  { name: "Home", path: routes.home },
  { name: "FAQ", path: routes.faq },
];

export default function FaqPage() {
  const city = getPrimaryCity();
  const faqs = localizeFaqs(generalFaqs, city);

  return (
    <>
      <section className="bg-white">
        <Container className="max-w-3xl py-14 sm:py-20">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            Everything drivers ask before they call — pricing, timing,
            insurance and what happens after you hang up. Can't find your
            answer? Call us; a live dispatcher picks up 24/7.
          </p>

          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-ink-950">
            Service-specific questions
          </h2>
          <p className="mt-3 leading-relaxed text-ink-600">
            Each service page answers the detailed questions for that
            situation — costs, timing, and what to expect:
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={routes.serviceCity(service.slug, city.slug)}
                  className="group flex items-center justify-between rounded-xl border border-ink-200 px-4 py-3 text-sm font-medium text-ink-800 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
                >
                  {service.name} FAQs
                  <ArrowRight
                    className="size-4 text-brand-600 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta
        title="Still have a question?"
        description="The fastest answer is a phone call — a live dispatcher can quote your exact situation in under a minute."
      />

      <JsonLd data={[faqSchema(faqs, routes.faq), breadcrumbSchema(crumbs)]} />
    </>
  );
}
