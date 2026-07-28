"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

function Typewriter({ text, delay = 0 }) {
  return (
    <span className="inline-flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.04,
            duration: 0.35,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function StaggerText({ text, delay = 0 }) {
  return (
    <span className="inline-flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.03,
            duration: 0.3,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <motion.div
        className="fixed top-1/4 -left-16 w-48 h-48 rounded-full pointer-events-none z-0 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed bottom-1/3 -right-20 w-64 h-64  rounded-full pointer-events-none z-0 hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <section className="h-full pt-40 flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto text-start">
          <motion.div
            className="flex items-center justify-center gap-2.5 mb-3 sm:mb-4"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green-dot-ping)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green-dot)]" />
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted">
              Available for work
            </span>
          </motion.div>

          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted mb-4 sm:mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {personalInfo.location}
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-2">
            <Typewriter text={personalInfo.name} delay={0.4} />
          </h1>

          <motion.div
            className="overflow-hidden mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.1 }}
          >
            <p className="text-muted/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">
              <StaggerText text={personalInfo.role} delay={1.3} />
            </p>
          </motion.div>

          <motion.p
            className="text-muted text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-5 leading-relaxed px-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <span className="h-px w-8 bg-border" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[var(--divider-color)]" />
            <span className="h-px w-8 bg-border" />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="group relative px-7 py-2.5 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-[var(--btn-primary-bg)] rounded-full" />
              <span className="relative text-[var(--btn-primary-text)] font-medium">
                View My Work
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-7 py-2.5 sm:px-8 sm:py-3 border border-[var(--btn-secondary-border)] rounded-full text-xs sm:text-sm text-[var(--btn-secondary-text)] hover:text-[var(--btn-secondary-hover-text)] hover:border-[var(--btn-secondary-hover-border)] transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.p
            className="text-muted text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed px-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.5 }}
          >
            My passion is building performant, accessible web experiences that
            make a real impact. I thrive on turning complex problems into
            elegant, user-friendly solutions.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            {Object.entries(personalInfo.social).map(([key, url]) => {
              const icon = {
                github: (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
                linkedin: (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                twitter: (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              }[key];
              return (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--link-color)] hover:text-[var(--link-hover)] transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {icon}
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
