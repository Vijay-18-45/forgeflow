import type { ReactNode } from "react";

export function Section({
  id,
  children,
  surface = "none",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  surface?: "none" | "soft" | "solid";
  className?: string;
}) {
  const bg =
    surface === "solid"
      ? "bg-forge-black/90"
      : surface === "soft"
        ? "bg-surface/55 backdrop-blur-[2px]"
        : "";

  return (
    <section id={id} className={`relative border-t border-line-subtle ${bg}`}>
      <div className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="label-mono">{children}</p>;
}
