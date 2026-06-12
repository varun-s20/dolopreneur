import { Check } from "lucide-react";
import { StripeButton } from "@/components/ui/StripeButton";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { platformTiers } from "@/content/plans";
import { cn } from "@/lib/cn";

export function PlatformTiers() {
  return (
    <section id="platform" className="bg-bg scroll-mt-24">
      <div className="container-page pb-20 pt-2 md:pb-28 md:pt-4">
        <Stagger className="grid gap-4 md:mt-4 md:grid-cols-3 md:gap-6" step={0.08}>
          {platformTiers.map((p) => {
            const isDark = !!p.featured;
            return (
              <StaggerItem
                key={p.name}
                blur={8}
                className={cn("h-full", isDark && "order-first md:order-none")}
              >
                <SpotlightCard
                  tone={isDark ? "dark" : "light"}
                  className={cn(
                    "flex h-full flex-col gap-7 rounded-tile p-7 md:p-8",
                    isDark ? "bg-surface-dark text-bg shadow-tile" : "bg-card text-ink hairline",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={cn("text-xl font-medium", isDark ? "text-bg" : "text-ink")}>
                      {p.name}
                    </h3>
                    {isDark && (
                      <span className="rounded-pill bg-accent px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-ink">
                        Popular
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <CountUp
                        value={p.price}
                        className={cn("font-display text-4xl md:text-5xl", isDark ? "text-bg" : "text-ink")}
                      />
                      <span className={cn("text-sm", isDark ? "text-bg/55" : "text-ink/55")}>
                        {p.cadence}
                      </span>
                    </div>
                    <p className={cn("mt-3 max-w-[30ch] text-sm", isDark ? "text-bg/65" : "text-ink/60")}>
                      {p.tagline}
                    </p>
                  </div>

                  <ul className={cn("space-y-2.5 border-t pt-6 text-[14px]", isDark ? "border-line-dark text-bg/85" : "border-line text-ink/80")}>
                    {p.includes.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <Check
                          className={cn("mt-0.5 h-4 w-4 flex-shrink-0", isDark ? "text-accent" : "text-ink")}
                          strokeWidth={2}
                        />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <StripeButton
                      priceId={p.priceId}
                      label={`Get ${p.name}`}
                      tone={isDark ? "accent" : "dark"}
                    />
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal as="p" delay={0.1} className="mt-8 text-xs text-ink/50">
          All plans billed monthly in USD. Cancel anytime, no contracts, no setup fees.
        </Reveal>
      </div>
    </section>
  );
}
