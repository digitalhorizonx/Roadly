import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FaqItem } from "@/data/types";

interface FaqSectionProps {
  title?: string;
  description?: string;
  items: FaqItem[];
}

export function FaqSection({
  title = "Frequently asked questions",
  description = "Straight answers to the questions drivers ask us most.",
  items,
}: FaqSectionProps) {
  return (
    <section className="bg-ink-50 py-20 sm:py-24" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title={title} description={description} />
        <div className="mt-10">
          <FaqAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
