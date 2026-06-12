"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { StripeButton } from "@/components/ui/StripeButton";
import { platformTiers } from "@/content/plans";

/**
 * Mobile-only sticky checkout bar. Once the user scrolls past the hero, the
 * most-popular plan's price + a one-tap Stripe checkout stays in reach from
 * anywhere on the page. Uses framer useScroll (never a window scroll listener)
 * and honors prefers-reduced-motion.
 */
export function MobileBuyBar() {
  const reduced = useReducedMotion();
  const pro = platformTiers.find((p) => p.featured) ?? platformTiers[1];
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    // visible after the hero, hidden again at the very bottom (over the footer)
    setShow(y > 640 && y < max - 320);
  });

  return (
    <div className="lg:hidden" aria-hidden={!show}>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { y: 90, opacity: 0 }}
            transition={reduced ? { duration: 0.15 } : { type: "spring", stiffness: 360, damping: 34 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/85 px-4 pt-3 backdrop-blur-md"
            style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="leading-tight">
                <p className="text-[11px] uppercase tracking-[0.12em] text-ink/50">
                  Most popular · {pro.name}
                </p>
                <p className="font-display text-xl text-ink">
                  <span className="tabular">${pro.price}</span>
                  <span className="text-xs text-ink/50">{pro.cadence}</span>
                </p>
              </div>
              <StripeButton
                priceId={pro.priceId}
                label="Get Pro"
                tone="dark"
                className="w-auto shrink-0 px-5"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
