import { site } from "@/data/site";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

/** Site-wide Open Graph / Twitter image, generated at build time. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              fontWeight: 700,
              color: "#09090b",
            }}
          >
            R
          </div>
          <div style={{ fontSize: 72, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 40, color: "#d4d4d8" }}>
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#f97316",
            fontWeight: 600,
          }}
        >
          {`${site.phone.display} · Open 24/7`}
        </div>
      </div>
    ),
    size
  );
}
