import { ImageResponse } from "next/og";
import { playbooks } from "@/content/playbooks";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return playbooks.map((p) => ({ slug: p.slug }));
}

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = playbooks.find((x) => x.slug === slug);
  const industry = p?.industry ?? "Playbook";
  const outcome = p?.outcome ?? "One operator. Every workflow.";
  const time = p?.timeToShip ?? "1 week";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1F1F1F",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "serif",
          color: "#ECEAE3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#ECEAE3",
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
                border: "3px solid #1F1F1F",
              }}
            />
            <div style={{ width: 3, height: 22, background: "#1F1F1F" }} />
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#E8E54B" }} />
          </div>
          <div style={{ fontSize: 24, color: "#ECEAE3", fontWeight: 600 }}>Dolopreneur</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#E8E54B",
            }}
          >
            Playbook · {industry}
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {outcome}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(236,234,227,0.6)",
          }}
        >
          <span>Time to ship · {time}</span>
          <span
            style={{
              background: "#E8E54B",
              color: "#1A1A1A",
              padding: "10px 18px",
              borderRadius: 999,
              fontSize: 16,
            }}
          >
            Read the playbook
          </span>
        </div>
      </div>
    ),
    size,
  );
}
