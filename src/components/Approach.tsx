import { approachSteps, approachChain } from "@/data/forgeflowData";
import { Section } from "./Section";

export function Approach() {
  return (
    <Section id="approach">
      <div className="max-w-2xl">
        <p className="label-mono">Our approach</p>
        <h2 className="mt-5 text-3xl font-medium sm:text-4xl">We don't start with AI.</h2>
      </div>

      <ol className="mt-14 divide-y divide-line-subtle border-y border-line-subtle">
        {approachSteps.map((s) => (
          <li
            key={s.id}
            className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-10"
          >
            <span className="font-mono text-[0.7rem] tracking-[0.18em] text-electric sm:w-12">
              {s.id}
            </span>
            <h3 className="text-lg font-medium sm:w-64">{s.title}</h3>
            <p className="max-w-md text-sm leading-relaxed text-text-body">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
        {approachChain.map((c, i) => (
          <span key={c} className="flex items-center gap-3">
            <span className="font-mono text-[0.65rem] tracking-[0.16em] text-text-secondary">
              {c.toUpperCase()}
            </span>
            {i < approachChain.length - 1 && <span className="h-px w-5 bg-line" />}
          </span>
        ))}
      </div>
    </Section>
  );
}
