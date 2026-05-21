import { ImageResponse } from "next/og";
import { services } from "@/content/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const name = service?.name ?? "Dolopreneur";
  const tagline = service?.tagline ?? "One operator. Every workflow.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ECEAE3",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#1F1F1F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: "0 6px",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                border: "3px solid #FAFAF7",
              }}
            />
            <div style={{ width: 3, height: 22, background: "#FAFAF7" }} />
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#E8E54B" }} />
          </div>
          <div style={{ fontSize: 24, color: "#1A1A1A", fontWeight: 600 }}>Dolopreneur</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#6B6B6B",
            }}
          >
            {`Service · ${name}`}
          </div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.02,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#6B6B6B",
          }}
        >
          <span>{`dolopreneur.com/services/${slug}`}</span>
          <span
            style={{
              background: "#1F1F1F",
              color: "#ECEAE3",
              padding: "10px 18px",
              borderRadius: 999,
              fontSize: 16,
            }}
          >
            Book a demo
          </span>
        </div>
      </div>
    ),
    size,
  );
}
