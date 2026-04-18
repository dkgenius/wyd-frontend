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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="wyd-header" data-scrolled={scrolled ? "true" : "false"}>
        <div className="wyd-nav-inner">

          {/* Logo */}
          <a href="/" className="wyd-logo" onClick={close}>
            <img
              src="https://www.whatyoudink.com/assets/whatyoudinklogo.png"
              alt="WhatYouDink"
              className="wyd-logo-img"
            />
          </a>

          {/* Desktop nav — hidden via CSS below 768px */}
          <nav className="wyd-desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="wyd-nav-link"
              >
                {link.label}
              </a>
            ))}
            <a href="https://whatyoudink.com/map.php" className="wyd-nav-cta">
              Find Courts
            </a>
          </nav>

          {/* Hamburger — shown via CSS below 768px */}
          <button
            className="wyd-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? "wyd-bar wyd-bar-top open" : "wyd-bar wyd-bar-top"} />
            <span className={menuOpen ? "wyd-bar wyd-bar-mid open" : "wyd-bar wyd-bar-mid"} />
            <span className={menuOpen ? "wyd-bar wyd-bar-bot open" : "wyd-bar wyd-bar-bot"} />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="wyd-mobile-menu">
          <nav className="wyd-mobile-links">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={close}
                className="wyd-mobile-link"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="wyd-mobile-footer">
            <a href="https://whatyoudink.com/map.php" className="wyd-mobile-cta" onClick={close}>
              Find Courts Near Me →
            </a>
            <p className="wyd-mobile-tagline">No sponsored rankings · 100% real reviews</p>
          </div>
        </div>
      )}

      <style>{`
        /* ── Header shell ── */
        .wyd-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          transition: background 0.35s ease, border-color 0.35s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .wyd-header[data-scrolled="true"] {
          background: rgba(8,8,8,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(235,235,235,0.08);
        }

        /* ── Inner row ── */
        .wyd-nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Logo ── */
        .wyd-logo { display: flex; align-items: center; flex-shrink: 0; }
        .wyd-logo-img { height: 34px; width: auto; object-fit: contain; display: block; }

        /* ── Desktop nav: hidden on mobile ── */
        .wyd-desktop-nav {
          display: none;
        }
        @media (min-width: 768px) {
          .wyd-desktop-nav {
            display: flex;
            align-items: center;
            gap: 28px;
          }
        }

        .wyd-nav-link {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(235,235,235,0.55);
          transition: color 0.2s;
          white-space: nowrap;
        }
        .wyd-nav-link:hover { color: #EBEBEB; }

        .wyd-nav-cta {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 9px 22px;
          border-radius: 999px;
          background: #C7FF2E;
          color: #080808;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.2s;
        }
        .wyd-nav-cta:hover { opacity: 0.85; transform: translateY(-1px); }

        /* ── Hamburger: hidden on desktop ── */
        .wyd-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px 4px;
          z-index: 210;
        }
        @media (min-width: 768px) {
          .wyd-hamburger { display: none; }
        }

        .wyd-bar {
          display: block;
          width: 24px;
          height: 2px;
          background: #EBEBEB;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .wyd-bar-top.open  { transform: rotate(45deg) translate(5px, 5px); }
        .wyd-bar-mid.open  { opacity: 0; transform: scaleX(0); }
        .wyd-bar-bot.open  { transform: rotate(-45deg) translate(5px, -5px); }

        /* ── Full-screen mobile menu ── */
        .wyd-mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 190;
          background: rgba(8,8,8,0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 28px 48px;
          animation: menuIn 0.28s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes menuIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .wyd-mobile-links {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .wyd-mobile-link {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(44px, 12vw, 68px);
          letter-spacing: 0.04em;
          color: #EBEBEB;
          padding: 10px 0;
          border-bottom: 1px solid rgba(235,235,235,0.07);
          line-height: 1.1;
          opacity: 0;
          animation: linkIn 0.4s cubic-bezier(0.22,1,0.36,1) forwards;
          transition: color 0.15s;
        }
        .wyd-mobile-link:active { color: #C7FF2E; }

        @keyframes linkIn {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .wyd-mobile-footer {
          margin-top: 36px;
        }
        .wyd-mobile-cta {
          display: block;
          text-align: center;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 18px;
          border-radius: 999px;
          background: #C7FF2E;
          color: #080808;
        }
        .wyd-mobile-tagline {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(235,235,235,0.3);
          text-align: center;
          margin-top: 16px;
        }
      `}</style>
    </>
  );
}
