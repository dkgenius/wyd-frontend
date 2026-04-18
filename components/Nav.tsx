"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Courts",  href: "https://whatyoudink.com/map.php" },
  { label: "Reviews", href: "https://whatyoudink.com/blog.php" },
  { label: "Clinic",  href: "https://whatyoudink.com/clinic.php" },
  { label: "Videos",  href: "https://www.youtube.com/@WhatYouDink", external: true },
  { label: "About",   href: "https://whatyoudink.com/about.php" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: "background 0.4s ease, border-color 0.4s ease",
          background: menuOpen
            ? "rgba(8,8,8,0.98)"
            : scrolled
            ? "rgba(8,8,8,0.92)"
            : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled && !menuOpen
            ? "1px solid rgba(235,235,235,0.08)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 20px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo ── */}
          <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }} onClick={closeMenu}>
            <img
              src="https://www.whatyoudink.com/assets/whatyoudinklogo.png"
              alt="WhatYouDink"
              style={{ height: 36, width: "auto", objectFit: "contain" }}
            />
          </a>

          {/* ── Desktop nav ── */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 28 }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover-neon"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                  paddingBottom: 2,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://whatyoudink.com/map.php"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "9px 22px",
                borderRadius: 999,
                background: "var(--ball)",
                color: "#080808",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "none";
              }}
            >
              Find Courts
            </a>
          </nav>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px 6px",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              zIndex: 210,
            }}
          >
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--text)",
                borderRadius: 2,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--text)",
                borderRadius: 2,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--text)",
                borderRadius: 2,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay ── */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 190,
            background: "rgba(8,8,8,0.98)",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 32px 48px",
            overflowY: "auto",
          }}
        >
          {/* Nav links */}
          <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={closeMenu}
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(44px, 12vw, 72px)",
                  letterSpacing: "0.04em",
                  color: "var(--text)",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(235,235,235,0.07)",
                  lineHeight: 1.1,
                  transition: "color 0.2s",
                  animationDelay: `${i * 0.05}s`,
                }}
                onTouchStart={e => (e.currentTarget.style.color = "var(--ball)")}
                onTouchEnd={e => (e.currentTarget.style.color = "var(--text)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ marginTop: 40 }}>
            <a
              href="https://whatyoudink.com/map.php"
              onClick={closeMenu}
              style={{
                display: "block",
                textAlign: "center",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "18px",
                borderRadius: 999,
                background: "var(--ball)",
                color: "#080808",
              }}
            >
              Find Courts Near Me →
            </a>

            {/* Social hint */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted2)",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              No sponsored rankings · 100% real reviews
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </>
  );
}
