import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { services, type Slug } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { KPIRow } from "@/components/content/KPIRow";
import { FAQ } from "@/components/content/FAQ";
import { BreadcrumbLd, FAQPageLd } from "@/components/seo/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ChatThread } from "@/components/product-mocks/ChatThread";
import { PageBuilderCanvas } from "@/components/product-mocks/PageBuilderCanvas";
import { CallTranscript } from "@/components/product-mocks/CallTranscript";
import { InboxList } from "@/components/product-mocks/InboxList";
import { DashboardChart } from "@/components/product-mocks/DashboardChart";
import { ReservationCard } from "@/components/product-mocks/ReservationCard";
import { cn } from "@/lib/cn";

type Params = { slug: string };

const heroMocks: Record<Slug, React.ReactNode> = {
  converseos: <ChatThread />,
  siteforge: <PageBuilderCanvas />,
  voxagent: <CallTranscript />,
};

// Secondary mocks shown in the deep feature blocks
const secondaryMocks: Record<Slug, React.ReactNode[]> = {
  converseos: [<ChatThread key="c1" />, <InboxList key="c2" />, <DashboardChart key="c3" />],
  siteforge: [<PageBuilderCanvas key="s1" />, <DashboardChart key="s2" />, <InboxList key="s3" />],
  voxagent: [<CallTranscript key="v1" />, <ReservationCard key="v2" />, <DashboardChart key="v3" />],
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return buildMetadata();
  return buildMetadata({
    title: `${service.name}, ${service.tagline}`,
    description: service.blurb,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const mocks = secondaryMocks[service.slug];

  return (
    <>
      {/* Hero */}
      <section className="container-page pb-12 pt-12 md:pb-16 md:pt-20">
        <Reveal><SectionLabel>{service.name}</SectionLabel></Reveal>
        <Reveal as="h1" delay={0.05} className="mt-6 max-w-[20ch] text-[44px] leading-[1.04] md:text-[72px]">
          {service.tagline}
        </Reveal>
        <Reveal as="p" delay={0.12} className="mt-6 max-w-[58ch] text-lg text-ink/65 md:text-xl">
          {service.blurb}
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[1.2fr_1fr] md:gap-12">
          <Reveal delay={0.18}>
            <Card tone="bg" className="overflow-hidden">{heroMocks[service.slug]}</Card>
          </Reveal>

          <Reveal delay={0.22} className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-[32px]">What you get</h2>
            <ul className="mt-6 space-y-3 text-[15px] text-ink/80">
              {service.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="dark">
                Book a demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="outline">See pricing</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KPI strip */}
      <section className="container-page pb-12 md:pb-16">
        <Reveal>
          <KPIRow items={service.kpis} />
        </Reveal>
      </section>

      {/* Deep feature blocks */}
      <section className="container-page space-y-6 pb-16 md:space-y-10 md:pb-24">
        {service.blocks.map((b, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={b.title}>
              <article className="grid items-center gap-8 rounded-tile bg-card p-6 hairline md:grid-cols-2 md:gap-12 md:p-10">
                <Card
                  tone="bg"
                  className={cn(
                    "overflow-hidden",
                    reversed ? "md:order-2" : "md:order-1",
                  )}
                >
                  {mocks[i % mocks.length]}
                </Card>
                <div className={reversed ? "md:order-1" : "md:order-2"}>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/45">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 text-[26px] leading-[1.1] md:text-[36px]">{b.title}</h3>
                  <p className="mt-4 max-w-[44ch] text-[15px] text-ink/70 md:text-base">{b.body}</p>
                  <ul className="mt-6 space-y-2.5 text-[14.5px] text-ink/80">
                    {b.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      {/* Integrations */}
      <section className="bg-surface-dark text-bg" data-nav-theme="dark">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <span className="relative inline-flex items-center">
              <span className="relative z-10 rounded-pill bg-surface-dark-2 px-3 py-1 text-xs font-medium tracking-wide text-bg/85 hairline-dark">
                Integrations
              </span>
            </span>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-6 max-w-[22ch] text-[36px] leading-[1.05] text-bg md:text-[48px]">
            Plays nice with what you already use.
          </Reveal>
          <Stagger className="mt-10 flex flex-wrap gap-2 md:mt-12" step={0.03}>
            {service.integrations.map((name) => (
              <StaggerItem key={name}>
                <span className="inline-flex items-center rounded-pill bg-surface-dark-2 px-4 py-2 text-sm text-bg/85 hairline-dark">
                  {name}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Best for */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Reveal><SectionLabel>Best for</SectionLabel></Reveal>
            <Reveal as="h2" delay={0.05} className="mt-6 text-[32px] leading-[1.08] md:text-[44px]">
              Where {service.name} earns its keep.
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-3">
            {service.bestFor.map((b, i) => (
              <StaggerItem key={b}>
                <div className="flex h-full flex-col justify-between gap-6 rounded-tile bg-card p-6 hairline">
                  <span className="font-display text-2xl text-ink/30 tabular">0{i + 1}</span>
                  <p className="text-[15px] font-medium text-ink">{b}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <Reveal><SectionLabel>FAQ</SectionLabel></Reveal>
            <Reveal as="h2" delay={0.05} className="mt-6 max-w-[18ch] text-[32px] leading-[1.08] md:text-[44px]">
              The honest answers to the things people always ask.
            </Reveal>
            <Reveal as="p" delay={0.12} className="mt-4 text-[15px] text-ink/65">
              Anything else? Drop a line at{" "}
              <Link href="/contact" className="font-medium text-ink underline-offset-4 hover:underline">
                contact
              </Link>{" "}
             , a human reads them.
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ items={service.faq} />
          </Reveal>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-bg">
        <div className="container-page py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <Reveal as="h2" className="max-w-[20ch] text-[32px] leading-[1.08] md:text-[44px]">
              The other agents in the stack.
            </Reveal>
            <Reveal>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline"
              >
                See pricing <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group flex flex-col justify-between gap-8 rounded-tile bg-card p-7 hairline transition-colors hover:bg-card/60 md:p-9"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/45">{o.name}</p>
                  <p className="mt-3 font-display text-[24px] leading-[1.1] text-ink md:text-[30px]">
                    {o.tagline}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/65 group-hover:text-ink">
                  Open {o.name} <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: service.name,
            description: service.blurb,
            brand: { "@type": "Brand", name: "Dolopreneur" },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <FAQPageLd items={service.faq} />
      <BreadcrumbLd
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />
    </>
  );
}
