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
          background: "linear-gradient(135deg, #131b25 0%, #1d2733 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div style={{ fontSize: 110, fontWeight: 800, fontStyle: "italic", color: "#ffffff" }}>
            Road
          </div>
          <div style={{ fontSize: 110, fontWeight: 800, fontStyle: "italic", color: "#f58220" }}>
            ly
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 38,
            color: "#dbe2ea",
            letterSpacing: 2,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 32,
            color: "#f58220",
            fontWeight: 700,
          }}
        >
          {`${site.phone.display} · Open 24/7`}
        </div>
      </div>
    ),
    size
  );
}
