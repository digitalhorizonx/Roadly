import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { FinalCta } from "@/components/sections/final-cta";
import { TrustBadges } from "@/components/sections/trust-badges";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";
import { routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, type Crumb } from "@/lib/seo/schema";
import { HeartHandshake, ShieldCheck, Timer } from "lucide-react";

export const metadata = buildMetadata({
  title: "About Roadly — Who Shows Up When You're Stranded",
  description:
    "Roadly is a professional roadside assistance company serving Chicago 24/7. Licensed operators, upfront pricing, and a standard of care built for bad days.",
  path: routes.about,
});

const crumbs: Crumb[] = [
  { name: "Home", path: routes.home },
  { name: "About", path: routes.about },
];

const values = [
  {
    icon: Timer,
    title: "Speed is respect",
    description:
      "Every minute on a shoulder feels like ten. We stage trucks across the metro, quote honest ETAs, and send live updates — because your time and safety matter.",
  },
  {
    icon: ShieldCheck,
    title: "No surprises, ever",
    description:
      "The price quoted on the phone is the price you pay. No after-hours surcharges, no mystery fees on arrival, no steering you to shops that pay us.",
  },
  {
    icon: HeartHandshake,
    title: "Show up like it's family",
    description:
      "Our operators are trained to treat every call like their own parent is the one stranded — clear communication, careful work, zero judgment.",
  },
];

const stats = [
  { value: "24/7", label: "Dispatch, every day of the year" },
  { value: "30–45 min", label: "Average arrival in Chicago" },
  { value: "9", label: "Services on every truck" },
  { value: "100%", label: "Upfront, quoted pricing" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              The company you call on your worst driving day
            </h1>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-600">
              <p>
                Nobody plans to need us. A battery dies in a January parking
                lot, a tire lets go on the Kennedy, keys get locked in a
                running car — and suddenly the most important company in your
                life is whoever answers the phone next.
              </p>
              <p>
                Roadly was built around that moment. Since {site.foundedYear},
                we've focused on doing a stressful job the way it should be
                done: answer fast, quote the real price, show up when we said
                we would, and fix the problem the first time. No memberships,
                no upsells, no fine print.
              </p>
              <p>
                Today our licensed, background-checked operators cover Chicago
                and its inner suburbs around the clock — and we're building
                toward the same standard of service in cities across the
                country.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink-200 bg-ink-50 py-14">
        <Container>
          <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="order-2 mt-2 text-sm text-ink-500">{stat.label}</dt>
                <dd className="order-1 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Three rules every Roadly operator works by"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-semibold text-ink-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16">
        <Container>
          <TrustBadges />
        </Container>
      </section>

      <FinalCta />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
