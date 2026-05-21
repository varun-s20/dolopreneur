import { HeroBento } from "@/components/sections/HeroBento";
import { StatsScribble } from "@/components/sections/StatsScribble";
import { LoopDiagram } from "@/components/sections/LoopDiagram";
import { ServicesFeaturesScene } from "@/components/sections/ServicesFeaturesScene";
import { Playbooks } from "@/components/sections/Playbooks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollStack } from "@/components/motion/ScrollStack";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  description:
    "Run a $100M company with one operator. ConverseOS, SiteForge, and VoxAgent handle chat, sites, and voice on autopilot.",
});

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollStack>
        <HeroBento />
        <StatsScribble />
        <LoopDiagram />
      </ScrollStack>
      <ServicesFeaturesScene />
      <Playbooks />
      <Testimonials />
      <Pricing />
      <FinalCTA />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Dolopreneur",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "49",
              highPrice: "199",
            },
            description:
              "An AI workforce for solo founders. Chat, sites, and voice handled by ConverseOS, SiteForge, and VoxAgent.",
          }),
        }}
      />
    </>
  );
}
