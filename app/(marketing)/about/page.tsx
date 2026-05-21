import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buildMetadata } from "@/lib/seo";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FAQ } from "@/components/content/FAQ";
import { BreadcrumbLd, FAQPageLd } from "@/components/seo/JsonLd";
import { Prose } from "@/components/content/Prose";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Dolopreneur exists for one reason: the highest-leverage company in 2026 has one operator and a lot of agents.",
  path: "/about",
});

const principles = [
  {
    title: "Pre-wired beats integrable.",
    body: "Operators don't want to glue tools together. Every minute spent on a Zap is a minute not spent talking to a customer.",
  },
  {
    title: "Boring numbers beat shiny ones.",
    body: "Reply time, missed-call rate, booked meetings. We optimize for the metrics that actually move revenue, not the ones that make a screenshot.",
  },
  {
    title: "One bill. One inbox. One operator.",
    body: "Three agents under one workspace. No per-seat sprawl, no integration hairball, no SaaS audit at the end of the year.",
  },
];

const aboutFaq = [
  {
    q: "Who's behind Dolopreneur?",
    a: "A small team of operators who got tired of buying eight tools to do one job. We use the product to run the company that builds the product.",
  },
  {
    q: "Are these your own tools or white-labeled?",
    a: "ConverseOS, SiteForge, and VoxAgent run on tightly-integrated, battle-tested infrastructure under the hood. We focus our build on the operator surface, the workflows, the inbox, the agent behavior, because that's where you spend your time.",
  },
  {
    q: "How do you think about AI safety in customer conversations?",
    a: "Agents are constrained to your knowledge base and your tone. They cannot quote prices not in the catalog, promise services you don't offer, or commit you to anything you haven't approved. When in doubt, they hand off to a human.",
  },
  {
    q: "What happens if I want to leave?",
    a: "You can export your conversations, your contacts, your sites, and your number history at any time. We make leaving boring on purpose.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>
        <Reveal as="h1" delay={0.05} className="mt-6 max-w-[20ch] text-[44px] leading-[1.04] md:text-[72px]">
          The highest-leverage company in 2026 has one operator.
        </Reveal>
        <Reveal as="p" delay={0.12} className="mt-6 max-w-[58ch] text-lg text-ink/65 md:text-xl">
          Software is finally cheap enough that one person can outcompete a Series A team, provided they have the right operating system underneath them.
        </Reveal>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal>
            <Prose>
              <p>
                Dolopreneur is the layer that turns one founder into a real business. Three AI agents. ConverseOS, SiteForge, and VoxAgent, pre-wired into a single funnel so you can replace a chat tool, a website builder, a dialer, and four part-time hires with one subscription.
              </p>
              <p>
                We aren&apos;t a marketplace and we aren&apos;t a no-code builder. We are the operating system you run your company on. The metrics we care about are the ones a founder checks at midnight: how many leads came in, how many got answered, how many became revenue.
              </p>
              <p>
                If you&apos;ve ever ended a Sunday with thirty unread messages and a list of calls you didn&apos;t make, this is for you.
              </p>
            </Prose>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">Thesis</p>
                <p className="mt-3 font-display text-2xl leading-snug text-ink md:text-[28px]">
                  One operator with the right agents will beat ten operators without them, every quarter.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-pill bg-surface-dark px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-surface-dark-2"
              >
                Talk to the team <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <SectionLabel>Principles</SectionLabel>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-6 max-w-[24ch] text-[32px] leading-[1.08] md:text-[44px]">
            The opinions baked into every screen.
          </Reveal>
          <Stagger className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3" step={0.08}>
            {principles.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="flex h-full flex-col gap-5 rounded-tile bg-card p-7 hairline md:p-8">
                  <span className="font-display text-3xl text-ink/30 tabular">0{i + 1}</span>
                  <p className="text-lg font-medium text-ink">{p.title}</p>
                  <p className="text-[14.5px] text-ink/65">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <Reveal>
              <SectionLabel>FAQ</SectionLabel>
            </Reveal>
            <Reveal as="h2" delay={0.05} className="mt-6 max-w-[18ch] text-[32px] leading-[1.08] md:text-[44px]">
              The honest version of who we are.
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ items={aboutFaq} />
          </Reveal>
        </div>
      </section>

      <FAQPageLd items={aboutFaq} />
      <BreadcrumbLd
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
    </>
  );
}
