import { eduWorkflow } from "@/data/forgeflowData";

const toneClass: Record<string, string> = {
  inactive: "border-line-subtle text-text-muted",
  active: "border-primary-blue/70 text-text-secondary",
  intelligence: "border-cyan/60 text-cyan",
  highlight: "border-bright-cyan/70 text-bright-cyan",
};

export function Workflow() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
      {eduWorkflow.map((step, i) => (
        <div key={step.label} className="flex items-center gap-3 md:gap-2">
          <span
            className={`rounded-sm border bg-forge-black/40 px-3 py-2 font-mono text-[0.65rem] tracking-[0.14em] ${toneClass[step.tone]}`}
          >
            {step.label}
          </span>
          {i < eduWorkflow.length - 1 && (
            <>
              <span className="hidden h-px w-6 bg-line md:block" />
              <span className="block h-4 w-px bg-line md:hidden" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
