import { Check, TriangleAlert } from "lucide-react";
import { studentProfile, universityMatches, documentStatus } from "@/data/forgeflowData";

export function HeroProduct() {
  return (
    <div className="rounded-lg border border-line bg-surface/85 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 border-b border-line-subtle px-4 py-3">
        <p className="font-mono text-[0.65rem] tracking-[0.14em] text-text-secondary">
          FORGEFLOW EDU — STUDENT APPLICATION
        </p>
        <span className="rounded-sm border border-line px-2 py-1 font-mono text-[0.6rem] tracking-[0.14em] text-text-muted">
          PRODUCT CONCEPT
        </span>
      </div>

      <div className="grid gap-px bg-line-subtle md:grid-cols-2">
        <div className="bg-elevated/70 p-4">
          <p className="label-mono mb-4">Student Profile</p>
          <dl className="space-y-3">
            {studentProfile.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-text-body">{row.label}</dt>
                <dd className="font-mono text-sm text-text-primary">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-elevated/70 p-4">
          <p className="label-mono mb-4 text-cyan">AI Match</p>
          <ul className="space-y-3.5">
            {universityMatches.map((u) => (
              <li key={u.name}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-text-secondary">{u.name}</span>
                  <span className="font-mono text-sm text-bright-cyan">{u.score}%</span>
                </div>
                <div className="mt-1.5 h-[3px] w-full rounded-full bg-line-subtle">
                  <div
                    className="h-full rounded-full bg-gradient-brand transition-[width] duration-700"
                    style={{ width: `${u.score}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-subtle p-4">
        <p className="label-mono mb-3">Document Status</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {documentStatus.map((d) => (
            <li key={d.name} className="flex items-center gap-2 text-sm">
              {d.state === "done" ? (
                <Check className="size-3.5 text-cyan" />
              ) : (
                <TriangleAlert className="size-3.5 text-text-muted" />
              )}
              <span className={d.state === "done" ? "text-text-secondary" : "text-text-muted"}>
                {d.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-line-subtle bg-forge-black/50 px-4 py-3.5">
        <span className="label-mono">Next action</span>
        <span className="text-sm text-text-primary">Schedule counsellor review</span>
      </div>
    </div>
  );
}
