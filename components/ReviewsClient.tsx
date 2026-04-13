"use client";

import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail?: string;
  category?: string;
  date?: string;
  rating?: number;
}

const FALLBACK_POSTS: Post[] = [
  {
    id: 1,
    title: "Westmoreland Park — Portland, OR",
    slug: "westmoreland-park-portland",
    excerpt:
      "Eight outdoor courts with a vibrant community, consistent lighting for evening play, and well-maintained surfaces. One of Portland's top public spots.",
    category: "Court Review",
    rating: 5,
  },
  {
    id: 2,
    title: "Selkirk Vanguard Power Air Review",
    slug: "selkirk-vanguard-power-air",
    excerpt:
      "Selkirk delivers a paddle that rewards aggressive play. The carbon fiber face is remarkably consistent and the grip feel is premium out of the box.",
    category: "Paddle Review",
    rating: 4,
  },
  {
    id: 3,
    title: "Greenlake Community Center — Seattle, WA",
    slug: "greenlake-community-center-seattle",
    excerpt:
      "Indoor courts with consistent bounce and climate control. The front desk staff are welcoming to newcomers and open play runs all week.",
    category: "Court Review",
    rating: 4,
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "star-filled" : "star-empty"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function CategoryTag({ category }: { category: string }) {
  const isCourt = category.toLowerCase().includes("court");
  return (
    <span
      className="pill text-xs"
      style={{
        background: isCourt ? "var(--teal-light)" : "var(--terra-light)",
        color: isCourt ? "var(--teal)" : "var(--terra)",
        padding: "3px 10px",
        fontSize: "11px",
      }}
    >
      {category}
    </span>
  );
}

export default function ReviewsClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://whatyoudink.com/api/v1/posts.php?limit=3")
      .then((r) => r.json())
      .then((data) => {
        const items: Post[] = Array.isArray(data)
          ? data.slice(0, 3).map((p: Record<string, unknown>) => ({
              id: Number(p.id),
              title: String(p.title || ""),
              slug: String(p.slug || p.id || ""),
              excerpt: String(p.excerpt || p.summary || ""),
              thumbnail: p.thumbnail ? String(p.thumbnail) : undefined,
              category: p.category ? String(p.category) : "Review",
              rating: p.rating ? Number(p.rating) : 4,
            }))
          : [];
        setPosts(items.length > 0 ? items : FALLBACK_POSTS);
      })
      .catch(() => setPosts(FALLBACK_POSTS))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden animate-pulse"
            style={{ background: "var(--parchment)", height: 340 }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <a
          key={post.id}
          href={`https://whatyoudink.com/blog/${post.slug}`}
          className={`group block rounded-2xl overflow-hidden card-hover reveal reveal-delay-${i + 1}`}
          style={{
            border: "1px solid var(--border)",
            background: "var(--surface)",
            boxShadow: "0 2px 16px rgba(27,25,22,0.06)",
          }}
        >
          {/* Thumbnail */}
          <div
            className="thumb-zoom overflow-hidden aspect-[16/10]"
            style={{ background: "var(--teal-light)" }}
          >
            {post.thumbnail ? (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--teal-light), var(--parchment-dark))" }}
              >
                <svg
                  className="w-12 h-12 opacity-30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--teal)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12h.008v.008H13.5V12zm-4.5 3.75h12a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v8.25A2.25 2.25 0 004.5 18.75z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Card body */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              {post.category && <CategoryTag category={post.category} />}
              {post.rating && <StarRating rating={post.rating} />}
            </div>

            <h3
              className="font-bold text-base leading-snug mb-2 group-hover:text-teal-700 transition-colors"
              style={{
                fontFamily: "var(--font-syne)",
                color: "var(--ink)",
              }}
            >
              {post.title}
            </h3>

            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{
                color: "var(--ink-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {post.excerpt}
            </p>

            <div
              className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
              style={{ color: "var(--teal)", fontFamily: "var(--font-dm-sans)" }}
            >
              Read review
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
