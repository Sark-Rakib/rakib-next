"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <main className="relative min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="text-muted text-sm mt-4 max-w-md mx-auto">
            A selection of projects I have built and contributed to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
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
            Have a project in mind?
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
