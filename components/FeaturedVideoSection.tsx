const FEATURED_VIDEO_ID = "R2fy5zqaX-0"; // Update this to the latest featured video

export default function FeaturedVideoSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--parchment)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video embed */}
          <div className="reveal">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
              style={{
                border: "1px solid var(--border)",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?rel=0&modestbranding=1`}
                title="WhatYouDink Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <div
              className="pill mb-6 reveal"
              style={{
                background: "var(--terra-light)",
                color: "var(--terra)",
              }}
            >
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Watch on YouTube
            </div>

            <h2
              className="text-4xl font-extrabold tracking-tight leading-tight mb-5 reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-syne)",
                color: "var(--ink)",
              }}
            >
              See the courts
              <br />
              before you drive.
            </h2>

            <p
              className="text-base leading-relaxed mb-8 max-w-sm reveal reveal-delay-2"
              style={{
                color: "var(--ink-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Every court review comes with a full video walkthrough — courts,
              parking, indoor/outdoor setup, and real game footage so you know
              exactly what you&apos;re walking into.
            </p>

            <a
              href="https://www.youtube.com/@WhatYouDink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 reveal reveal-delay-3"
              style={{
                background: "#ff0000",
                color: "white",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
