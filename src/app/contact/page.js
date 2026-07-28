"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
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
            Contact
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Get In Touch
          </h1>
          <p className="text-muted text-sm mt-4 max-w-md mx-auto">
            Have a project, question, or just want to say hi? Drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border border-border rounded-xl px-4 py-3.5 text-[var(--input-text)] text-sm placeholder-muted focus:outline-none focus:border-[var(--input-border-focus)] transition-colors peer"
                    placeholder="Name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border border-border rounded-xl px-4 py-3.5 text-[var(--input-text)] text-sm placeholder-muted focus:outline-none focus:border-[var(--input-border-focus)] transition-colors peer"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-transparent border border-border rounded-xl px-4 py-3.5 text-[var(--input-text)] text-sm placeholder-muted focus:outline-none focus:border-[var(--input-border-focus)] transition-colors peer"
                  placeholder="Subject"
                />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-transparent border border-border rounded-xl px-4 py-3.5 text-[var(--input-text)] text-sm placeholder-muted focus:outline-none focus:border-[var(--input-border-focus)] transition-colors resize-none peer"
                  placeholder="Your message..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 border border-[var(--btn-primary-border)] rounded-xl text-sm text-[var(--btn-secondary-text)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="border border-border rounded-xl p-6">
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted mb-0.5">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm hover:text-[var(--link-hover)] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Location</p>
                  <p className="text-sm">{personalInfo.location}</p>
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Contact Number</p>
                  <p className="text-sm">+8801745762857</p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
                Social
              </h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(personalInfo.social).map(([key, url]) => (
                  <motion.a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-border rounded-full text-xs tracking-wider uppercase text-muted hover:text-[var(--link-hover)] hover:border-[var(--link-hover)]/30 transition-all"
                    whileHover={{ y: -2 }}
                  >
                    {key}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
                Availability
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--green-dot)] animate-pulse" />
                <span className="text-sm">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
