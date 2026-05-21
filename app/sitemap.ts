import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/content/services";
import { playbooks } from "@/content/playbooks";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/services",
    "/how-it-works",
    "/pricing",
    "/playbooks",
    "/about",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/dpa",
  ];
  return [
    ...routes.map((path) => ({
      url: new URL(path, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: new URL(`/services/${s.slug}`, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...playbooks.map((p) => ({
      url: new URL(`/playbooks/${p.slug}`, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
