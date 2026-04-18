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
                }, { threshold: 0.12 });
                document.querySelectorAll('.reveal, .court-line').forEach(function(el) {
                  io.observe(el);
                });
                var mo = new MutationObserver(function() {
                  document.querySelectorAll('.reveal:not(.is-visible), .court-line:not(.is-drawn)').forEach(function(el) {
                    io.observe(el);
                  });
                });
                mo.observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
