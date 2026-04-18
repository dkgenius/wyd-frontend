"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle horizontal text parallax on scroll
    const handleScroll = () => {
      if (!headlineRef.current) return;
      const y = window.scrollY;
      headlineRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        overflow: "hidden",
        background: "#080808",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── Background video ── */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="https://whatyoudink.com/assets/hero-poster.jpg"
        style={{ filter: "brightness(0.45) saturate(1.1)" }}
      >
        <source src="https://whatyoudink.com/assets/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* ── Gradient overlays ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.9) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Noise grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
          pointerEvents: "none",
        }}
      />

      {/* ── Headline ── */}
      <div
        ref={headlineRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          textAlign: "center",
          willChange: "transform",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--ball)",
            marginBottom: 24,
            opacity: 0,
            animation: "fadeUp 0.8s ease 0.3s forwards",
          }}
        >
          Pickleball Court Reviews
        </p>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(64px, 13vw, 200px)",
            lineHeight: 0.92,
            letterSpacing: "0.02em",
            color: "#EBEBEB",
            margin: 0,
            opacity: 0,
            animation: "fadeUp 0.9s ease 0.5s forwards",
          }}
        >
          FIND COURTS
          <br />
          <span style={{ color: "var(--ball)" }}>WORTH</span>
          <br />
          YOUR TIME.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "rgba(235,235,235,0.65)",
            marginTop: 28,
            maxWidth: 520,
            lineHeight: 1.6,
            opacity: 0,
            animation: "fadeUp 0.9s ease 0.75s forwards",
          }}
        >
          Real in-person reviews, honest ratings, video walkthroughs — and a
          map of every court near you.
        </p>

        {/* CTAs */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            opacity: 0,
            animation: "fadeUp 0.9s ease 0.95s forwards",
          }}
        >
          <a
            href="https://whatyoudink.com/map.php"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 32px",
              borderRadius: 999,
              background: "var(--ball)",
              color: "#080808",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            Find Courts Near Me
          </a>
          <a
            href="https://whatyoudink.com/blog.php"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 32px",
              borderRadius: 999,
              border: "1px solid rgba(235,235,235,0.25)",
              color: "var(--text)",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(235,235,235,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "none"; }}
          >
            Browse Reviews
          </a>
        </div>
      </div>

      {/* ── Corner info ── */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 32,
          display: "flex",
          alignItems: "center",
          gap: 8,
          opacity: 0,
          animation: "fadeIn 1s ease 1.4s forwards",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--ball)",
            display: "inline-block",
            animation: "blink 1.6s infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.14em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          No sponsored rankings
        </span>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0,
          animation: "fadeIn 1s ease 1.6s forwards",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted2)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--muted2), transparent)",
            animation: "pulse 2s infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:0.9} }
      `}</style>
    </section>
  );
}
