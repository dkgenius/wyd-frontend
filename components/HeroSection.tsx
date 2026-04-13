import CourtGraphic from "./CourtGraphic";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "var(--parchment)" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 court-bg opacity-60"
        aria-hidden="true"
      />

      {/* Teal glow in top-left */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--teal-light) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] py-16">
          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <div
              className="pill mb-6 opacity-0 animate-[fadeUp_0.6s_ease_0.1s_forwards]"
              style={{
                background: "var(--teal-light)",
                color: "var(--teal)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--teal)" }}
              />
              Pickleball Court Reviews
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight mb-6 opacity-0 animate-[fadeUp_0.6s_ease_0.2s_forwards]"
              style={{
                fontFamily: "var(--font-syne)",
                color: "var(--ink)",
              }}
            >
              Find courts{" "}
              <span className="text-gradient">worth</span>
              <br />
              your time.
            </h1>

            {/* Subhead */}
            <p
              className="text-lg leading-relaxed mb-8 max-w-md opacity-0 animate-[fadeUp_0.6s_ease_0.3s_forwards]"
              style={{
                color: "var(--ink-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Real in-person court reviews with honest ratings, video
              walkthroughs, and a searchable map of pickleball spots across
              the country.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-[fadeUp_0.6s_ease_0.4s_forwards]"
            >
              <a
                href="https://whatyoudink.com/map.php"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "var(--teal)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Find Courts Near Me
              </a>
              <a
                href="https://whatyoudink.com/blog.php"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  border: "1.5px solid rgba(11,95,112,0.25)",
                  color: "var(--teal)",
                  background: "transparent",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Browse Reviews
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Trust micro-copy */}
            <p
              className="mt-6 text-xs opacity-0 animate-[fadeIn_0.6s_ease_0.6s_forwards]"
              style={{
                color: "var(--ink-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              No sponsored rankings. Every court personally visited.
            </p>
          </div>

          {/* Right: Court Graphic */}
          <div
            className="hidden lg:flex items-center justify-center opacity-0 animate-[fadeIn_0.8s_ease_0.3s_forwards]"
          >
            <div className="relative w-full max-w-lg">
              {/* Teal accent panel behind the graphic */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-8"
                style={{
                  background:
                    "linear-gradient(135deg, var(--teal-light) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <CourtGraphic />

              {/* Floating review card */}
              <div
                className="absolute -bottom-4 -left-8 p-4 rounded-2xl shadow-xl max-w-[200px]"
                style={{ background: "var(--surface)" }}
              >
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 star-filled"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-xs font-semibold leading-tight"
                  style={{ color: "var(--ink)", fontFamily: "var(--font-dm-sans)" }}
                >
                  "Best outdoor courts in the city"
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
                >
                  WYD Verified Review
                </p>
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -top-4 -right-6 p-4 rounded-2xl shadow-xl"
                style={{ background: "var(--surface)" }}
              >
                <div
                  className="text-2xl font-extrabold"
                  style={{
                    fontFamily: "var(--font-syne)",
                    color: "var(--teal)",
                  }}
                >
                  500+
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Courts Reviewed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)", fontSize: "10px" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8 rounded-full animate-pulse"
          style={{ background: "var(--ink-muted)" }}
        />
      </div>
    </section>
  );
}
