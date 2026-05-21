import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Terms", path: "/legal/terms" });

export default function TermsPage() {
  return (
    <article className="container-page max-w-3xl py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl">Terms of Service</h1>
      <p className="mt-4 text-sm text-ink/55">Last updated: {new Date().getFullYear()}</p>
      <div className="prose mt-10 max-w-none text-ink/80">
        <p>This is a placeholder ToS. Final copy to be supplied by counsel before launch.</p>
      </div>
    </article>
  );
}
