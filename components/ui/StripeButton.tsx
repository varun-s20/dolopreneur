"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { startCheckout } from "@/lib/start-checkout";
import { cn } from "@/lib/cn";

type Tone = "dark" | "accent" | "soft" | "ghost";

const tones: Record<Tone, { shell: string; icon: string }> = {
  dark: { shell: "bg-surface-dark text-bg hover:bg-surface-dark-2", icon: "bg-bg/10" },
  accent: { shell: "bg-accent text-accent-ink hover:bg-accent-hover", icon: "bg-accent-ink/10" },
  soft: { shell: "bg-card text-ink hairline hover:bg-ink/[0.04]", icon: "bg-ink/[0.06]" },
  ghost: { shell: "bg-bg/10 text-bg hover:bg-bg/[0.16]", icon: "bg-bg/15" },
};

/**
 * Pill CTA that opens a Stripe Checkout Session for the given Price ID. The
 * trailing arrow lives in its own nested circle (the "button-in-button" detail)
 * and drifts diagonally on hover; the whole pill presses down on :active. While
 * the session is being created it shows a spinner; on failure it swaps to a
 * retry label (full message in the title + console).
 */
export function StripeButton({
  priceId,
  label,
  tone = "dark",
  className,
}: {
  priceId: string;
  label: string;
  tone?: Tone;
  className?: string;
}) {
  const t = tones[tone];
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onClick() {
    if (pending) return;
    setPending(true);
    setError(null);
    try {
      await startCheckout(priceId);
      // On success the browser navigates away; keep the spinner until it does.
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start checkout.");
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      title={error ?? undefined}
      aria-label={error ? `${error} Tap to retry.` : label}
      className={cn(
        "group inline-flex w-full items-center justify-between gap-3 rounded-pill py-2 pl-5 pr-2",
        "text-sm font-medium transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "active:scale-[0.98] disabled:cursor-wait",
        t.shell,
        className,
      )}
    >
      <span>{pending ? "Starting…" : error ? "Try again" : label}</span>
      <span
        className={cn(
          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
          "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          t.icon,
        )}
      >
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.75} />
        ) : (
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        )}
      </span>
    </button>
  );
}
