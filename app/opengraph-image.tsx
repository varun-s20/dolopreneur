import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dolopreneur. One operator. Every workflow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
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

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            Run a <span style={{ background: "#E8E54B", padding: "0 12px" }}>$100M</span> company.
            With one operator.
          </div>
          <div style={{ fontSize: 24, color: "#3A3A3A", maxWidth: 880 }}>
            Chat, sites, and voice, handled by ConverseOS, SiteForge, and VoxAgent.
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
          <span>dolopreneur.com</span>
          <span>One operator. Every workflow.</span>
        </div>
      </div>
    ),
    size,
  );
}
