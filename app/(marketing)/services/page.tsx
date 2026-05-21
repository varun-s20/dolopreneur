import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ChatThread } from "@/components/product-mocks/ChatThread";
import { PageBuilderCanvas } from "@/components/product-mocks/PageBuilderCanvas";
import { CallTranscript } from "@/components/product-mocks/CallTranscript";
import { services } from "@/content/services";
import { BreadcrumbLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Three AI agents, one operator stack: ConverseOS for chat, SiteForge for sites, VoxAgent for voice. Pre-wired into a single funnel.",
  path: "/services",
});

const mocks = {
  converseos: <ChatThread />,
  siteforge: <PageBuilderCanvas />,
  voxagent: <CallTranscript />,
} as const;

export default function ServicesIndexPage() {
  return (
    <>
      <section className="container-page pb-4 pt-16 md:pt-24">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
        </Reveal>
        <Reveal as="h1" delay={0.05} className="mt-6 max-w-[22ch] text-[44px] leading-[1.04] md:text-[72px]">
          Three agents. One subscription. The work, off your plate.
        </Reveal>
        <Reveal as="p" delay={0.12} className="mt-6 max-w-[58ch] text-lg text-ink/65 md:text-xl">
          ConverseOS handles every message. SiteForge ships every page. VoxAgent picks up every call. Together they do the operating work of a small team, billed as a single line item.
        </Reveal>
      </section>

      <section className="container-page space-y-6 py-12 md:space-y-10 md:py-20">
        {services.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={s.slug}>
              <article className="grid items-center gap-8 rounded-tile bg-card p-6 hairline md:grid-cols-2 md:gap-12 md:p-10">
                <Card
                  tone="bg"
                  notched
                  className={reversed ? "md:order-2" : "md:order-1"}
                >
                  {mocks[s.slug]}
                </Card>
                <div className={reversed ? "md:order-1" : "md:order-2"}>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/45">
                    0{i + 1} · {s.name}
                  </p>
                  <h2 className="mt-3 text-[28px] leading-[1.1] md:text-[40px]">{s.tagline}</h2>
                  <p className="mt-4 max-w-[44ch] text-[15px] text-ink/65 md:text-base">
                    {s.blurb}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-[14.5px] text-ink/80">
                    {s.capabilities.slice(0, 3).map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-7 inline-flex w-fit items-center gap-1.5 rounded-pill bg-surface-dark px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-surface-dark-2"
                  >
                    Open {s.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="bg-surface-dark text-bg" data-nav-theme="dark">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <span className="relative inline-flex items-center">
              <span className="relative z-10 rounded-pill bg-surface-dark-2 px-3 py-1 text-xs font-medium tracking-wide text-bg/85 hairline-dark">
                Why the stack
              </span>
            </span>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-6 max-w-[24ch] text-[36px] leading-[1.05] text-bg md:text-[52px]">
            Pre-wired beats integrable. Always.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 max-w-[58ch] text-base text-bg/70 md:text-lg">
            You can buy a chat tool, a builder, and a dialer separately and spend two weeks gluing them with Zapier. Or you can plug into a stack where lead-to-chat-to-call-to-booking is a single, pre-built path. Dolopreneur is the second option.
          </Reveal>

          <Stagger className="mt-10 grid gap-3 md:mt-14 md:grid-cols-3" step={0.07}>
            {[
              { k: "1 subscription", v: "All three agents billed as one. No per-seat sprawl." },
              { k: "1 inbox", v: "Conversations from every channel land in one shared queue." },
              { k: "1 operator", v: "Designed for a single founder running a real business." },
            ].map((item) => (
              <StaggerItem key={item.k}>
                <div className="flex h-full flex-col gap-4 rounded-tile bg-surface-dark-2 p-6 hairline-dark md:p-7">
                  <p className="font-display text-2xl text-bg md:text-3xl">{item.k}</p>
                  <p className="text-[14.5px] text-bg/65">{item.v}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal as="h2" className="text-[36px] leading-[1.05] md:text-[52px]">
            Ready to put the stack to work?
          </Reveal>
          <Reveal as="p" delay={0.05} className="mt-5 max-w-[42ch] text-base text-ink/65 md:text-lg">
            Book a demo and we&apos;ll configure the agents to your business in under 30 minutes.
          </Reveal>
          <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="dark" size="lg">
              Book a demo
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See pricing
            </Button>
          </Reveal>
        </div>
      </section>

      <BreadcrumbLd
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
    </>
  );
}
