import { techStack } from "@/lib/data";
import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="mx-auto max-w-content scroll-mt-28 px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          05&nbsp;&nbsp;Technology stack
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Built on the tools <em>enterprises</em> already trust.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="rounded-card border border-line bg-bg-soft p-6">
              <h3 className="mb-4 font-head text-sm font-semibold uppercase tracking-[0.08em] text-ink-dim">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line bg-bg px-3 py-1.5 text-[0.8rem] text-ink"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
