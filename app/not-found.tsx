import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlyphStar, GlyphO, GlyphX } from "@/components/ornament/Glyph";
import { ScribbleLoop } from "@/components/ornament/Scribble";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/pricing", label: "Pricing" },
];

export const metadata = {
  title: "Page not found · Dolopreneur",
  description: "We can't find this page. The rest of the site still works.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-start py-20 md:py-32">
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex items-center gap-3 text-ink/40">
          <GlyphStar className="h-5 w-5" />
          <GlyphO className="h-5 w-5" />
          <GlyphX className="h-5 w-5" />
        </div>

        <span className="relative inline-flex items-center pt-4">
          <span className="relative z-10 rounded-pill bg-card px-3 py-1 text-xs font-medium tracking-wide text-ink hairline">
            404
          </span>
          <ScribbleLoop
            className="pointer-events-none absolute -inset-x-2 -inset-y-1.5 z-0 text-accent"
            aria-hidden
          />
        </span>

        <h1 className="mt-2 max-w-[20ch] text-[44px] leading-[1.02] md:text-[88px]">
          This page is off the map.
        </h1>

        <p className="mt-4 max-w-[52ch] text-lg text-ink/65 md:text-xl">
          The link probably moved, or it never existed. Pick a destination below, the rest of the site is exactly where you left it.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="dark" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Talk to us instead
          </Button>
        </div>
      </div>

      <div className="mt-16 w-full border-t border-line pt-10 md:mt-24 md:pt-12">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/45">
          Or jump to
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-3">
          {quickLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex items-center justify-between rounded-tile bg-card px-5 py-4 text-[15px] text-ink hairline transition-colors hover:bg-card/60"
              >
                <span className="font-medium">{l.label}</span>
                <ArrowUpRight className="h-4 w-4 text-ink/50 transition-colors group-hover:text-ink" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
