import Link from "next/link";
import { Pricing } from "@/components/sections/Pricing";
import { PricingCompare } from "@/components/sections/PricingCompare";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQ } from "@/components/content/FAQ";
import { BreadcrumbLd, FAQPageLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description: "Three plans. One subscription. Everything ConverseOS, SiteForge, and VoxAgent does, in one bill.",
  path: "/pricing",
});

const pricingFaq = [
  {
    q: "Can I switch plans later?",
    a: "Anytime. Upgrades take effect immediately and we pro-rate the difference. Downgrades take effect at the next billing cycle so you don't lose anything mid-month.",
  },
  {
    q: "What happens after the trial ends?",
    a: "Your workspace stays put. We send a reminder 3 days before the trial ends. If you don't choose a plan, we pause your agents, no charges and no data deletion until you decide.",
  },
  {
    q: "Do you offer annual pricing?",
    a: "Yes. Toggle to annual on any plan for a 16% discount. We invoice annually with net-30 terms available on Agency.",
  },
  {
    q: "What is an AI interaction?",
    a: "One inbound message answered by an agent, one outbound message in a campaign, or one minute of a voice call counts as one interaction. Overage is billed at $0.01 per interaction.",
  },
  {
    q: "Do you charge per number on VoxAgent?",
    a: "Numbers included in your plan are free. Additional numbers are $4/mo each. Outbound minutes follow the standard interaction price.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fee on Starter or Operator. Agency includes a paid white-glove onboarding (rolled into the first invoice).",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="container-page pb-4 pt-16 md:pt-24">
        <Reveal><SectionLabel>Pricing</SectionLabel></Reveal>
        <Reveal as="h1" delay={0.05} className="mt-6 max-w-[18ch] text-[44px] leading-[1.04] md:text-[72px]">
          One bill. Every agent. Cancel anytime.
        </Reveal>
        <Reveal as="p" delay={0.12} className="mt-6 max-w-[58ch] text-lg text-ink/65 md:text-xl">
          Start on Starter, graduate to Operator when traffic shows up, and roll into Agency when the clients do.
        </Reveal>
      </section>
      <Pricing />
      <PricingCompare />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <Reveal><SectionLabel>FAQ</SectionLabel></Reveal>
            <Reveal as="h2" delay={0.05} className="mt-6 max-w-[18ch] text-[32px] leading-[1.08] md:text-[44px]">
              Pricing questions, answered.
            </Reveal>
            <Reveal as="p" delay={0.12} className="mt-4 text-[15px] text-ink/65">
              Need a custom arrangement?{" "}
              <Link href="/contact" className="font-medium text-ink underline-offset-4 hover:underline">
                Talk to us
              </Link>
              .
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ items={pricingFaq} />
          </Reveal>
        </div>
      </section>

      <FAQPageLd items={pricingFaq} />
      <BreadcrumbLd
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
    </>
  );
}
