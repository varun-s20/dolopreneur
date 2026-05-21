import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buildMetadata } from "@/lib/seo";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { playbooks } from "@/content/playbooks";
import { cn } from "@/lib/cn";

export const metadata = buildMetadata({
  title: "Playbooks",
  description:
    "Industry-specific configurations of the Dolopreneur stack, real outcomes from real operators.",
  path: "/playbooks",
});

export default function PlaybooksPage() {
  const live = playbooks.filter((p) => p.status === "live");
  const draft = playbooks.filter((p) => p.status !== "live");
  const [featured, ...secondary] = live;

  return (
    <>
      <section className="container-page pb-4 pt-16 md:pt-24">
        <Reveal>
          <SectionLabel>Playbooks</SectionLabel>
        </Reveal>
        <Reveal as="h1" delay={0.05} className="mt-6 max-w-[20ch] text-[44px] leading-[1.04] md:text-[72px]">
          The same stack, configured for your business.
        </Reveal>
        <Reveal as="p" delay={0.12} className="mt-6 max-w-[58ch] text-lg text-ink/65 md:text-xl">
          Pick the industry that looks like yours. The setup is one click and one weekend away, every playbook ships with the exact agents, flows, and numbers used by an operator already running it.
        </Reveal>
      </section>

      {/* Featured live playbook + smaller live siblings */}
      <section className="container-page pb-10 pt-12 md:pb-14 md:pt-16">
        <div className="grid gap-4 md:grid-cols-5">
          {featured && (
            <Reveal className="md:col-span-3">
              <Link
                href={`/playbooks/${featured.slug}`}
                className="group flex h-full flex-col justify-between gap-12 rounded-tile bg-surface-dark p-7 text-bg shadow-tile transition-colors hover:bg-surface-dark-2 md:p-10"
                data-nav-theme="dark"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-bg/65">
                      {featured.industry} · Featured
                    </p>
                    <span className="inline-flex items-center gap-1 rounded-pill bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
                      Full playbook
                    </span>
                  </div>
                  <p className="mt-5 font-display text-[32px] leading-[1.05] text-bg md:text-[44px]">
                    {featured.outcome}
                  </p>
                  <p className="mt-4 max-w-[48ch] text-base text-bg/70">{featured.subhead}</p>
                </div>

                <div className="flex items-center justify-between border-t border-bg/10 pt-5">
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] text-bg/65">
                    <Clock3 className="h-3.5 w-3.5" /> Time to ship · {featured.timeToShip}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-bg/85 group-hover:text-bg">
                    Read playbook <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Smaller live siblings stacked beside the featured card */}
          {secondary.length > 0 && (
            <Stagger className="grid gap-4 md:col-span-2" step={0.08}>
              {secondary.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link
                    href={`/playbooks/${p.slug}`}
                    className="group flex h-full flex-col justify-between gap-6 rounded-tile bg-card p-6 hairline transition-colors hover:bg-card/60"
                  >
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/45">
                        {p.industry}
                      </p>
                      <p className="mt-3 font-display text-[22px] leading-[1.1] text-ink md:text-[26px]">
                        {p.outcome}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] text-ink/65 group-hover:text-ink">
                      <Clock3 className="h-3 w-3" /> {p.timeToShip}
                      <ArrowUpRight className="ml-auto h-3.5 w-3.5" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      {/* Coming-soon rail — visually subdued, distinct from the live cards */}
      {draft.length > 0 && (
        <section className="container-page pb-20 pt-2 md:pb-28">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
            Up next
          </Reveal>
          <Stagger className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3" step={0.06}>
            {draft.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/playbooks/${p.slug}`}
                  className={cn(
                    "group block rounded-tile border border-dashed border-ink/15 bg-transparent p-5 transition-colors",
                    "hover:border-ink/30 hover:bg-card/40",
                  )}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/45">
                    {p.industry}
                  </p>
                  <p className="mt-2 text-[15px] leading-snug text-ink/85">{p.outcome}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] text-ink/55">
                    <Clock3 className="h-3 w-3" /> {p.timeToShip} · Coming soon
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}
    </>
  );
}
