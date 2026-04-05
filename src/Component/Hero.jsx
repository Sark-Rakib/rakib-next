"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { PiLinkedinLogo } from "react-icons/pi";

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
  const resume =
    "https://drive.google.com/file/d/1HuEzyqkEJ6_z3bpMQWwhkJrEQB4liyba/view?usp=sharing";

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
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-10"
      >
        <source src="/13522169-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <section className="flex items-center text-white py-40 z-12 relative -mt-13 sm:mt-2 md:mt-0">
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
                  <Link href={resume} target="_blank">
                    Resume
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 text-gray-300 text-xl mt-5"
                variants={fadeUp}
              >
                {/* Email */}
                <a
                  href="mailto:mdrakibsarkar1@gmail.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <IoMailOutline />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rakib-sarker-"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <PiLinkedinLogo />
                </a>

                {/* GitHub (X er jaygay usually GitHub use kore dev ra 😏) */}
                <a
                  href="https://github.com/Sark-Rakib"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <FaGithub />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801745762857"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <FaWhatsapp />
                </a>
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
    </>
  );
}
