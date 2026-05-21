"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ChatThread } from "@/components/product-mocks/ChatThread";
import { ReservationCard } from "@/components/product-mocks/ReservationCard";
import { CallTranscript } from "@/components/product-mocks/CallTranscript";
import { PageBuilderCanvas } from "@/components/product-mocks/PageBuilderCanvas";
import { ScribbleCornerLoops, ScribbleSquiggle } from "@/components/ornament/Scribble";
import { ScribbleDraw } from "@/components/motion/ScribbleDraw";
import { GlyphStar, GlyphX, GlyphClover } from "@/components/ornament/Glyph";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const drift = (delay: number, amplitude = 6) => ({
  y: [0, -amplitude, 0],
  transition: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay },
});

/**
 * Charcoal-bezeled "device screen" used for the floating polaroid cards
 * around the final CTA. Distinct from the flat offwhite hero bento, these
 * read as physical screens scattered on the page.
 */
function DeviceFrame({
  orientation,
  outerRadius,
  innerRadius,
  className,
  children,
}: {
  orientation: "portrait" | "landscape";
  outerRadius: number;
  innerRadius: number;
  className?: string;
  children: ReactNode;
}) {
  const aspect = orientation === "portrait" ? "aspect-[9/16]" : "aspect-[5/4]";
  return (
    <div
      className={cn(
        "overflow-hidden bg-surface-dark p-1.5 shadow-[0_24px_48px_-16px_rgba(26,26,26,0.38)] ring-1 ring-ink/[0.05]",
        className,
      )}
      style={{ borderRadius: outerRadius }}
    >
      <div
        className={cn("overflow-hidden bg-card", aspect)}
        style={{ borderRadius: innerRadius }}
      >
        {children}
      </div>
    </div>
  );
}

export function FinalCTA() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="container-page relative py-24 md:py-36">
        {/* Floating screens, desktop only */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {/* TL, portrait phone (ChatThread) */}
          <motion.div
            className="absolute left-2 top-4 w-44 -rotate-[5deg] origin-top-right lg:left-4"
            animate={reduced ? undefined : drift(0)}
          >
            <DeviceFrame orientation="portrait" outerRadius={32} innerRadius={24}>
              <ChatThread />
            </DeviceFrame>
          </motion.div>
          <ScribbleDraw delay={0.3} duration={1.2}>
            <ScribbleCornerLoops
              className="absolute -left-2 top-0 h-44 w-44 text-accent"
              aria-hidden
            />
          </ScribbleDraw>

          {/* TR, landscape reservations panel */}
          <motion.div
            className="absolute right-2 top-12 w-72 rotate-[4deg] origin-top-left lg:right-4"
            animate={reduced ? undefined : drift(0.8)}
          >
            <DeviceFrame orientation="landscape" outerRadius={20} innerRadius={14}>
              <ReservationCard />
            </DeviceFrame>
          </motion.div>
          <ScribbleDraw delay={0.5} duration={1.2}>
            <ScribbleCornerLoops
              className="absolute right-0 -top-4 h-40 w-40 -scale-x-100 text-accent"
              aria-hidden
            />
          </ScribbleDraw>

          {/* BL, landscape browser (PageBuilder) */}
          <motion.div
            className="absolute bottom-12 left-4 w-80 -rotate-[3deg] origin-bottom-right lg:left-6"
            animate={reduced ? undefined : drift(1.6)}
          >
            <DeviceFrame orientation="landscape" outerRadius={18} innerRadius={12}>
              <PageBuilderCanvas />
            </DeviceFrame>
          </motion.div>
          <ScribbleDraw delay={0.7} duration={1.2}>
            <ScribbleSquiggle
              className="absolute bottom-2 left-12 h-24 w-72 text-accent"
              aria-hidden
            />
          </ScribbleDraw>

          {/* BR, portrait phone (CallTranscript) */}
          <motion.div
            className="absolute bottom-16 right-4 w-44 rotate-[5deg] origin-bottom-left lg:right-6"
            animate={reduced ? undefined : drift(2.4)}
          >
            <DeviceFrame orientation="portrait" outerRadius={32} innerRadius={24}>
              <CallTranscript />
            </DeviceFrame>
          </motion.div>
          <ScribbleDraw delay={0.9} duration={1.2}>
            <ScribbleCornerLoops
              className="absolute -right-2 bottom-2 h-44 w-44 rotate-180 text-accent"
              aria-hidden
            />
          </ScribbleDraw>
        </div>

        {/* Headline */}
        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal className="mb-6 flex gap-3 text-ink/50">
            <GlyphStar className="h-5 w-5" />
            <GlyphClover className="h-5 w-5" />
            <GlyphX className="h-5 w-5" />
          </Reveal>
          <Reveal as="h2" delay={0.05} className="text-[40px] leading-[1.05] md:text-[64px]">
            Ready to run your company on{" "}
            <span className="scribble-underline">autopilot?</span>
          </Reveal>
          <Reveal as="p" delay={0.12} className="mt-5 max-w-[42ch] text-base text-ink/65 md:text-lg">
            Pick a plan today. The agents are working before your second coffee.
          </Reveal>
          <Reveal delay={0.2}>
            <Button href="/contact" variant="dark" size="lg" className="mt-8">
              Book a demo
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
