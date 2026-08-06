import type { Cohort } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CohortWhoFor({ cohort }: { cohort: Cohort }) {
  return (
    <section className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Fit check
        </p>
        <h2 className="font-head text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Who this program is for.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
        <Reveal className="bg-bg p-8">
          <p className="mb-5 text-[0.92rem] font-semibold text-accent">
            A strong fit if you&rsquo;re —
          </p>
          <ul className="flex flex-col gap-3">
            {cohort.whoFor.yes.map((line) => (
              <li key={line} className="relative pl-5 text-[0.88rem] text-ink-dim">
                <span className="absolute left-0 text-ink-dim/50">—</span>
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08} className="bg-bg p-8">
          <p className="mb-5 text-[0.92rem] font-semibold text-ink">
            Not the right fit if you —
          </p>
          <ul className="flex flex-col gap-3">
            {cohort.whoFor.no.map((line) => (
              <li key={line} className="relative pl-5 text-[0.88rem] text-ink-dim">
                <span className="absolute left-0 text-ink-dim/50">—</span>
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
