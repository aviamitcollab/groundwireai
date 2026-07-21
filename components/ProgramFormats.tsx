"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { programFormats } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProgramFormats() {
  return (
    <section
      id="cohorts"
      className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          03&nbsp;&nbsp;Program formats
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Ways to <em>learn</em> with us.
        </h2>
      </Reveal>

      <div className="flex flex-col border-t border-line">
        {programFormats.map((format, i) => (
          <Reveal key={format.name} delay={i * 0.06}>
            <motion.a
              href="#contact"
              data-cursor="hover"
              whileHover="hover"
              className="group flex items-center justify-between gap-6 border-b border-line py-7 transition-colors duration-200 hover:text-accent"
            >
              <motion.span
                variants={{ hover: { x: 12 } }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-3.5 font-head text-lg font-semibold"
              >
                {format.name}
                <span className="rounded-full border border-line px-3 py-1 font-body text-[0.7rem] font-medium uppercase tracking-[0.04em] text-ink-dim">
                  {format.tag}
                </span>
              </motion.span>
              <span className="hidden flex-1 text-right text-[0.85rem] text-ink-dim sm:block">
                {format.meta}
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-dim" />
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
