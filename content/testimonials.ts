export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Replaced a chat widget, a calendar tool, a builder, and one part-time SDR. The operator plan paid for itself in week two.",
    name: "Sarah Thompson",
    role: "Founder, Northbeam Coaching",
    initials: "ST",
  },
  {
    quote:
      "We were missing two-thirds of after-hours calls. VoxAgent now answers them and drops booked meetings straight into my calendar.",
    name: "James Williams",
    role: "Broker, James Williams Realty",
    initials: "JW",
  },
  {
    quote:
      "Stood up nine client funnels in a single week. SiteForge plus ConverseOS is the closest thing I've found to a real agency-in-a-box.",
    name: "Emily Chen",
    role: "Director, Studio Forty Five",
    initials: "EC",
  },
];
