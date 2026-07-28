"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/portfolio"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <motion.footer
      className="border-t border-border mt-24 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-xs tracking-wider">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {Object.entries(personalInfo.social).map(([key, url]) => (
            <motion.a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-[var(--link-hover)] text-xs tracking-wider uppercase transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {key}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
