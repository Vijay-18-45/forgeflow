import { Link } from "@tanstack/react-router";

import { Section } from "./Section";
import { Workflow } from "./Workflow";
import { ProductDashboard } from "./ProductDashboard";

export function EduVertical() {
  return (
    <Section id="edu" surface="solid" scrim={0.55}>
      <p className="label-mono">First vertical</p>
      <h2 className="mt-5 text-3xl font-medium sm:text-4xl">ForgeFlow EDU</h2>
      <p className="mt-4 max-w-xl text-base text-text-body">
        An intelligent operating layer for study-abroad consultancies.
      </p>
      <Link
        to="/study-abroad-consultancy-software"
        className="mt-6 inline-block border-b border-line pb-0.5 text-sm text-bright-cyan transition-colors duration-300 hover:border-bright-cyan"
      >
        Study abroad consultancy software →
      </Link>


      <div className="mt-14">
        <p className="label-mono mb-5">Workflow</p>
        <Workflow />
      </div>

      <div className="mt-16">
        <ProductDashboard />
      </div>
    </Section>
  );
}
