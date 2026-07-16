import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { ArrowRight, SearchIcon } from "lucide-react";
import Link from "next/link";

/**
 * Lightweight site search over the data layer. Exists primarily to back the
 * WebSite SearchAction schema with a real, working endpoint. Noindexed.
 */
export const metadata = buildMetadata({
  title: "Search",
  description: "Search Roadly services and coverage.",
  path: "/search",
  noIndex: true,
});

interface SearchResult {
  title: string;
  description: string;
  href: string;
}

function search(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];
  for (const city of cities) {
    for (const service of services) {
      const haystack = [
        service.name,
        service.shortName,
        service.excerpt,
        service.h1,
        city.name,
        ...service.situations.map((s) => `${s.title} ${s.description}`),
      ]
        .join(" ")
        .toLowerCase();
      if (q.split(/\s+/).every((term) => haystack.includes(term))) {
        results.push({
          title: `${service.name} in ${city.name}`,
          description: service.excerpt,
          href: routes.serviceCity(service.slug, city.slug),
        });
      }
    }
  }
  return results;
}

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q = "" } = await searchParams;
  const results = search(q);

  return (
    <section className="bg-white">
      <Container className="max-w-3xl py-14 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          Search Roadly
        </h1>
        <form action="/search" method="get" className="mt-8 flex gap-2">
          <label htmlFor="q" className="sr-only">
            Search services
          </label>
          <Input
            id="q"
            name="q"
            type="search"
            defaultValue={q}
            placeholder="e.g. tow truck, dead battery, flat tire…"
          />
          <Button type="submit" aria-label="Search">
            <SearchIcon aria-hidden />
          </Button>
        </form>

        <div className="mt-10 space-y-4">
          {q && results.length === 0 && (
            <p className="text-ink-600">
              No matches for “{q}”. Not sure what you need?{" "}
              <Link href={routes.services} className="font-medium text-brand-600 hover:underline">
                Browse all services
              </Link>{" "}
              or just call — the dispatcher will figure it out with you.
            </p>
          )}
          {results.map((result) => (
            <Card key={result.href} className="group relative transition-shadow hover:shadow-md">
              <h2 className="font-semibold text-ink-950">
                <Link href={result.href} className="after:absolute after:inset-0">
                  {result.title}
                </Link>
              </h2>
              <p className="mt-1.5 text-sm text-ink-600">{result.description}</p>
              <ArrowRight
                className="mt-3 size-4 text-brand-600 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
