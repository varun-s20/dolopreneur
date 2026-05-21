import { CheckCheck, Sparkles, Mic, Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import { MockShell } from "@/components/product-mocks/MockShell";

type Props = { className?: string };

export function ChatThread({ className }: Props) {
  return (
    <MockShell
      kind="phone"
      title="Michelle Rivera"
      subtitle="WhatsApp · online"
      trailing={
        <div className="grid h-8 w-8 place-items-center rounded-full bg-ink/10 text-[10px] font-semibold text-ink/70">
          MR
        </div>
      }
      footer={
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1">
            <CheckCheck className="h-3 w-3 text-accent" /> Delivered
          </span>
          <span>Avg reply · 3.4s</span>
        </div>
      }
      className={className}
    >
      <div className="flex flex-col gap-2.5 px-4 py-4 text-[13px] leading-snug">
        <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-ink/5 px-3 py-2 text-ink/80">
          Hey, are you free for a viewing on Saturday?
        </div>
        <div className="ml-auto flex max-w-[82%] items-start gap-1.5">
          <div className="rounded-2xl rounded-tr-sm bg-surface-dark px-3 py-2 text-bg">
            <span className="mr-1 inline-flex items-center gap-1 rounded-pill bg-accent/90 px-1.5 py-[1px] text-[9px] font-semibold text-ink">
              <Sparkles className="h-2.5 w-2.5" /> AI
            </span>
            I have <strong>Sat 11am</strong> or <strong>Sat 3pm</strong> open. Which works?
          </div>
        </div>
        <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-ink/5 px-3 py-2 text-ink/80">
          3pm works. Send the address?
        </div>
        <div className="ml-auto flex max-w-[88%] items-start gap-1.5">
          <div className="rounded-2xl rounded-tr-sm bg-surface-dark px-3 py-2 text-bg">
            Booked. Sat 3pm · 412 Linden Ave. Calendar invite sent to your email.
          </div>
        </div>
        <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-ink/5 px-3 py-2 text-ink/80">
          Perfect, see you then.
        </div>

        {/* Composer */}
        <div className={cn("mt-2 flex items-center gap-2 rounded-pill bg-ink/[0.04] px-3 py-2")}>
          <Plus className="h-3.5 w-3.5 text-ink/45" />
          <span className="flex-1 text-[12.5px] text-ink/35">Type a message</span>
          <Mic className="h-3.5 w-3.5 text-ink/45" />
        </div>
      </div>
    </MockShell>
  );
}
