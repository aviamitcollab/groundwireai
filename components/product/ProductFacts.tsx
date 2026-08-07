import type { Product } from "@/lib/data";
import { contactEmail } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProductFacts({ product }: { product: Product }) {
  return (
    <>
      <section className="mx-auto max-w-content px-5 pb-8 sm:px-8 md:px-16">
        <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
          {product.facts.map((fact) => (
            <div key={fact.tag} className="bg-bg-soft px-6 py-8">
              <p className="mb-2 font-head text-base font-semibold">{fact.tag}</p>
              <p className="text-[0.82rem] text-ink-dim">{fact.description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-content px-5 py-24 text-center sm:px-8 md:px-16 md:py-32">
        <Reveal className="mx-auto flex max-w-[560px] flex-col items-center">
          <h2 className="mb-8 font-head text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            {product.closingHeadline}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {product.ctas.map((cta, i) => (
              <a
                key={cta.label}
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(cta.subject)}`}
                data-cursor="hover"
                className={
                  i === 0
                    ? "inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_10px_30px_rgba(51,87,232,0.25)]"
                    : "inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
