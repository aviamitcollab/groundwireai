"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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

export default function PageHero({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string;
  heading: ReactNode;
  sub: string;
}) {
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
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-6 font-head text-[clamp(2.2rem,5.2vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
        >
          {heading}
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-[560px] text-[clamp(1rem,1.4vw,1.15rem)] text-ink-dim"
        >
          {sub}
        </motion.p>
      </motion.div>
    </section>
  );
}
