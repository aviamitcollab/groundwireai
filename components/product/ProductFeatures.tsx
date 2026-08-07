import type { Product } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProductFeatures({ product }: { product: Product }) {
  const accentClass = product.accent === "accent-2" ? "text-accent-2" : "text-accent";

  return (
    <section className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          What it does
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {product.solutionHeading}
        </h2>
      </Reveal>

      <div className="flex flex-col border-t border-line">
        {product.features.map((feature, i) => (
          <Reveal key={feature.num} delay={i * 0.06}>
            <div className="flex flex-col gap-3 border-b border-line py-8 sm:flex-row sm:gap-8">
              <span className={`font-head text-2xl font-semibold ${accentClass} sm:w-16 sm:shrink-0`}>
                {feature.num}
              </span>
              <div>
                <h3 className="mb-2 font-head text-lg font-semibold">{feature.title}</h3>
                <p className="max-w-[560px] text-[0.9rem] text-ink-dim">{feature.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
