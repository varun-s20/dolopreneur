import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  tone?: "light" | "dark" | "accent";
  className?: string;
};

export function Pill({ children, tone = "light", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-medium tracking-wide",
        tone === "light" && "bg-card text-ink hairline",
        tone === "dark" && "bg-surface-dark text-bg",
        tone === "accent" && "bg-accent text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
