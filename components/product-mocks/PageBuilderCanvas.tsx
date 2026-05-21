import { Layers, MousePointer2 } from "lucide-react";
import { MockShell } from "@/components/product-mocks/MockShell";
import { cn } from "@/lib/cn";

export function PageBuilderCanvas({ className }: { className?: string }) {
  return (
    <MockShell
      kind="browser"
      title="launch.northbeam.co"
      footer={
        <div className="flex items-center justify-between">
          <span>Saved · Published</span>
          <span>Lighthouse · 97</span>
        </div>
      }
      className={className}
    >
      <div className="grid grid-cols-[1fr_104px] gap-3 p-4">
        {/* Canvas */}
        <div className="relative rounded-card bg-bg p-3 hairline">
          <div className="space-y-2.5">
            <div className="rounded-md bg-ink/[0.04] p-3">
              <div className="mb-1.5 h-2.5 w-1/2 rounded bg-ink/25" />
              <div className="h-1.5 w-2/3 rounded bg-ink/15" />
              <div className="mt-2 flex gap-1.5">
                <div className="h-4 w-14 rounded-pill bg-accent" />
                <div className="h-4 w-12 rounded-pill bg-ink/15" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 rounded-md bg-ink/[0.04]" />
              <div className="h-12 rounded-md bg-ink/[0.04] outline outline-2 outline-accent">
                <div className="m-1.5 h-1.5 w-6 rounded bg-ink/25" />
              </div>
              <div className="h-12 rounded-md bg-ink/[0.04]" />
            </div>
            <div className="rounded-md bg-ink/[0.04] p-2">
              <div className="mb-1 h-1.5 w-1/3 rounded bg-ink/15" />
              <div className="h-1.5 w-1/2 rounded bg-ink/15" />
            </div>
            <div className="rounded-md bg-ink/[0.04] p-2">
              <div className="mb-1 h-1.5 w-1/4 rounded bg-ink/15" />
              <div className="grid grid-cols-2 gap-1">
                <div className="h-6 rounded bg-ink/[0.06]" />
                <div className="h-6 rounded bg-ink/[0.06]" />
              </div>
            </div>
          </div>

          <div className={cn("pointer-events-none absolute left-[56%] top-[40%] inline-flex items-center gap-1 rounded-md bg-surface-dark px-1.5 py-0.5 text-[9px] text-bg")}>
            <MousePointer2 className="h-2.5 w-2.5" /> Hero block
          </div>
        </div>

        {/* Library */}
        <div className="rounded-card bg-bg p-2 hairline">
          <div className="mb-2 flex items-center gap-1 text-[10px] font-semibold text-ink/65">
            <Layers className="h-3 w-3" /> Library
          </div>
          <div className="space-y-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-7 rounded bg-ink/[0.05]">
                <div className="m-1.5 h-1 w-8 rounded bg-ink/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockShell>
  );
}
