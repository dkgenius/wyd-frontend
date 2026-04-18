"use client";

import { useEffect, useRef, useState } from "react";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  thumbnail?: string;
  category?: string;
  rating?: number;
}

const FALLBACK: Post[] = [
  { id: 1, title: "WESTMORELAND PARK", slug: "westmoreland-park-portland", category: "OUTDOOR · PORTLAND", rating: 5 },
  { id: 2, title: "GREENLAKE CENTER", slug: "greenlake-community-center-seattle", category: "INDOOR · SEATTLE", rating: 4 },
  { id: 3, title: "BIRD KEY PARK", slug: "bird-key-park-sarasota", category: "OUTDOOR · SARASOTA", rating: 5 },
  { id: 4, title: "SURPRISE TENNIS", slug: "surprise-tennis-center", category: "OUTDOOR · PHOENIX", rating: 4 },
  { id: 5, title: "ENID COLE CENTER", slug: "enid-cole-community", category: "INDOOR · DALLAS", rating: 4 },
  { id: 6, title: "SHADOW MOUNTAIN", slug: "shadow-mountain-resort", category: "RESORT · SCOTTSDALE", rating: 5 },
];

const CARD_STYLES: React.CSSProperties[] = [
  { gridColumn: "1 / 2", gridRow: "1 / 2", width: "100%" },
  { gridColumn: "3 / 4", gridRow: "1 / 2", width: "88%", marginTop: "12%" },
  { gridColumn: "2 / 3", gridRow: "2 / 3", width: "96%", zIndex: 3 },
  { gridColumn: "2 / 3", gridRow: "1 / 2", width: "84%", marginLeft: "auto" },
  { gridColumn: "1 / 2", gridRow: "2 / 3", width: "100%", zIndex: 2 },
  { gridColumn: "3 / 4", gridRow: "2 / 3", width: "90%", marginTop: "-20%", zIndex: 1 },
];

const PARALLAX_Y = [-18, -36, -48, -10, -38, -28];
const BG_COLORS = ["#0B5F70", "#1a2a1a", "#2a1a0a", "#0a1a2a", "#1a0a2a", "#2a2a0a"];

function CourtCard({ post, index }: { post: Post; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    // Disable parallax on mobile for smoother scroll
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      const rect = card.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = 1 - rect.bottom / (viewH + rect.height);
      const factor = PARALLAX_Y[index] / 100;
      const translateY = factor * progress * rect.height * 0.6;
      card.style.setProperty("--py", `${translateY}px`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  const aspectRatio = index % 3 === 0 ? "4/5" : index % 3 === 1 ? "3/4" : "4/3";

  return (
    <div
      ref={cardRef}
      style={{
        ...CARD_STYLES[index % CARD_STYLES.length],
        position: "relative",
        aspectRatio,
        transform: "translateY(var(--py, 0px))",
        transition: "transform 0.12s linear",
        willChange: "transform",
      }}
      className="court-card"
    >
      {post.thumbnail ? (
        <img
          src={post.thumbnail}
          alt={post.title}
          className="court-card-img"
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(145deg, ${BG_COLORS[index % 6]} 0%, #111 100%)`,
          }}
        >
          <svg viewBox="0 0 400 300" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }}>
            <rect x="20" y="20" width="360" height="260" stroke="white" strokeWidth="2" />
            <line x1="20" y1="150" x2="380" y2="150" stroke="white" strokeWidth="1.5" />
            <line x1="200" y1="20" x2="200" y2="280" stroke="white" strokeWidth="1.5" />
            <line x1="20" y1="76" x2="380" y2="76" stroke="rgba(199,255,46,0.8)" strokeWidth="1.5" strokeDasharray="6 4" />
            <line x1="20" y1="224" x2="380" y2="224" stroke="rgba(199,255,46,0.8)" strokeWidth="1.5" strokeDasharray="6 4" />
          </svg>
        </div>
      )}
      <div className="court-card-overlay" />
      <div className="glitch-layer" />
      <div className="court-card-meta">
        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ball)", marginBottom: 6 }}>
          {post.category || "COURT REVIEW"}
        </p>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 36px)", letterSpacing: "0.04em", color: "#EBEBEB", margin: 0, lineHeight: 1 }}>
          {post.title.toUpperCase()}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8, flexWrap: "wrap" }}>
          {post.rating && Array.from({ length: 5 }, (_, i) => (
            <svg key={i} style={{ width: 10, height: 10, color: i < post.rating! ? "#F5A623" : "rgba(235,235,235,0.2)", flexShrink: 0 }} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <a
            href={`https://whatyoudink.com/blog/${post.slug}`}
            style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(235,235,235,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginLeft: 6, textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            Read review →
          </a>
        </div>
      </div>
    </div>
  );
}

// Mobile swipeable card
function MobileCourtCard({ post, index }: { post: Post; index: number }) {
  return (
    <a
      href={`https://whatyoudink.com/blog/${post.slug}`}
      className={`court-card reveal reveal-delay-${index + 1}`}
      style={{ aspectRatio: "4/3", borderRadius: 16, display: "block" }}
    >
      {post.thumbnail ? (
        <img src={post.thumbnail} alt={post.title} className="court-card-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
      ) : (
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(145deg, ${BG_COLORS[index % 6]} 0%, #111 100%)` }}>
          <svg viewBox="0 0 400 300" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}>
            <rect x="20" y="20" width="360" height="260" stroke="white" strokeWidth="2" />
            <line x1="20" y1="150" x2="380" y2="150" stroke="white" strokeWidth="1.5" />
            <line x1="200" y1="20" x2="200" y2="280" stroke="white" strokeWidth="1.5" />
            <line x1="20" y1="76" x2="380" y2="76" stroke="rgba(199,255,46,0.7)" strokeWidth="1.5" strokeDasharray="6 4" />
            <line x1="20" y1="224" x2="380" y2="224" stroke="rgba(199,255,46,0.7)" strokeWidth="1.5" strokeDasharray="6 4" />
          </svg>
        </div>
      )}
      <div className="court-card-overlay" />
      <div className="glitch-layer" />
      <div className="court-card-meta" style={{ padding: "16px 20px" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ball)", marginBottom: 6 }}>
          {post.category || "COURT REVIEW"}
        </p>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, letterSpacing: "0.04em", color: "#EBEBEB", margin: 0, lineHeight: 1 }}>
          {post.title.toUpperCase()}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}>
          {post.rating && Array.from({ length: 5 }, (_, i) => (
            <svg key={i} style={{ width: 10, height: 10, color: i < post.rating! ? "#F5A623" : "rgba(235,235,235,0.2)" }} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(235,235,235,0.45)", letterSpacing: "0.08em", marginLeft: 6 }}>
            Read review →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function CourtShowcaseSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://whatyoudink.com/api/v1/posts.php?limit=6")
      .then((r) => r.json())
      .then((data) => {
        const items: Post[] = Array.isArray(data)
          ? data.slice(0, 6).map((p: Record<string, unknown>, i: number) => ({
              id: Number(p.id ?? i),
              title: String(p.title || FALLBACK[i]?.title || "COURT REVIEW"),
              slug: String(p.slug || p.id || ""),
              excerpt: p.excerpt ? String(p.excerpt) : undefined,
              thumbnail: p.thumbnail ? String(p.thumbnail) : undefined,
              category: p.category ? String(p.category).toUpperCase() : FALLBACK[i]?.category,
              rating: p.rating ? Number(p.rating) : 4,
            }))
          : [];
        setPosts(items.length >= 4 ? items : FALLBACK);
      })
      .catch(() => setPosts(FALLBACK));
  }, []);

  const displayPosts = posts.length > 0 ? posts : FALLBACK;

  return (
    <section style={{ background: "var(--bg)", padding: "80px 0 80px", overflowX: "hidden" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>

        {/* ── Section header ── */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p className="section-label reveal-fade" style={{ marginBottom: 12 }}>
              — Court Reviews
            </p>
            <h2
              className="reveal-tilt"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 10vw, 110px)",
                lineHeight: 0.92,
                letterSpacing: "0.03em",
                color: "var(--text)",
                margin: 0,
              }}
            >
              COURTS<br />
              <span style={{ color: "var(--ball)" }}>HONESTLY</span><br />
              REVIEWED.
            </h2>
          </div>

          <a
            href="https://whatyoudink.com/blog.php"
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
          >
            All Reviews
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* ── Desktop: Kookie overlapping grid ── */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, auto)",
            gap: "60px 28px",
            position: "relative",
          }}
        >
          {displayPosts.slice(0, 6).map((post, i) => (
            <CourtCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* ── Mobile: Stacked with animations ── */}
        <div className="flex flex-col md:hidden" style={{ gap: 16 }}>
          {displayPosts.slice(0, 4).map((post, i) => (
            <MobileCourtCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* ── Mobile CTA ── */}
        <div className="flex md:hidden" style={{ marginTop: 28, justifyContent: "center" }}>
          <a
            href="https://whatyoudink.com/blog.php"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: 999,
              border: "1px solid rgba(235,235,235,0.2)",
              color: "var(--text)",
            }}
          >
            View All Reviews →
          </a>
        </div>

      </div>
    </section>
  );
}
