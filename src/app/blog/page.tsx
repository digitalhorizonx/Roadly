import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { articleIdeas, blogCategories } from "@/data/blog";
import { routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, type Crumb } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Blog — Roadside Tips, Battery Advice & Emergency Driving",
  description:
    "Practical guides from the Roadly team: what to do in a breakdown, battery and towing know-how, and the maintenance that prevents roadside emergencies.",
  path: routes.blog,
});

const crumbs: Crumb[] = [
  { name: "Home", path: routes.home },
  { name: "Blog", path: routes.blog },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              The Roadly Blog
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 sm:text-xl">
              Advice from people who spend every day fixing roadside
              emergencies — written to keep you out of them. Our first guides
              are in the works; here's what's coming.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container className="space-y-10">
          {blogCategories.map((category) => {
            const ideas = articleIdeas.filter(
              (a) => a.categorySlug === category.slug
            );
            return (
              <Card key={category.slug} className="p-8">
                <h2 className="text-xl font-semibold tracking-tight text-ink-950">
                  {category.name}
                </h2>
                <p className="mt-2 text-ink-600">{category.description}</p>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {ideas.map((idea) => (
                    <li
                      key={idea.slug}
                      className="flex items-baseline gap-2.5 text-sm text-ink-700"
                    >
                      <span
                        aria-hidden
                        className="size-1.5 shrink-0 translate-y-[-1px] rounded-full bg-brand-500"
                      />
                      {idea.title}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </Container>
      </section>

      <FinalCta
        title="Need help now, not an article?"
        description="Reading about jump starts won't fix a dead battery at midnight. One call will."
      />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
