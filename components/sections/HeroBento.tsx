import { ArrowRight, Layers3, MessageSquareText, PhoneCall } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChatThread } from "@/components/product-mocks/ChatThread";
import { PageBuilderCanvas } from "@/components/product-mocks/PageBuilderCanvas";
import { CallTranscript } from "@/components/product-mocks/CallTranscript";
import { DashboardChart } from "@/components/product-mocks/DashboardChart";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function HeroBento() {
  return (
    <section className="container-page flex flex-col justify-center py-8 md:h-full md:py-10">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-12 lg:gap-16">
        {/* Left column, anchor of the hero. Always visible. */}
        <div className="flex flex-col gap-7">
          <Reveal as="h1" className="max-w-[16ch] text-[40px] sm:text-[48px] md:text-[52px] lg:text-[60px] xl:text-[68px] leading-[1.02]" y={20}>
            Run a{" "}
            <span className="scribble-underline">$100M</span>{" "}
            company. With one operator.
          </Reveal>

          <Reveal as="p" delay={0.12} className="max-w-[42ch] text-[15px] leading-relaxed text-ink/65 md:text-base">
            Chat, sites, and voice, handled by ConverseOS, SiteForge, and VoxAgent. A stack of AI agents that runs the operating work of a small team while you stay the CEO.
          </Reveal>

          <Reveal delay={0.2} className="flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="dark" size="lg">
              Book a demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              See services
            </Button>
          </Reveal>

          <Reveal delay={0.28} className="mt-1 flex items-center gap-3 text-ink/55">
            <div className="flex items-center gap-1.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-card hairline" aria-hidden>
                <MessageSquareText className="h-3.5 w-3.5" />
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-md bg-card hairline" aria-hidden>
                <Layers3 className="h-3.5 w-3.5" />
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-md bg-card hairline" aria-hidden>
                <PhoneCall className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="text-xs text-ink/55">
              Three agents. One subscription. Cancel anytime.
            </p>
          </Reveal>
        </div>

        {/* Right column, 2x2 mosaic. Each tile is a complete, framed screenshot. */}
        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4" initialDelay={0.18}>
          <StaggerItem>
            <Card className="aspect-[5/4] overflow-hidden shadow-tile">
              <ChatThread />
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="aspect-[5/4] overflow-hidden shadow-tile">
              <PageBuilderCanvas />
            </Card>
          </StaggerItem>

          <StaggerItem>
            <div className="aspect-[5/4] overflow-hidden rounded-tile bg-surface-dark p-1.5 shadow-tile">
              <div className="h-full overflow-hidden rounded-[10px] bg-card text-ink">
                <DashboardChart />
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <Card className="aspect-[5/4] overflow-hidden shadow-tile">
              <CallTranscript />
            </Card>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
