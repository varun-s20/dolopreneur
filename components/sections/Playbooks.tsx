import Link from "next/link";
import { ArrowUpRight, Home, GraduationCap, Wrench, Building2, ShoppingBag, type LucideIcon } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { playbooks, type PlaybookSlug } from "@/content/playbooks";

const iconBySlug: Record<PlaybookSlug, LucideIcon> = {
  "real-estate": Home,
  coaches: GraduationCap,
  "local-services": Wrench,
  agencies: Building2,
  ecommerce: ShoppingBag,
};

export function Playbooks() {
  return (
    <section className="bg-bg">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <SectionLabel>Playbooks</SectionLabel>
            </Reveal>
            <Reveal as="h2" delay={0.05} className="max-w-[22ch] text-[36px] leading-[1.05] md:text-[56px]">
              The same stack, configured for your business.
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link
              href="/playbooks"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              See all playbooks <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:grid-cols-5" step={0.08}>
          {playbooks.map((p) => {
            const Icon = iconBySlug[p.slug];
            return (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/playbooks/${p.slug}`}
                  className="group flex h-full flex-col justify-between gap-6 rounded-tile bg-card p-5 hairline transition-colors hover:bg-card/60"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-surface-dark text-bg">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink/45">
                      {p.industry}
                    </p>
                    <p className="mt-2 text-[15px] leading-snug text-ink">{p.outcome}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-ink/65 group-hover:text-ink">
                    Read playbook <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
