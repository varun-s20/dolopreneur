import { ArrowUpRight } from "lucide-react";
import { MockShell } from "@/components/product-mocks/MockShell";
import { cn } from "@/lib/cn";

const bars = [
  { d: "Mon", v: 38 },
  { d: "Tue", v: 52 },
  { d: "Wed", v: 46 },
  { d: "Thu", v: 78 },
  { d: "Fri", v: 64 },
  { d: "Sat", v: 70 },
  { d: "Sun", v: 58 },
];

export function DashboardChart({ className }: { className?: string }) {
  return (
    <MockShell
      kind="app"
      title="Operator Dashboard"
      subtitle="Pipeline · This week"
      trailing={
        <span className="inline-flex items-center gap-1 rounded-pill bg-accent/40 px-2 py-0.5 text-[10px] font-semibold text-ink">
          <ArrowUpRight className="h-3 w-3" /> +24.6%
        </span>
      }
      footer={
        <div className="flex items-center justify-between">
          <span>Updated 2 minutes ago</span>
          <span>Goal · $150k / week</span>
        </div>
      }
      className={className}
    >
      <div className="flex flex-col gap-4 p-4">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-ink/55">Pipeline</p>
          <p className="mt-1 text-2xl font-semibold text-ink tabular">$128,420</p>
        </div>

        <div className="flex h-32 items-end gap-2.5">
          {bars.map((b) => (
            <div key={b.d} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-full rounded-md",
                  b.v >= 70 ? "bg-surface-dark" : "bg-ink/15",
                )}
                style={{ height: `${b.v}%` }}
              />
              <span className="text-[10px] text-ink/55">{b.d}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-line pt-3 text-[11px]">
          <Cell label="Leads in" value="284" />
          <Cell label="Conversations" value="1,142" />
          <Cell label="Booked" value="63" highlight />
        </div>
      </div>
    </MockShell>
  );
}

function Cell({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-wider text-ink/45">{label}</p>
      <p className={cn("mt-0.5 text-sm font-semibold tabular", highlight ? "text-ink" : "text-ink/80")}>
        {value}
      </p>
    </div>
  );
}
