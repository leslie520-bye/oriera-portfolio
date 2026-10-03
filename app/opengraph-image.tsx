import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OriEra — From Origin, A New Era";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 96,
          background: "#10141A",
          color: "#F6F3EC",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.3em", color: "#C9A24B" }}>
          ORIERA
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, marginTop: 16 }}>
          From Origin, A New Era
        </div>
        <div
          style={{
            width: 96,
            height: 2,
            background: "#C9A24B",
            marginTop: 32,
          }}
        />
      </div>
    ),
    size
  );
}
