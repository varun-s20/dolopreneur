"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Cursor-tracked spotlight glow on a card surface. No tilt, no lift.
 *
 * The glow sits on a negative-z layer inside an isolated stacking context, so
 * it paints above the card's own background but BELOW all in-flow content. That
 * keeps the CTA button (and every label) above the glow rather than washed over
 * by it. Pointer position drives motion values (never React state). Honors
 * prefers-reduced-motion by rendering a plain card.
 */
export function SpotlightCard({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const hover = useMotionValue(0);
  const opacity = useSpring(hover, { stiffness: 220, damping: 28 });

  const glow = tone === "dark" ? "rgba(255,255,255,0.12)" : "rgba(232,229,75,0.32)";
  const background = useMotionTemplate`radial-gradient(260px circle at ${x}% ${y}%, ${glow}, transparent 70%)`;

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set(((e.clientX - r.left) / r.width) * 100);
        y.set(((e.clientY - r.top) / r.height) * 100);
      }}
      onPointerEnter={() => hover.set(1)}
      onPointerLeave={() => hover.set(0)}
      className={cn("relative isolate overflow-hidden", className)}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background, opacity }}
      />
      {children}
    </motion.div>
  );
}
