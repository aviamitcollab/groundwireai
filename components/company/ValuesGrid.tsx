import { companyValues } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ValuesGrid({ heading }: { heading: string }) {
  return (
    <section className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Values
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {heading}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-3">
        {companyValues.map((value, i) => (
          <Reveal key={value.title} delay={i * 0.06}>
            <div className="border-t border-line pt-5">
              <h3 className="mb-2 font-head text-base font-semibold">{value.title}</h3>
              <p className="text-[0.88rem] text-ink-dim">{value.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
