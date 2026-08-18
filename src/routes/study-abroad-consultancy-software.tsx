import { createFileRoute, Link } from "@tanstack/react-router";

import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Navbar } from "@/components/Navbar";
import { HeroProduct } from "@/components/HeroProduct";
import { Workflow } from "@/components/Workflow";
import { ProductDashboard } from "@/components/ProductDashboard";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

const url = "https://forgeflows.lovable.app/study-abroad-consultancy-software";
const title = "Study Abroad Consultancy Software — ForgeFlow EDU";
const description =
  "ForgeFlow EDU is intelligent operating software for study-abroad consultancies: student profiles, eligibility, AI university matching, documents and follow-ups in one workflow.";

export const Route = createFileRoute("/study-abroad-consultancy-software")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ForgeFlow EDU",
          applicationCategory: "BusinessApplication",
          description,
          url,
          publisher: { "@type": "Organization", name: "ForgeFlow AI" },
        }),
      },
    ],
  }),
  component: StudyAbroadPage,
});

const capabilities = [
  {
    title: "Student application management",
    body: "One record per student — profile, academic and English scores, budget, country preference and current stage — so nothing lives in spreadsheets or chat threads.",
  },
  {
    title: "Eligibility checks",
    body: "Structured eligibility rules run against the profile before counsellors spend time shortlisting, so unqualified pathways are ruled out early.",
  },
  {
    title: "AI university matching",
    body: "Match scores are generated from profile, budget and eligibility signals, giving counsellors a ranked shortlist to review instead of building one from scratch.",
  },
  {
    title: "Document tracking",
    body: "Passport, transcripts, financial proof and drafts each carry a verified, in-review or missing state, so gaps surface before a deadline does.",
  },
  {
    title: "Follow-ups that don't get lost",
    body: "Every next action has an owner and a due date, kept beside the student it belongs to rather than in a separate reminder tool.",
  },
  {
    title: "Application pipeline visibility",
    body: "Applications move through submitted, in-review and draft states, so the team can see where the pipeline is stalling at any point.",
  },
];

const bottlenecks = [
  {
    problem: "Student information spread across spreadsheets, email and chat",
    fix: "A single structured student profile every stage reads from.",
  },
  {
    problem: "Shortlisting universities manually for each student",
    fix: "Ranked matches generated from the profile, reviewed by a counsellor.",
  },
  {
    problem: "Missing documents discovered late in the process",
    fix: "Explicit document states surfaced on the student record.",
  },
  {
    problem: "Follow-ups depending on individual memory",
    fix: "Owned, dated next actions attached to the student.",
  },
];

function StudyAbroadPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundLayer />
      <Navbar />

      <main>
        <section className="relative">
          <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
              <div className="rise">
                <p className="label-mono">ForgeFlow EDU</p>
                <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.1] sm:text-5xl">
                  Study abroad consultancy software, built around your workflow.
                </h1>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-text-body sm:text-lg">
                  ForgeFlow EDU is an intelligent operating layer for study-abroad consultancies —
                  from first enquiry to visa follow-up, in one structured system.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="rounded-md bg-gradient-brand px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-90"
                  >
                    Talk to ForgeFlow
                  </a>
                  <Link
                    to="/"
                    className="rounded-md border border-line px-5 py-3 text-center text-sm text-text-secondary transition-colors duration-300 hover:border-electric hover:text-text-primary"
                  >
                    See how we build
                  </Link>
                </div>
                <p className="mt-8 text-xs text-text-muted">
                  ForgeFlow EDU is in active development. Screens on this page are product concepts
                  with demo data.
                </p>
              </div>
              <div className="rise" style={{ animationDelay: "120ms" }}>
                <HeroProduct />
              </div>
            </div>
          </div>
        </section>

        <Section surface="solid" scrim={0.5}>
          <h2 className="max-w-2xl text-3xl font-medium sm:text-4xl">
            The consultancy workflow, end to end.
          </h2>
          <p className="mt-4 max-w-xl text-base text-text-body">
            Every stage a study-abroad team runs today — structured, connected and visible.
          </p>
          <div className="mt-12">
            <Workflow />
          </div>
        </Section>

        <Section>
          <h2 className="max-w-2xl text-3xl font-medium sm:text-4xl">
            What ForgeFlow EDU handles.
          </h2>
          <div className="mt-12 grid gap-px bg-line-subtle sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-forge-black/25 py-6 sm:px-6">
                <h3 className="text-base font-medium">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section surface="solid" scrim={0.5}>
          <h2 className="max-w-2xl text-3xl font-medium sm:text-4xl">
            Where consultancies lose time.
          </h2>
          <ul className="mt-12 divide-y divide-line-subtle border-y border-line-subtle">
            {bottlenecks.map((b) => (
              <li key={b.problem} className="grid gap-3 py-6 md:grid-cols-2 md:gap-12">
                <p className="text-sm text-text-muted">{b.problem}</p>
                <p className="text-sm text-text-secondary">{b.fix}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <p className="label-mono">Product concept</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium sm:text-4xl">
            One workspace for the whole team.
          </h2>
          <div className="mt-12">
            <ProductDashboard />
          </div>
        </Section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
