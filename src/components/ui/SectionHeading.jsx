"use client";

import { motion } from "framer-motion";
import { slideInFromBottom } from "@/lib/animations";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInFromBottom(0)}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
        {title}
        <motion.span
          className="absolute -bottom-2 left-0 h-1 bg-white"
          initial={{ width: 0 }}
          // whileInView={{ width: "100%" }}
          // viewport={{ once: true }}
          // transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </h2>
      {subtitle && <p className="text-muted mt-4 text-lg">{subtitle}</p>}
    </motion.div>
  );
}
