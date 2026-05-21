import { cn } from "@/lib/cn";

export type KPI = {
  value: string;
  label: string;
  caption?: string;
};

type Props = {
  items: KPI[];
  tone?: "light" | "dark";
  className?: string;
};

export function KPIRow({ items, tone = "light", className }: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden rounded-tile",
        dark ? "bg-bg/10" : "bg-line",
        "sm:grid-cols-3",
        className,
      )}
    >
      {items.map((k) => (
        <div
          key={k.label}
          className={cn(
            "p-6 md:p-8",
            dark ? "bg-surface-dark text-bg" : "bg-card text-ink",
          )}
        >
          <p className={cn(
            "font-display tabular text-[44px] leading-none md:text-[56px]",
            dark ? "text-bg" : "text-ink",
          )}>
            {k.value}
          </p>
          <p className={cn(
            "mt-3 text-sm font-medium",
            dark ? "text-bg/85" : "text-ink/80",
          )}>
            {k.label}
          </p>
          {k.caption && (
            <p className={cn(
              "mt-1 text-xs",
              dark ? "text-bg/55" : "text-ink/55",
            )}>
              {k.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
