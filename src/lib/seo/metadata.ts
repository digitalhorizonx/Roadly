import type { Metadata } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/content";

interface BuildMetadataOptions {
  title: string;
  description: string;
  /** Canonical path, e.g. "/services/towing/chicago". */
  path: string;
  noIndex?: boolean;
}

/**
 * Central metadata builder — every page gets a unique title, description,
 * canonical URL, Open Graph and Twitter Card from one place.
 * OG/Twitter images come from the app/opengraph-image.tsx file convention.
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    // Absolute: page titles are fully authored per page (no template suffix).
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
