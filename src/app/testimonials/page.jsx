import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section
        id="testimonials"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8"
      >
        <title>TESTIMONIALS RAKIB SARKER</title>
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Testimonials
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            What clients and collaborators say about my work.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm text-slate-700 dark:text-slate-200">
                “The team was amazed by the speed of delivery and the quality
                was top-tier. Communication stayed excellent throughout the
                project.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                — Anna B., Product Manager
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm text-slate-700 dark:text-slate-200">
                “Amazing React architecture and responsive design. Our app now
                feels modern and performs much better on every device.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                — Daniel R., CTO
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm text-slate-700 dark:text-slate-200">
                “Professional, friendly, and detail-oriented. Delivered seamless
                experience with accessibility focus that impressed
                stakeholders.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                — Leila K., Founder
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
