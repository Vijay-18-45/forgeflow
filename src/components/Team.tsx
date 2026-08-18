import { team } from "@/data/forgeflowData";
import { Section } from "./Section";

export function Team() {
  return (
    <Section id="about" surface="solid" scrim={0.45}>
      <h2 className="max-w-2xl text-3xl font-medium sm:text-4xl">
        Built by people who care about the workflow.
      </h2>
      <div className="mt-12 grid gap-px bg-line-subtle sm:grid-cols-3">
        {team.map((m) => (
          <div key={m.role} className="bg-forge-black/25 py-6 sm:px-6 sm:py-4">
            <h3 className="text-base font-medium">{m.role}</h3>
            <p className="mt-2 text-sm text-text-muted">{m.focus}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
