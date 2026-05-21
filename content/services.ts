import type { FAQItem } from "@/components/content/FAQ";
import type { KPI } from "@/components/content/KPIRow";

export type Slug = "converseos" | "siteforge" | "voxagent";

export type FeatureBlock = {
  title: string;
  body: string;
  bullets: string[];
};

export type Service = {
  slug: Slug;
  name: string;
  tagline: string;
  blurb: string;
  /** Short capability bullets used in the homepage stack. */
  capabilities: string[];
  /** Deep feature blocks for the service detail page. */
  blocks: FeatureBlock[];
  /** Integrations the white-labeled product supports. */
  integrations: string[];
  /** Headline KPI numbers (real numbers from the underlying product, restated). */
  kpis: KPI[];
  /** Service-specific FAQ for the detail page. */
  faq: FAQItem[];
  /** Three industries this service shines in. */
  bestFor: string[];
};

export const services: Service[] = [
  {
    slug: "converseos",
    name: "ConverseOS",
    tagline: "Conversations that close themselves.",
    blurb:
      "A 24/7 messaging team across WhatsApp, Instagram, Messenger, Telegram, SMS, and your website, answering, qualifying, and booking before a human ever opens a tab.",
    capabilities: [
      "Omnichannel inbox with shared team assignments",
      "AI agents that qualify, answer, and book meetings",
      "Drip campaigns, broadcasts, and abandoned-cart recovery",
      "Lightweight CRM with tags, segments, and notes",
    ],
    blocks: [
      {
        title: "One inbox. Every channel your customers actually use.",
        body: "Stop tab-switching between WhatsApp Web, Instagram DMs, and the website chat widget. ConverseOS pulls every conversation into a single shared inbox with assignments, internal notes, tags, and full history.",
        bullets: [
          "Official WhatsApp Business API, Instagram, Messenger, Telegram, SMS, web chat",
          "Shared team inbox with assignments, mentions, and internal notes",
          "Tags, custom fields, and saved segments for instant filtering",
        ],
      },
      {
        title: "AI agents that qualify and book, before you wake up.",
        body: "Build agents with the personality and knowledge of your best rep. They handle FAQs, qualify leads against your criteria, drop confirmed meetings into your calendar, and hand off to a human the moment intent gets serious.",
        bullets: [
          "NLP intents, multi-language, and tone tuned to your brand",
          "One-click hand-off from agent to human inbox",
          "Calendar booking with availability rules and timezone awareness",
        ],
      },
      {
        title: "Campaigns that ship in minutes.",
        body: "Send WhatsApp template broadcasts to segmented lists, recover abandoned carts from Shopify or WooCommerce, drip-nurture cold leads, and re-engage lapsed customers, all without writing a single integration.",
        bullets: [
          "Template-approved WhatsApp broadcasts with segmentation",
          "Abandoned-cart and order-status flows for e-commerce",
          "Drip sequences with branching, conditions, and delays",
        ],
      },
    ],
    integrations: [
      "WhatsApp Business API",
      "Instagram",
      "Messenger",
      "Telegram",
      "SMS / Twilio",
      "Shopify",
      "WooCommerce",
      "Google Calendar",
      "HubSpot",
      "Zapier",
    ],
    kpis: [
      { value: "3.4s", label: "Average response time", caption: "Across all channels, day or night" },
      { value: "78%", label: "Conversations auto-resolved", caption: "Without a human ever opening the thread" },
      { value: "41%", label: "More qualified bookings", caption: "Versus a chat widget alone" },
    ],
    faq: [
      {
        q: "Will I lose the human touch?",
        a: "Agents are trained on your tone and brand. They hand off to a human the moment a conversation needs one, pricing edge cases, complaints, or any explicit ask for a person. You always have the final word.",
      },
      {
        q: "Do I need a WhatsApp Business API account first?",
        a: "No. We provision it as part of onboarding. You'll get a verified business profile on a number you choose, usually within 1–2 business days.",
      },
      {
        q: "Can I bring my existing chat history in?",
        a: "Yes. We import full thread history from supported platforms during onboarding so context isn't lost.",
      },
      {
        q: "Where do my conversations live? Who can see them?",
        a: "All conversations are stored in your workspace. Only members you invite can access them. Data is encrypted in transit and at rest.",
      },
    ],
    bestFor: ["Coaches and creators", "Local services", "E-commerce shops"],
  },
  {
    slug: "siteforge",
    name: "SiteForge",
    tagline: "From idea to live URL in one sitting.",
    blurb:
      "A visual site, funnel, and landing-page builder with 500+ conversion-tested blocks, AI page generation, and built-in SEO. Ship the site you'd hire a studio to make.",
    capabilities: [
      "Drag-and-drop builder with AI page generation",
      "Funnels, popups, exit-intent, and forms",
      "Native CMS for blog, courses, and case studies",
      "Hosted, SEO-tuned, Core Web Vitals out of the box",
    ],
    blocks: [
      {
        title: "Generate the first draft from a single prompt.",
        body: "Tell SiteForge what you sell, who you sell to, and what you want a visitor to do. It builds a complete, editable page in seconds, hero, features, social proof, FAQ, CTA, using blocks already optimized for conversion.",
        bullets: [
          "Prompt-to-page in under 60 seconds",
          "500+ pre-converted blocks: heroes, pricing, testimonials, FAQs",
          "Edit anything visually, fonts, colors, copy, layout",
        ],
      },
      {
        title: "Funnels, forms, popups, and CMS in one place.",
        body: "Capture leads with smart forms, recover abandoners with exit-intent popups, run blog content from a built-in CMS, and connect every submission straight into ConverseOS. No third-party glue.",
        bullets: [
          "Funnels with conditional logic and multi-step flows",
          "Popups: exit-intent, scroll, time-based, click-triggered",
          "Native CMS for blog posts, case studies, courses, members",
        ],
      },
      {
        title: "Performant. Hosted. SEO-tuned from minute one.",
        body: "Every site ships with sitemaps, schema, optimized images, and Core Web Vitals tuned out of the box. We host on a global CDN with automatic SSL, no DevOps, no AWS panel, no surprises.",
        bullets: [
          "Hosted on global CDN with auto SSL",
          "Built-in SEO: meta tags, schema, sitemaps, image optimization",
          "Multi-site for agencies, a dozen client sites, one login",
        ],
      },
    ],
    integrations: [
      "Stripe",
      "ConverseOS forms",
      "Mailchimp",
      "ConvertKit",
      "Google Analytics",
      "Meta Pixel",
      "Zapier",
      "Custom domains",
      "Cloudflare",
    ],
    kpis: [
      { value: "24min", label: "Average page build time", caption: "From prompt to publish" },
      { value: "97", label: "Lighthouse score", caption: "Median across deployed pages" },
      { value: "2.6×", label: "Conversion uplift", caption: "Versus generic templates" },
    ],
    faq: [
      {
        q: "Do I need to know HTML or CSS?",
        a: "Not for anything we expect you to do. The builder is fully visual. If you do want to drop in custom code, every page has a code injection panel.",
      },
      {
        q: "Can I use my own domain?",
        a: "Yes. Point your domain at us, click verify, and SSL provisions automatically. You can also run on a subdomain we provide.",
      },
      {
        q: "What about page speed?",
        a: "Every page is statically rendered and served from a CDN. Images are auto-optimized. Median Lighthouse performance is 97.",
      },
      {
        q: "Can agencies manage client sites under one account?",
        a: "Yes. The Agency plan supports multi-tenant workspaces with white-label and per-client logins.",
      },
    ],
    bestFor: ["Solo founders", "Agencies", "Course creators"],
  },
  {
    slug: "voxagent",
    name: "VoxAgent",
    tagline: "A voice rep that never sleeps, never forgets.",
    blurb:
      "Inbound and outbound AI voice agents that pick up missed calls, qualify leads, book into your calendar, and follow up, sounding like the best rep you ever hired.",
    capabilities: [
      "Inbound auto-answer and outbound campaign dialing",
      "Calendar and CRM sync with live handoff to humans",
      "Multi-language voices with sentiment and intent detection",
      "Full recordings, transcripts, and post-call summaries",
    ],
    blocks: [
      {
        title: "Answer every call. Even at 3am, even from another timezone.",
        body: "Forward your business number to VoxAgent and never lose a lead to voicemail again. The agent picks up in one ring, qualifies the caller, books the meeting, and texts a confirmation, all before a human would have reached the phone.",
        bullets: [
          "Dedicated business number with auto-pickup",
          "Multi-language: English, Spanish, Hindi, Portuguese, German, French",
          "Live transcript and call outcome in your inbox within 30 seconds",
        ],
      },
      {
        title: "Outbound campaigns that don't sound like a dialer.",
        body: "Upload a lead list and let VoxAgent call through it, appointment reminders, payment-failed recovery, lapsed-customer winbacks, post-purchase NPS. The voice is natural, the script is yours, the outcomes land in your CRM.",
        bullets: [
          "List-based outbound with rate limits and quiet-hours",
          "Sentiment, intent, and outcome tagged per call",
          "Automatic re-attempts on no-answer, with cooldown logic",
        ],
      },
      {
        title: "Hands off to a human when it matters.",
        body: "If the caller asks for a person, sounds frustrated, or hits a topic the agent isn't trained on, VoxAgent warm-transfers the call to your cell, or to the right teammate on a rotation. Mid-call. Seamlessly.",
        bullets: [
          "Live warm-transfer to any phone number",
          "Rotation rules: round-robin, business hours, skill-based",
          "Post-handoff summary sent to the human picking up",
        ],
      },
    ],
    integrations: [
      "Twilio numbers",
      "Google Calendar",
      "Outlook Calendar",
      "HubSpot",
      "Pipedrive",
      "Salesforce",
      "ConverseOS CRM",
      "Zapier",
      "Make",
    ],
    kpis: [
      { value: "<1s", label: "Time to answer", caption: "Inbound, every call, every time" },
      { value: "4×", label: "Booked-meeting rate", caption: "Versus voicemail-then-callback" },
      { value: "100%", label: "Calls transcribed", caption: "With sentiment + outcome tagged" },
    ],
    faq: [
      {
        q: "Will it sound like a robot?",
        a: "No. VoxAgent uses natural-sounding voices with proper prosody, barge-in, and conversational latency under 700ms. Most callers don't realize they're talking to an agent until you tell them.",
      },
      {
        q: "Can it book directly into my calendar?",
        a: "Yes. We sync with Google and Outlook. The agent checks live availability, books the slot, and sends an invite plus a confirmation text, all in the same call.",
      },
      {
        q: "What if a caller asks for a human?",
        a: "The agent warm-transfers immediately to your cell or to a rotation you define. Conversation context is summarized for whoever picks up.",
      },
      {
        q: "How are calls recorded? Is that compliant?",
        a: "Recording is opt-in per region. In jurisdictions that require disclosure, the agent announces it at the start of the call. Recordings and transcripts are stored encrypted in your workspace.",
      },
    ],
    bestFor: ["Real estate", "Local services", "B2B SaaS sales"],
  },
];
