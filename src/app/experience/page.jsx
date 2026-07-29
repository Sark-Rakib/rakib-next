"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { experiences } from "@/data/portfolio"

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <div className="absolute left-0 top-1 bottom-0 w-px bg-border">
        <motion.div
          className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--dot-bg)] border-2 border-[var(--dot-border)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, delay: index * 0.2 }}
        />
        {index < experiences.length - 1 && (
          <motion.div
            className="absolute top-4 left-1/2 -translate-x-1/2 w-px bg-border"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          />
        )}
      </div>

      <div className="border border-border rounded-xl p-6 hover:border-[var(--card-hover-border)] transition-colors duration-300">
        <div className="flex flex-wrap items-baseline gap-3 mb-1">
          <h3 className="text-lg font-bold">{exp.role}</h3>
          <span className="text-xs text-muted">{exp.company}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted mb-4">
          <span>{exp.period}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{exp.location}</span>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">{exp.description}</p>
        {exp.achievements && (
          <ul className="space-y-1.5">
            {exp.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                className="text-xs text-muted flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="text-[var(--bullet-color)] mt-0.5 select-none">-</span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <main className="relative min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Career</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Experience</h1>
          <p className="text-muted text-sm mt-4 max-w-md mx-auto">
            My professional journey and the impact I have made.
          </p>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm border-b border-[var(--link-color)] hover:border-[var(--link-hover)] pb-1 transition-colors"
          >
            Let&apos;s work together
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
