"use client";

import { motion } from "framer-motion";
import { academyFacts, contactEmail } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function AcademyHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 md:px-16 md:pt-40">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full opacity-35 blur-[80px]">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(51,87,232,0.4),transparent_70%)]" />
        </div>
        <div className="grid-overlay absolute inset-0" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[760px]"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-block rounded-full border border-line px-4 py-1.5 text-sm font-medium tracking-[0.02em] text-accent"
        >
          Enterprise AI Academy
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-6 font-head text-[clamp(2.2rem,5.2vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
        >
          Become the engineer who ships <em>production</em> AI.
        </motion.h1>
        <motion.p
          variants={item}
          className="mb-9 max-w-[560px] text-[clamp(1rem,1.4vw,1.15rem)] text-ink-dim"
        >
          A live, cohort-based program that takes you from LLM fundamentals to
          production-grade agentic systems — the same standards our
          consulting and product teams build to.
        </motion.p>
        <motion.div variants={item} className="mb-14 flex flex-wrap gap-4">
          <a
            href={`mailto:${contactEmail}?subject=Enterprise%20AI%20Academy`}
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_10px_30px_rgba(51,87,232,0.25)]"
          >
            Join Next Cohort
          </a>
          <a
            href="#curriculum"
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            View curriculum
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-2 gap-6 rounded-card border border-line bg-bg-soft px-6 py-7 sm:grid-cols-4 sm:px-8"
        >
          {academyFacts.map((fact) => (
            <div key={fact.label}>
              <p className="mb-1 text-[0.72rem] uppercase tracking-[0.08em] text-ink-dim">
                {fact.label}
              </p>
              <p className="font-head text-sm font-semibold sm:text-base">
                {fact.value}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
