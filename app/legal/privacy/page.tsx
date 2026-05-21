import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Privacy", path: "/legal/privacy" });

export default function PrivacyPage() {
  return (
    <article className="container-page max-w-3xl py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink/55">Last updated: {new Date().getFullYear()}</p>
      <div className="prose mt-10 max-w-none text-ink/80">
        <p>
          This is a placeholder privacy policy. Final copy to be supplied by counsel before launch.
          Dolopreneur processes business-customer data on behalf of operators using ConverseOS,
          SiteForge, and VoxAgent.
        </p>
      </div>
    </article>
  );
}
