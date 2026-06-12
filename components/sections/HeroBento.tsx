import { ArrowRight, Layers3, MessageSquareText, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function HeroBento() {
  return (
    <section className="flex flex-col md:grid md:h-full md:grid-cols-2 md:items-stretch">
      {/* Left half, the text. Vertically centered, kept readable on wide screens
          and pushed toward the seam so it reads as balanced beside the film. */}
      <div className="flex items-center px-5 py-10 md:py-0 md:pl-10 md:pr-12 lg:pl-16 lg:pr-16">
        <div className="flex w-full max-w-[34rem] flex-col gap-7 md:ml-auto">
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
      </div>

      {/* Right half, the cinematic brand film, full-bleed to the viewport edge. */}
      <Reveal y={0} delay={0.15} className="relative h-[44vh] w-full bg-surface-dark md:h-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/brand-film.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Dolopreneur brand film"
        />
      </Reveal>
    </section>
  );
}
