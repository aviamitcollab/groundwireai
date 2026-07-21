import { programs } from "@/lib/data";
import Reveal from "./Reveal";

export default function Programs() {
  return (
    <section
      id="programs"
      className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          01&nbsp;&nbsp;What we teach
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Programs built to <em>upskill</em>.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, i) => (
          <Reveal key={program.num} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col gap-3.5 bg-bg p-7 transition-colors duration-300 hover:bg-bg-soft">
              <span className="font-head text-sm text-ink-dim">
                {program.num}
              </span>
              <h3 className="font-head text-xl font-semibold">
                {program.title}
              </h3>
              <p className="flex-1 text-[0.92rem] text-ink-dim">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-[0.72rem] text-ink-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
