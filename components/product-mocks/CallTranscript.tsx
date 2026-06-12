import { Sparkles, CheckCircle2, Mic, MicOff, PhoneOff } from "lucide-react";
import { MockShell } from "@/components/product-mocks/MockShell";
import { cn } from "@/lib/cn";

export function CallTranscript({ className }: { className?: string }) {
  return (
    <MockShell
      kind="call"
      subtitle="01:42"
      footer={
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-accent" /> Synced to calendar
          </span>
          <span>Recorded · transcribed</span>
        </div>
      }
      className={className}
    >
      <div className="flex h-full flex-col gap-3 p-4 text-[13px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-ink/10 text-[11px] font-semibold text-ink/70">
              MR
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-ink">Michelle Rivera</p>
              <p className="text-[11px] text-ink/55">Outbound · Linden Ave lead</p>
            </div>
          </div>
        </div>

        <div className="rounded-card bg-ink/[0.03] p-3 text-[12.5px] leading-relaxed">
          <p>
            <span className="font-semibold text-ink/80">Agent · </span>
            Hi Michelle, this is Ava from Northbeam, just confirming your viewing on Saturday at 3pm.
          </p>
          <p className="mt-1.5">
            <span className="font-semibold text-ink/80">Michelle · </span>
            Yes, that still works. Will you send the address?
          </p>
          <p className="mt-1.5">
            <span className="font-semibold text-ink/80">Agent · </span>
            Of course, 412 Linden Avenue. I&apos;ve also pushed the invite to your inbox.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Stat label="Sentiment" value="Positive" />
          <Stat label="Intent" value="Confirmed" />
          <Stat label="Outcome" value="Booked" featured />
        </div>

        {/* Call controls */}
        <div className="mt-auto flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full bg-ink/[0.06] text-ink/65"
            aria-label="Mute"
          >
            <Mic className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full bg-ink/[0.06] text-ink/65"
            aria-label="Toggle keypad"
          >
            <MicOff className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#e6453f] text-bg"
            aria-label="End call"
          >
            <PhoneOff className="h-4 w-4" />
          </button>
        </div>
      </div>
    </MockShell>
  );
}

function Stat({ label, value, featured }: { label: string; value: string; featured?: boolean }) {
  return (
    <div className={cn(
      "rounded-md p-2",
      featured ? "bg-accent text-ink" : "bg-ink/[0.04] text-ink",
    )}>
      <p className="text-[9px] uppercase tracking-wider opacity-65">{label}</p>
      <p className="text-[12px] font-semibold">{value}</p>
    </div>
  );
}
