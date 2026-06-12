import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

// Signature verification needs the raw body + Node crypto, so: nodejs runtime.
export const runtime = "nodejs";

/**
 * Stripe webhook. This is the source of truth for fulfillment — never grant
 * access off the browser success redirect alone, since the user can close the
 * tab before it fires. Configure the endpoint URL in the Stripe dashboard
 * (Developers → Webhooks) and paste its signing secret into STRIPE_WEBHOOK_SECRET.
 */
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[webhook] STRIPE_WEBHOOK_SECRET is not set.");
    return NextResponse.json({ error: "Webhook not configured." }, { status: 500 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const payload = await req.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "invalid";
    console.error("[webhook] signature verification failed:", message);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      // TODO: provision access for session.customer / session.customer_email.
      // Avoid logging the customer email (PII); the session id is enough to trace.
      console.log("[webhook] checkout completed:", session.id);
      break;
    }
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      // TODO: sync plan/seat changes and cancellations to your store.
      console.log("[webhook] subscription", event.type, sub.id, sub.status);
      break;
    }
    default:
      // Unhandled event types are fine to acknowledge.
      break;
  }

  return NextResponse.json({ received: true });
}
