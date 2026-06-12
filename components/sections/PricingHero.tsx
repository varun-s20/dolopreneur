"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;

export function PricingHero() {
  const reduced = useReducedMotion();

  return (
    <section className="container-page pb-6 pt-10 md:pb-10 md:pt-20">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <SectionLabel>Pricing</SectionLabel>
      </motion.div>

      <motion.h1
        className="mt-5 max-w-[16ch] text-[36px] leading-[1.05] md:mt-6 md:text-[64px] lg:text-[72px]"
        initial={reduced ? false : { opacity: 0, y: 16, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.05, ease }}
      >
        Pick a plan. Add the agents you <span className="scribble-underline">need.</span>
      </motion.h1>

      <motion.p
        className="mt-4 max-w-[46ch] text-[15px] text-ink/65 md:mt-5 md:text-xl"
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease }}
      >
        Your storefront on the map, plus AI agents for the busywork. Monthly, cancel
        anytime, pay securely by card.
      </motion.p>
    </section>
  );
}
