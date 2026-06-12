import { NextResponse } from "next/server";
import { getStripe, isPlaceholderPrice, siteUrl } from "@/lib/stripe";
import { allPriceIds } from "@/content/plans";

const ALLOWED_PRICES = new Set(allPriceIds);

// Stripe's SDK needs Node crypto/runtime, not the edge runtime.
export const runtime = "nodejs";

/**
 * Creates a Stripe Checkout Session for a single recurring (monthly) Price and
 * returns its hosted-checkout URL. The client POSTs { priceId } and redirects
 * the browser to the returned `url`. One endpoint serves every plan, add-on,
 * and bundle — the price is the only variable.
 */
export async function POST(req: Request) {
  let priceId: string;
  try {
    const body = (await req.json()) as { priceId?: unknown };
    priceId = typeof body.priceId === "string" ? body.priceId : "";
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!priceId) {
    return NextResponse.json({ error: "Missing priceId." }, { status: 400 });
  }

  if (isPlaceholderPrice(priceId)) {
    return NextResponse.json(
      {
        error:
          "This plan isn't connected to Stripe yet. Replace the placeholder price IDs in content/plans.ts with real Stripe Price IDs.",
      },
      { status: 503 },
    );
  }

  // Only ever check out a price the catalog actually sells. Blocks a crafted
  // request from creating a session for an arbitrary or unintended price.
  if (!ALLOWED_PRICES.has(priceId)) {
    return NextResponse.json({ error: "Unknown price." }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const origin = siteUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      // Lets returning customers re-use a saved card and keeps proration sane
      // when they upgrade/downgrade later via the billing portal.
      subscription_data: { metadata: { priceId } },
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing?checkout=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Could not start checkout." }, { status: 502 });
    }
    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unexpected error creating checkout session.";
    console.error("[checkout]", message);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 },
    );
  }
}
