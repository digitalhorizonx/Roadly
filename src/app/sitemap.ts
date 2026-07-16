import { getPublishedArticles } from "@/data/blog";
import { absoluteUrl, getAllServiceCityParams, routes } from "@/lib/content";
import type { MetadataRoute } from "next";

/**
 * Dynamic sitemap generated from the data layer — new cities, services and
 * published articles appear automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl(routes.home), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(routes.services), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(routes.coverage), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl(routes.about), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl(routes.faq), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl(routes.blog), lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: absoluteUrl(routes.contact), lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllServiceCityParams().map(
    ({ service, city }) => ({
      url: absoluteUrl(routes.serviceCity(service, city)),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  const articlePages: MetadataRoute.Sitemap = getPublishedArticles().map(
    (article) => ({
      url: absoluteUrl(`${routes.blog}/${article.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticPages, ...servicePages, ...articlePages];
}
