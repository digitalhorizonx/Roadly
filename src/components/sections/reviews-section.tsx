import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviews } from "@/data/reviews";
import { Star } from "lucide-react";

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`Rated ${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="reviews-heading">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Drivers who called, and what happened next"
          description="Real situations, honest outcomes. This is the standard every Roadly technician is held to."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.name} className="flex flex-col">
              <Stars count={review.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                “{review.text}”
              </blockquote>
              <footer className="mt-5 border-t border-ink-100 pt-4 text-sm">
                <p className="font-semibold text-ink-950">{review.name}</p>
                <p className="text-ink-500">
                  {review.location} · {review.service}
                </p>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
