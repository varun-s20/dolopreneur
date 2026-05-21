"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type SVGProps, type ReactElement, cloneElement, Children } from "react";

type Props = {
  children: ReactElement<SVGProps<SVGSVGElement>>;
  delay?: number;
  duration?: number;
};

/**
 * Wraps a scribble SVG (any svg whose child is a single <path>) and animates
 * its stroke-dasharray from hidden to fully drawn when scrolled into view.
 */
export function ScribbleDraw({ children, delay = 0, duration = 1.1 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const reduced = useReducedMotion();

  // Walk the SVG children and wrap <path> nodes with motion.path for drawing
  const original = children;
  const svgChildren = Children.map(original.props.children, (child) => {
    if (!child || typeof child !== "object" || !("type" in child)) return child;
    const c = child as ReactElement<SVGProps<SVGPathElement>>;
    if (c.type !== "path") return child;

    if (reduced) return child;

    const MotionPath = motion.path as React.ComponentType<Record<string, unknown>>;
    return (
      <MotionPath
        {...c.props}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    );
  });

  const animatedSvg = cloneElement(original, original.props, svgChildren);

  return <span ref={ref} className="contents">{animatedSvg}</span>;
}
