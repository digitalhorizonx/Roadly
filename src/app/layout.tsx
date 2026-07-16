import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCallBar } from "@/components/layout/sticky-call-bar";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/data/site";
import { organizationSchema, webSiteSchema } from "@/lib/seo/schema";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="pb-safe-call font-sans md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
        <JsonLd data={[organizationSchema(), webSiteSchema()]} />
      </body>
    </html>
  );
}
