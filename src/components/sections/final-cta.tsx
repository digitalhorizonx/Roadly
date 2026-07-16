import { CallLink } from "@/components/layout/call-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/content";
import Link from "next/link";

interface FinalCtaProps {
  title?: string;
  description?: string;
}

export function FinalCta({
  title = "Stranded? Help is one call away.",
  description = "Talk to a live dispatcher, get an upfront price, and have a professional on the way in minutes — 24 hours a day.",
}: FinalCtaProps) {
  return (
    <section className="bg-ink-950 py-20 text-white sm:py-24">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallLink size="lg" />
          <Button asChild variant="outline" size="lg" className="border-ink-700 bg-transparent text-white hover:bg-ink-800 hover:border-ink-600">
            <Link href={routes.contact}>Request Help Online</Link>
          </Button>
        </div>
        <p className="mt-5 text-sm text-ink-400">
          No membership required · Upfront pricing · Avg. 30–45 min arrival
        </p>
      </Container>
    </section>
  );
}
