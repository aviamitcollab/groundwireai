import type { Product } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProductPain({ product }: { product: Product }) {
  return (
    <section className="mx-auto max-w-content border-t border-line px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          The problem
        </p>
        <h2 className="mb-4 font-head text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {product.painHeading}
        </h2>
        <p className="text-[0.95rem] text-ink-dim">{product.painDescription}</p>
      </Reveal>
    </section>
  );
}
