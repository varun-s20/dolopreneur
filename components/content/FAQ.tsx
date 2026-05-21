"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

export type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  items: FAQItem[];
  className?: string;
};

export function FAQ({ items, className }: Props) {
  return (
    <div className={cn("divide-y divide-line rounded-tile bg-card hairline", className)}>
      {items.map((item, i) => (
        <Row key={item.q} item={item} initiallyOpen={i === 0} />
      ))}
    </div>
  );
}

function Row({ item, initiallyOpen }: { item: FAQItem; initiallyOpen?: boolean }) {
  const [open, setOpen] = useState(!!initiallyOpen);
  const reduced = useReducedMotion();
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left md:px-7"
      >
        <span className="text-base font-medium text-ink md:text-[17px]">{item.q}</span>
        <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-ink/5 text-ink">
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[15px] leading-relaxed text-ink/70 md:px-7 md:pb-7">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
