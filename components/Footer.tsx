const footerLinks = {
  Explore: [
    { label: "Find Courts", href: "https://whatyoudink.com/map.php" },
    { label: "Court Reviews", href: "https://whatyoudink.com/blog.php" },
    { label: "The Clinic", href: "https://whatyoudink.com/clinic.php" },
    { label: "Videos", href: "https://www.youtube.com/@WhatYouDink" },
  ],
  Connect: [
    { label: "YouTube", href: "https://www.youtube.com/@WhatYouDink" },
    { label: "About WYD", href: "https://whatyoudink.com/about.php" },
    { label: "Privacy", href: "https://whatyoudink.com/privacy.php" },
    { label: "Terms", href: "https://whatyoudink.com/terms.php" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid rgba(235,235,235,0.06)",
        padding: "80px 0 40px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>

        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: 80,
            marginBottom: 64,
            paddingBottom: 64,
            borderBottom: "1px solid rgba(235,235,235,0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-display)",
                fontSize: 22,
                letterSpacing: "0.08em",
                color: "var(--text)",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--ball)",
                }}
              />
              WHATYOUDINK
            </a>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--muted)",
              }}
            >
              Real in-person pickleball court reviews, honest ratings, and a
              searchable map to find the right spot for your game.
            </p>

            {/* YouTube link */}
            <a
              href="https://www.youtube.com/@WhatYouDink"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 24,
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ball)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              <svg style={{ width: 14, height: 14, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Watch on YouTube
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted2)",
                  marginBottom: 20,
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "var(--muted)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "var(--muted2)",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} WhatYouDink. No sponsored rankings. Ever.
          </p>

          {/* Neon label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              border: "1px solid rgba(199,255,46,0.25)",
              background: "rgba(199,255,46,0.05)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--ball)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ball)",
              }}
            >
              100% Unsponsored
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .footer-grid > :first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
