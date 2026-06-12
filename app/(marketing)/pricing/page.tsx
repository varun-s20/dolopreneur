import { PricingHero } from "@/components/sections/PricingHero";
import { PlatformTiers } from "@/components/sections/PlatformTiers";
import { AddOnShowcase } from "@/components/sections/AddOnShowcase";
import { Bundles } from "@/components/sections/Bundles";
import { MobileBuyBar } from "@/components/sections/MobileBuyBar";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { BreadcrumbLd, FAQPageLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Get on the map with Secret World, then bolt on AI agents for voice, chat, sites, video, leads, and content. Simple monthly pricing, cancel anytime.",
  path: "/pricing",
});

const pricingFaq = [
  {
    q: "What's the difference between the platform and the add-ons?",
    a: "The Secret World platform (Essential, Pro, Elite) is your storefront: your map listing, reviews, promotions, and customer messaging. The AI add-ons are optional agents that handle specific jobs like answering the phone, chatting with customers, building your site, generating video, finding leads, and creating content. Run the platform on its own, or stack add-ons on top.",
  },
  {
    q: "Can I mix and match add-ons?",
    a: "Yes. Every add-on runs independently and bills separately, so you can subscribe to a Workflow Agent Pro and a Lead Generation Basic without touching your platform tier. Add or remove them whenever you like.",
  },
  {
    q: "How do the bundles save me money?",
    a: "Bundles package the combinations operators reach for most at a single monthly price that's lower than subscribing to each piece on its own. The savings shown on each bundle are versus buying those items separately.",
  },
  {
    q: "Is everything billed monthly?",
    a: "Yes. Every plan, add-on, and bundle is a simple monthly subscription in USD. There are no contracts and no setup fees. Cancel anytime and your billing stops at the end of the current cycle.",
  },
  {
    q: "How does checkout work?",
    a: "Every plan links straight to a secure Stripe checkout. You can pay with any major card; Stripe handles billing, receipts, and renewals. You'll get an emailed receipt the moment you subscribe.",
  },
  {
    q: "Can I upgrade or downgrade a tier later?",
    a: "Anytime. Move up a tier and the new features unlock immediately; move down and the change takes effect at your next billing date so you keep what you've paid for this month.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PlatformTiers />
      <AddOnShowcase />
      <Bundles />

      <section className="container-page py-20 md:py-28">
        <div className="grid items-start gap-10 md:grid-cols-[0.85fr_1.4fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <Reveal as="h2" blur={6} className="max-w-[16ch] text-[32px] leading-[1.08] md:text-[46px]">
              Questions, answered.
            </Reveal>
            <Reveal as="p" delay={0.08} className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-ink/60">
              Our team is here with clear, quick answers. Still weighing it up? Reach out
              and we&apos;ll walk you through the right setup.
            </Reveal>
            <Reveal delay={0.16} className="mt-7">
              <Button href="/contact" variant="dark" size="lg">
                Talk to us
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.1} blur={6}>
            <FaqAccordion items={pricingFaq} />
          </Reveal>
        </div>
      </section>

      <MobileBuyBar />

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
