import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ScribbleLoop } from "@/components/ornament/Scribble";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: Props) {
  return (
    <span className={cn("relative inline-flex items-center", className)}>
      <span className="relative z-10 rounded-pill bg-card px-3 py-1 text-xs font-medium tracking-wide text-ink hairline">
        {children}
      </span>
      <ScribbleLoop
        className="pointer-events-none absolute -inset-x-2 -inset-y-1.5 z-0 text-accent"
        aria-hidden
      />
    </span>
  );
}
