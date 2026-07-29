"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  personalInfo,
  aboutText,
  stats,
  skillCategories,
} from "@/data/portfolio";
import Image from "next/image";

function StatCard({ stat, index }) {
  return (
    <motion.div
      className="text-center p-6 border border-border rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}+</div>
      <div className="text-xs text-muted tracking-wider uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const allSkills = skillCategories.flatMap((c) => c.skills).slice(0, 6);

  return (
    <main className="relative min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Who I Am
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 mb-16 items-start">
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed">{aboutText.intro}</p>
            <p className="text-muted leading-relaxed">{aboutText.detail}</p>
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--btn-secondary-border)] rounded-full text-sm text-[var(--btn-secondary-text)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl border border-border overflow-hidden bg-card flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-30 h-30 mx-auto rounded-full border border-border flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">
                    <Image
                      src="/IMG_20260510_022238.png"
                      alt="Profile"
                      width={500}
                      height={500}
                      className="rounded"
                    />
                  </span>
                </div>
                <h3 className="font-bold text-lg">{personalInfo.name}</h3>
                <p className="text-muted text-sm">{personalInfo.role}</p>
                <p className="text-muted text-xs mt-2">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>

        <motion.div
          className="border-t border-border pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 text-center">
            Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill) => (
              <motion.span
                key={skill.name}
                className="px-4 py-2 border border-border rounded-full text-sm text-muted hover:text-[var(--link-hover)] hover:border-[var(--link-hover)]/30 transition-all"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm border-b border-[var(--link-color)] hover:border-[var(--link-hover)] pb-1 transition-colors"
          >
            See my work
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
