import Link from "next/link";
import {
  Megaphone,
  LayoutTemplate,
  MessageSquareText,
  PhoneCall,
  CalendarCheck,
  HandCoins,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { StepList } from "@/components/content/StepList";
import { Prose } from "@/components/content/Prose";
import { BreadcrumbLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How it works",
  description:
    "From ad click to booked meeting in under five minutes, with no human in the loop until the sales call. The full Dolopreneur flow, explained.",
  path: "/how-it-works",
});

const loopNodes = [
  { icon: Megaphone, label: "Ad / inbound", body: "Meta, Google, or organic. Lead clicks." },
  { icon: LayoutTemplate, label: "SiteForge page", body: "Lands on a page built to convert. Form submitted." },
  { icon: MessageSquareText, label: "ConverseOS chat", body: "Agent replies in 3.4 seconds, qualifies, books." },
  { icon: PhoneCall, label: "VoxAgent call", body: "If silent for 24h, an outbound call follows up." },
  { icon: CalendarCheck, label: "Booked meeting", body: "Calendar invite sent. Confirmation text fires." },
  { icon: HandCoins, label: "Customer", body: "Paid, onboarded, in the inbox for support." },
];

const steps = [
  {
    title: "Lead enters from any channel.",
    body: "An ad click, an Instagram DM, a missed call, a form on your SiteForge page. Every entry point routes into the same workspace.",
  },
  {
    title: "ConverseOS qualifies and answers in seconds.",
    body: "The agent applies your qualification rules, sends the right answer, and offers the next step. Calendar-aware, multi-language, tone-tuned.",
  },
  {
    title: "VoxAgent covers the calls and the follow-ups.",
    body: "Inbound calls are picked up in under a second. Cold leads get a friendly follow-up call. High-value carts get a recovery call.",
  },
  {
    title: "Meetings book themselves into your calendar.",
    body: "Both agents read your calendar live. Slots open and close as you move. The customer never sees a Calendly link.",
  },
  {
    title: "You step in only when it matters.",
    body: "Hand-off rules trigger on pricing edge cases, complaints, and any explicit ask for a human. Everything else is handled.",
  },
];

const kpis = [
  { value: "3.4s", label: "Average response", caption: "Across every channel, day or night" },
  { value: "78%", label: "Conversations auto-resolved", caption: "Without a human ever opening the thread" },
  { value: "4.2×", label: "Pipeline uplift", caption: "Versus the same operator without the stack" },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="container-page pb-4 pt-16 md:pt-24">
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
        </Reveal>
        <Reveal as="h1" delay={0.05} className="mt-6 max-w-[22ch] text-[44px] leading-[1.04] md:text-[72px]">
          From ad click to booked meeting. With no humans in between.
        </Reveal>
        <Reveal as="p" delay={0.12} className="mt-6 max-w-[60ch] text-lg text-ink/65 md:text-xl">
          The Dolopreneur stack is one path, six nodes, zero glue code. Every lead enters at the top and lands as a paid customer at the bottom, while you stay out of the loop until the conversation calls for you.
        </Reveal>
      </section>

      {/* Inline KPI ribbon, intentionally different from the boxed KPI grid used elsewhere. */}
      <section className="container-page py-12 md:py-16">
        <Reveal>
          <ul className="flex flex-col divide-y divide-line border-y border-line md:flex-row md:divide-y-0 md:divide-x">
            {kpis.map((k) => (
              <li key={k.label} className="flex flex-1 items-baseline gap-4 py-5 md:px-6 md:py-6">
                <span className="font-display text-[44px] leading-none text-ink tabular md:text-[56px]">
                  {k.value}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-ink">{k.label}</span>
                  {k.caption && (
                    <span className="text-xs text-ink/55">{k.caption}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="loop" className="container-page py-12 md:py-20">
        <div className="flex flex-col items-start gap-5">
          <Reveal>
            <SectionLabel>The loop</SectionLabel>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="max-w-[22ch] text-[32px] leading-[1.05] md:text-[52px]">
            One operator. Every step from ad to revenue.
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-14 md:grid-cols-6" step={0.06}>
          {loopNodes.map((n, i) => {
            const Icon = n.icon;
            return (
              <StaggerItem key={n.label}>
                <Card tone="card" className="flex h-full flex-col gap-3 p-5 hairline">
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-surface-dark text-bg">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[11px] font-medium text-ink/45 tabular">0{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-ink">{n.label}</p>
                    <p className="mt-1 text-[12.5px] text-ink/55">{n.body}</p>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section className="bg-bg">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <SectionLabel>Step by step</SectionLabel>
            </Reveal>
            <div>
              <Reveal as="h2" className="text-[32px] leading-[1.08] md:text-[44px]">
                What actually happens, in order.
              </Reveal>
              <Reveal delay={0.08} className="mt-8">
                <StepList steps={steps} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <SectionLabel>Behind the scenes</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <Prose>
              <p>
                The stack runs on three integrated systems we operate end to end. You see one workspace, one inbox, one billing line. Underneath, each agent talks to the others through a shared event bus so that a SiteForge form submission can fire a ConverseOS reply in the same second.
              </p>
              <p>
                What that means in practice: when a lead drops their phone number on a landing page at 11pm, the chat thread is already open before they switch back to Instagram. When they go quiet for a day, VoxAgent rings them with the context of the chat in hand. When they book, the meeting lands in your calendar with the full thread attached.
              </p>
              <p>
                You never wire a webhook. You never copy a contact between tools. The work is the stack&apos;s; the outcome is yours.
              </p>
            </Prose>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-dark text-bg" data-nav-theme="dark">
        <div className="container-page py-20 md:py-28">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Reveal as="h2" className="text-[36px] leading-[1.05] text-bg md:text-[52px]">
              See it on your business.
            </Reveal>
            <Reveal as="p" delay={0.05} className="mt-5 max-w-[42ch] text-base text-bg/70 md:text-lg">
              We&apos;ll configure the loop against your exact channels, scripts, and calendar. You&apos;ll be live the same day.
            </Reveal>
            <Reveal delay={0.12}>
              <Button href="/contact" variant="primary" size="lg" className="mt-8">
                Book a setup call <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
            <Link
              href="/services"
              className="mt-6 text-sm text-bg/70 underline-offset-4 hover:underline"
            >
              Or read about each agent →
            </Link>
          </div>
        </div>
      </section>

      <BreadcrumbLd
        crumbs={[
          { name: "Home", href: "/" },
          { name: "How it works", href: "/how-it-works" },
        ]}
      />
    </>
  );
}
