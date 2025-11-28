"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#our-barbers", label: "Our Barbers" },
    { href: "#gallery", label: "Gallery" },
    { href: "#book-now", label: "Book Now" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm text-white">
            ✂
          </div>
          <span className="text-md font-semibold">Barbershop</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-4 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-full transition-colors hover:bg-gray-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-8 w-8 flex-col items-center justify-center rounded-full hover:bg-gray-200 lg:hidden"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </nav>

      <ul
        className={`
    lg:hidden flex flex-col gap-2 pr-5 pb-4 text-sm font-medium items-end
    overflow-hidden transition-all duration-200 ease-out
    ${
      isOpen
        ? "max-h-96 opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-2"
    }
  `}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-full transition-colors hover:bg-gray-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
