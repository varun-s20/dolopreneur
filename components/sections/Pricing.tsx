"use client";

import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { plans } from "@/content/pricing";
import { ScribbleLoop } from "@/components/ornament/Scribble";
import { cn } from "@/lib/cn";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-bg">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col items-start gap-6">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="max-w-[22ch] text-[36px] leading-[1.05] md:text-[56px]">
              Plans built for the way operators actually work.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Billing cadence"
            className="inline-flex items-center rounded-pill bg-card p-1 text-sm hairline"
          >
            <button
              role="tab"
              aria-selected={!annual}
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-pill px-4 py-1.5 transition-colors",
                !annual ? "bg-surface-dark text-bg" : "text-ink/65",
              )}
            >
              Monthly
            </button>
            <button
              role="tab"
              aria-selected={annual}
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-pill px-4 py-1.5 transition-colors",
                annual ? "bg-surface-dark text-bg" : "text-ink/65",
              )}
            >
              Annual <span className="ml-1 text-xs text-accent">−16%</span>
            </button>
          </div>
        </div>

        <ul className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {plans.map((p) => {
            const isDark = !!p.featured;
            const monthly = parseInt(p.price.replace(/[^0-9]/g, ""), 10);
            const displayValue = p.customPricing
              ? null
              : annual && monthly
                ? Math.round((monthly * 12 * 0.84) / 12)
                : monthly;
            return (
              <li
                key={p.name}
                className={cn(
                  "relative flex flex-col gap-7 rounded-tile p-7 md:p-8",
                  isDark ? "bg-surface-dark text-bg" : "bg-card text-ink hairline",
                )}
              >
                {isDark && (
                  <span className="absolute -right-3 top-6 inline-flex h-7 select-none items-center rotate-6">
                    <ScribbleLoop className="absolute -inset-2 text-accent" aria-hidden />
                    <span className="relative z-10 font-display text-sm italic text-ink/90 px-2">Most popular</span>
                  </span>
                )}

                <div>
                  <h3 className={cn("text-xl font-medium", isDark ? "text-bg" : "text-ink")}>
                    {p.name}
                  </h3>
                  <p className={cn("mt-2 max-w-[28ch] text-sm", isDark ? "text-bg/65" : "text-ink/60")}>
                    {p.tagline}
                  </p>
                </div>

                <ul className={cn("space-y-2.5 text-[14px]", isDark ? "text-bg/85" : "text-ink/80")}>
                  {p.includes.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <Check className={cn("mt-0.5 h-4 w-4 flex-shrink-0", isDark ? "text-accent" : "text-ink")} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-1">
                    <span className={cn(
                      "font-display tabular",
                      p.customPricing ? "text-3xl" : "text-4xl md:text-5xl",
                      isDark ? "text-bg" : "text-ink",
                    )}>
                      {p.customPricing ? (
                        "Custom"
                      ) : (
                        <>
                          $
                          <NumberFlow value={displayValue ?? 0} />
                        </>
                      )}
                    </span>
                    {!p.customPricing && (
                      <span className={cn("text-sm", isDark ? "text-bg/55" : "text-ink/55")}>
                        {annual ? "/mo, billed yearly" : p.cadence}
                      </span>
                    )}
                  </div>
                  <Link
                    href={p.cta.href}
                    className={cn(
                      "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-pill px-5 py-3 text-sm font-medium transition-colors",
                      isDark
                        ? "bg-accent text-ink hover:bg-accent-hover"
                        : "bg-surface-dark text-bg hover:bg-surface-dark-2",
                    )}
                  >
                    {p.cta.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-xs text-ink/55">
          Every plan includes ConverseOS, SiteForge, and VoxAgent. 14-day trial, no card to start.
        </p>
      </div>
    </section>
  );
}
