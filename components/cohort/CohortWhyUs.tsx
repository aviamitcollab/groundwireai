import type { Cohort } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CohortWhyUs({ cohort }: { cohort: Cohort }) {
  return (
    <section className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Why GroundwireAI
        </p>
        <h2 className="mb-4 font-head text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {cohort.whyHeading}
        </h2>
        <p className="max-w-[560px] text-[0.92rem] text-ink-dim">{cohort.whyDescription}</p>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {cohort.whyUs.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.05}>
            <div className="border-t border-line pt-5">
              <h3 className="mb-2 font-head text-base font-semibold">{point.title}</h3>
              <p className="text-[0.88rem] text-ink-dim">{point.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
