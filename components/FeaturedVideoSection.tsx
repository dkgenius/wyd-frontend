"use client";

const FEATURED_VIDEO_ID = "R2fy5zqaX-0";

export default function FeaturedVideoSection() {
  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "80px 0",
        borderTop: "1px solid rgba(235,235,235,0.06)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>

        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <p className="section-label reveal-fade" style={{ marginBottom: 12 }}>— Featured Video</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <h2
              className="reveal-left"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 10vw, 110px)",
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
              YouTube Channel
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Video full-width on mobile, two-col on desktop */}
        <div className="video-layout">
          {/* Video embed */}
          <div className="reveal-scale" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: -3,
                left: -3,
                right: -3,
                bottom: -3,
                borderRadius: 20,
                background: "linear-gradient(135deg, var(--ball) 0%, transparent 55%)",
                opacity: 0.35,
                zIndex: 0,
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
          <div className="video-copy">
            <p
              className="reveal-fade"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ball)",
                marginBottom: 16,
              }}
            >
              Honest · In-person · Video walkthrough
            </p>

            <p
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "rgba(235,235,235,0.62)",
                lineHeight: 1.7,
                marginBottom: 32,
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
                gap: 32,
                marginBottom: 32,
                paddingBottom: 32,
                borderBottom: "1px solid rgba(235,235,235,0.08)",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "100+", label: "Videos" },
                { num: "50+", label: "Courts" },
                { num: "100%", label: "Unsponsored" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 6vw, 44px)", letterSpacing: "0.04em", color: "var(--text)", lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 4 }}>
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
                padding: "15px 28px",
                borderRadius: 999,
                background: "var(--ball)",
                color: "#080808",
                transition: "opacity 0.2s, transform 0.2s",
                width: "fit-content",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
            >
              <svg style={{ width: 15, height: 15, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .video-layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .video-copy {
          padding-top: 8px;
        }
        @media (min-width: 768px) {
          .video-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
          }
          .video-copy {
            padding-left: 16px;
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
