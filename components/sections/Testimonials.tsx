import { ArrowLeft, ArrowRight } from "lucide-react";
import { GlyphStar, GlyphO, GlyphX } from "@/components/ornament/Glyph";
import { testimonials } from "@/content/testimonials";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const glyphs = [
  <GlyphStar key="s" className="h-5 w-5 text-ink" />,
  <GlyphO key="o" className="h-5 w-5 text-ink" />,
  <GlyphX key="x" className="h-5 w-5 text-ink" />,
];

export function Testimonials() {
  return (
    <section className="bg-surface-dark text-bg" data-nav-theme="dark">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <span className="relative inline-flex items-center">
                <span className="relative z-10 rounded-pill bg-surface-dark-2 px-3 py-1 text-xs font-medium tracking-wide text-bg/85 hairline-dark">
                  Testimonials
                </span>
              </span>
            </Reveal>
            <Reveal as="h2" delay={0.05} className="max-w-[20ch] text-[36px] leading-[1.05] text-bg md:text-[56px]">
              What operators say about Dolopreneur.
            </Reveal>
          </div>
          <Reveal delay={0.15} className="flex gap-2">
            <button
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-pill bg-surface-dark-2 text-bg transition-colors hover:bg-bg/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-pill bg-surface-dark-2 text-bg transition-colors hover:bg-bg/10"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6" step={0.1}>
          {testimonials.map((t, i) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col justify-between gap-8 rounded-tile bg-card p-6 text-ink md:p-7">
                <div className="space-y-5">
                  {glyphs[i % glyphs.length]}
                  <blockquote className="text-[16px] leading-snug text-ink/85 md:text-[17px]">
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-[11px] font-semibold text-bg">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-ink/55">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
