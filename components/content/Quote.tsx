import { cn } from "@/lib/cn";
import { GlyphStar } from "@/components/ornament/Glyph";

type Props = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  className?: string;
};

export function Quote({ quote, name, role, initials, className }: Props) {
  return (
    <figure className={cn("rounded-tile bg-card p-7 md:p-9 hairline", className)}>
      <GlyphStar className="h-6 w-6 text-ink" />
      <blockquote className="mt-5 font-display text-[22px] leading-[1.3] text-ink md:text-[26px]">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-[11px] font-semibold text-bg">
          {initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{name}</span>
          <span className="block text-xs text-ink/55">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
