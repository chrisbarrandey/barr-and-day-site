import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Barr & Day Coffee Co. — Café de verdad, al precio de todos los días.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #172657 0%, #101B45 45%, #0B1333 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 100, fontWeight: 600, letterSpacing: "-0.02em" }}>
          Barr & Day
        </div>
        <div
          style={{
            fontSize: 32,
            letterSpacing: "0.35em",
            color: "#8FB6E0",
            marginTop: 8,
          }}
        >
          COFFEE CO.
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 44,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Café de verdad, al precio de todos los días.
        </div>
      </div>
    ),
    { ...size }
  );
}
