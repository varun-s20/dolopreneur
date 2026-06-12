import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { getStripe } from "@/lib/stripe";

export const metadata = buildMetadata({
  title: "Thank you",
  description: "Your subscription is confirmed.",
  path: "/thank-you",
});

// Look up the completed Checkout Session so we can greet the customer by email.
// Degrades to a generic confirmation if Stripe isn't reachable or no id is present.
async function getEmail(sessionId?: string): Promise<string | null> {
  if (!sessionId) return null;
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    return session.customer_details?.email ?? session.customer_email ?? null;
  } catch {
    return null;
  }
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const email = await getEmail(session_id);

  return (
    <article className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20 md:py-28">
      <SectionLabel>Payment confirmed</SectionLabel>
      <h1 className="mt-6 max-w-[18ch] text-[40px] leading-[1.04] md:text-[64px]">
        You&apos;re all set.
      </h1>
      <p className="mt-6 max-w-[52ch] text-lg text-ink/65 md:text-xl">
        Your subscription is live and billing monthly. {email ? (
          <>We&apos;ve emailed a receipt to <span className="text-ink">{email}</span>.</>
        ) : (
          <>A receipt is on its way to your inbox.</>
        )}{" "}
        You can manage or cancel anytime from your billing settings.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/" variant="dark" size="lg">
          Back to home
        </Button>
        <Button href="/pricing" variant="outline" size="lg">
          Add another agent
        </Button>
      </div>
    </article>
  );
}
