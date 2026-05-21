"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { ChatThread } from "@/components/product-mocks/ChatThread";
import { PageBuilderCanvas } from "@/components/product-mocks/PageBuilderCanvas";
import { CallTranscript } from "@/components/product-mocks/CallTranscript";
import { services } from "@/content/services";
import { Reveal } from "@/components/motion/Reveal";
import { StageReveal } from "@/components/motion/StageReveal";
import { cn } from "@/lib/cn";

const mocks: Record<string, React.ReactNode> = {
  converseos: <ChatThread />,
  siteforge: <PageBuilderCanvas />,
  voxagent: <CallTranscript />,
};

export function ServicesStack() {
  const [active, setActive] = useState(services[0].slug);
  const reduced = useReducedMotion();
  const current = services.find((s) => s.slug === active)!;

  return (
    <section id="services" className="flex flex-col justify-center bg-bg md:h-full">
      <div className="container-page py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col items-start gap-5">
            <Reveal y={20}>
              <SectionLabel>Services</SectionLabel>
            </Reveal>
            <Reveal as="h2" x={-24} y={0} delay={0.08} className="max-w-[22ch] text-[32px] leading-[1.05] md:text-[48px]">
              Three agents. One subscription. The work, off your plate.
            </Reveal>
          </div>

          {/* Service switcher, enters from the right */}
          <Reveal x={32} y={0} delay={0.15} className="flex flex-wrap gap-2">
            {services.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => setActive(s.slug)}
                aria-pressed={active === s.slug}
                className={cn(
                  "inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm transition-colors",
                  active === s.slug
                    ? "bg-surface-dark text-bg"
                    : "bg-card text-ink/70 hover:text-ink hairline",
                )}
              >
                <span className="text-[11px] font-semibold tabular opacity-65">0{i + 1}</span>
                {s.name}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-[1.2fr_1fr] md:gap-10">
          {/* Stage grows from the bottom-center, then the mock fades in inside it */}
          <StageReveal duration={1.05} className="relative">
            <Card tone="bg" notched className="relative min-h-[300px] overflow-hidden md:min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  {mocks[current.slug]}
                </motion.div>
              </AnimatePresence>
            </Card>
          </StageReveal>

          {/* Right column, enters from the right */}
          <Reveal x={32} y={0} delay={0.2} className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={reduced ? false : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-[26px] leading-[1.1] md:text-[34px]">{current.tagline}</h3>
                <p className="mt-3 max-w-[42ch] text-[14.5px] text-ink/65 md:text-[15px]">{current.blurb}</p>

                <ul className="mt-5 space-y-2 text-[13.5px] text-ink/80">
                  {current.capabilities.slice(0, 3).map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${current.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-pill bg-surface-dark px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-surface-dark-2"
                >
                  Open {current.name} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
