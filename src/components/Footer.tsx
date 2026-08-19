import { navLinks } from "@/data/forgeflowData";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Add the real ForgeFlow AI profile URLs here to show each icon.
// Leave a value empty ("") and that icon stays hidden — no placeholder links.
const socialLinks = [
  { label: "LinkedIn", href: "", icon: Linkedin },
  { label: "Instagram", href: "", icon: Instagram },
  { label: "Facebook", href: "", icon: Facebook },
  { label: "Twitter", href: "", icon: Twitter },
  { label: "WhatsApp", href: "", icon: WhatsAppIcon },
].filter((s) => s.href.length > 0);


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

          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-text-muted">Contact</p>
            <a
              href="mailto:hello@forgeflow.ai"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              hello@forgeflow.ai
            </a>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full text-text-muted transition-colors duration-200 hover:bg-surface hover:text-text-primary active:bg-elevated active:text-electric"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            )}
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

