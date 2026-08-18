import { futureVerticals } from "@/data/forgeflowData";
import { Section } from "./Section";

export function FutureVision() {
  return (
    <Section scrim={0.85}>
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <div>
          <h2 className="text-3xl font-medium sm:text-4xl">One vertical at a time.</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-text-body">
            We will only enter a new vertical after earning the right through customer understanding
            and product-market validation.
          </p>
        </div>
        <ul className="divide-y divide-line-subtle border-y border-line-subtle">
          {futureVerticals.map((v) => (
            <li key={v} className="py-4 text-sm text-text-muted">
              {v}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
