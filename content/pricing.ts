export type Plan = {
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  includes: string[];
  cta: { label: string; href: string };
  featured?: boolean;
  customPricing?: boolean;
};

export type CompareCell = string | boolean;

export type CompareRow = {
  feature: string;
  starter: CompareCell;
  operator: CompareCell;
  agency: CompareCell;
};

export type CompareGroup = {
  group: string;
  rows: CompareRow[];
};

export const compareGroups: CompareGroup[] = [
  {
    group: "ConverseOS",
    rows: [
      { feature: "Channels", starter: "1 channel", operator: "All channels", agency: "All channels, multi-tenant" },
      { feature: "AI interactions / month", starter: "1,000", operator: "10,000", agency: "Unlimited" },
      { feature: "Shared team inbox", starter: true, operator: true, agency: true },
      { feature: "Drip campaigns + broadcasts", starter: false, operator: true, agency: true },
      { feature: "E-commerce flows (Shopify / Woo)", starter: false, operator: true, agency: true },
      { feature: "Live human hand-off", starter: true, operator: true, agency: true },
    ],
  },
  {
    group: "SiteForge",
    rows: [
      { feature: "Hosted sites", starter: "1", operator: "3", agency: "Unlimited" },
      { feature: "AI page generation", starter: true, operator: true, agency: true },
      { feature: "Funnels + forms + popups", starter: "Forms only", operator: true, agency: true },
      { feature: "Native CMS (blog, courses)", starter: false, operator: true, agency: true },
      { feature: "Custom domains", starter: "1", operator: "Unlimited", agency: "Unlimited" },
      { feature: "White-label", starter: false, operator: false, agency: true },
    ],
  },
  {
    group: "VoxAgent",
    rows: [
      { feature: "Inbound auto-answer", starter: true, operator: true, agency: true },
      { feature: "Outbound campaigns", starter: false, operator: true, agency: true },
      { feature: "Numbers included", starter: "1", operator: "3", agency: "Unlimited" },
      { feature: "Voice cloning", starter: false, operator: false, agency: true },
      { feature: "Live warm-transfer", starter: true, operator: true, agency: true },
      { feature: "Recording + transcripts", starter: true, operator: true, agency: true },
    ],
  },
  {
    group: "Platform",
    rows: [
      { feature: "Calendar + CRM sync", starter: "Google only", operator: true, agency: true },
      { feature: "Zapier / Make webhooks", starter: false, operator: true, agency: true },
      { feature: "Member seats", starter: "1", operator: "5", agency: "Unlimited" },
      { feature: "Priority onboarding", starter: false, operator: false, agency: true },
      { feature: "Dedicated success manager", starter: false, operator: false, agency: true },
      { feature: "Reseller margin", starter: false, operator: false, agency: true },
    ],
  },
];

export const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For the solo founder running every conversation by hand.",
    price: "$49",
    cadence: "/month",
    includes: [
      "1 channel of ConverseOS",
      "1 SiteForge site, hosted",
      "Inbound-only VoxAgent number",
      "1,000 AI interactions / month",
    ],
    cta: { label: "Start free trial", href: "/contact" },
  },
  {
    name: "Operator",
    tagline: "For the founder running a real business, alone.",
    price: "$199",
    cadence: "/month",
    includes: [
      "All channels of ConverseOS, unlimited inbox",
      "3 SiteForge sites with funnels and CMS",
      "Inbound + outbound VoxAgent campaigns",
      "10,000 AI interactions / month",
      "Calendar, CRM, and Zapier integrations",
    ],
    cta: { label: "Start free trial", href: "/contact" },
    featured: true,
  },
  {
    name: "Agency",
    tagline: "For agencies reselling Dolopreneur under their own brand.",
    price: "Custom",
    cadence: "",
    includes: [
      "Multi-tenant workspaces with white-label",
      "Unlimited sites, channels, and numbers",
      "Custom voice cloning and SLAs",
      "Priority onboarding and reseller margin",
    ],
    cta: { label: "Talk to us", href: "/contact" },
    customPricing: true,
  },
];
