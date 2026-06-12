import { StripeButton } from "@/components/ui/StripeButton";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { GlyphClover } from "@/components/ornament/Glyph";
import { ScribbleSquiggle } from "@/components/ornament/Scribble";
import { bundles } from "@/content/plans";

function SaveBadge({ save }: { save: string }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-ink">
      Save {save}
    </span>
  );
}

export function Bundles() {
  const featured = bundles.find((b) => b.featured);
  const rest = bundles.filter((b) => !b.featured);

  return (
    <section id="bundles" className="bg-surface-dark text-bg">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-[36rem]">
          <Reveal as="h2" blur={8} className="text-[34px] leading-[1.2] text-bg md:text-[52px]">
            Pre-built stacks that{" "}
            <span className="relative inline-block">
              pay for themselves.
              <ScribbleSquiggle
                className="absolute -bottom-2.5 left-0 h-4 w-full text-accent"
                aria-hidden
              />
            </span>
          </Reveal>
          <Reveal as="p" delay={0.08} blur={6} className="mt-5 text-lg text-bg/65">
            The combinations operators reach for most, packaged together for less than
            the sum of their parts.
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:mt-16 lg:grid-cols-2">
          {/* Left: three stacked bundles */}
          <Stagger className="flex flex-col gap-5" step={0.08}>
            {rest.map((b) => (
              <StaggerItem key={b.name} blur={8} className="h-full">
                <div
                  className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-tile p-7 text-ink shadow-tile ring-1 ring-ink/[0.06] transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-28px_rgba(0,0,0,0.6)] hover:ring-accent/60 md:flex-row md:items-center md:justify-between md:gap-8"
                  style={{ background: "linear-gradient(180deg, #ece7da 0%, #ddd6c3 100%)" }}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl leading-tight text-ink md:text-[26px]">{b.name}</h3>
                      {b.save && <SaveBadge save={b.save} />}
                    </div>
                    <p className="mt-2 max-w-[44ch] text-sm text-ink/60">{b.contents}</p>
                  </div>

                  <div className="flex flex-shrink-0 items-center gap-5 md:flex-col md:items-end md:gap-3">
                    <div className="flex items-baseline gap-1">
                      <CountUp value={b.price} className="font-display text-4xl text-ink" />
                      <span className="text-sm text-ink/50">/mo</span>
                    </div>
                    <StripeButton priceId={b.priceId} label="Get bundle" tone="dark" className="w-auto md:w-48" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Right: featured Enterprise suite, full height */}
          {featured && (
            <Reveal blur={8} className="h-full">
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-tile p-8 text-accent-ink shadow-tile md:p-10"
                style={{
                  background:
                    "linear-gradient(158deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 28px 56px -28px rgba(0,0,0,0.6)",
                }}
              >
                <GlyphClover className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-accent-ink/[0.26]" aria-hidden />

                <span className="relative inline-flex w-max rounded-pill bg-accent-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  Best value
                </span>

                <h3 className="relative mt-6 font-display text-[30px] leading-tight text-accent-ink md:text-[38px]">
                  {featured.name}
                </h3>
                <p className="relative mt-3 max-w-[34ch] text-[15px] leading-relaxed text-accent-ink/75">
                  {featured.contents}
                </p>

                <div className="relative mt-auto pt-10">
                  <div className="flex flex-wrap items-end gap-3">
                    <CountUp value={featured.price} className="font-display text-6xl text-accent-ink md:text-7xl" />
                    <span className="pb-2 text-sm text-accent-ink/60">/mo</span>
                    {featured.save && (
                      <span className="py-1.5 inline-flex items-center rounded-pill bg-accent-ink px-2.5 text-xs font-semibold text-accent">
                        Save {featured.save}
                      </span>
                    )}
                  </div>
                  <StripeButton priceId={featured.priceId} label={`Get ${featured.name}`} tone="dark" className="mt-6" />
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal as="p" delay={0.1} className="mt-6 text-xs text-bg/55">
          Savings shown versus buying each item separately. Billed monthly, cancel anytime.
        </Reveal>
      </div>
    </section>
  );
}
