import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CityData } from "@/data/types";
import { MapPin } from "lucide-react";

/** City coverage: neighborhoods, suburbs and the highways we patrol. */
export function CoverageSection({ city }: { city: CityData }) {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="coverage-heading">
      <Container>
        <SectionHeading
          eyebrow="Coverage area"
          title={`Everywhere you drive in ${city.name}`}
          description={`From downtown to the inner suburbs, our trucks are staged across the metro so help is never far away.`}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              {city.name} neighborhoods
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="rounded-full bg-ink-100 px-3.5 py-1.5 text-sm text-ink-700"
                >
                  {n}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink-500">
              Surrounding suburbs
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {city.suburbs.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-ink-200 px-3.5 py-1.5 text-sm text-ink-600"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              Highways & expressways we cover
            </h3>
            <ul className="mt-4 space-y-4">
              {city.highways.map((hw) => (
                <li key={hw.name} className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-ink-950">{hw.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {hw.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
