import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "What You Dink — Pickleball Court Reviews & Finder",
  description:
    "Find the best pickleball courts near you. Real in-person court reviews, ratings, video walkthroughs, and a searchable map of spots nationwide.",
  openGraph: {
    title: "What You Dink",
    description: "Find the best pickleball courts near you.",
    url: "https://whatyoudink.com",
    siteName: "What You Dink",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* Reveal animation observer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ANIM_CLASSES = [
                  '.reveal', '.reveal-left', '.reveal-right',
                  '.reveal-scale', '.reveal-fade', '.reveal-tilt', '.reveal-blur',
                  '.court-line'
                ];
                var selector = ANIM_CLASSES.join(', ');

                var io = new IntersectionObserver(function(entries) {
                  entries.forEach(function(e) {
                    if (e.isIntersecting) {
                      e.target.classList.add('is-visible');
                      if (e.target.classList.contains('court-line')) {
                        e.target.classList.add('is-drawn');
                      }
                      io.unobserve(e.target);
                    }
                  });
                }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

                function observeAll() {
                  document.querySelectorAll(selector).forEach(function(el) {
                    if (!el.classList.contains('is-visible') && !el.classList.contains('is-drawn')) {
                      io.observe(el);
                    }
                  });
                }
                observeAll();

                var mo = new MutationObserver(observeAll);
                mo.observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
