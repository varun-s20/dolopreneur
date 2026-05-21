import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "DPA", path: "/legal/dpa" });

export default function DpaPage() {
  return (
    <article className="container-page max-w-3xl py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl">Data Processing Addendum</h1>
      <p className="mt-4 text-sm text-ink/55">Last updated: {new Date().getFullYear()}</p>
      <div className="prose mt-10 max-w-none text-ink/80">
        <p>Placeholder DPA. Final copy to be supplied by counsel before launch.</p>
      </div>
    </article>
  );
}
