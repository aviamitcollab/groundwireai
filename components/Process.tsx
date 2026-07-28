import { processSteps, stats } from "@/lib/data";
import Reveal from "./Reveal";
import AnimatedStat from "./AnimatedStat";

export default function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          02&nbsp;&nbsp;How we work
        </p>
        <h2 className="mb-4 font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          From strategy to <em>shipped</em>, in four steps.
        </h2>
        <p className="max-w-[520px] text-ink-dim">
          A tight, production-first process — across academy cohorts, consulting
          engagements, and product builds alike.
        </p>
      </Reveal>

      <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.08}>
            <div className="border-t border-line pt-7">
              <span className="mb-3.5 block font-head text-sm text-accent">
                {step.num}
              </span>
              <h3 className="mb-2.5 font-head text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-[0.9rem] text-ink-dim">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="grid grid-cols-2 gap-8 rounded-card border border-line bg-bg-soft px-6 py-12 sm:gap-6 md:grid-cols-4 md:px-12">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
