import { cn } from "@/lib/cn";

export type Step = {
  title: string;
  body: string;
};

type Props = {
  steps: Step[];
  className?: string;
};

export function StepList({ steps, className }: Props) {
  return (
    <ol className={cn("space-y-3", className)}>
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="grid gap-4 rounded-tile bg-card p-6 hairline md:grid-cols-[64px_1fr] md:gap-6 md:p-7"
        >
          <span className="font-display text-3xl text-ink/35 tabular md:text-4xl">
            0{i + 1}
          </span>
          <div>
            <p className="text-lg font-medium text-ink">{s.title}</p>
            <p className="mt-1.5 text-[15px] text-ink/65">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
