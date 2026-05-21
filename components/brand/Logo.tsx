import { type SVGProps } from "react";
import { cn } from "@/lib/cn";

/**
 * Dolopreneur brand mark. Charcoal rounded square containing an outlined
 * off-white circle + bar + a filled yellow accent circle.
 *
 * Inline SVG (rather than next/image of /dolopreneur.svg) so colors can be
 * tuned with CSS variables and there's no extra network request.
 */
export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      role="img"
      aria-label="Dolopreneur"
      className={cn(className)}
      {...props}
    >
      <rect width="200" height="200" rx="32" fill="var(--color-surface-dark)" />
      <g transform="translate(15, 65)">
        <circle
          cx="35"
          cy="35"
          r="26"
          stroke="var(--color-card)"
          strokeWidth="11"
          fill="none"
        />
        <rect x="73" y="-2" width="10" height="76" fill="var(--color-card)" />
        <circle
          cx="135"
          cy="35"
          r="26"
          stroke="var(--color-accent)"
          strokeWidth="11"
          fill="var(--color-accent)"
        />
      </g>
    </svg>
  );
}
