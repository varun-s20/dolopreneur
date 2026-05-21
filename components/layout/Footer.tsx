import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

const cols = [
  {
    heading: "Product",
    links: [
      { href: "/services/converseos", label: "ConverseOS" },
      { href: "/services/siteforge", label: "SiteForge" },
      { href: "/services/voxagent", label: "VoxAgent" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/playbooks", label: "Playbooks" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/playbooks", label: "Case studies" },
      { href: "/contact", label: "Book a demo" },
      { href: "/contact", label: "Become a reseller" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/dpa", label: "DPA" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-bg" data-nav-theme="dark">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-base font-semibold tracking-tight">Dolopreneur</span>
            </Link>
            <p className="max-w-xs text-sm text-bg/65">
              One operator. Every workflow. An AI workforce that handles chat, sites, and voice while you stay the CEO.
            </p>
            <div className="flex items-center gap-2 text-xs text-bg/55">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              All systems operational
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-bg/55">{col.heading}</h3>
              <ul className="space-y-2.5 text-sm text-bg/80">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-bg">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-bg/10 pt-6 text-xs text-bg/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dolopreneur. All rights reserved.</p>
          <p>Designed for operators. Built to scale.</p>
        </div>
      </div>
    </footer>
  );
}
