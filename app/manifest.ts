import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dolopreneur",
    short_name: "Dolopreneur",
    description:
      "Run a $100M company with one operator. AI agents for chat, sites, and voice, handled.",
    start_url: "/",
    display: "standalone",
    background_color: "#ECEAE3",
    theme_color: "#ECEAE3",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
