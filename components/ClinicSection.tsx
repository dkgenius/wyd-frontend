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
        padding: "120px 0",
        borderTop: "1px solid rgba(235,235,235,0.06)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 80,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: 16 }}>— The Clinic</p>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 8vw, 110px)",
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
            className="reveal reveal-delay-2"
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
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            All Clinic Topics
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Topics — horizontal numbered list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(235,235,235,0.06)",
            border: "1px solid rgba(235,235,235,0.06)",
            borderRadius: 2,
            marginBottom: 80,
          }}
          className="clinic-grid"
        >
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                padding: "40px 32px",
                background: "var(--surface)",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--surface-2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--surface)")}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 64,
                  letterSpacing: "0.04em",
                  color: "rgba(235,235,235,0.06)",
                  lineHeight: 1,
                  marginBottom: 24,
                }}
              >
                {topic.label}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  letterSpacing: "0.06em",
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                {topic.title.toUpperCase()}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.6,
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
          className="reveal"
          style={{
            position: "relative",
            borderRadius: 4,
            overflow: "hidden",
            padding: "64px 56px",
            background: "linear-gradient(135deg, var(--teal) 0%, #051e25 100%)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          {/* Grid pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.07,
              backgroundImage:
                "linear-gradient(rgba(199,255,46,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(199,255,46,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              pointerEvents: "none",
            }}
          />

          {/* Neon corner accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 300,
              height: 300,
              background: "radial-gradient(circle at top right, rgba(199,255,46,0.15) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 64px)",
                letterSpacing: "0.04em",
                color: "#EBEBEB",
                lineHeight: 0.95,
                marginBottom: 16,
              }}
            >
              READY TO<br />
              <span style={{ color: "var(--ball)" }}>IMPROVE?</span>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "rgba(235,235,235,0.6)",
                maxWidth: 400,
                lineHeight: 1.6,
              }}
            >
              Browse all clinic topics — from beginner serve mechanics to
              advanced tournament preparation.
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
              padding: "16px 32px",
              borderRadius: 999,
              background: "var(--ball)",
              color: "#080808",
              flexShrink: 0,
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            Explore the Clinic
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .clinic-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .clinic-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
