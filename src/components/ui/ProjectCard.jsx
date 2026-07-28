"use client"

import { motion } from "framer-motion"

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="group relative border border-border rounded-2xl overflow-hidden bg-card hover:border-[var(--card-hover-border)] transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <div className="relative h-48 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-10 font-bold tracking-tighter select-none">
            {String(project.id).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wider uppercase border border-border px-2.5 py-1 rounded-full text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {project.highlights && (
          <ul className="space-y-1.5 mb-5">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="text-xs text-muted flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="text-[var(--bullet-color)] mt-0.5">-</span>
                {h}
              </motion.li>
            ))}
          </ul>
        )}

        <div className="flex gap-5 pt-2 border-t border-border">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider uppercase text-muted hover:text-[var(--link-hover)] transition-colors"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider uppercase text-muted hover:text-[var(--link-hover)] transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}
