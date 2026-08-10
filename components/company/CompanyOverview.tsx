import { pillars } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CompanyOverview() {
  return (
    <section className="mx-auto max-w-content border-t border-line px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          What we do
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Three pillars, <em>one production bar</em>.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.id} delay={i * 0.08}>
            <div className="rounded-card border border-line bg-bg-soft p-7">
              <h3 className="mb-2 font-head text-base font-semibold">{pillar.title}</h3>
              <p className="text-[0.88rem] text-ink-dim">{pillar.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
