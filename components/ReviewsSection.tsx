// ReviewsSection fetches latest posts from the WYD API at runtime
// For SSG compatibility we use a client component with useEffect,
// but since this is a marketing page we can also use server-side fetching.

import ReviewsClient from "./ReviewsClient";

export default function ReviewsSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="pill mb-4 reveal"
              style={{
                background: "var(--teal-light)",
                color: "var(--teal)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--teal)" }}
              />
              Latest Reviews
            </div>
            <h2
              className="text-4xl font-extrabold tracking-tight leading-tight reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-syne)",
                color: "var(--ink)",
              }}
            >
              Courts & gear,
              <br />
              honestly reviewed.
            </h2>
          </div>
          <a
            href="https://whatyoudink.com/blog.php"
            className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-all hover:gap-3 reveal reveal-delay-2"
            style={{ color: "var(--teal)", fontFamily: "var(--font-dm-sans)" }}
          >
            All Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Review cards — live from API */}
        <ReviewsClient />
      </div>
    </section>
  );
}
