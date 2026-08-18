import { verticals } from "@/data/forgeflowData";
import { Section } from "./Section";

export function Verticals() {
  return (
    <Section id="verticals" scrim={0.7}>
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium sm:text-4xl">Built vertically.</h2>
        <p className="mt-4 text-base text-text-body">We go deep before we go wide.</p>
      </div>

      <ul className="mt-14 divide-y divide-line-subtle border-y border-line-subtle">
        {verticals.map((v) => {
          const building = v.status === "BUILDING";
          return (
            <li
              key={v.name}
              className={`group flex flex-col gap-3 px-1 py-6 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between sm:px-4 ${
                building
                  ? "border-l-2 border-l-electric bg-surface/50 hover:bg-hover-surface/50"
                  : "hover:bg-hover-surface/25"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3
                    className={`text-lg font-medium ${building ? "text-text-primary" : "text-text-muted"}`}
                  >
                    {v.name}
                  </h3>
                  {v.product && (
                    <span className="font-display text-sm text-bright-cyan">— {v.product}</span>
                  )}
                </div>
                <p
                  className={`mt-2 max-w-xl text-sm ${building ? "text-text-body" : "text-text-muted"}`}
                >
                  {v.description}
                </p>
              </div>
              <span
                className={`w-fit rounded-sm border px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.16em] ${
                  building
                    ? "border-electric/60 text-bright-cyan"
                    : "border-line-subtle text-text-muted"
                }`}
              >
                {v.status}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
