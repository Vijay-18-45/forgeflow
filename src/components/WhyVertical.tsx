import { genericPath, forgePath } from "@/data/forgeflowData";
import { Section } from "./Section";

function Path({ title, steps, emphasis }: { title: string; steps: string[]; emphasis?: boolean }) {
  return (
    <div
      className={`rounded-lg border p-6 ${
        emphasis
          ? "border-electric/40 bg-surface/70 backdrop-blur-[2px]"
          : "border-line-subtle bg-forge-black/30"
      }`}
    >
      <p className={`label-mono ${emphasis ? "text-bright-cyan" : ""}`}>{title}</p>
      <ul className="mt-5 space-y-3">
        {steps.map((s) => (
          <li key={s} className="flex items-center gap-3">
            <span
              className={`h-px w-4 ${emphasis ? "bg-gradient-brand" : "bg-line"}`}
              aria-hidden="true"
            />
            <span className={`text-sm ${emphasis ? "text-text-secondary" : "text-text-muted"}`}>
              {s}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhyVertical() {
  return (
    <Section surface="solid" scrim={0.5}>
      <h2 className="text-3xl font-medium sm:text-4xl">Depth beats breadth.</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Path title="Generic path" steps={genericPath} />
        <Path title="ForgeFlow path" steps={forgePath} emphasis />
      </div>
    </Section>
  );
}
