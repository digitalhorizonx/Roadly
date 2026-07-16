import { cities, getCity } from "@/data/cities";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { getState } from "@/data/states";
import type { CityData, FaqItem, ServiceData, StateData } from "@/data/types";

/**
 * Resolves copy tokens ({city}, {state}, {stateAbbr}, {phone}, {arrival})
 * against a specific city. This is how one hand-written template produces
 * natural copy for any market.
 */
export function localize(text: string, city: CityData): string {
  const state = getState(city.stateSlug);
  return text
    .replaceAll("{city}", city.name)
    .replaceAll("{state}", state.name)
    .replaceAll("{stateAbbr}", state.abbr)
    .replaceAll("{phone}", site.phone.display)
    .replaceAll("{arrival}", city.avgArrival);
}

export function localizeFaqs(faqs: FaqItem[], city: CityData): FaqItem[] {
  return faqs.map((f) => ({
    question: localize(f.question, city),
    answer: localize(f.answer, city),
  }));
}

/** The flagship market — used to localize general copy on non-city pages. */
export function getPrimaryCity(): CityData {
  return cities[0];
}

export interface ServiceCityBundle {
  service: ServiceData;
  city: CityData;
  state: StateData;
}

export function getServiceCityBundle(
  serviceSlug: string,
  citySlug: string
): ServiceCityBundle | undefined {
  const service = services.find((s) => s.slug === serviceSlug);
  const city = getCity(citySlug);
  if (!service || !city) return undefined;
  return { service, city, state: getState(city.stateSlug) };
}

/** Every service × city combination — drives static params and the sitemap. */
export function getAllServiceCityParams(): { service: string; city: string }[] {
  return cities.flatMap((city) =>
    services.map((service) => ({ service: service.slug, city: city.slug }))
  );
}

/** Canonical path helpers — the single source of truth for internal URLs. */
export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  serviceCity: (service: string, city: string) => `/services/${service}/${city}`,
  coverage: "/coverage",
  faq: "/faq",
  blog: "/blog",
  contact: "/contact",
} as const;

export function absoluteUrl(path: string): string {
  return `${site.url}${path === "/" ? "" : path}`;
}
