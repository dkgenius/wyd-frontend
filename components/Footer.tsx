import Link from "next/link";

const footerLinks = {
  Explore: [
    { label: "Find Courts", href: "https://whatyoudink.com/map.php" },
    { label: "Court Reviews", href: "https://whatyoudink.com/blog.php" },
    { label: "Product Reviews", href: "https://whatyoudink.com/blog.php" },
    { label: "The Clinic", href: "https://whatyoudink.com/clinic.php" },
  ],
  Connect: [
    { label: "YouTube", href: "https://www.youtube.com/@WhatYouDink" },
    { label: "About WYD", href: "https://whatyoudink.com/about.php" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="mt-24 border-t"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "var(--teal)" }}
              >
                W
              </span>
              <span
                className="font-semibold text-[15px] tracking-tight"
                style={{ fontFamily: "var(--font-syne)", color: "var(--ink)", fontWeight: 700 }}
              >
                WhatYouDink
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
            >
              Real in-person pickleball court reviews, honest ratings, and a
              searchable map to find the right spot for your game.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-teal-700"
                      style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
          >
            © {new Date().getFullYear()} WhatYouDink. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://whatyoudink.com/privacy.php"
              className="text-xs transition-colors hover:text-teal-700"
              style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
            >
              Privacy
            </a>
            <a
              href="https://whatyoudink.com/terms.php"
              className="text-xs transition-colors hover:text-teal-700"
              style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
