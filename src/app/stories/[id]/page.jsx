import Link from "next/link";
import React from "react";

const StoryDetails = async ({ params }) => {
  const { id } = await params;
  const story = [
    {
      id: 1,
      title: "My Journey into Web Development",
      date: "2024-01-10",
      content: `
      <p>I started my journey as a curious learner who wanted to build websites.</p>
      <p>At first, HTML and CSS felt simple, but JavaScript opened a whole new world.</p>
      <p>Now, I build modern web apps using React and Next.js.</p>
    `,
    },
    {
      id: 2,
      title: "Building My First Portfolio",
      date: "2024-02-05",
      content: `
      <p>Creating my first portfolio was both exciting and challenging.</p>
      <p>I focused on clean UI, responsiveness, and performance.</p>
      <p>It helped me land my first opportunities.</p>
    `,
    },
    {
      id: 3,
      title: "Learning React the Smart Way",
      date: "2024-03-12",
      content: `
      <p>React made development more structured and scalable.</p>
      <p>Understanding components, props, and state was key.</p>
      <p>Then I moved into hooks and advanced patterns.</p>
    `,
    },
    {
      id: 4,
      title: "Why I Love Tailwind CSS",
      date: "2024-04-01",
      content: `
      <p>Tailwind CSS changed how I write styles.</p>
      <p>No more switching between files — everything is in one place.</p>
      <p>It makes development faster and cleaner.</p>
    `,
    },
    {
      id: 5,
      title: "My First Freelance Project",
      date: "2024-05-20",
      content: `
      <p>Getting my first client was a big milestone.</p>
      <p>I built a responsive website with modern UI.</p>
      <p>Client satisfaction gave me confidence to move forward.</p>
    `,
    },
    {
      id: 6,
      title: "Exploring 3D in Web (Three.js)",
      date: "2024-06-15",
      content: `
      <p>Three.js opened up new possibilities for interactive web experiences.</p>
      <p>I experimented with 3D models, animations, and shaders.</p>
    `,
    },
  ];

  const result = story.find((s) => s.id === parseInt(id));

  if (!result) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16 text-white">
        <h1 className="text-3xl font-bold">Story not found</h1>
        <p className="mt-3 text-gray-400">
          The story you are looking for does not exist.
        </p>

        <Link
          href="/stories"
          className="inline-block mt-6 text-indigo-400 hover:underline"
        >
          ← Back to stories
        </Link>
      </main>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-16 text-white">
        <title>STORIES DETAILS RAKIB SARKER</title>
        <h1 className="text-3xl font-bold mb-4">{result.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          {new Date(result.date).toLocaleDateString()}
        </p>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: result.content }}
        />

        <Link
          href="/stories"
          className="inline-block mt-6 text-indigo-400 hover:underline"
        >
          ← Back to stories
        </Link>
      </main>
    </div>
  );
};

export default StoryDetails;
