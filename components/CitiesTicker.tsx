"use client";

const CITIES_ROW_1 = [
  "PORTLAND", "SEATTLE", "SARASOTA", "PHOENIX", "DALLAS", "DENVER",
  "AUSTIN", "NASHVILLE", "ATLANTA", "MIAMI", "CHICAGO", "SAN DIEGO",
  "PORTLAND", "SEATTLE", "SARASOTA", "PHOENIX", "DALLAS", "DENVER",
  "AUSTIN", "NASHVILLE", "ATLANTA", "MIAMI", "CHICAGO", "SAN DIEGO",
];

const CITIES_ROW_2 = [
  "SCOTTSDALE", "TAMPA", "RALEIGH", "BOISE", "LAS VEGAS", "CHARLOTTE",
  "RICHMOND", "TUCSON", "ORLANDO", "SALT LAKE", "MEMPHIS", "KANSAS CITY",
  "SCOTTSDALE", "TAMPA", "RALEIGH", "BOISE", "LAS VEGAS", "CHARLOTTE",
  "RICHMOND", "TUCSON", "ORLANDO", "SALT LAKE", "MEMPHIS", "KANSAS CITY",
];

function Dot() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "var(--ball)",
        margin: "0 16px",
        verticalAlign: "middle",
        flexShrink: 0,
      }}
    />
  );
}

function TickerRow({ items, direction, speed }: { items: string[]; direction: "ltr" | "rtl"; speed: string }) {
  return (
    <div style={{ overflow: "hidden", width: "100%", display: "flex", alignItems: "center" }}>
      <div
        className={direction === "rtl" ? "marquee-track marquee-rtl" : "marquee-track marquee-ltr"}
        style={{ animationDuration: speed }}
      >
        {items.map((city, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 6vw, 72px)",
                letterSpacing: "0.06em",
                color: i % 4 === 1 ? "transparent" : "var(--text)",
                WebkitTextStroke: i % 4 === 1 ? "1px rgba(235,235,235,0.25)" : "none",
                lineHeight: 1,
                padding: "0 2px",
              }}
            >
              {city}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CitiesTicker() {
  return (
    <section
      className="reveal-fade"
      style={{
        background: "var(--surface)",
        padding: "48px 0",
        borderTop: "1px solid rgba(235,235,235,0.06)",
        borderBottom: "1px solid rgba(235,235,235,0.06)",
        overflow: "hidden",
      }}
    >
      <p
        className="section-label"
        style={{ textAlign: "center", marginBottom: 28, color: "var(--muted2)" }}
      >
        — Courts reviewed across America
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <TickerRow items={CITIES_ROW_1} direction="rtl" speed="28s" />
        <TickerRow items={CITIES_ROW_2} direction="ltr" speed="36s" />
      </div>
    </section>
  );
}
