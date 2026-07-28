"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbA = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orbB = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbC = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 md:px-16 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <motion.div
          style={{ y: orbA }}
          className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full opacity-40 blur-[80px]"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(51,87,232,0.45),transparent_70%)]" />
        </motion.div>
        <motion.div
          style={{ y: orbB }}
          className="absolute -right-36 top-[10%] h-[420px] w-[420px] rounded-full opacity-40 blur-[80px]"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(232,148,15,0.35),transparent_70%)]" />
        </motion.div>
        <motion.div
          style={{ y: orbC }}
          className="absolute -bottom-44 left-[30%] h-[360px] w-[360px] rounded-full opacity-35 blur-[80px]"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(51,87,232,0.3),transparent_70%)]" />
        </motion.div>
        <div className="grid-overlay absolute inset-0" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[840px]"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-block rounded-full border border-line px-4 py-1.5 text-sm font-medium tracking-[0.02em] text-accent"
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-6 font-head text-[clamp(2.6rem,6.4vw,5.2rem)] font-semibold leading-[1.03] tracking-[-0.03em]"
        >
          {hero.headlineBefore}
          <em>{hero.headlineEm}</em>
          {hero.headlineAfter}
        </motion.h1>
        <motion.p
          variants={item}
          className="mb-9 max-w-[560px] text-[clamp(1rem,1.6vw,1.2rem)] text-ink-dim"
        >
          {hero.sub}
        </motion.p>
        <motion.div variants={item} className="mb-16 flex flex-wrap items-center gap-4">
          {hero.ctas.map((cta) => {
            if (cta.variant === "primary") {
              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  data-cursor="hover"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_10px_30px_rgba(51,87,232,0.25)]"
                >
                  {cta.label}
                </a>
              );
            }
            if (cta.variant === "ghost") {
              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  data-cursor="hover"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {cta.label}
                </a>
              );
            }
            return (
              <a
                key={cta.label}
                href={cta.href}
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-accent"
              >
                {cta.label} <span aria-hidden>→</span>
              </a>
            );
          })}
        </motion.div>
        <motion.div
          variants={item}
          className="flex items-center gap-3 text-xs text-ink-dim"
        >
          <span>Scroll</span>
          <div className="relative h-10 w-px overflow-hidden bg-line">
            <span className="absolute left-0 top-[-40px] h-10 w-full animate-scrollDown bg-gradient-to-b from-accent to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
