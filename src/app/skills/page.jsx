"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { skillCategories } from "@/data/portfolio";

function SkillBar({ name, level, icon, index }) {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-6 rounded border border-border flex items-center justify-center text-[10px] font-mono text-muted">
            {icon}
          </span>
          {name}
        </span>
        <span className="text-xs text-muted font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[var(--skill-bar)] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2 + index * 0.05,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
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
            Expertise
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Skills
          </h1>
          <p className="text-muted text-sm mt-4 max-w-md mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.5 }}
            >
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-6">
                {category.title}
              </h3>
              {category.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={i}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm border-b border-[var(--link-color)] hover:border-[var(--link-hover)] pb-1 transition-colors"
          >
            See my experience
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
