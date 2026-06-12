import { Play, Sparkles } from "lucide-react";
import { MockShell } from "@/components/product-mocks/MockShell";
import { cn } from "@/lib/cn";

// Person-based AI presenter. The big frame is the chosen presenter's talking-head
// render; the strip below lets the operator pick which real-person avatar speaks.
const presenters = [
  { id: 68, name: "Maya", role: "Host" },
  { id: 12, name: "Daniel", role: "Sales" },
  { id: 32, name: "Priya", role: "Support" },
  { id: 51, name: "Theo", role: "Promo" },
];

export function AvatarStudio({ className }: { className?: string }) {
  const active = presenters[0];
  return (
    <MockShell
      kind="app"
      title="Avatar Studio"
      subtitle="Person-based presenter · 4K"
      trailing={
        <span className="inline-flex items-center gap-1 rounded-pill bg-accent/40 px-2 py-0.5 text-[10px] font-semibold text-ink">
          <Sparkles className="h-3 w-3" /> AI
        </span>
      }
      footer={
        <div className="flex items-center justify-between">
          <span>Rendering · 00:12</span>
          <span>Their face, your voice</span>
        </div>
      }
      className={className}
    >
      <div className="flex h-full flex-col">
        {/* Stage: the chosen presenter, mid-frame talking head */}
        <div className="relative min-h-0 flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.pravatar.cc/720?img=${active.id}`}
            alt={`${active.name}, AI presenter avatar`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" />

          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-pill bg-bg/90 px-2.5 py-1 text-[10px] font-semibold text-ink">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> REC
          </span>
          <span className="absolute right-3 top-3 rounded-pill bg-ink/55 px-2 py-1 text-[10px] font-medium text-bg backdrop-blur-sm">
            {active.name} · {active.role}
          </span>

          <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-bg/90 text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </div>

          <div className="absolute inset-x-3 bottom-3 rounded-card bg-bg/90 p-2.5 backdrop-blur-sm">
            <p className="text-[12px] leading-snug text-ink">
              <span className="text-ink/50">Script &middot; </span>
              Welcome to our spring open house at 412 Linden Ave.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink/15">
                <div className="h-full w-2/5 rounded-full bg-accent" />
              </div>
              <span className="text-[9.5px] tabular text-ink/45">0:09 / 0:24</span>
            </div>
          </div>
        </div>

        {/* Presenter picker: a roster of real people to put on camera */}
        <div className="flex items-center gap-2 border-t border-line px-3 py-2.5">
          <span className="text-[10px] uppercase tracking-wider text-ink/45">Cast</span>
          <div className="flex items-center gap-1.5">
            {presenters.map((p) => (
              <span
                key={p.id}
                className={cn(
                  "relative block h-7 w-7 overflow-hidden rounded-full",
                  p.id === active.id
                    ? "ring-2 ring-accent ring-offset-1 ring-offset-card"
                    : "ring-1 ring-line",
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.pravatar.cc/96?img=${p.id}`}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </span>
            ))}
          </div>
          <span className="ml-auto text-[10px] text-ink/45">15 avatars</span>
        </div>
      </div>
    </MockShell>
  );
}
