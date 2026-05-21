"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Check, Diamond, CircleDot, Boxes } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { services, type Slug } from "@/content/services";
import { ChatThread } from "@/components/product-mocks/ChatThread";
import { PageBuilderCanvas } from "@/components/product-mocks/PageBuilderCanvas";
import { CallTranscript } from "@/components/product-mocks/CallTranscript";
import { DashboardChart } from "@/components/product-mocks/DashboardChart";
import { InboxList } from "@/components/product-mocks/InboxList";
import { GlyphStar, GlyphO, GlyphClover, GlyphX } from "@/components/ornament/Glyph";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type FeatureKey = "dashboard" | "conversations" | "voice";

const featureTabs: { key: FeatureKey; label: string; icon: typeof Diamond }[] = [
  { key: "dashboard", label: "Dashboard", icon: Diamond },
  { key: "conversations", label: "Conversations", icon: CircleDot },
  { key: "voice", label: "Voice", icon: Boxes },
];

const featureContent: Record<
  FeatureKey,
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
    body: "A single live view of leads, conversations, bookings, and pipeline. Across every channel and every agent.",
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
    body: "WhatsApp, Instagram, Messenger, SMS, web. One inbox, one agent answering before a tab is opened.",
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
    body: "Inbound coverage, outbound campaigns, and follow-ups handled by a voice agent that books straight to your calendar.",
  },
};

const serviceMocks: Record<Slug, React.ReactNode> = {
  converseos: <ChatThread />,
  siteforge: <PageBuilderCanvas />,
  voxagent: <CallTranscript />,
};

/**
 * Holds Services and Features content. On md+ it runs a scroll-driven scene
 * where a dark rectangle grows from the bottom-center, fills the viewport for
 * Services, then contracts to become the backdrop of the Features mock with
 * the headline+copy living on the page background outside it.
 *
 * On mobile, this dual-layer absolute layout overlaps badly, so below md we
 * render a simplified, stacked variant: Services block then Features block,
 * normal vertical flow, no morphing rectangle.
 */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return isDesktop;
}

export function ServicesFeaturesScene() {
  const [activeService, setActiveService] = useState<Slug>(services[0].slug);
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("dashboard");
  const isDesktop = useIsDesktop();

  // SSR + first paint default to mobile so the page is interactive immediately.
  // After hydration, desktop visitors get the scene swapped in.
  if (isDesktop === false || isDesktop === null) {
    return (
      <MobileLayout
        activeService={activeService}
        setActiveService={setActiveService}
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
      />
    );
  }

  return (
    <DesktopScene
      activeService={activeService}
      setActiveService={setActiveService}
      activeFeature={activeFeature}
      setActiveFeature={setActiveFeature}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile, stacked vertical layout                                          */
/* -------------------------------------------------------------------------- */

function MobileLayout({
  activeService,
  setActiveService,
  activeFeature,
  setActiveFeature,
}: {
  activeService: Slug;
  setActiveService: (s: Slug) => void;
  activeFeature: FeatureKey;
  setActiveFeature: (k: FeatureKey) => void;
}) {
  const currentService = services.find((s) => s.slug === activeService)!;
  const featureC = featureContent[activeFeature];

  return (
    <div>
      {/* Services, dark stage as a regular section */}
      <section className="bg-bg pb-10 pt-10" data-nav-theme="light">
        <div className="container-page">
          <div
            className="overflow-hidden rounded-tile bg-surface-dark px-6 py-10 text-bg shadow-tile"
            data-nav-theme="dark"
          >
            <div className="flex flex-col items-start gap-5">
              <span className="relative inline-flex items-center">
                <span className="relative z-10 rounded-pill bg-surface-dark-2 px-3 py-1 text-xs font-medium tracking-wide text-bg/85 hairline-dark">
                  Services
                </span>
              </span>
              <Reveal as="h2" y={16} className="max-w-[22ch] text-[30px] leading-[1.06] text-bg">
                Three agents. One subscription. The work, off your plate.
              </Reveal>

              <div className="flex flex-wrap gap-2">
                {services.map((s, i) => {
                  const isActive = activeService === s.slug;
                  return (
                    <button
                      key={s.slug}
                      onClick={() => setActiveService(s.slug)}
                      aria-pressed={isActive}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-pill px-3.5 py-1.5 text-[13px] transition-colors",
                        isActive
                          ? "bg-accent text-ink"
                          : "bg-surface-dark-2 text-bg/65 hairline-dark",
                      )}
                    >
                      <span className="text-[10.5px] font-semibold tabular opacity-65">
                        0{i + 1}
                      </span>
                      {s.name}
                    </button>
                  );
                })}
              </div>

              <Card className="mt-2 aspect-[4/5] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.slug}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                  >
                    {serviceMocks[currentService.slug]}
                  </motion.div>
                </AnimatePresence>
              </Card>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-[22px] leading-[1.15] text-bg">
                    {currentService.tagline}
                  </h3>
                  <p className="mt-2 text-[14px] text-bg/65">{currentService.blurb}</p>
                  <ul className="mt-4 space-y-1.5 text-[13.5px] text-bg/85">
                    {currentService.capabilities.slice(0, 3).map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${currentService.slug}`}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-pill bg-accent px-4 py-2 text-sm font-medium text-ink"
                  >
                    Open {currentService.name} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Features, beige page bg with a light card holding the mock */}
      <section className="bg-bg pb-16 pt-2">
        <div className="container-page">
          <div className="flex flex-col items-start gap-5">
            <SectionLabel>Features</SectionLabel>
            <Reveal as="h2" y={16} className="text-[30px] leading-[1.06]">
              Experience streamlined operations.
            </Reveal>
            <p className="text-[14.5px] text-ink/65">
              One workspace, three agents, every metric a founder actually checks.
            </p>

            <div role="tablist" aria-label="Features" className="mt-1 flex flex-wrap gap-2">
              {featureTabs.map((t) => {
                const Icon = t.icon;
                const isActive = activeFeature === t.key;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFeature(t.key)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-pill px-3.5 py-1.5 text-[13px] transition-colors",
                      isActive
                        ? "bg-surface-dark text-bg"
                        : "bg-card text-ink/70 hairline",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            <Card className="mt-2 aspect-[4/5] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  {featureC.mock}
                </motion.div>
              </AnimatePresence>
            </Card>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {featureC.glyphs}
                <h3 className="mt-3 text-[22px] leading-[1.15]">{featureC.heading}</h3>
                <p className="mt-2 text-[14px] text-ink/65">{featureC.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop, scroll-driven morphing scene                                    */
/* -------------------------------------------------------------------------- */

function DesktopScene({
  activeService,
  setActiveService,
  activeFeature,
  setActiveFeature,
}: {
  activeService: Slug;
  setActiveService: (s: Slug) => void;
  activeFeature: FeatureKey;
  setActiveFeature: (k: FeatureKey) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rectWidth = useTransform(
    scrollYProgress,
    [0, 0.18, 0.5, 0.72, 1],
    ["18%", "94%", "94%", "50%", "50%"],
  );
  const rectHeight = useTransform(
    scrollYProgress,
    [0, 0.18, 0.5, 0.72, 1],
    ["6%", "92%", "92%", "60%", "60%"],
  );
  const rectLeft = useTransform(
    scrollYProgress,
    [0, 0.18, 0.5, 0.72, 1],
    ["41%", "3%", "3%", "47%", "47%"],
  );
  const rectTop = useTransform(
    scrollYProgress,
    [0, 0.18, 0.5, 0.72, 1],
    ["94%", "0%", "0%", "24%", "24%"],
  );
  const rectRadius = useTransform(
    scrollYProgress,
    [0, 0.18, 0.5, 0.72, 1],
    [999, 20, 20, 16, 16],
  );

  const servicesOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.24, 0.5, 0.6],
    [0, 1, 1, 0],
  );
  const servicesPointer = useTransform(servicesOpacity, (v) =>
    v > 0.5 ? "auto" : "none",
  );
  const featuresHeadlineOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.72, 1],
    [0, 1, 1],
  );
  const featuresHeadlinePointer = useTransform(featuresHeadlineOpacity, (v) =>
    v > 0.5 ? "auto" : "none",
  );
  const featuresMockOpacity = useTransform(
    scrollYProgress,
    [0.62, 0.78, 1],
    [0, 1, 1],
  );
  const featuresMockPointer = useTransform(featuresMockOpacity, (v) =>
    v > 0.5 ? "auto" : "none",
  );

  const currentService = services.find((s) => s.slug === activeService)!;
  const featureC = featureContent[activeFeature];

  return (
    <section
      ref={ref}
      className="relative bg-bg"
      style={{ height: "320vh" }}
    >
      <div
        className="sticky w-full overflow-hidden"
        style={{ top: "var(--nav-h)", height: "calc(100dvh - var(--nav-h))" }}
      >
        {/* Features headline (visible at the end of the scene, outside the rectangle) */}
        <motion.div
          style={
            reduced
              ? undefined
              : { opacity: featuresHeadlineOpacity, pointerEvents: featuresHeadlinePointer }
          }
          className="absolute inset-0"
        >
          <div className="container-page flex h-full flex-col py-10 md:py-12">
            <div className="flex flex-col items-start gap-5 md:max-w-[42%]">
              <SectionLabel>Features</SectionLabel>
              <h2 className="text-[32px] leading-[1.05] md:text-[44px]">
                Experience streamlined operations.
              </h2>
              <p className="max-w-[42ch] text-[14.5px] text-ink/65 md:text-[15px]">
                One workspace, three agents, every metric a founder actually checks. Switch the panel to peek at each surface.
              </p>

              <div role="tablist" aria-label="Features" className="mt-3 flex flex-wrap gap-2">
                {featureTabs.map((t) => {
                  const Icon = t.icon;
                  const isActive = activeFeature === t.key;
                  return (
                    <button
                      key={t.key}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveFeature(t.key)}
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

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-2"
                >
                  {featureC.glyphs}
                  <h3 className="mt-4 text-[22px] leading-[1.15] md:text-[26px]">{featureC.heading}</h3>
                  <p className="mt-2 max-w-[40ch] text-[14px] text-ink/65">{featureC.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* The morphing rectangle */}
        <motion.div
          data-nav-theme="dark"
          style={
            reduced
              ? {
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "var(--color-surface-dark)",
                  borderRadius: 16,
                }
              : {
                  position: "absolute",
                  width: rectWidth,
                  height: rectHeight,
                  left: rectLeft,
                  top: rectTop,
                  backgroundColor: "var(--color-surface-dark)",
                  borderRadius: rectRadius,
                  boxShadow: "0 24px 60px -32px rgba(26,26,26,0.35)",
                  willChange: "width, height, top, left",
                }
          }
          className="overflow-hidden text-bg"
        >
          {/* Services content layer */}
          <motion.div
            style={
              reduced
                ? undefined
                : { opacity: servicesOpacity, pointerEvents: servicesPointer }
            }
            className="absolute inset-0"
          >
            <div className="container-page flex h-full flex-col py-10 md:py-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div className="flex flex-col items-start gap-5">
                  <span className="relative inline-flex items-center">
                    <span className="relative z-10 rounded-pill bg-surface-dark-2 px-3 py-1 text-xs font-medium tracking-wide text-bg/85 hairline-dark">
                      Services
                    </span>
                  </span>
                  <h2 className="max-w-[22ch] text-[32px] leading-[1.05] text-bg md:text-[48px]">
                    Three agents. One subscription. The work, off your plate.
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {services.map((s, i) => {
                    const isActive = activeService === s.slug;
                    return (
                      <button
                        key={s.slug}
                        onClick={() => setActiveService(s.slug)}
                        aria-pressed={isActive}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-accent text-ink"
                            : "bg-surface-dark-2 text-bg/65 hover:text-bg hairline-dark",
                        )}
                      >
                        <span className="text-[11px] font-semibold tabular opacity-65">
                          0{i + 1}
                        </span>
                        {s.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 grid flex-1 min-h-0 gap-6 md:mt-8 md:grid-cols-[1.2fr_1fr] md:gap-10">
                <div className="relative min-h-0 overflow-hidden rounded-tile bg-card">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService.slug}
                      initial={reduced ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? undefined : { opacity: 0, y: -12 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full"
                    >
                      {serviceMocks[currentService.slug]}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService.slug}
                      initial={reduced ? false : { opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduced ? undefined : { opacity: 0, x: -8 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <h3 className="text-[26px] leading-[1.1] text-bg md:text-[34px]">
                        {currentService.tagline}
                      </h3>
                      <p className="mt-3 max-w-[42ch] text-[14.5px] text-bg/65 md:text-[15px]">
                        {currentService.blurb}
                      </p>

                      <ul className="mt-5 space-y-2 text-[13.5px] text-bg/85">
                        {currentService.capabilities.slice(0, 3).map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/services/${currentService.slug}`}
                        className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-pill bg-accent px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent-hover"
                      >
                        Open {currentService.name} <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features mock layer (inside the contracted rectangle) */}
          <motion.div
            style={
              reduced
                ? undefined
                : { opacity: featuresMockOpacity, pointerEvents: featuresMockPointer }
            }
            className="absolute inset-0 p-3 md:p-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full overflow-hidden rounded-card"
              >
                {featureC.mock}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
