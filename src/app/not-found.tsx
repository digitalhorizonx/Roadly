import { CallLink } from "@/components/layout/call-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/content";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="max-w-2xl py-24 text-center sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
          This page took a wrong turn
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-600">
          The page you're looking for doesn't exist — but if you're stranded,
          help is still one call away.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallLink size="lg" />
          <Button asChild variant="outline" size="lg">
            <Link href={routes.home}>Back to Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
