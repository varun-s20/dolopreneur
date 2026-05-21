import { Megaphone, LayoutTemplate, MessageSquareText, PhoneCall, CalendarCheck, HandCoins } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const nodes = [
  { icon: Megaphone, label: "Ad / Inbound", sub: "Meta · Google · Organic" },
  { icon: LayoutTemplate, label: "SiteForge page", sub: "Captures the lead" },
  { icon: MessageSquareText, label: "ConverseOS chat", sub: "Replies in 3.4s" },
  { icon: PhoneCall, label: "VoxAgent call", sub: "If cold for 24h" },
  { icon: CalendarCheck, label: "Booked meeting", sub: "Lands in your calendar" },
  { icon: HandCoins, label: "Customer", sub: "Paid · onboarded" },
];

export function LoopDiagram() {
  return (
    <section id="how" className="flex flex-col justify-center bg-bg md:h-full">
      <div className="container-page py-16 md:py-20">
        <div className="flex flex-col items-start gap-5">
          <Reveal><SectionLabel>The loop</SectionLabel></Reveal>
          <Reveal as="h2" delay={0.05} className="max-w-[20ch] text-[32px] leading-[1.05] md:text-[48px]">
            One operator. Every step from ad to revenue.
          </Reveal>
          <Reveal as="p" delay={0.12} className="max-w-[58ch] text-base text-ink/65 md:text-lg">
            ConverseOS, SiteForge, and VoxAgent are pre-wired into a single funnel. Lead in, customer out, no integrations to build.
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-14 md:grid-cols-6" step={0.07}>
          {nodes.map((n, i) => {
            const Icon = n.icon;
            return (
              <StaggerItem key={n.label} className="relative">
                <div className="flex h-full flex-col gap-3 rounded-tile bg-card p-5 hairline">
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-surface-dark text-bg">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[11px] font-medium text-ink/45 tabular">0{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-ink">{n.label}</p>
                    <p className="mt-1 text-[12.5px] text-ink/55">{n.sub}</p>
                  </div>
                </div>
                {i < nodes.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-ink/15 md:block"
                  />
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
