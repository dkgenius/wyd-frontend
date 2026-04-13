const topics = [
  {
    icon: "🎯",
    title: "The Dink",
    desc: "Master the soft game and third-shot drops that win rallies.",
  },
  {
    icon: "⚡",
    title: "Kitchen Control",
    desc: "Dominate the non-volley zone with positioning and patience.",
  },
  {
    icon: "🏃",
    title: "Court Movement",
    desc: "Footwork patterns that keep you in every point.",
  },
  {
    icon: "🤝",
    title: "Partner Play",
    desc: "Communication, stacking, and doubles strategy fundamentals.",
  },
];

export default function ClinicSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div
            className="pill mb-4 mx-auto reveal"
            style={{
              background: "var(--teal-light)",
              color: "var(--teal)",
              width: "fit-content",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--teal)" }}
            />
            The Clinic
          </div>
          <h2
            className="text-4xl font-extrabold tracking-tight leading-tight mb-4 reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-syne)",
              color: "var(--ink)",
            }}
          >
            Level up your game
          </h2>
          <p
            className="text-base leading-relaxed reveal reveal-delay-2"
            style={{
              color: "var(--ink-muted)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Structured lessons and guides covering every part of pickleball —
            from beginner fundamentals to advanced competitive strategy.
          </p>
        </div>

        {/* Topics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              className={`p-6 rounded-2xl reveal reveal-delay-${i + 1} transition-colors duration-200`}
              style={{
                background: "var(--parchment)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-2xl mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--teal-light)" }}
              >
                {topic.icon}
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{
                  fontFamily: "var(--font-syne)",
                  color: "var(--ink)",
                }}
              >
                {topic.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--ink-muted)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {topic.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-12 reveal"
          style={{
            background:
              "linear-gradient(135deg, var(--teal) 0%, #073d4a 100%)",
          }}
        >
          {/* Background grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3
                className="text-2xl md:text-3xl font-extrabold text-white mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Ready to improve your game?
              </h3>
              <p
                className="text-sm md:text-base text-white/70 max-w-md"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Browse all clinic topics, from beginner serve mechanics to
                advanced tournament preparation.
              </p>
            </div>
            <a
              href="https://whatyoudink.com/clinic.php"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "var(--amber)",
                color: "var(--ink)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Explore the Clinic
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
