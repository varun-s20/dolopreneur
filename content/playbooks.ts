import type { KPI } from "@/components/content/KPIRow";
import type { Step } from "@/components/content/StepList";

export type PlaybookSlug =
  | "real-estate"
  | "coaches"
  | "local-services"
  | "agencies"
  | "ecommerce";

export type Section = { heading: string; body: string };

export type Playbook = {
  slug: PlaybookSlug;
  industry: string;
  /** Short outcome line used on cards / homepage strip. */
  outcome: string;
  /** Hero subhead on the detail page. */
  subhead: string;
  /** Three- or four-sentence framing of the operator and the problem. */
  intro: string;
  /** Stack configuration: which services run, in what role. */
  stack: { name: string; role: string }[];
  /** Numbered setup steps the operator follows. */
  steps: Step[];
  /** KPI numbers after running this configuration. */
  results: KPI[];
  /** Embedded testimonial. */
  testimonial: { quote: string; name: string; role: string; initials: string };
  /** Narrative body sections shown after the steps. */
  sections: Section[];
  /** Estimated time to set up. */
  timeToShip: string;
  /** Marker for whether this playbook is fully written. */
  status: "live" | "draft";
};

export const playbooks: Playbook[] = [
  {
    slug: "real-estate",
    industry: "Real Estate",
    outcome: "Booked 38 viewings / week with one operator.",
    subhead: "A solo broker, two phones, and a stack of AI agents that turn cold leads into Saturday showings.",
    intro:
      "Most independent agents lose more deals to inbox lag than to better-priced listings. By the time they call back, the lead has already toured with someone else. This playbook is for a one-person brokerage that wants to look like a small team, pickup on every call, follow-up on every lead, viewings booked while the agent is in the car between two other showings.",
    stack: [
      { name: "ConverseOS", role: "WhatsApp + Instagram qualifier" },
      { name: "VoxAgent", role: "Inbound auto-answer + outbound follow-up" },
      { name: "SiteForge", role: "Per-listing landing pages" },
    ],
    steps: [
      {
        title: "Spin up one SiteForge page per active listing.",
        body: "Each listing gets its own URL with photos, area details, school catchment, and a 'Book a viewing' form. Forms feed straight into ConverseOS.",
      },
      {
        title: "Forward your business line into VoxAgent.",
        body: "Calls outside hours auto-answer, ask three qualifying questions (budget, area, timeline), and offer two viewing windows. The agent books directly into the broker's calendar.",
      },
      {
        title: "Wire WhatsApp + Instagram DMs into ConverseOS.",
        body: "The inbound message agent qualifies the lead, sends listing comparables, and books a viewing, handing off to the broker only when the conversation calls for it.",
      },
      {
        title: "Run a 24-hour cold-lead follow-up.",
        body: "Any lead that goes silent for a day gets a VoxAgent outbound call ('Hi, just following up on the Linden Ave listing'). 38% accept a viewing on the second touch.",
      },
    ],
    results: [
      { value: "38", label: "Viewings booked per week", caption: "Up from 11 manually" },
      { value: "<1s", label: "Time to pick up", caption: "Inbound, day or night" },
      { value: "62%", label: "Cold-lead recovery", caption: "Booked on the follow-up call" },
    ],
    testimonial: {
      quote:
        "I used to spend Sundays returning Friday's missed calls. Now Sunday is the day the agents close last week's stragglers without me.",
      name: "James Williams",
      role: "Broker, James Williams Realty",
      initials: "JW",
    },
    sections: [
      {
        heading: "Why this configuration works",
        body: "Real-estate leads are won at the speed of pickup. A 30-second response converts at 4–8× the rate of a 30-minute one. ConverseOS handles digital channels, VoxAgent handles voice, and SiteForge gives every listing a unique page worth landing on. Together they remove the bottleneck that costs solo brokers the most deals: the broker themselves being mid-showing when the next lead calls.",
      },
      {
        heading: "What it costs vs. the alternative",
        body: "A typical hire-out for this, a part-time SDR plus a CRM plus a calendar tool plus a chat widget, runs $1,800–$2,400/month before training time. The Operator plan replaces all of that for $199/month and never asks for a sick day.",
      },
      {
        heading: "What to expect in week one",
        body: "Day 1: listings live, number forwarded. Day 2: first inbound calls auto-handled. Day 3: first WhatsApp viewing booked. By the end of week one, the average broker sees a 3× lift in pickup rate and the first ' didn't realize you answered at 11pm' message lands.",
      },
    ],
    timeToShip: "1 week",
    status: "live",
  },
  {
    slug: "coaches",
    industry: "Coaches & Creators",
    outcome: "Doubled discovery-call bookings overnight.",
    subhead: "A solo coach, a sales-page funnel, and an agent that turns Instagram comments into paid discovery calls.",
    intro:
      "Coaches and creators don't have a traffic problem, they have a conversion problem. Most of the audience lives in DMs and replies, not on landing pages. This playbook puts a sales agent inside Instagram and WhatsApp, with a high-conversion SiteForge funnel as the close.",
    stack: [
      { name: "SiteForge", role: "Sales page + thank-you funnel" },
      { name: "ConverseOS", role: "DM agent that qualifies and books" },
      { name: "VoxAgent", role: "No-show recovery and reminder calls" },
    ],
    steps: [
      {
        title: "Generate the sales page with one prompt.",
        body: "Tell SiteForge what you teach, who you teach it to, and the price. It builds a complete sales page, hero, transformation, modules, FAQ, payment, in under a minute. Tweak the copy in the visual editor.",
      },
      {
        title: "Plug ConverseOS into Instagram and WhatsApp.",
        body: "The agent answers questions about your offer, sends the sales page, and books a free discovery call straight into your calendar. It hands off to you the moment the question is too specific to answer well.",
      },
      {
        title: "Add a VoxAgent reminder + recovery flow.",
        body: "24 hours before each call, VoxAgent texts a reminder. If the prospect no-shows, it calls them with a one-tap rebook. No-show rates drop from ~40% to under 12%.",
      },
      {
        title: "Run a weekly 'unconverted lead' sweep.",
        body: "Every Monday, ConverseOS DMs anyone who showed interest but didn't book, with a fresh angle, a testimonial, or a limited-time spot. The sweep typically books 4–7 calls per 100 leads in the sweep.",
      },
    ],
    results: [
      { value: "2.1×", label: "Discovery calls booked / week", caption: "Versus pre-stack baseline" },
      { value: "12%", label: "No-show rate", caption: "Down from 41%" },
      { value: "32min", label: "Time spent on DMs / day", caption: "Down from 2.5 hours" },
    ],
    testimonial: {
      quote:
        "I replaced a chat widget, a calendar tool, a builder, and one part-time SDR. The Operator plan paid for itself in week two.",
      name: "Sarah Thompson",
      role: "Founder, Northbeam Coaching",
      initials: "ST",
    },
    sections: [
      {
        heading: "Why the DM-first stack works",
        body: "For creators, the buying decision happens in the inbox, not on the page. By putting the agent where the audience already lives. Instagram, WhatsApp, you compress 'interested' to 'booked' from 3 days to 3 minutes. The sales page does its job, but the DM agent does the closing.",
      },
      {
        heading: "How to keep it human",
        body: "Train the agent on your transcripts. Five recorded sales calls is usually enough for it to mirror your tone. Configure hand-off triggers for pricing edge cases and emotional content, those are the conversations you should be in anyway.",
      },
      {
        heading: "What to expect in week one",
        body: "Day 1: sales page live, agent live in DMs. Day 2: first discovery call booked without you touching a key. Day 4: the first 'wait, was that you or a bot?' reply, which is the moment to send your real reply and watch the conversation continue.",
      },
    ],
    timeToShip: "3 days",
    status: "live",
  },
  {
    slug: "local-services",
    industry: "Local Services",
    outcome: "Cut missed-call leakage from 41% to 4%.",
    subhead: "A solo plumber, an answering agent, and an AI that books jobs while you're under the sink.",
    intro:
      "Local services live and die by pickup. Half a missed call is a competitor's customer. This playbook turns a one-person trade business into one that answers every ring, qualifies every job, and dispatches itself.",
    stack: [
      { name: "VoxAgent", role: "Inbound auto-answer + dispatch" },
      { name: "ConverseOS", role: "SMS follow-up + reviews funnel" },
      { name: "SiteForge", role: "Local-SEO landing page" },
    ],
    steps: [
      { title: "Forward your number to VoxAgent.", body: "Pickup on the first ring, qualifies the job, books a slot." },
      { title: "Auto-text confirmation + reminder.", body: "ConverseOS texts the customer with arrival window and a one-tap reschedule link." },
      { title: "Trigger a review request after the job.", body: "24 hours post-completion, ConverseOS sends a Google review link with a short personal note." },
      { title: "Run weekly outbound winbacks.", body: "VoxAgent calls customers from 6+ months ago with a seasonal offer." },
    ],
    results: [
      { value: "96%", label: "Calls picked up", caption: "Up from 59%" },
      { value: "3.8×", label: "Google reviews per month", caption: "Versus manual asking" },
      { value: "$1.2k", label: "Avg weekly winback revenue", caption: "From the 6-month cohort" },
    ],
    testimonial: {
      quote: "First week, the agent booked a Saturday morning emergency job at 11pm. That one call covered the year.",
      name: "Marcus Lee",
      role: "Owner, Lee Plumbing Co.",
      initials: "ML",
    },
    sections: [
      { heading: "The math is mostly pickup rate", body: "If 40% of your inbound calls go to voicemail and only 25% of those call back, you're losing 30% of your top-of-funnel before any pricing conversation. This playbook closes that gap entirely." },
    ],
    timeToShip: "2 days",
    status: "draft",
  },
  {
    slug: "agencies",
    industry: "Agencies",
    outcome: "Ran 9 client funnels in one week, white-labeled.",
    subhead: "An agency operator, a single multi-tenant workspace, and an entire stack resold under their own brand.",
    intro:
      "Most agencies sell strategy and hand-build the same five things over and over: landing pages, chatbots, follow-up sequences, voice answering, dashboards. This playbook lets one operator deliver all five, for a dozen clients, without hiring.",
    stack: [
      { name: "SiteForge (multi-site)", role: "One client per site, white-labeled" },
      { name: "ConverseOS", role: "Per-client agents on the client's channels" },
      { name: "VoxAgent", role: "Per-client numbers, branded greetings" },
    ],
    steps: [
      { title: "Stand up the agency workspace.", body: "Add your logo, brand colors, and custom domain. Clients see only your brand, not ours." },
      { title: "Onboard a client in 30 minutes.", body: "Clone a starter template, set their channels, point the number, hit publish." },
    ],
    results: [
      { value: "9", label: "Clients onboarded / week", caption: "By one operator" },
      { value: "$0", label: "Tool overhead per client", caption: "All-in on one workspace" },
    ],
    testimonial: {
      quote: "Stood up nine client funnels in a single week. SiteForge plus ConverseOS is the closest thing I've found to a real agency-in-a-box.",
      name: "Emily Chen",
      role: "Director, Studio Forty Five",
      initials: "EC",
    },
    sections: [
      { heading: "Margin math", body: "Agencies typically resell at 3–5× our Operator plan. With one workspace handling a dozen clients, the gross margin is the part of this that makes founders forward this page to their COO." },
    ],
    timeToShip: "1 week",
    status: "draft",
  },
  {
    slug: "ecommerce",
    industry: "E-commerce",
    outcome: "Recovered $42k in abandoned-cart revenue.",
    subhead: "A Shopify operator, a WhatsApp recovery flow, and an AI agent that closes the carts an email never could.",
    intro:
      "Email-only cart recovery converts in the 8–12% range. WhatsApp recovery, done right, converts at 30–45%. This playbook is for an e-com founder who wants to put that delta on their P&L.",
    stack: [
      { name: "ConverseOS", role: "WhatsApp abandoned-cart + post-purchase" },
      { name: "SiteForge", role: "Bundle landing pages" },
      { name: "VoxAgent", role: "High-AOV cart recovery calls" },
    ],
    steps: [
      { title: "Connect Shopify to ConverseOS.", body: "Abandoned-cart events auto-fire a WhatsApp sequence with the product image, a 10% code, and a one-tap checkout." },
      { title: "Add a VoxAgent escalation for high AOV.", body: "Carts above $250 that don't recover via WhatsApp get an outbound call. Conversion lifts another 7–9%." },
    ],
    results: [
      { value: "$42k", label: "Carts recovered / month", caption: "On $180k in abandoned value" },
      { value: "31%", label: "WhatsApp recovery rate", caption: "Versus 11% on email" },
    ],
    testimonial: {
      quote: "The first abandoned-cart message my customers actually replied to. Some of them just chatted back-and-forth with the agent and bought through the conversation.",
      name: "Priya Shah",
      role: "Founder, Roan Goods",
      initials: "PS",
    },
    sections: [
      { heading: "Why WhatsApp wins recovery", body: "Open rates above 90%, response within 5 minutes from a real human (or our agent that reads like one). Email is a billboard; WhatsApp is a tap on the shoulder." },
    ],
    timeToShip: "4 days",
    status: "draft",
  },
];
