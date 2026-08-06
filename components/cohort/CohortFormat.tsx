import { contactEmail } from "@/lib/data";
import type { Cohort } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CohortFormat({ cohort }: { cohort: Cohort }) {
  return (
    <>
      <section className="mx-auto max-w-content px-5 pb-8 sm:px-8 md:px-16">
        <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {cohort.format.map((item) => (
            <div key={item.label} className="bg-bg px-6 py-8 text-center">
              <p className="mb-1 font-head text-2xl font-semibold text-accent">{item.value}</p>
              <p className="text-[0.8rem] text-ink-dim">{item.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-content px-5 py-24 text-center sm:px-8 md:px-16 md:py-32">
        <Reveal className="mx-auto flex max-w-[560px] flex-col items-center">
          <h2 className="mb-4 font-head text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            {cohort.closingHeadline}
          </h2>
          <p className="mb-8 text-[0.92rem] text-ink-dim">
            Cohorts are small and instructor-led, opening on a rolling basis. Get on the
            list to hear first.
          </p>
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(cohort.ctaSubject)}`}
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_10px_30px_rgba(51,87,232,0.25)]"
          >
            Get Early Access
          </a>
        </Reveal>
      </section>
    </>
  );
}
