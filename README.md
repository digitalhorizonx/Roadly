# Roadly

**24/7 Roadside Assistance You Can Count On** — production website built to generate qualified phone calls from Google organic search.

Live market: **Chicago, Illinois**. Architecture: **nationwide-ready**.

## Stack

- Next.js 15 (App Router, Server Components, ISR)
- React 19 · TypeScript · Tailwind CSS v4
- shadcn/ui-style component primitives (zero-runtime, cva-based)
- Geist Sans via `next/font` (self-hosted, zero layout shift)

Every page is statically pre-rendered. The only client JavaScript on the site is the mobile nav toggle — FAQs use native `<details>`, the sticky call bar is pure CSS, and all content sections are Server Components.

## Architecture

```
src/
├── app/                          # Routes (App Router)
│   ├── services/[service]/[city] # The SEO workhorse — generated from data
│   ├── blog/[slug]               # Article architecture (publish via data)
│   ├── sitemap.ts · robots.ts    # Generated from the data layer
│   └── opengraph-image.tsx       # Build-time OG image
├── components/
│   ├── layout/                   # Header, footer, sticky call bar
│   ├── sections/                 # Reusable page sections
│   ├── seo/                      # JSON-LD renderer
│   └── ui/                       # shadcn-style primitives
├── data/                         # ★ The single source of truth
│   ├── services.ts               # 9 services, full copy + FAQs
│   ├── cities.ts                 # Chicago (+ future cities)
│   ├── states.ts · site.ts       # States, NAP/brand config
│   ├── blog.ts                   # Categories + 30-article editorial plan
│   ├── faqs.ts · reviews.ts
└── lib/
    ├── content.ts                # localize() tokens, route helpers
    └── seo/                      # metadata + JSON-LD builders
```

### Adding a city (no code changes)

1. Add an entry to `src/data/cities.ts` — including hand-written `localNotes`
   for each service (this is what keeps pages unique, not doorway pages).
2. Done. Routes, sitemap, footer links, schema and static params are all
   generated: `/services/towing/naperville`, `/services/jump-start/dallas`, …

New states go in `src/data/states.ts`; new services in `src/data/services.ts`.

### Copy tokens

Content strings support `{city}`, `{state}`, `{stateAbbr}`, `{phone}`,
`{arrival}` — resolved per city by `localize()`.

## SEO features

- Unique title/description/canonical per page (Metadata API)
- Open Graph + Twitter Cards with a build-time generated OG image
- JSON-LD: Organization, WebSite + SearchAction (backed by a real `/search`
  page), AutomotiveBusiness (LocalBusiness), Service, FAQPage, BreadcrumbList
- Dynamic `sitemap.xml` and `robots.txt` from the data layer
- Semantic HTML, single H1 per page, visible breadcrumbs, dense internal linking
- No self-serving Review/AggregateRating markup (per Google's guidelines —
  reviews render as visible content only)

## Before launch

1. **Phone number** — replace the placeholder in `src/data/site.ts`
   (use a call-tracking number to attribute calls to organic search).
2. **Address** — replace the placeholder NAP in `src/data/site.ts`; keep it
   byte-identical to the Google Business Profile listing.
3. **Domain** — set `NEXT_PUBLIC_SITE_URL` (see `.env.example`).
4. **Contact form** — set `CONTACT_WEBHOOK_URL` to receive submissions
   (Zapier/Make/Slack/own endpoint); unset, submissions log to the server.
5. Create/claim the **Google Business Profile** (service-area business,
   24 hours, all 9 services listed) and submit the sitemap in Search Console.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages pre-rendered)
npm run typecheck
```
