import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { articleIdeas, getCategory, getPublishedArticles } from "@/data/blog";
import { routes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, type Crumb } from "@/lib/seo/schema";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * Article route — architecture only for now. Only articles with
 * `published: true` in src/data/blog.ts generate pages; everything else 404s.
 * Publishing an article is a data change, not a code change.
 */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articleIdeas.find((a) => a.slug === slug && a.published);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.summary,
    path: `${routes.blog}/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articleIdeas.find((a) => a.slug === slug && a.published);
  if (!article) notFound();

  const category = getCategory(article.categorySlug);
  const crumbs: Crumb[] = [
    { name: "Home", path: routes.home },
    { name: "Blog", path: routes.blog },
    { name: article.title, path: `${routes.blog}/${article.slug}` },
  ];

  return (
    <>
      <article className="bg-white">
        <Container className="max-w-3xl py-14 sm:py-20">
          <Breadcrumbs crumbs={crumbs} />
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-brand-600">
            {category?.name}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-950">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            {article.summary}
          </p>
          {/* Article body renders here once written — sourced from the data layer. */}
        </Container>
      </article>
      <FinalCta />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
