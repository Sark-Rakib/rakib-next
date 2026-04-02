import React from "react";
import Link from "next/link";

export default function Stories() {
  const story = [
    {
      id: 1,
      title: "My Journey into Web Development",
      date: "2025-06-10",
      content: `
      <p>I started my journey as a curious learner who wanted to build websites.</p>
      <p>At first, HTML and CSS felt simple, but JavaScript opened a whole new world.</p>
      <p>Now, I build modern web apps using React and Next.js.</p>
    `,
    },
    {
      id: 2,
      title: "Building My First Portfolio",
      date: "2025-07-15",
      content: `
      <p>Creating my first portfolio was both exciting and challenging.</p>
      <p>I focused on clean UI, responsiveness, and performance.</p>
      <p>It helped me land my first opportunities.</p>
    `,
    },
    {
      id: 3,
      title: "Why I Love Tailwind CSS",
      date: "2025-07-28",
      content: `
      <p>Tailwind CSS changed how I write styles.</p>
      <p>No more switching between files — everything is in one place.</p>
      <p>It makes development faster and cleaner.</p>
    `,
    },
    {
      id: 4,
      title: "Learning React the Smart Way",
      date: "2025-08-12",
      content: `
      <p>React made development more structured and scalable.</p>
      <p>Understanding components, props, and state was key.</p>
      <p>Then I moved into hooks and advanced patterns.</p>
    `,
    },

    {
      id: 5,
      title: "My First Freelance Project",
      date: "2025-09-20",
      content: `
      <p>Getting my first client was a big milestone.</p>
      <p>I built a responsive website with modern UI.</p>
      <p>Client satisfaction gave me confidence to move forward.</p>
    `,
    },
    {
      id: 6,
      title: "Exploring 3D in Web Development",
      date: "2025-10-15",
      content: `
      <p>3D web development felt like magic.</p>
      <p>I started using React Three Fiber and Drei.</p>
      <p>Now I create interactive 3D experiences.</p>
    `,
    },
    {
      id: 7,
      title: "From Frontend to Mern Stack",
      date: "2025-11-10",
      content: `
      <p>I started learning backend with Node.js and Express.</p>
      <p>Connected MongoDB for real-world applications.</p>
      <p>Now I can build complete Mern-stack apps.</p>
    `,
    },
    {
      id: 8,
      title: "Deploying Projects with Vercel",
      date: "2025-11-13",
      content: `
      <p>Deployment is just as important as development.</p>
      <p>Vercel made it super easy for Next.js apps.</p>
      <p>Now I deploy projects in minutes.</p>
    `,
    },
  ];

  return (
    <div className="bg-black text-white">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <title>STORIES RAKIB SARKER</title>
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Stories</h1>
          <p className="text-gray-400 mt-2">
            Thoughts, case studies and write-ups about frontend engineering.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {story.map((s) => (
            <article
              key={s.id}
              className="p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-sm text-gray-400 mb-4">
                {new Date(s.date).toLocaleDateString()}
              </p>
              {/* <p className="text-gray-300 mb-4">{s.content}</p> */}
              <div className="mt-4">
                <Link
                  href={`/stories/${s.id}`}
                  className="text-indigo-400 hover:underline"
                >
                  Read story
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
