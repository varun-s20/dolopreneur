/**
 * Client helper: POST a Stripe Price ID to our checkout endpoint and send the
 * browser to the returned hosted-checkout URL. Throws with a readable message
 * so callers can surface an inline error and reset their loading state.
 */
export async function startCheckout(priceId: string): Promise<void> {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };

  if (!res.ok || !data.url) {
    throw new Error(data.error ?? "Could not start checkout. Please try again.");
  }

  window.location.assign(data.url);
}
