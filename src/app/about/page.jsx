import Link from "next/link";
import DpImage from "../../../public/603848285_2118057782275193_7694275342413896210_n.jpg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <title>ABOUT RAKIB SARKER</title>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-36 h-36 rounded-full bg-linear-to-br from-indigo-500 to-blue-400 mb-4 flex items-center justify-center text-3xl font-bold text-white">
              <Image
                src={DpImage}
                alt="Rakib Sarker"
                className="w-36 h-36 rounded-full object-cover"
              ></Image>
            </div>
            <h1 className="text-2xl font-bold mb-2">
              Rakib — Frontend Developer
            </h1>
            <p className="text-sm text-gray-400 max-w-sm">
              I build clean, performant web experiences with a focus on modern
              React and Next.js . I enjoy crafting interfaces that are both
              beautiful and accessible.
            </p>

            <div className="mt-6 w-full">
              <Link
                href="/projects"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                See projects
              </Link>
              <Link
                href="/about/contact"
                className="ml-3 inline-block text-sm text-indigo-600"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white/3 p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">Bio</h2>
              <p className="text-gray-300">
                I specialize in building interactive user interfaces using
                React, Next.js and TailwindCSS. My focus is on performance,
                accessibility and thoughtful UX. Recently I have been exploring
                3D components and transition driven experiences in the browser.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/3 rounded-lg">
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Tailwind",
                    "JavaScript",
                    "TypeScript",
                    "Firebase",
                    "Supabase",
                    "Node.js",
                    "Express",
                    "MongoDB",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-sm bg-white/6 text-white px-2 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white/3 rounded-lg">
                <h3 className="font-semibold mb-2">Experience</h3>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li>
                    <strong>Frontend Engineer</strong> — ACME Corp (2026 —
                    Present)
                  </li>
                  <li>
                    <strong>Intern</strong> — Web Studio (2025)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="p-4 bg-white/3 rounded-lg">
              <h4 className="font-semibold">3D Portfolio</h4>
              <p className="text-sm text-gray-300 mt-2">
                Minimal portfolio site with interactive 3D hero and animations.
              </p>
            </article>
            <article className="p-4 bg-white/3 rounded-lg">
              <h4 className="font-semibold">Design System</h4>
              <p className="text-sm text-gray-300 mt-2">
                Component library and tokens for consistent UI across products.
              </p>
            </article>
            <article className="p-4 bg-white/3 rounded-lg">
              <h4 className="font-semibold">Performance Optimizations</h4>
              <p className="text-sm text-gray-300 mt-2">
                Reduced initial load by 40% through code-splitting and caching.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
