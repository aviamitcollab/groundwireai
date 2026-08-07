import type { Product } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProductVision({ product }: { product: Product }) {
  return (
    <section className="mx-auto max-w-content border-t border-line px-5 py-24 text-center sm:px-8 md:px-16 md:py-32">
      <Reveal className="mx-auto flex max-w-[640px] flex-col items-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Where this is going
        </p>
        <h2 className="mb-4 font-head text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {product.visionHeading}
        </h2>
        <p className="text-[0.95rem] text-ink-dim">{product.visionDescription}</p>
      </Reveal>
    </section>
  );
}
