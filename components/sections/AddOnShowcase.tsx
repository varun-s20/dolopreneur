"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Phone,
  MessageCircle,
  Globe,
  Clapperboard,
  Target,
  PenLine,
  ArrowUpRight,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import { startCheckout } from "@/lib/start-checkout";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { CallTranscript } from "@/components/product-mocks/CallTranscript";
import { ChatThread } from "@/components/product-mocks/ChatThread";
import { PageBuilderCanvas } from "@/components/product-mocks/PageBuilderCanvas";
import { LeadPipeline } from "@/components/product-mocks/LeadPipeline";
import { AvatarStudio } from "@/components/product-mocks/AvatarStudio";
import { ContentFeed } from "@/components/product-mocks/ContentFeed";
import { addonCategories, type AddonCategory } from "@/content/plans";
import { cn } from "@/lib/cn";

const icons: Record<AddonCategory["icon"], LucideIcon> = {
  voice: Phone,
  chat: MessageCircle,
  site: Globe,
  avatar: Clapperboard,
  leads: Target,
  content: PenLine,
};

const ease = [0.22, 1, 0.36, 1] as const;
const railSpring = { type: "spring" as const, stiffness: 380, damping: 32 };
const minPrice = (c: AddonCategory) => Math.min(...c.tiers.map((t) => t.price));

function Spotlight({ cat }: { cat: AddonCategory }) {
  if (cat.mock === "call") return <CallTranscript className="h-full" />;
  if (cat.mock === "chat") return <ChatThread className="h-full" />;
  if (cat.mock === "site") return <PageBuilderCanvas className="h-full" />;
  if (cat.mock === "leads") return <LeadPipeline className="h-full" />;
  if (cat.mock === "avatar") return <AvatarStudio className="h-full" />;
  if (cat.mock === "content") return <ContentFeed className="h-full" />;

  const Icon = icons[cat.icon];
  return (
    <div className="flex h-full flex-col justify-between bg-card p-7">
      <Icon className="h-7 w-7 text-ink/30" strokeWidth={1.4} />
      <div>
        <p className="font-display text-5xl leading-none text-ink md:text-6xl">{cat.stat?.value}</p>
        <p className="mt-3 max-w-[24ch] text-sm text-ink/55">{cat.stat?.label}</p>
      </div>
    </div>
  );
}

export function AddOnShowcase() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [pendingPrice, setPendingPrice] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const cat = addonCategories[active];

  async function onBuy(priceId: string) {
    if (pendingPrice) return;
    setPendingPrice(priceId);
    setCheckoutError(null);
    try {
      await startCheckout(priceId);
      // On success the browser navigates to Stripe; leave the row in its pending state.
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : "Could not start checkout.");
      setPendingPrice(null);
    }
  }

  const tierParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
  };
  const tierChild = {
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease } },
  };

  return (
    <section id="add-ons" className="bg-bg scroll-mt-24">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col items-start gap-6">
          <Reveal><SectionLabel>AI add-ons</SectionLabel></Reveal>
          <Reveal as="h2" delay={0.05} blur={8} className="max-w-[20ch] text-[34px] leading-[1.05] md:text-[52px]">
            Bolt on an agent for every job you hate doing.
          </Reveal>
          <Reveal as="p" delay={0.1} blur={6} className="max-w-[52ch] text-lg text-ink/65">
            Each one runs on its own. Pick a category, choose the tier that fits, and
            scale up when it pays for itself.
          </Reveal>
        </div>

        {/* Mobile: horizontal category pills */}
        <div
          role="tablist"
          aria-label="Add-on categories"
          aria-orientation="horizontal"
          className="mt-10 flex gap-2 overflow-x-auto pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {addonCategories.map((c, i) => {
            const Icon = icons[c.icon];
            const on = i === active;
            return (
              <button
                key={c.name}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={cn(
                  "relative inline-flex flex-shrink-0 items-center gap-2 rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-200",
                  on ? "text-bg" : "bg-card text-ink/70 hairline",
                )}
              >
                {on &&
                  (reduced ? (
                    <span className="absolute inset-0 rounded-pill bg-surface-dark" />
                  ) : (
                    <motion.span
                      layoutId="rail-bg-m"
                      className="absolute inset-0 rounded-pill bg-surface-dark"
                      transition={railSpring}
                    />
                  ))}
                <Icon className="relative z-10 h-4 w-4" strokeWidth={1.6} />
                <span className="relative z-10">{c.name}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          {/* Desktop rail */}
          <div
            role="tablist"
            aria-label="Add-on categories"
            aria-orientation="vertical"
            className="hidden flex-col gap-1.5 lg:col-span-3 lg:flex"
          >
            {addonCategories.map((c, i) => {
              const Icon = icons[c.icon];
              const on = i === active;
              return (
                <button
                  key={c.name}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-tile px-4 py-3.5 text-left transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    on ? "text-bg" : "text-ink/70 hover:bg-ink/[0.04]",
                  )}
                >
                  {on &&
                    (reduced ? (
                      <span className="absolute inset-0 rounded-tile bg-surface-dark" />
                    ) : (
                      <motion.span
                        layoutId="rail-bg"
                        className="absolute inset-0 rounded-tile bg-surface-dark"
                        transition={railSpring}
                      />
                    ))}
                  <span
                    className={cn(
                      "relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-card transition-colors",
                      on ? "bg-bg/10 text-accent" : "bg-card text-ink/60 hairline",
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                  </span>
                  <span className="relative z-10 min-w-0 flex-1">
                    <span className={cn("block text-[15px] font-medium", on ? "text-bg" : "text-ink")}>
                      {c.name}
                    </span>
                    <span className={cn("block text-xs", on ? "text-bg/55" : "text-ink/50")}>
                      from ${minPrice(c)}/mo
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Spotlight visual — materializes on swap (below pricing on mobile) */}
          <motion.div
            key={`vis-${active}`}
            role="tabpanel"
            className="order-2 lg:order-none lg:col-span-5"
            initial={reduced ? false : { opacity: 0, scale: 0.96, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.42, ease }}
          >
            <div className="h-[400px] overflow-hidden rounded-[28px] bg-surface-dark p-2 shadow-tile lg:h-[460px]">
              <div className="h-full overflow-hidden rounded-[20px]">
                <Spotlight cat={cat} />
              </div>
            </div>
          </motion.div>

          {/* Tiers — stagger in on swap (above the image on mobile) */}
          <motion.div
            key={`tiers-${active}`}
            className="order-1 lg:order-none flex flex-col gap-3 lg:col-span-4"
            variants={reduced ? undefined : tierParent}
            initial={reduced ? false : "hidden"}
            animate={reduced ? false : "show"}
          >
            <div className="mb-1 hidden lg:block">
              <h3 className="font-display text-2xl leading-tight">{cat.name}</h3>
              <p className="mt-1 text-sm text-ink/55">{cat.blurb}</p>
            </div>

            {cat.tiers.map((tier) => {
              const loading = pendingPrice === tier.priceId;
              return (
                <motion.button
                  key={tier.tier}
                  type="button"
                  variants={reduced ? undefined : tierChild}
                  onClick={() => onBuy(tier.priceId)}
                  disabled={!!pendingPrice}
                  aria-label={`Subscribe to ${cat.name} ${tier.tier}, $${tier.price} per month`}
                  className={cn(
                    "group flex w-full items-start gap-3 rounded-tile p-4 text-left transition-[transform,background-color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.99] disabled:cursor-wait",
                    tier.recommended
                      ? "bg-card shadow-[inset_0_0_0_1.5px_var(--color-accent)]"
                      : "bg-card hairline hover:shadow-card",
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-ink">{tier.tier}</span>
                      {tier.recommended && (
                        <span className="rounded-pill bg-accent/25 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-ink/70">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[12.5px] leading-snug text-ink/55">{tier.summary}</p>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-2.5">
                    <div className="text-right leading-none">
                      <span className="font-display tabular text-lg text-ink">${tier.price}</span>
                      <span className="ml-0.5 text-[11px] text-ink/45">/mo</span>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/[0.05] text-ink/70 transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-ink/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      {loading ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={1.75} />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                      )}
                    </span>
                  </div>
                </motion.button>
              );
            })}

            {checkoutError && (
              <p role="alert" className="px-1 text-[12.5px] text-ink/70">
                {checkoutError}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
