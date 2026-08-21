import type { ReactNode } from "react";

export function Section({
  id,
  children,
  surface = "none",
  /** Per-section dark scrim strength (0 = none, 1 = opaque black). */
  scrim = 0.35,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  surface?: "none" | "soft" | "solid";
  scrim?: number;
  className?: string;
}) {
  const bg =
    surface === "solid"
      ? "bg-forge-black/90"
      : surface === "soft"
        ? "bg-surface/55 backdrop-blur-[2px]"
        : "";

  const s = Math.min(Math.max(scrim, 0), 1);

  return (
    <section id={id} className={`relative border-t border-line-subtle ${bg}`}>
      {s > 0 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(4,6,10,${(s * 0.85).toFixed(3)}), rgba(4,6,10,${s.toFixed(3)}) 45%, rgba(4,6,10,${(s * 0.85).toFixed(3)}))`,
          }}
        />
      )}
      <div className={`relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="label-mono">{children}</p>;
}
