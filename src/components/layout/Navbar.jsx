"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const menuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", damping: 28, stiffness: 260, mass: 0.8 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring", damping: 28, stiffness: 260, mass: 0.8 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.12 + i * 0.06,
      type: "spring",
      damping: 20,
      stiffness: 200,
    },
  }),
};

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem("navAnimated");
    if (!played) {
      sessionStorage.setItem("navAnimated", "true");
      setAnimateIn(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--nav-bg-scrolled)] backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
        initial={animateIn ? { y: -100 } : false}
        animate={{ y: 0 }}
        transition={animateIn ? { duration: 0.6 } : { duration: 0 }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight uppercase text-[var(--brand-color)]"
          >
            <motion.span
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              Rakib<span className="text-muted"> sarker</span>
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                    isActive
                      ? "text-[var(--nav-text-hover)]"
                      : "text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 bg-[var(--nav-active-bg)] rounded-full -z-10"
                      layoutId="nav-active"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
            {mounted && (
              <button
                onClick={toggle}
                className="ml-3 w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-[var(--nav-text-hover)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg
                    className="w-3.5 h-3.5 text-[var(--nav-text-hover)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ) : (
                  <svg
                    className="w-3.5 h-3.5 text-[var(--nav-text-hover)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                onClick={toggle}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-border relative z-50"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg
                    className="w-3.5 h-3.5 text-[var(--hamburger)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ) : (
                  <svg
                    className="w-3.5 h-3.5 text-[var(--hamburger)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col items-center gap-1">
                <motion.span
                  className="block h-[1.5px] bg-[var(--hamburger)] rounded-full w-full origin-center"
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 6.5, scaleX: 1.1 }
                      : { rotate: 0, y: 0, scaleX: 1 }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                />
                <motion.span
                  className="block h-[1.5px] bg-[var(--hamburger)] rounded-full w-full"
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0.5 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block h-[1.5px] bg-[var(--hamburger)] rounded-full w-full origin-center"
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -6.5, scaleX: 1.1 }
                      : { rotate: 0, y: 0, scaleX: 1 }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-40 w-[80vw] max-w-sm bg-[var(--mobile-bg)] backdrop-blur-2xl border-l border-border"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="pt-24 px-8 flex flex-col h-full">
                <nav className="flex-1">
                  {links.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        custom={i}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                        className={`block relative py-4 text-xl sm:text-2xl tracking-tight transition-colors border-b border-border/50 ${
                          isActive
                            ? "text-[var(--mobile-link-active)]"
                            : "text-[var(--mobile-link)] hover:text-[var(--mobile-link-hover)]"
                        }`}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-xs font-mono text-muted w-5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </nav>
                <div className="pb-10 text-center">
                  <Link href="/contact">
                    <p className="text-[10px] tracking-[0.2em] text-muted uppercase">
                      Let&apos;s connect
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
