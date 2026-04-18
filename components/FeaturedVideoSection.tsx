"use client";

const FEATURED_VIDEO_ID = "R2fy5zqaX-0";

export default function FeaturedVideoSection() {
  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "120px 0",
        borderTop: "1px solid rgba(235,235,235,0.06)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>

        {/* Section header */}
        <div style={{ marginBottom: 72 }}>
          <p className="section-label" style={{ marginBottom: 16 }}>— Featured Video</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
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
              SEE IT<br />
              <span style={{ color: "var(--ball)" }}>BEFORE</span><br />
              YOU DRIVE.
            </h2>

            <a
              href="https://www.youtube.com/@WhatYouDink"
              target="_blank"
              rel="noopener noreferrer"
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
              YouTube Channel
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="block md:grid"
        >
          {/* Video embed */}
          <div className="reveal" style={{ position: "relative" }}>
            {/* Neon accent line */}
            <div
              style={{
                position: "absolute",
                top: -2,
                left: -2,
                right: -2,
                bottom: -2,
                borderRadius: 18,
                background: "linear-gradient(135deg, var(--ball) 0%, transparent 60%)",
                zIndex: 0,
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: 16,
                overflow: "hidden",
                background: "#000",
                zIndex: 1,
                border: "1px solid rgba(235,235,235,0.08)",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?rel=0&modestbranding=1`}
                title="WhatYouDink Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy */}
          <div style={{ paddingLeft: 16 }}>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ball)",
                marginBottom: 20,
              }}
            >
              Honest · In-person · Video walkthrough
            </p>

            <p
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                color: "rgba(235,235,235,0.65)",
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 440,
              }}
            >
              Every court review includes a full video walkthrough — courts,
              parking, indoor/outdoor setup, and real game footage so you
              know exactly what you&apos;re walking into before you go.
            </p>

            {/* Stats row */}
            <div
              className="reveal reveal-delay-2"
              style={{
                display: "flex",
                gap: 40,
                marginBottom: 40,
                paddingBottom: 40,
                borderBottom: "1px solid rgba(235,235,235,0.08)",
              }}
            >
              {[
                { num: "100+", label: "Videos" },
                { num: "50+", label: "Courts" },
                { num: "100%", label: "Unsponsored" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 40,
                      letterSpacing: "0.04em",
                      color: "var(--text)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.youtube.com/@WhatYouDink"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-delay-3"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "14px 28px",
                borderRadius: 999,
                background: "var(--ball)",
                color: "#080808",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
            >
              {/* YouTube icon */}
              <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .video-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
