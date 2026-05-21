import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "card" | "dark" | "bg";

type Props = HTMLAttributes<HTMLDivElement> & {
  tone?: Tone;
  notched?: boolean;
};

const toneClasses: Record<Tone, string> = {
  card: "bg-card text-ink",
  dark: "bg-surface-dark text-bg",
  bg: "bg-bg text-ink hairline",
};

export function Card({ tone = "card", notched = false, className, children, ...rest }: Props) {
  return (
    <div
      className={cn(
        "rounded-tile",
        toneClasses[tone],
        notched && "notch-card",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
