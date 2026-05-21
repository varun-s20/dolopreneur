import type { Metadata } from "next";

const SITE_NAME = "Dolopreneur";
const SITE_URL = "https://dolopreneur.com";
const DEFAULT_DESCRIPTION =
  "Run a $100M company with one operator. AI agents for chat, sites, and voice, handled.";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
}: SeoInput = {}): Metadata {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME}. One operator. Every workflow.`;
  const url = new URL(path, SITE_URL).toString();
  const ogImage = image ?? "/opengraph-image";

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.svg" },
  };
}

export { SITE_NAME, SITE_URL };
