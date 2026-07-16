import { CallLink } from "@/components/layout/call-link";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input, Textarea } from "@/components/ui/input";
import { site } from "@/data/site";
import { routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, localBusinessSchema, type Crumb } from "@/lib/seo/schema";
import { AlertTriangle, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { submitContact } from "./actions";

export const metadata = buildMetadata({
  title: "Contact Roadly — 24/7 Dispatch & Support",
  description:
    "Reach Roadly around the clock. Call for immediate roadside help in Chicago, or send a message for quotes, questions and non-urgent requests.",
  path: routes.contact,
});

const crumbs: Crumb[] = [
  { name: "Home", path: routes.home },
  { name: "Contact", path: routes.contact },
];

interface PageProps {
  searchParams: Promise<{ sent?: string; error?: string }>;
}

export default async function ContactPage({ searchParams }: PageProps) {
  const { sent, error } = await searchParams;

  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              Talk to Roadly
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 sm:text-xl">
              Stranded right now? Skip the form — call and a live dispatcher
              will have a truck moving in minutes. For quotes, questions and
              non-urgent requests, the form below reaches us too.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-5">
          {/* Emergency + NAP */}
          <div className="space-y-5 lg:col-span-2">
            <Card className="border-brand-200 bg-brand-50/50">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-700">
                <Clock className="size-4" aria-hidden />
                Need help right now?
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">
                {site.phone.display}
              </p>
              <p className="mt-1 text-sm text-ink-600">
                Live dispatcher, 24/7 — average answer time under 30 seconds.
              </p>
              <CallLink className="mt-5 w-full" size="lg" label="Call Now" />
            </Card>

            <Card>
              <h2 className="font-semibold text-ink-950">Business details</h2>
              <address className="mt-4 space-y-3 text-sm not-italic text-ink-600">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden />
                  <span>
                    {site.legalName}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-ink-400" aria-hidden />
                  <a href={`tel:${site.phone.e164}`} className="hover:text-brand-600">
                    {site.phone.display}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="size-4 shrink-0 text-ink-400" aria-hidden />
                  <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                    {site.email}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="size-4 shrink-0 text-ink-400" aria-hidden />
                  {site.hours}
                </p>
              </address>
            </Card>
          </div>

          {/* Form */}
          <Card className="p-8 lg:col-span-3">
            <h2 className="text-xl font-semibold tracking-tight text-ink-950">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              We reply during the same day — usually much faster. For
              emergencies, always call instead.
            </p>

            {sent && (
              <p
                role="status"
                className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
              >
                <CheckCircle2 className="size-4 shrink-0" aria-hidden />
                Message received — we'll get back to you shortly.
              </p>
            )}
            {error && (
              <p
                role="alert"
                className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
              >
                <AlertTriangle className="size-4 shrink-0" aria-hidden />
                Please include at least your name and phone number.
              </p>
            )}

            <form action={submitContact} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-800">
                  Name
                </label>
                <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-800">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(773) 555-0000"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-ink-800">
                  Location <span className="font-normal text-ink-400">(optional)</span>
                </label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Neighborhood, cross streets, or address"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">
                  How can we help?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your vehicle and situation…"
                />
              </div>
              {/* Honeypot — hidden from real users, catches bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </Container>
      </section>

      <JsonLd
        data={[localBusinessSchema({ path: routes.contact }), breadcrumbSchema(crumbs)]}
      />
    </>
  );
}
