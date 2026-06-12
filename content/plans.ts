/**
 * Secret World pricing: single source of truth.
 *
 * Prices are taken verbatim from ref/table_20260609.csv (monthly, USD).
 *
 * ──────────────────────────────────────────────────────────────────────────
 * STRIPE PRICE IDs: TODO
 * Every plan/tier/bundle below has a `priceId` field pre-filled with a
 * placeholder of the form `price_REPLACE_<slug>`.
 * Replace each one with a real Stripe recurring (monthly) Price ID:
 *   1. dashboard.stripe.com → Product catalog → add a Product per row
 *   2. Add a recurring monthly Price at the amount shown here, in USD
 *   3. Copy the Price's `price_...` ID and paste it over the placeholder
 * The checkout endpoint (app/api/checkout/route.ts) creates a Stripe Checkout
 * Session from whichever priceId the user clicks, so the page works the moment
 * you swap in real IDs. Bundles are one Product each (a single bundled price).
 * ──────────────────────────────────────────────────────────────────────────
 */

const PRICE_PLACEHOLDER = "price_REPLACE_";

export type PlatformTier = {
  name: string;
  tagline: string;
  price: number;
  cadence: string;
  includes: string[];
  priceId: string;
  featured?: boolean;
};

export type AddonTier = {
  tier: "Basic" | "Pro" | "Elite";
  price: number;
  summary: string;
  priceId: string;
  recommended?: boolean;
};

export type AddonCategory = {
  name: string;
  blurb: string;
  /** lucide icon name, resolved in the component */
  icon: "voice" | "chat" | "site" | "avatar" | "leads" | "content";
  /** real product-mock shown in the spotlight; undefined → on-brand stat panel */
  mock?: "call" | "chat" | "site" | "leads" | "avatar" | "content";
  /** headline metric for categories without a product mock */
  stat?: { value: string; label: string };
  tiers: AddonTier[];
};

export type Bundle = {
  name: string;
  price: number;
  contents: string;
  /** Verbatim from the CSV's "Save $X" column; omitted where the CSV had no figure. */
  save?: string;
  priceId: string;
  featured?: boolean;
};

/* ── Secret World Platform ─────────────────────────────────────────────── */

export const platformTiers: PlatformTier[] = [
  {
    name: "Essential",
    tagline: "Get on the map and start showing up.",
    price: 49,
    cadence: "/mo",
    priceId: `${PRICE_PLACEHOLDER}essential`,
    includes: [
      "Business listing on map (standard visibility)",
      "5 deals & promotions per month",
      "Basic storefront: hours, contact, location",
      "Customer reviews (5-star system)",
      "In-app messaging",
      "Email support (48h response)",
    ],
  },
  {
    name: "Pro",
    tagline: "Rank higher, sell more, automate the busywork.",
    price: 199,
    cadence: "/mo",
    featured: true,
    priceId: `${PRICE_PLACEHOLDER}pro`,
    includes: [
      "Everything in Essential",
      "Priority map placement (higher ranking)",
      "Unlimited deals & promotions",
      "Enhanced storefront: photos & videos",
      "WhatsApp integration",
      "Basic analytics: views, clicks, redemptions",
      "AI-powered deal recommendations",
      "Priority email & chat support (24h)",
    ],
  },
  {
    name: "Elite",
    tagline: "Own your category with a team behind you.",
    price: 499,
    cadence: "/mo",
    priceId: `${PRICE_PLACEHOLDER}elite`,
    includes: [
      "Everything in Pro",
      "Featured map placement: top of search + badge",
      "Dedicated account manager (monthly strategy call)",
      "AI-generated social posts (10/mo)",
      "Automated review response drafting",
      "Advanced analytics: demographics, peak times, ROI",
      "Priority support (4h response, dedicated channel)",
    ],
  },
];

/* ── AI Add-Ons (monthly) ──────────────────────────────────────────────── */

export const addonCategories: AddonCategory[] = [
  {
    name: "AI Voice Agent",
    blurb: "Clones any voice to answer, book, and follow up across calls, SMS, and chat.",
    icon: "voice",
    mock: "call",
    tiers: [
      { tier: "Basic", price: 199, summary: "500 minutes, appointment booking, FAQ handling", priceId: `${PRICE_PLACEHOLDER}voice_basic` },
      { tier: "Pro", price: 399, summary: "1,500 min + outbound + WhatsApp + CRM sync", priceId: `${PRICE_PLACEHOLDER}voice_pro`, recommended: true },
      { tier: "Elite", price: 699, summary: "Multi-channel (call, SMS, WhatsApp, web) + custom voice + dedicated support", priceId: `${PRICE_PLACEHOLDER}voice_elite` },
    ],
  },
  {
    name: "Workflow Agent",
    blurb: "Automates your workflows and handles customer chat on every channel.",
    icon: "chat",
    mock: "chat",
    tiers: [
      { tier: "Basic", price: 99, summary: "Website chat, 1,000 conversations/mo", priceId: `${PRICE_PLACEHOLDER}chatbot_basic` },
      { tier: "Pro", price: 199, summary: "+ WhatsApp, SMS, CRM, 5,000 conversations", priceId: `${PRICE_PLACEHOLDER}chatbot_pro`, recommended: true },
      { tier: "Elite", price: 399, summary: "+ Multi-language, voice-enabled, analytics", priceId: `${PRICE_PLACEHOLDER}chatbot_elite` },
    ],
  },
  {
    name: "Website Builder",
    blurb: "AI-built sites that ship in minutes, not weeks.",
    icon: "site",
    mock: "site",
    tiers: [
      { tier: "Basic", price: 99, summary: "5-page AI site, hosting, SSL", priceId: `${PRICE_PLACEHOLDER}site_basic` },
      { tier: "Pro", price: 199, summary: "Custom domain, SEO tools, 10 pages", priceId: `${PRICE_PLACEHOLDER}site_pro`, recommended: true },
      { tier: "Elite", price: 399, summary: "E-commerce, booking system, unlimited pages", priceId: `${PRICE_PLACEHOLDER}site_elite` },
    ],
  },
  {
    name: "Avatar Video",
    blurb: "Lifelike presenter videos from a line of text.",
    icon: "avatar",
    mock: "avatar",
    tiers: [
      { tier: "Basic", price: 149, summary: "10 min/mo, 5 avatars, text-to-speech", priceId: `${PRICE_PLACEHOLDER}avatar_basic` },
      { tier: "Pro", price: 299, summary: "30 min, 15 avatars, voice cloning", priceId: `${PRICE_PLACEHOLDER}avatar_pro`, recommended: true },
      { tier: "Elite", price: 599, summary: "Unlimited minutes, custom avatar, API access", priceId: `${PRICE_PLACEHOLDER}avatar_elite` },
    ],
  },
  {
    name: "Lead Generation",
    blurb: "A pipeline that fills itself while you sleep.",
    icon: "leads",
    mock: "leads",
    tiers: [
      { tier: "Basic", price: 149, summary: "500 leads/mo, scraping, enrichment", priceId: `${PRICE_PLACEHOLDER}leads_basic` },
      { tier: "Pro", price: 299, summary: "2,000 leads, scoring, CRM sync", priceId: `${PRICE_PLACEHOLDER}leads_pro`, recommended: true },
      { tier: "Elite", price: 599, summary: "10,000 leads, predictive analytics", priceId: `${PRICE_PLACEHOLDER}leads_elite` },
    ],
  },
  {
    name: "Content Creation",
    blurb: "On-brand posts, blogs, and scripts on tap.",
    icon: "content",
    mock: "content",
    tiers: [
      { tier: "Basic", price: 79, summary: "20 social posts, 5 blogs, basic SEO", priceId: `${PRICE_PLACEHOLDER}content_basic` },
      { tier: "Pro", price: 149, summary: "50 posts, 15 blogs, images, scheduling", priceId: `${PRICE_PLACEHOLDER}content_pro`, recommended: true },
      { tier: "Elite", price: 299, summary: "Unlimited, video scripts, brand-voice training", priceId: `${PRICE_PLACEHOLDER}content_elite` },
    ],
  },
];

/* ── Bundled Packages ──────────────────────────────────────────────────── */
// `save` values are copied verbatim from the CSV. The CSV's savings column is
// inconsistent with the standalone prices in places (and one row had no figure),
// so badges only render where a concrete number was provided. Re-check before launch.

export const bundles: Bundle[] = [
  {
    name: "Storefront Starter",
    price: 99,
    contents: "Secret World Essential",
    save: "$49",
    priceId: `${PRICE_PLACEHOLDER}bundle_storefront`,
  },
  {
    name: "Hustle & Engage",
    price: 349,
    contents: "Secret World Pro + Workflow Agent Pro",
    save: "$248",
    priceId: `${PRICE_PLACEHOLDER}bundle_hustle`,
  },
  {
    name: "Enterprise AI Suite",
    price: 999,
    contents: "Secret World Elite + Workflow Agent Elite + Avatar Video Basic",
    save: "$646",
    featured: true,
    priceId: `${PRICE_PLACEHOLDER}bundle_enterprise`,
  },
  {
    name: "Lead & Content Machine",
    price: 599,
    contents: "Lead Generation Pro + Avatar Video Basic",
    priceId: `${PRICE_PLACEHOLDER}bundle_lead_content`,
  },
];

/**
 * Every Price ID the site is allowed to start a checkout for. The checkout
 * endpoint validates the requested priceId against this allowlist so a crafted
 * request can never create a session for an arbitrary/unintended Stripe price.
 */
export const allPriceIds: readonly string[] = [
  ...platformTiers.map((p) => p.priceId),
  ...addonCategories.flatMap((c) => c.tiers.map((t) => t.priceId)),
  ...bundles.map((b) => b.priceId),
];
