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

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(235,235,235,0.08)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            letterSpacing: "0.08em",
            color: "var(--text)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--ball)",
              animation: "blink 1.6s infinite",
            }}
          />
          WHATYOUDINK
        </a>

        {/* Desktop links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--muted)",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
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
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "8px 20px",
              borderRadius: 999,
              background: "var(--ball)",
              color: "#080808",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            Find Courts
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 6 }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "var(--text)",
                borderRadius: 1,
                transition: "all 0.3s ease",
                opacity: i === 1 && menuOpen ? 0 : 1,
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                  : "none"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(8,8,8,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(235,235,235,0.08)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontSize: 32,
                letterSpacing: "0.06em",
                color: "var(--text)",
                padding: "10px 0",
                borderBottom: "1px solid rgba(235,235,235,0.06)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://whatyoudink.com/map.php"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: 20,
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px",
              borderRadius: 999,
              background: "var(--ball)",
              color: "#080808",
            }}
          >
            Find Courts Near Me
          </a>
        </div>
      )}

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
      `}</style>
    </header>
  );
}
