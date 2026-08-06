import type { Cohort } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CohortStats({ cohort }: { cohort: Cohort }) {
  return (
    <section className="mx-auto max-w-content px-5 py-16 sm:px-8 md:px-16">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {cohort.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <p className="mb-2 font-head text-[clamp(1.8rem,3.4vw,2.4rem)] font-semibold tracking-[-0.02em]">
              {stat.value}
            </p>
            <p className="text-[0.85rem] text-ink-dim">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
