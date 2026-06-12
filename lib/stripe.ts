import "server-only";
import Stripe from "stripe";

/**
 * Server-only Stripe client. Reads the secret key lazily so that importing this
 * module never throws at build time when the key isn't set yet (e.g. CI). The
 * key must only ever live in the environment, never in client bundles.
 */
let cached: Stripe | null = null;

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set. Add it to .env.local.");
  }
  if (!cached) {
    cached = new Stripe(key, { typescript: true });
  }
  return cached;
}

/** A priceId is still a placeholder until a real Stripe Price ID is pasted in. */
export function isPlaceholderPrice(priceId: string): boolean {
  return !priceId.startsWith("price_") || priceId.startsWith("price_REPLACE_");
}

/** Absolute site origin used to build success/cancel URLs. */
export function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000"
  );
}
