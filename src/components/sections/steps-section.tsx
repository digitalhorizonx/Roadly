import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ContentBlock } from "@/data/types";

interface StepsSectionProps {
  title?: string;
  description?: string;
  steps: ContentBlock[];
}

export function StepsSection({
  title = "How it works",
  description = "From your call to back on the road — a process built to be fast and predictable.",
  steps,
}: StepsSectionProps) {
  return (
    <section className="bg-ink-50 py-20 sm:py-24" aria-labelledby="steps-heading">
      <Container>
        <SectionHeading eyebrow="The process" title={title} description={description} />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="flex size-10 items-center justify-center rounded-full bg-ink-950 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
