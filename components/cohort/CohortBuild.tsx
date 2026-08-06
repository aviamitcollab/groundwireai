import type { Cohort } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CohortBuild({ cohort }: { cohort: Cohort }) {
  return (
    <section
      id="program"
      className="mx-auto max-w-content scroll-mt-28 px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
            What you&rsquo;ll build
          </p>
          <h2 className="mb-4 font-head text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            {cohort.buildHeading}
          </h2>
          <p className="mb-8 max-w-[520px] text-[0.92rem] text-ink-dim">
            {cohort.buildDescription}
          </p>
          <div className="flex flex-col border-t border-line">
            {cohort.pillars.map((pillar) => (
              <div key={pillar.label} className="flex gap-4 border-b border-line py-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-bg-soft text-[0.68rem] font-bold text-accent">
                  {pillar.icon}
                </span>
                <p className="text-[0.9rem] text-ink-dim">
                  <span className="font-semibold text-ink">{pillar.label}</span>{" "}
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink-dim">
            Program Arc
          </p>
          <div className="flex flex-col gap-4">
            {cohort.programArc.map((phase) => (
              <div
                key={phase.weeks}
                className="rounded-card border border-line bg-bg-soft p-6"
              >
                <p className="mb-2.5 text-[0.78rem] font-semibold tracking-[0.01em] text-accent">
                  {phase.weeks}
                </p>
                <p className="text-[0.95rem] text-ink">{phase.goal}</p>
                {phase.capstone && (
                  <span className="mt-3.5 inline-block rounded-full bg-ink px-3 py-1 text-[0.68rem] font-semibold text-bg">
                    {phase.capstone}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
