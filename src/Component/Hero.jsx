"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../public/603848285_2118057782275193_7694275342413896210_n.jpg";
import Link from "next/link";
import { useEffect } from "react";

export default function Hero({
  title = "HELLO, I'M RAKIB SARKER",
  subtitle = "I build minimal, accessible web experiences.",
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 🔥 Parent container (stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Item animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="flex items-center text-white py-40">
      <title>RAKIB SARKER</title>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* 🔥 Left Content */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              className="text-sm font-medium text-green-300 mb-3"
              variants={fadeUp}
            >
              🚀 Frontend developer
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              variants={fadeUp}
            >
              {title}
            </motion.h1>

            <motion.p className="mt-4 text-lg max-w-lg" variants={fadeUp}>
              {subtitle}
            </motion.p>

            <motion.div className="mt-6 flex gap-4" variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-5 py-2 rounded-md font-medium"
              >
                <Link href="/projects">Projects</Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-5 py-2 rounded-md font-medium hover:bg-white hover:text-gray-900 transition"
              >
                <Link href="/about/contact">Contact</Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 🔥 Right Image */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                  src={heroImg}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-full object-cover border-4 border-white shadow-2xl"
                />
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
