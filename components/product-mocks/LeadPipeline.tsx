import { ArrowUpRight } from "lucide-react";
import { MockShell } from "@/components/product-mocks/MockShell";
import { cn } from "@/lib/cn";

// New leads captured per day this week — the bar chart that sits above the pipeline.
const trend = [
  { d: "Mon", v: 44 },
  { d: "Tue", v: 61 },
  { d: "Wed", v: 52 },
  { d: "Thu", v: 78 },
  { d: "Fri", v: 88 },
  { d: "Sat", v: 96 },
];

// The enriched-lead list — the pipeline view, now scored.
const leads = [
  { initials: "PN", name: "Priya Nadkarni", company: "Cedar & Co", score: 94 },
  { initials: "MW", name: "Marcus Webb", company: "Harbor Dental", score: 88 },
  { initials: "LF", name: "Lena Fischer", company: "Northwind Realty", score: 81 },
];

export function LeadPipeline({ className }: { className?: string }) {
  return (
    <MockShell
      kind="app"
      title="Lead Pipeline"
      subtitle="Enriched & scored · This week"
      trailing={
        <span className="inline-flex items-center gap-1 rounded-pill bg-accent/40 px-2 py-0.5 text-[10px] font-semibold text-ink">
          <ArrowUpRight className="h-3 w-3" /> +18.2%
        </span>
      }
      footer={
        <div className="flex items-center justify-between">
          <span>2,041 leads enriched</span>
          <span>Synced to CRM</span>
        </div>
      }
      className={className}
    >
      <div className="flex h-full flex-col gap-3 p-4">
        {/* Stats */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-ink/55">Qualified leads</p>
            <p className="mt-1 text-2xl font-semibold tabular text-ink">2,041</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wider text-ink/55">Pipeline value</p>
            <p className="mt-1 text-2xl font-semibold tabular text-ink">$486K</p>
          </div>
        </div>

        {/* Chart: new leads per day — weekly bar chart */}
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-wider text-ink/55">New leads · this week</p>
          <div className="relative h-20">
            {/* subtle gridlines behind the bars */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
              <span className="h-px w-full bg-ink/[0.06]" />
              <span className="h-px w-full bg-ink/[0.06]" />
              <span className="h-px w-full bg-ink/[0.06]" />
            </div>
            <div className="relative flex h-full items-end gap-2">
              {trend.map((b) => (
                <div key={b.d} className="flex flex-1 flex-col items-center justify-end gap-1">
                  <span className="text-[8.5px] font-medium tabular text-ink/50">{b.v}</span>
                  <div
                    className={cn("w-full rounded-t-[3px]", b.v >= 85 ? "bg-accent" : "bg-ink/30")}
                    style={{ height: `${b.v}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-1.5 flex gap-2 border-t border-line pt-1.5">
            {trend.map((b) => (
              <span key={b.d} className="flex-1 text-center text-[9px] text-ink/50">{b.d}</span>
            ))}
          </div>
        </div>

        {/* Pipeline list */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="mb-1.5 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-wider text-ink/55">Top enriched</p>
            <span className="text-[11px] text-ink/45">Score</span>
          </div>
          <ul className="divide-y divide-line">
            {leads.map((l) => (
              <li key={l.name} className="flex items-center gap-3 py-2">
                <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-ink/10 text-[10px] font-semibold text-ink/70">
                  {l.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-ink">{l.name}</p>
                  <p className="truncate text-[11.5px] text-ink/55">{l.company}</p>
                </div>
                <div className="flex w-20 items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                    <div
                      className={cn("h-full rounded-full", l.score >= 85 ? "bg-accent" : "bg-ink/40")}
                      style={{ width: `${l.score}%` }}
                    />
                  </div>
                  <span className="w-5 text-right text-[12px] font-semibold tabular text-ink">{l.score}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockShell>
  );
}
