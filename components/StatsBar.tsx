const stats = [
  { value: "500+", label: "Courts Reviewed" },
  { value: "40+", label: "Cities Covered" },
  { value: "100%", label: "Personally Visited" },
  { value: "4K+", label: "Video Reviews" },
];

export default function StatsBar() {
  return (
    <section
      className="py-10 border-y"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center reveal reveal-delay-${i + 1}`}
            >
              <div
                className="text-3xl font-extrabold mb-1"
                style={{
                  fontFamily: "var(--font-syne)",
                  color: "var(--teal)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{
                  color: "var(--ink-muted)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
