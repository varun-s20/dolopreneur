"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Diamond, CircleDot, Boxes } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { DashboardChart } from "@/components/product-mocks/DashboardChart";
import { InboxList } from "@/components/product-mocks/InboxList";
import { CallTranscript } from "@/components/product-mocks/CallTranscript";
import { GlyphStar, GlyphO, GlyphClover, GlyphX } from "@/components/ornament/Glyph";
import { Reveal } from "@/components/motion/Reveal";
import { StageReveal } from "@/components/motion/StageReveal";
import { cn } from "@/lib/cn";

type TabKey = "dashboard" | "conversations" | "voice";

const tabs: { key: TabKey; label: string; icon: typeof Diamond }[] = [
  { key: "dashboard", label: "Dashboard", icon: Diamond },
  { key: "conversations", label: "Conversations", icon: CircleDot },
  { key: "voice", label: "Voice", icon: Boxes },
];

const content: Record<
  TabKey,
  { mock: React.ReactNode; glyphs: React.ReactNode; heading: string; body: string }
> = {
  dashboard: {
    mock: <DashboardChart />,
    glyphs: (
      <div className="flex gap-3 text-ink">
        <GlyphStar className="h-5 w-5" />
        <GlyphO className="h-5 w-5" />
        <GlyphClover className="h-5 w-5" />
      </div>
    ),
    heading: "Operator Dashboard",
    body: "A single live view of leads, conversations, bookings, and pipeline. Across every channel and every agent. The numbers a founder actually checks, none of the vanity ones.",
  },
  conversations: {
    mock: <InboxList />,
    glyphs: (
      <div className="flex gap-3 text-ink">
        <GlyphX className="h-5 w-5" />
        <GlyphO className="h-5 w-5" />
        <GlyphClover className="h-5 w-5" />
      </div>
    ),
    heading: "Unified Conversations",
    body: "WhatsApp, Instagram, Messenger, SMS, web. One inbox, one history, one agent answering before a tab is opened. Hand off to a human in one click when the conversation calls for it.",
  },
  voice: {
    mock: <CallTranscript />,
    glyphs: (
      <div className="flex gap-3 text-ink">
        <GlyphStar className="h-5 w-5" />
        <GlyphClover className="h-5 w-5" />
        <GlyphX className="h-5 w-5" />
      </div>
    ),
    heading: "Voice that books itself",
    body: "Inbound coverage, outbound campaigns, and follow-ups handled by a voice agent that books straight to your calendar with the full transcript captured for every call.",
  },
};

export function FeatureTabs() {
  const [active, setActive] = useState<TabKey>("dashboard");
  const c = content[active];
  const reduced = useReducedMotion();

  return (
    <section className="flex flex-col justify-start bg-bg md:h-full">
      <div className="container-page py-10 md:py-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-start gap-5">
            <Reveal>
              <SectionLabel>Features</SectionLabel>
            </Reveal>
            <Reveal as="h2" x={-20} delay={0.06} className="max-w-[18ch] text-[32px] leading-[1.05] md:text-[44px]">
              Experience streamlined operations.
            </Reveal>
          </div>

          <Reveal x={20} delay={0.12}>
            <div role="tablist" aria-label="Features" className="flex flex-wrap gap-2">
              {tabs.map((t) => {
                const Icon = t.icon;
                const isActive = active === t.key;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(t.key)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-surface-dark text-bg"
                        : "bg-card text-ink/70 hover:text-ink hairline",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-[1.4fr_1fr] md:gap-10">
          <StageReveal duration={0.95} className="relative">
            <Card tone="bg" notched className="relative min-h-[280px] overflow-hidden md:min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  {c.mock}
                </motion.div>
              </AnimatePresence>
            </Card>
          </StageReveal>

          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduced ? false : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {c.glyphs}
                <h3 className="mt-5 text-[26px] leading-[1.1] md:text-[34px]">{c.heading}</h3>
                <p className="mt-3 max-w-[42ch] text-[14.5px] text-ink/65 md:text-[15px]">{c.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
