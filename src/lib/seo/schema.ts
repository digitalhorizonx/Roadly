import { site } from "@/data/site";
import type { CityData, FaqItem, ServiceData, StateData } from "@/data/types";
import { absoluteUrl, routes } from "@/lib/content";

/**
 * JSON-LD builders. Each returns a plain object; render with <JsonLd />.
 * Kept as functions (not static JSON) so every schema block stays in sync
 * with the data layer automatically.
 */

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    slogan: site.tagline,
    telephone: site.phone.e164,
    email: site.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.e164,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
      hoursAvailable: allDayHours(),
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: site.url,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

function allDayHours() {
  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  };
}

interface LocalBusinessOptions {
  city?: CityData;
  state?: StateData;
  /** Page-specific @id suffix so per-page LocalBusiness nodes stay distinct. */
  path?: string;
}

export function localBusinessSchema({ city, state, path }: LocalBusinessOptions = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${absoluteUrl(path ?? "/")}#localbusiness`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    image: absoluteUrl("/opengraph-image"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    ...(city
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: city.geo.lat,
            longitude: city.geo.lng,
          },
          areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: {
              "@type": "State",
              name: state?.name,
            },
          },
        }
      : {
          areaServed: { "@type": "State", name: "Illinois" },
        }),
    openingHoursSpecification: allDayHours(),
    parentOrganization: { "@id": ORG_ID },
  };
}

export function serviceSchema(
  service: ServiceData,
  city: CityData,
  state: StateData
) {
  const path = routes.serviceCity(service.slug, city.slug);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: `${service.name} in ${city.name}, ${state.abbr}`,
    serviceType: service.name,
    description: service.excerpt,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: state.name },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: site.phone.e164,
        contactType: "emergency dispatch",
      },
    },
    hoursAvailable: allDayHours(),
  };
}

export function faqSchema(faqs: FaqItem[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
