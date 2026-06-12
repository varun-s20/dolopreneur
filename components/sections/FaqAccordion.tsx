"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Item = { q: string; a: string };

const ease = [0.22, 1, 0.36, 1] as const;
const barSpring = { type: "spring" as const, stiffness: 420, damping: 30 };

/**
 * Pricing FAQ accordion. Single item open at a time; the open card gets an
 * accent outline (per /ref/outline.png). Overcrafted but motivated motion:
 * the +/- glyph morphs (state), the card outline fades in (state indication),
 * and the answer reveals with a height + blur lift (continuity). Collapses to
 * instant under prefers-reduced-motion.
 */
export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "group rounded-tile bg-card transition-[box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isOpen ? "shadow-[inset_0_0_0_2px_var(--color-accent)]" : "hairline",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left md:px-6 md:py-5"
            >
              <span
                className={cn(
                  "text-[15px] font-medium transition-colors duration-200 md:text-base",
                  isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink",
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "relative grid h-7 w-7 flex-shrink-0 place-items-center rounded-full transition-colors duration-300",
                  isOpen ? "bg-accent text-accent-ink" : "bg-ink/[0.06] text-ink group-hover:bg-ink/10",
                )}
              >
                <span className="absolute h-[1.5px] w-3 rounded-full bg-current" />
                <motion.span
                  className="absolute h-3 w-[1.5px] rounded-full bg-current"
                  animate={reduced ? undefined : { rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                  transition={barSpring}
                />
              </span>
            </button>

            {reduced ? (
              isOpen && (
                <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-ink/65 md:px-6 md:pb-6">
                  {item.a}
                </p>
              )
            ) : (
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                    animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                    exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: 6, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.06, ease }}
                      className="px-5 pb-5 text-[14.5px] leading-relaxed text-ink/65 md:px-6 md:pb-6"
                    >
                      {item.a}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </div>
  );
}
