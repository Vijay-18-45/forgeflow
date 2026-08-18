import { navLinks } from "@/data/forgeflowData";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-forge-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-sm tracking-[0.22em] text-text-primary">FORGEFLOW AI</p>
          <p className="mt-3 max-w-xs text-sm text-text-muted">
            Vertical intelligence for real-world industries.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {[...navLinks, { label: "Contact", href: "#contact" }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-text-muted transition-colors hover:text-text-secondary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line-subtle">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-text-muted sm:px-8">
          © 2026 ForgeFlow AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
