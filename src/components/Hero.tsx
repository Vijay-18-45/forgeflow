import { processSteps } from "@/data/forgeflowData";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 45%, rgba(4,6,10,0.62), rgba(4,6,10,0.28) 75%, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">

        <div className="flex flex-col items-center gap-14 lg:gap-16">
          <div className="rise max-w-3xl text-center">
            <p className="label-mono">ForgeFlow AI</p>
            <h1 className="mt-5 text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Intelligence built for your industry.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-text-body sm:text-lg">
              We build AI-native software around complex industry workflows — starting with
              education.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#edu"
                className="rounded-md bg-gradient-brand px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-90"
              >
                Explore ForgeFlow EDU
              </a>
              <a
                href="#contact"
                className="rounded-md border border-line px-5 py-3 text-center text-sm text-text-secondary transition-colors duration-300 hover:border-electric hover:text-text-primary"
              >
                Talk to ForgeFlow
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-line-subtle pt-6">
              {processSteps.map((s, i) => (
                <span key={s} className="flex items-center gap-3">
                  <span className="font-mono text-[0.65rem] tracking-[0.16em] text-text-muted">
                    {s.toUpperCase()}
                  </span>
                  {i < processSteps.length - 1 && <span className="h-px w-4 bg-line" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
