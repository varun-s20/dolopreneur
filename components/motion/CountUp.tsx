"use client";

import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Price that tallies up from 0 the first time it scrolls into view, drawing the
 * eye to the number. Uses NumberFlow for the digit motion. Respects
 * prefers-reduced-motion by rendering the final value instantly.
 */
export function CountUp({
  value,
  prefix = "$",
  className,
}: {
  value: number;
  prefix?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (inView) setN(value);
  }, [inView, value]);

  return (
    <span ref={ref} className={cn("tabular", className)}>
      {prefix}
      {reduced ? value : <NumberFlow value={n} />}
    </span>
  );
}
