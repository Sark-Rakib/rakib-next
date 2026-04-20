import React from "react";
import Image1 from "../../../public/Screenshot from 2026-04-02 03-15-16.png";
import Image2 from "../../../public/Screenshot from 2026-04-02 03-04-20.png";
import Image3 from "../../../public/Screenshot from 2026-04-02 03-30-49.png";
import Image4 from "../../../public/Screenshot from 2026-04-02 05-07-42.png";
import Image5 from "../../../public/Screenshot from 2026-04-20 15-54-11.png";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: Image5,
    title: "Chatify - Real-time Messaging App",
    description:
      "Finally built my own real-time messaging web app — Chatify. It's a messenger-style application where users can -> Send & receive messages instantly, Share images Secure authentication, Real-time updates without refreshing",

    tags: ["React", "Next.js", "Tailwind", "Supabase", "PostgreSQL"],
    liveURL: "https://chatify-bd.vercel.app",
    GithubClient: "https://github.com/Sark-Rakib/messenger-app",
    GithubServer: "https://github.com/Sark-Rakib/messenger-app",
  },
  {
    id: 2,
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
    GithubClient: "https://github.com/Sark-Rakib/lunor-client",
    GithubServer: "https://github.com/Sark-Rakib/lunor-server",
  },
  {
    id: 3,
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
    GithubClient: "https://github.com/Sark-Rakib/dessert-shop-client",
    GithubServer: "https://github.com/Sark-Rakib/dessert-shop-server",
  },
  {
    id: 4,
    image: Image3,
    title: "Dragon News",
    description:
      "A modern news web application built with React and Tailwind CSS, featuring Firebase authentication for secure user access. Includes dynamic news categories, protected routes, and smooth animations using AOS. Designed with a responsive layout to ensure a seamless reading experience across all devices.",
    tags: ["React", "AOS", "Tailwind", "Firebase"],
    liveURL: "https://dragonsnews.netlify.app",
    GithubClient: "https://github.com/Sark-Rakib/The-Dragon-News",
  },
  {
    id: 5,
    image: Image4,
    title: "Mk Sports",
    description:
      "A modern sports web application built with React and Tailwind CSS, featuring Firebase authentication for secure user access. It provides dynamic products categories, protected routes, and real-time content rendering for an engaging user experience. The platform is fully responsive across all devices and includes smooth UI animations to enhance usability and readability.",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Nodemailer",
    ],
    liveURL: "https://mk-sports.vercel.app",
    GithubClient: "https://github.com/Sark-Rakib/mk-sports",
    GithubServer: "https://github.com/Sark-Rakib/mk-sports-server",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white">
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

              <div className="mt-2 flex flex-col flex-1">
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
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <Link
                      href={p.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:underline text-sm"
                    >
                      Live Preview →
                    </Link>
                  </div>
                  <div className="flex flex-row gap-5">
                    {p.GithubClient && (
                      <Link
                        href={p.GithubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline text-sm"
                      >
                        Client Code →
                      </Link>
                    )}
                    {p.GithubServer && (
                      <Link
                        href={p.GithubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline text-sm"
                      >
                        Server Code →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
