/**
 * Global business configuration (NAP + brand).
 *
 * ── LAUNCH CHECKLIST ─────────────────────────────────────────────
 * 1. Replace `address` with the registered business address.
 * 2. Set NEXT_PUBLIC_SITE_URL to the production domain.
 * 3. Keep name / address / phone identical to the Google Business
 *    Profile listing — NAP consistency is a local ranking factor.
 * ─────────────────────────────────────────────────────────────────
 */
export const site = {
  name: "Roadly",
  legalName: "Roadly Roadside Assistance LLC",
  tagline: "24/7 Roadside Assistance You Can Count On",
  description:
    "Roadly provides fast, professional 24/7 roadside assistance — towing, jump starts, tire changes, fuel delivery, lockouts and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.roadly.com",
  phone: {
    display: "(773) 322-5637",
    e164: "+17733225637",
  },
  email: "help@roadly.com",
  address: {
    // Placeholder — replace with the registered business address.
    street: "500 W Madison St, Suite 1000",
    city: "Chicago",
    state: "IL",
    zip: "60661",
    country: "US",
  },
  hours: "Open 24 hours, 7 days a week",
  foundedYear: 2019,
} as const;
