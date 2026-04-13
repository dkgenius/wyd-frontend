"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Courts", href: "https://whatyoudink.com/map.php" },
  { label: "Reviews", href: "https://whatyoudink.com/blog.php" },
  { label: "Clinic", href: "https://whatyoudink.com/clinic.php" },
  { label: "Videos", href: "https://www.youtube.com/@WhatYouDink" },
  { label: "About", href: "https://whatyoudink.com/about.php" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-frosted shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "var(--teal)" }}
          >
            W
          </span>
          <span
            className="font-display font-700 text-[15px] tracking-tight hidden sm:block"
            style={{ color: "var(--ink)", fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            WhatYouDink
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") && !link.href.includes("whatyoudink.com") ? "_blank" : undefined}
              rel={link.href.startsWith("http") && !link.href.includes("whatyoudink.com") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium transition-colors duration-200 hover:text-teal-700"
              style={{ color: "var(--ink-muted)", fontFamily: "var(--font-dm-sans)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://whatyoudink.com/map.php"
            className="ml-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-px"
            style={{
              background: "var(--teal)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Find Courts
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors hover:bg-parchment-dark"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ background: "var(--ink)" }}
          />
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
            style={{ background: "var(--ink)" }}
          />
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
            style={{ background: "var(--ink)" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 right-0 nav-frosted transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-parchment-dark"
              style={{ color: "var(--ink)", fontFamily: "var(--font-dm-sans)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://whatyoudink.com/map.php"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 px-4 rounded-full text-sm font-semibold text-white text-center"
            style={{ background: "var(--teal)" }}
          >
            Find Courts Near You
          </a>
        </nav>
      </div>
    </header>
  );
}
