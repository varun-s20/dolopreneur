import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import { playbooks } from "@/content/playbooks";
import { buildMetadata } from "@/lib/seo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { KPIRow } from "@/components/content/KPIRow";
import { Quote } from "@/components/content/Quote";
import { StepList } from "@/components/content/StepList";
import { Prose } from "@/components/content/Prose";
import { BreadcrumbLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion/Reveal";

type Params = { slug: string };

export function generateStaticParams() {
  return playbooks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = playbooks.find((x) => x.slug === slug);
  if (!p) return buildMetadata();
  return buildMetadata({
    title: `${p.industry}, ${p.outcome}`,
    description: p.subhead,
    path: `/playbooks/${p.slug}`,
  });
}

export default async function PlaybookPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = playbooks.find((x) => x.slug === slug);
  if (!p) notFound();

  const related = playbooks.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 pb-12 md:pt-20 md:pb-16">
        <Reveal>
          <SectionLabel>Playbook · {p.industry}</SectionLabel>
        </Reveal>
        <Reveal as="h1" delay={0.05} className="mt-6 max-w-[20ch] text-[44px] leading-[1.04] md:text-[68px]">
          {p.outcome}
        </Reveal>
        <Reveal as="p" delay={0.12} className="mt-6 max-w-[58ch] text-lg text-ink/65 md:text-xl">
          {p.subhead}
        </Reveal>

        <Reveal delay={0.18} className="mt-8 inline-flex items-center gap-2 rounded-pill bg-card px-4 py-2 text-sm text-ink/75 hairline">
          <Clock3 className="h-3.5 w-3.5" />
          Time to ship: <span className="font-medium text-ink">{p.timeToShip}</span>
        </Reveal>
      </section>

      {/* KPI strip */}
      <section className="container-page pb-12 md:pb-16">
        <Reveal>
          <KPIRow items={p.results} tone="dark" />
        </Reveal>
      </section>

      {/* The stack */}
      <section className="container-page pb-16 md:pb-24">
        <Reveal><SectionLabel>The stack</SectionLabel></Reveal>
        <Reveal as="h2" delay={0.05} className="mt-6 max-w-[24ch] text-[32px] leading-[1.08] md:text-[44px]">
          What runs, and what each agent does.
        </Reveal>
        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3">
          {p.stack.map((s, i) => (
            <Card key={s.name} tone="card" className="p-7 hairline">
              <p className="font-display text-xl tabular text-ink/30">0{i + 1}</p>
              <p className="mt-4 text-lg font-medium text-ink">{s.name}</p>
              <p className="mt-2 text-[14.5px] text-ink/65">{s.role}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Intro narrative */}
      <section className="container-page pb-16 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <SectionLabel>The operator</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <Prose>
              <p className="text-[19px] leading-[1.6] text-ink/85 md:text-[20px]">{p.intro}</p>
            </Prose>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-bg">
        <div className="container-page py-16 md:py-24">
          <Reveal><SectionLabel>How to set it up</SectionLabel></Reveal>
          <Reveal as="h2" delay={0.05} className="mt-6 max-w-[22ch] text-[32px] leading-[1.08] md:text-[44px]">
            Four steps. One operator. One afternoon.
          </Reveal>
          <Reveal delay={0.1} className="mt-10 md:mt-12">
            <StepList steps={p.steps} />
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <Quote {...p.testimonial} className="mx-auto max-w-3xl" />
        </Reveal>
      </section>

      {/* Long-form sections */}
      <section className="container-page pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <SectionLabel>Why it works</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <Prose>
              {p.sections.map((s) => (
                <div key={s.heading}>
                  <h2>{s.heading}</h2>
                  <p>{s.body}</p>
                </div>
              ))}
            </Prose>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark text-bg" data-nav-theme="dark">
        <div className="container-page py-20 md:py-28">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Reveal as="h2" className="text-[36px] leading-[1.05] text-bg md:text-[56px]">
              Run this playbook in your business.
            </Reveal>
            <Reveal as="p" delay={0.05} className="mt-5 max-w-[42ch] text-base text-bg/70 md:text-lg">
              We&apos;ll configure your workspace, your numbers, and your channels to mirror this setup, and you&apos;ll be live in under {p.timeToShip}.
            </Reveal>
            <Reveal delay={0.12}>
              <Button href="/contact" variant="primary" size="lg" className="mt-8">
                Book a setup call <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related playbooks */}
      <section className="container-page py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <Reveal as="h2" className="max-w-[20ch] text-[32px] leading-[1.08] md:text-[44px]">
            Other configurations.
          </Reveal>
          <Reveal>
            <Link
              href="/playbooks"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              See all playbooks <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/playbooks/${r.slug}`}
              className="group flex flex-col justify-between gap-8 rounded-tile bg-card p-7 hairline transition-colors hover:bg-card/60"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/45">
                  {r.industry}
                </p>
                <p className="mt-3 font-display text-[22px] leading-[1.1] text-ink md:text-[26px]">
                  {r.outcome}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/65 group-hover:text-ink">
                Read playbook <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${p.industry}, ${p.outcome}`,
            description: p.subhead,
            author: { "@type": "Organization", name: "Dolopreneur" },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <BreadcrumbLd
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Playbooks", href: "/playbooks" },
          { name: p.industry, href: `/playbooks/${p.slug}` },
        ]}
      />
    </>
  );
}
