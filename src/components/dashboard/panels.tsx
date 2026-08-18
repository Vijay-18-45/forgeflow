import {
  dashboardStudents,
  dashboardApplications,
  dashboardDocuments,
  dashboardFollowUps,
  universityMatches,
} from "@/data/forgeflowData";

function Table({
  head,
  rows,
}: {
  head: string[];
  rows: Array<Array<{ text: string; tone?: "primary" | "body" | "muted" | "cyan" }>>;
}) {
  const tone = {
    primary: "text-text-primary",
    body: "text-text-body",
    muted: "text-text-muted",
    cyan: "text-bright-cyan",
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                scope="col"
                className="border-b border-line-subtle pb-3 font-mono text-[0.6rem] font-normal tracking-[0.16em] uppercase text-text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="transition-colors duration-300 hover:bg-hover-surface/50">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`border-b border-line-subtle py-3.5 pr-4 text-sm ${tone[c.tone ?? "body"]}`}
                >
                  {c.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StudentsPanel() {
  return (
    <Table
      head={["Student", "Country", "Stage", "Academic"]}
      rows={dashboardStudents.map((s) => [
        { text: s.name, tone: "primary" as const },
        { text: s.country },
        { text: s.stage, tone: "cyan" as const },
        { text: s.score },
      ])}
    />
  );
}

export function ApplicationsPanel() {
  return (
    <Table
      head={["Reference", "University", "Programme", "State"]}
      rows={dashboardApplications.map((a) => [
        { text: a.id, tone: "primary" as const },
        { text: a.university },
        { text: a.programme },
        { text: a.state, tone: a.state === "Draft" ? ("muted" as const) : ("cyan" as const) },
      ])}
    />
  );
}

export function DocumentsPanel() {
  return (
    <Table
      head={["Document", "Owner", "State"]}
      rows={dashboardDocuments.map((d) => [
        { text: d.name, tone: "primary" as const },
        { text: d.owner },
        { text: d.state, tone: d.state === "Missing" ? ("muted" as const) : ("cyan" as const) },
      ])}
    />
  );
}

export function FollowUpsPanel() {
  return (
    <Table
      head={["Task", "Due", "Owner"]}
      rows={dashboardFollowUps.map((f) => [
        { text: f.task, tone: "primary" as const },
        { text: f.due, tone: "cyan" as const },
        { text: f.owner },
      ])}
    />
  );
}

export function MatchingPanel() {
  return (
    <div className="space-y-5">
      {universityMatches.map((u) => (
        <div key={u.name}>
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-text-secondary">{u.name}</span>
            <span className="font-mono text-sm text-bright-cyan">{u.score}%</span>
          </div>
          <div className="mt-2 h-[3px] w-full rounded-full bg-line-subtle">
            <div
              className="h-full rounded-full bg-gradient-brand"
              style={{ width: `${u.score}%` }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-text-muted">
        Match scores are generated from profile, budget and eligibility signals.
      </p>
    </div>
  );
}
