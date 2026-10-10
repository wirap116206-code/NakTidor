"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "Faq" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="px-6 sm:px-20 h-18 flex items-center justify-between z-50 sticky top-0">
      <Logo />

      {/* Desktop navigation */}
      <ul className="hidden md:flex opacity-90 bg-[#0f172a] gap-10 p-3 px-8 text-gray-300 rounded-full">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="hover:text-fuchsia-500 transition"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger / close button */}
      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
        className="md:hidden z-50 text-gray-300 cursor-pointer"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop sign in */}
      <Link
        href="/login"
        className="hidden md:block bg-fuchsia-700 px-6 py-2 rounded-full font-semibold text-white hover:bg-fuchsia-600 transition-colors"
      >
        Sign In
      </Link>

      {/* Mobile sidebar */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-slate-900 flex flex-col items-center justify-center gap-8 text-gray-300 z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="text-2xl hover:text-fuchsia-500 transition-colors"
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href="/login"
            onClick={closeMenu}
            className="block bg-fuchsia-700 px-6 py-2 rounded-full font-semibold text-white hover:bg-fuchsia-600 transition-colors"
          >
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
}
