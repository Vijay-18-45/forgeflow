import { createFileRoute } from "@tanstack/react-router";

import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { Verticals } from "@/components/Verticals";
import { EduVertical } from "@/components/EduVertical";
import { Approach } from "@/components/Approach";
import { WhyVertical } from "@/components/WhyVertical";
import { FutureVision } from "@/components/FutureVision";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { HeroProduct } from "@/components/HeroProduct";
import { Footer } from "@/components/Footer";
import { BRAND_IMAGE, BRAND_IMAGE_SIZES, BRAND_IMAGE_SRCSET } from "@/data/forgeflowData";

const title = "ForgeFlow AI — Vertical Intelligence for Real-World Industries";
const description =
  "ForgeFlow AI builds intelligent software around complex industry workflows, starting with education.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BRAND_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BRAND_IMAGE },
      { property: "og:url", content: "https://forgeflows.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://forgeflows.lovable.app/" },
      { rel: "preconnect", href: "https://res.cloudinary.com", crossOrigin: "" },
      {
        rel: "preload",
        as: "image",
        href: BRAND_IMAGE,
        imagesrcset: BRAND_IMAGE_SRCSET,
        imagesizes: BRAND_IMAGE_SIZES,
        fetchpriority: "high",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundLayer />
      <Navbar />
      <main>
        <Hero />
        <Principles />
        <Verticals />
        <EduVertical />
        <Approach />
        <WhyVertical />
        <FutureVision />
        <Team />
        <CTA />
      </main>

      <section className="relative border-t border-line bg-surface/40 py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(4,6,10,0.55)" }}
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <HeroProduct />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
