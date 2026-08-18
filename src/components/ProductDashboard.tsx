import { useState } from "react";
import { dashboardMetrics } from "@/data/forgeflowData";
import {
  StudentsPanel,
  ApplicationsPanel,
  DocumentsPanel,
  FollowUpsPanel,
  MatchingPanel,
} from "./dashboard/panels";

const tabs = [
  { id: "students", label: "Students", Panel: StudentsPanel },
  { id: "applications", label: "Applications", Panel: ApplicationsPanel },
  { id: "documents", label: "Documents", Panel: DocumentsPanel },
  { id: "followups", label: "Follow-ups", Panel: FollowUpsPanel },
  { id: "matching", label: "University Matching", Panel: MatchingPanel },
];

const navItems = ["Overview", "Students", "Applications", "Documents", "Follow-ups"];

export function ProductDashboard() {
  const [active, setActive] = useState<string>("students");
  const ActivePanel = (tabs.find((t) => t.id === active) ?? tabs[0]!).Panel;

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface/90 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line-subtle px-4 py-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="font-mono text-[0.65rem] tracking-[0.16em] text-text-secondary">
            FORGEFLOW EDU
          </span>
          {navItems.map((n, i) => (
            <span
              key={n}
              className={`text-xs ${i === 0 ? "text-text-primary" : "text-text-muted"}`}
            >
              {n}
            </span>
          ))}
        </div>
        <span className="rounded-sm border border-line px-2 py-1 font-mono text-[0.6rem] tracking-[0.14em] text-text-muted">
          DEMO DATA
        </span>
      </div>

      <div className="grid grid-cols-2 gap-px bg-line-subtle sm:grid-cols-4">
        {dashboardMetrics.map((m) => (
          <div key={m.label} className="bg-elevated/70 px-4 py-5">
            <p className="label-mono">{m.label}</p>
            <p className="mt-2 font-display text-2xl text-text-primary">{m.value}</p>
          </div>
        ))}
      </div>

      <div
        role="tablist"
        aria-label="ForgeFlow EDU modules"
        className="flex flex-wrap gap-1 border-y border-line-subtle bg-forge-black/40 px-2 py-2"
      >
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(t.id)}
              className={`rounded-sm px-3 py-2 text-xs transition-colors duration-300 ${
                isActive
                  ? "bg-hover-surface text-text-primary"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="p-4 sm:p-6">
        <ActivePanel />
      </div>
    </div>
  );
}
