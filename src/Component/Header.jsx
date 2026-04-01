"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBook,
  FaStar,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/", icon: <FaHome /> },
  { label: "About", href: "/about", icon: <FaUser /> },
  { label: "Projects", href: "/projects", icon: <FaProjectDiagram /> },
  { label: "Stories", href: "/stories", icon: <FaBook /> },
  { label: "Testimonials", href: "/testimonials", icon: <FaStar /> },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
        {/* NAV BAR */}
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold text-white tracking-wide"
          >
            RAKIB SARKER
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 flex items-center gap-2 rounded-md text-sm font-medium transition ${
                    active
                      ? "bg-white text-black"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {Icon}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 py-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition ${
                    active
                      ? "bg-white text-black"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {Icon}
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
