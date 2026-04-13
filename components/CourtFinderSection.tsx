export default function CourtFinderSection() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--parchment)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div
              className="pill mb-6 reveal"
              style={{
                background: "var(--terra-light)",
                color: "var(--terra)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--terra)" }}
              />
              Court Finder
            </div>
            <h2
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-5 reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-syne)",
                color: "var(--ink)",
              }}
            >
              The right court
              <br />
              is closer than
              <br />
              you think.
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-sm reveal reveal-delay-2"
              style={{
                color: "var(--ink-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Search by city or ZIP code. Filter by indoor/outdoor, skill
              level, or court count. Get directions in one tap.
            </p>

            {/* Search card */}
            <div
              className="p-5 rounded-2xl shadow-lg reveal reveal-delay-3"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex gap-3">
                <div
                  className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: "var(--parchment)",
                    border: "1.5px solid var(--border)",
                  }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--teal)" }}
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
                  <span style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}>
                    City, state or ZIP code
                  </span>
                </div>
                <a
                  href="https://whatyoudink.com/map.php"
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-white flex-shrink-0 transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: "var(--teal)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Search
                </a>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a
                  href="https://whatyoudink.com/map.php"
                  className="flex items-center gap-1.5 text-xs transition-colors hover:opacity-80"
                  style={{ color: "var(--teal)", fontFamily: "var(--font-dm-sans)" }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                  Use my current location
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map preview mockup */}
          <div className="reveal reveal-delay-2">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              style={{ background: "#e8f0e9" }}
            >
              {/* Faux map background */}
              <div className="absolute inset-0">
                {/* Road lines */}
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  {/* Map background */}
                  <rect width="400" height="300" fill="#f0f4f0" />

                  {/* Streets */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#fff" strokeWidth="8" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#fff" strokeWidth="5" />
                  <line x1="100" y1="0" x2="100" y2="300" stroke="#fff" strokeWidth="5" />
                  <line x1="250" y1="0" x2="250" y2="300" stroke="#fff" strokeWidth="8" />
                  <line x1="350" y1="0" x2="350" y2="300" stroke="#fff" strokeWidth="4" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#fff" strokeWidth="3" />

                  {/* Park/court areas */}
                  <rect x="110" y="110" width="130" height="80" fill="#c8e6c9" rx="4" />
                  <rect x="260" y="30" width="80" height="60" fill="#c8e6c9" rx="4" />

                  {/* Water */}
                  <rect x="0" y="230" width="90" height="70" fill="#b3d9e8" rx="0" />

                  {/* Court pins */}
                  {/* Main pin */}
                  <g transform="translate(168, 108)">
                    <circle cx="0" cy="0" r="16" fill="var(--teal)" opacity="0.2" />
                    <circle cx="0" cy="0" r="10" fill="var(--teal)" />
                    <circle cx="0" cy="0" r="4" fill="white" />
                  </g>
                  {/* Secondary pins */}
                  <g transform="translate(290, 52)">
                    <circle cx="0" cy="0" r="8" fill="var(--teal)" opacity="0.7" />
                    <circle cx="0" cy="0" r="3" fill="white" />
                  </g>
                  <g transform="translate(310, 175)">
                    <circle cx="0" cy="0" r="8" fill="var(--teal)" opacity="0.7" />
                    <circle cx="0" cy="0" r="3" fill="white" />
                  </g>
                  <g transform="translate(65, 175)">
                    <circle cx="0" cy="0" r="8" fill="var(--terra)" opacity="0.8" />
                    <circle cx="0" cy="0" r="3" fill="white" />
                  </g>
                </svg>
              </div>

              {/* Map UI overlay */}
              <div className="absolute top-4 left-4 right-4">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl shadow-md text-xs"
                  style={{ background: "var(--surface)", color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
                >
                  <svg className="w-3.5 h-3.5" style={{ color: "var(--teal)" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                  </svg>
                  <span>Portland, OR</span>
                  <span
                    className="ml-auto font-medium"
                    style={{ color: "var(--teal)" }}
                  >
                    12 courts
                  </span>
                </div>
              </div>

              {/* Court detail popup */}
              <div
                className="absolute bottom-4 left-4 right-4 p-3 rounded-xl shadow-lg"
                style={{ background: "var(--surface)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: "var(--teal-light)" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "var(--teal)" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-semibold truncate"
                      style={{ color: "var(--ink)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      Westmoreland Park Courts
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-2.5 h-2.5 star-filled" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs ml-1" style={{ color: "var(--ink-muted)" }}>4.8</span>
                    </div>
                  </div>
                  <a
                    href="https://whatyoudink.com/map.php"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg flex-shrink-0"
                    style={{ background: "var(--teal)", color: "white", fontFamily: "var(--font-dm-sans)" }}
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
