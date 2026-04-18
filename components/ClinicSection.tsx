"use client";

const topics = [
  {
    label: "01",
    title: "The Dink",
    desc: "Master the soft game and third-shot drops that win rallies at the kitchen line.",
  },
  {
    label: "02",
    title: "Kitchen Control",
    desc: "Dominate the non-volley zone with precise positioning and patience.",
  },
  {
    label: "03",
    title: "Court Movement",
    desc: "Footwork patterns and transitions that keep you in every point.",
  },
  {
    label: "04",
    title: "Partner Play",
    desc: "Communication, stacking, and doubles strategy fundamentals.",
  },
];

export default function ClinicSection() {
  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "80px 0",
        borderTop: "1px solid rgba(235,235,235,0.06)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p className="section-label reveal-fade" style={{ marginBottom: 12 }}>— The Clinic</p>
            <h2
              className="reveal-right"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 10vw, 110px)",
                lineHeight: 0.92,
                letterSpacing: "0.03em",
                color: "var(--text)",
                margin: 0,
              }}
            >
              LEVEL UP<br />
              <span style={{ color: "var(--ball)" }}>YOUR</span><br />
              GAME.
            </h2>
          </div>

          <a
            href="https://whatyoudink.com/clinic.php"
            className="reveal-fade reveal-delay-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "color 0.2s",
              alignSelf: "flex-start",
              marginTop: 8,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            All Topics
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Topics grid */}
        <div className="clinic-topics-grid">
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                padding: "32px 28px",
                background: "var(--surface)",
                borderRadius: 4,
                transition: "background 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 56,
                  letterSpacing: "0.04em",
                  color: "rgba(235,235,235,0.05)",
                  lineHeight: 1,
                  marginBottom: 20,
                }}
              >
                {topic.label}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  letterSpacing: "0.06em",
                  color: "var(--text)",
                  marginBottom: 10,
                }}
              >
                {topic.title.toUpperCase()}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "var(--muted)",
                }}
              >
                {topic.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="reveal-scale"
          style={{
            position: "relative",
            borderRadius: 8,
            overflow: "hidden",
            padding: "48px 32px",
            marginTop: 20,
            background: "linear-gradient(135deg, #1c1a12 0%, #141210 50%, #0d0c0a 100%)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 28,
            border: "1px solid rgba(235,235,235,0.07)",
          }}
        >
          {/* Subtle warm vignette — no grid, just depth */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(220,91,30,0.08) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 50% 60% at 100% 100%, rgba(199,255,46,0.04) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 6vw, 60px)",
                letterSpacing: "0.04em",
                color: "#EBEBEB",
                lineHeight: 0.95,
                marginBottom: 12,
              }}
            >
              READY TO<br />
              <span style={{ color: "var(--ball)" }}>IMPROVE?</span>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "rgba(235,235,235,0.58)",
                maxWidth: 380,
                lineHeight: 1.6,
              }}
            >
              Browse all clinic topics — from beginner serve mechanics to advanced tournament prep.
            </p>
          </div>

          <a
            href="https://whatyoudink.com/clinic.php"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 28px",
              borderRadius: 999,
              background: "var(--ball)",
              color: "#080808",
              flexShrink: 0,
              transition: "opacity 0.2s, transform 0.2s",
              width: "fit-content",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            Explore the Clinic
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .clinic-topics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }
        @media (min-width: 768px) {
          .clinic-topics-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2px;
          }
        }
      `}</style>
    </section>
  );
}
