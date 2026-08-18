import { principles } from "@/data/forgeflowData";
import { Section } from "./Section";

export function Principles() {
  return (
    <Section id="platform" surface="solid">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium sm:text-4xl">Generic AI isn't enough.</h2>
        <p className="mt-5 text-base leading-relaxed text-text-body">
          Every industry has its own language, processes, constraints and decisions. We build around
          those realities instead of forcing businesses into generic software.
        </p>
      </div>

      <div className="mt-16 grid gap-px bg-line-subtle sm:grid-cols-3">
        {principles.map((p) => (
          <div key={p.id} className="bg-forge-black/20 px-0 py-6 sm:px-6 sm:py-2">
            <p className="font-mono text-[0.7rem] tracking-[0.18em] text-electric">{p.id}</p>
            <h3 className="mt-3 text-lg font-medium">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-body">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
