import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a demo",
  description: "Tell us where the bottleneck is. We'll spin up the agents and walk you through it.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <article className="container-page py-16 md:py-24">
      <SectionLabel>Contact</SectionLabel>
      <h1 className="mt-6 max-w-[20ch] text-[44px] leading-[1.04] md:text-[72px]">
        Tell us where the bottleneck is.
      </h1>
      <p className="mt-6 max-w-[58ch] text-lg text-ink/65 md:text-xl">
        We&apos;ll wire up a demo of the stack against your exact workflow, chat, site, and voice.
      </p>

      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[1.2fr_1fr] md:gap-12">
        <Card tone="card" className="p-7 md:p-10">
          <form className="space-y-5" action="/api/lead" method="post">
            <Field id="name" label="Your name" placeholder="Jane Doe" />
            <Field id="email" label="Work email" placeholder="jane@company.com" type="email" />
            <Field id="company" label="Company" placeholder="Company name" />
            <div className="space-y-1.5">
              <label htmlFor="bottleneck" className="block text-sm font-medium text-ink">
                Where are you bottlenecked?
              </label>
              <textarea
                id="bottleneck"
                name="bottleneck"
                rows={4}
                placeholder="Missing after-hours calls / slow follow-up / can't ship landing pages..."
                className="w-full rounded-card bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink/40 hairline focus:outline-none focus:ring-2 focus:ring-ink/15"
              />
            </div>
            <Button size="lg" className="w-full">
              Request a demo
            </Button>
            <p className="text-xs text-ink/55">
              We&apos;ll get back within one business day. No sales script, just a real walkthrough.
            </p>
          </form>
        </Card>

        <aside className="flex flex-col gap-6">
          <Card tone="dark" className="p-7">
            <h2 className="text-xl font-medium text-bg">Prefer to talk?</h2>
            <p className="mt-3 text-sm text-bg/70">
              Drop your number. VoxAgent calls you back inside 5 minutes. (Yes, it is the same agent we&apos;d configure for you.)
            </p>
            <Button href="tel:+10000000000" variant="primary" className="mt-6">
              Call us now
            </Button>
          </Card>
          <Card tone="bg" className="p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">Office hours</p>
            <p className="mt-3 text-base text-ink/80">Mon–Fri · 9am–7pm · all timezones</p>
            <p className="mt-1 text-base text-ink/80">After hours? An agent picks up.</p>
          </Card>
        </aside>
      </div>
    </article>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-ink">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-pill bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink/40 hairline focus:outline-none focus:ring-2 focus:ring-ink/15"
      />
    </div>
  );
}
