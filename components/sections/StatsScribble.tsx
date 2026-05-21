import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlyphClover, GlyphO, GlyphX } from "@/components/ornament/Glyph";
import { ScribbleSquiggle } from "@/components/ornament/Scribble";
import { Odometer } from "@/components/motion/Odometer";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScribbleDraw } from "@/components/motion/ScribbleDraw";

type Stat = {
  glyph: React.ReactNode;
  value: number;
  prefix?: string;
  suffix?: string;
  format?: Intl.NumberFormatOptions;
  label: string;
};

const stats: Stat[] = [
  {
    glyph: <GlyphClover className="h-6 w-6 text-ink" />,
    value: 3.4,
    suffix: "s",
    format: { minimumFractionDigits: 1, maximumFractionDigits: 1 },
    label: "Average lead-response time",
  },
  {
    glyph: <GlyphO className="h-6 w-6 text-ink" />,
    value: 78,
    suffix: "%",
    label: "Conversations handled without a human",
  },
  {
    glyph: <GlyphX className="h-6 w-6 text-ink" />,
    value: 4.2,
    suffix: "×",
    format: { minimumFractionDigits: 1, maximumFractionDigits: 1 },
    label: "Pipeline-to-close uplift in 30 days",
  },
];

export function StatsScribble() {
  return (
    <section className="relative flex flex-col justify-center bg-bg md:h-full">
      <ScribbleDraw delay={0.2} duration={1.4}>
        <ScribbleSquiggle
          className="pointer-events-none absolute -left-6 top-16 hidden h-24 w-72 text-accent md:block"
          aria-hidden
        />
      </ScribbleDraw>
      <ScribbleDraw delay={0.45} duration={1.4}>
        <ScribbleSquiggle
          className="pointer-events-none absolute -right-6 bottom-10 hidden h-32 w-80 -rotate-12 text-accent md:block"
          aria-hidden
        />
      </ScribbleDraw>

      <div className="container-page py-16 md:py-20">
        <Reveal><SectionLabel>Benefits</SectionLabel></Reveal>

        <Reveal as="p" delay={0.1} className="mt-6 max-w-[58ch] text-lg leading-[1.55] text-ink/75 md:text-[22px] md:leading-[1.45]">
          Consolidate the entire operator stack, inbox, funnel, dialer, into one subscription that runs while you sleep, ships while you focus, and never forgets a follow-up.
        </Reveal>

        <Stagger className="mt-12 grid gap-10 sm:grid-cols-3 md:mt-14 md:gap-12" step={0.12} initialDelay={0.2}>
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="mb-3">{s.glyph}</div>
              <Odometer
                className="block font-display text-[64px] leading-none text-ink tabular md:text-[88px]"
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                format={s.format}
              />
              <p className="mt-3 max-w-[20ch] text-sm text-ink/60 md:text-[15px]">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
