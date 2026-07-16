import type { LucideIcon } from "lucide-react";

/**
 * Core content types for the Roadly data layer.
 *
 * Pages are generated from this data — adding a city or service is a data
 * change, never a code change. Copy strings may contain the tokens
 * {city}, {state}, {stateAbbr}, {phone} and {arrival}, which are resolved
 * per-page by `localize()` in src/lib/content.ts.
 */

export interface StateData {
  slug: string;
  name: string;
  abbr: string;
}

export interface Highway {
  name: string;
  /** Short note on why this road matters for stranded drivers. */
  note: string;
}

export interface CityData {
  slug: string;
  name: string;
  stateSlug: string;
  /** Approximate center, used for LocalBusiness geo markup. */
  geo: { lat: number; lng: number };
  population: string;
  /** One-paragraph summary of local driving conditions (weather, traffic, roads). */
  drivingConditions: string;
  neighborhoods: string[];
  suburbs: string[];
  highways: Highway[];
  landmarks: string[];
  /**
   * Hand-written local context per service slug. This is what keeps every
   * service/city page genuinely unique — it ties the service to real local
   * roads, weather and driving patterns instead of swapping a city name
   * into boilerplate.
   */
  localNotes: Record<string, string>;
  /** City-specific FAQs appended to every service page for this city. */
  faqs: FaqItem[];
  /** Average arrival window quoted for this city. */
  avgArrival: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentBlock {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  /** Short label used in nav, cards and related-service links. */
  shortName: string;
  /** Lucide icon rendered on cards and heroes. */
  icon: LucideIcon;
  /** One-sentence summary used on cards and in meta descriptions. */
  excerpt: string;
  /** H1 pattern for city pages, e.g. "24/7 Towing in {city}, {stateAbbr}". */
  h1: string;
  /** Sub-headline under the H1 on city pages. */
  heroLead: string;
  /** SEO title pattern (≤ 60 chars once localized). */
  metaTitle: string;
  /** SEO description pattern (≤ 160 chars once localized). */
  metaDescription: string;
  /** 2–3 paragraphs describing the service. Service-specific, hand-written. */
  overview: string[];
  situations: ContentBlock[];
  benefits: ContentBlock[];
  steps: ContentBlock[];
  faqs: FaqItem[];
  /** Slugs of related services, used for internal linking. */
  related: string[];
}

export interface Review {
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export interface ArticleIdea {
  slug: string;
  title: string;
  categorySlug: string;
  targetKeyword: string;
  summary: string;
  /** Articles ship later — only published entries generate pages. */
  published: boolean;
}
