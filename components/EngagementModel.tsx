import { consultingEngagement } from "@/lib/data";
import Reveal from "./Reveal";

export default function EngagementModel() {
  return (
    <section
      id="engagement"
      className="mx-auto max-w-content scroll-mt-28 px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Engagement model
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          A tight, <em>governed</em> path — not an open-ended retainer.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {consultingEngagement.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.08}>
            <div className="border-t border-line pt-7">
              <span className="mb-3.5 block font-head text-sm text-accent">
                {step.num}
              </span>
              <h3 className="mb-2.5 font-head text-lg font-semibold">{step.title}</h3>
              <p className="text-[0.9rem] text-ink-dim">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
