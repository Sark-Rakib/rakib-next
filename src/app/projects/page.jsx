import React from "react";
import Image1 from "../../../public/Screenshot from 2026-04-02 03-15-16.png";
import Image2 from "../../../public/Screenshot from 2026-04-02 03-04-20.png";
import Image3 from "../../../public/Screenshot from 2026-04-02 03-30-49.png";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: Image1,
    title: "Lunor Brand Shop",
    description:
      "A full-stack e-commerce web application built with React, Node.js, Express, and MongoDB, featuring Firebase authentication for secure user management. Includes dynamic product listings, category-based filtering, and a responsive, modern UI. Designed to provide a smooth shopping experience with efficient data handling and clean component architecture.",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "EmailJS",
    ],
    liveURL: "https://lunorr.netlify.app",
  },
  {
    id: 2,
    image: Image2,
    title: "E-commerce Dashboard",
    description:
      "Production-ready full-stack web application built with React, Firebase Authentication, and MongoDB. Includes a responsive dashboard, product management system, and real-time data handling with a clean, modern UI.",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "EmailJS",
    ],
    liveURL: "https://harirshad.netlify.app",
  },
  {
    id: 3,
    image: Image3,
    title: "Dragon News",
    description:
      "A modern news web application built with React and Tailwind CSS, featuring Firebase authentication for secure user access. Includes dynamic news categories, protected routes, and smooth animations using AOS. Designed with a responsive layout to ensure a seamless reading experience across all devices.",
    tags: ["React", "AOS", "Tailwind", "Firebase"],
    liveURL: "https://dragonsnews.netlify.app",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <title>PROJECTS RAKIB SARKER</title>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-400 mt-2">
          Selected work and case studies — short descriptions and tech tags.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className=" rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
          >
            <Image
              src={p.image}
              alt={p.title}
              className="w-full object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>

              <p className="text-sm text-gray-300 mb-3">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/10 text-white px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 🔥 BUTTON ALWAYS BOTTOM */}
              <Link
                href={p.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-indigo-400 hover:underline text-sm"
              >
                Live Preview →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
