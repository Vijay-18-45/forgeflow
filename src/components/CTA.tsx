export function CTA() {
  return (
    <section id="contact" className="relative border-t border-line-subtle">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(4,6,10,0.5), rgba(4,6,10,0.6)), radial-gradient(ellipse 70% 60% at 50% 100%, rgba(2,113,242,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <h2 className="mx-auto max-w-2xl text-3xl font-medium sm:text-4xl">
          Have a workflow worth rebuilding?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-body">
          Tell us where your team spends time, makes decisions, or loses information. We'll start
          there.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@forgeflow.ai"
            className="rounded-md bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-90"
          >
            Talk to ForgeFlow
          </a>
          <a
            href="#approach"
            className="rounded-md border border-line px-5 py-3 text-sm text-text-secondary transition-colors duration-300 hover:border-electric hover:text-text-primary"
          >
            Explore our approach
          </a>
        </div>
      </div>
    </section>
  );
}
