import type { Product } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProductCompliance({ product }: { product: Product }) {
  if (!product.compliance) return null;
  const { eyebrow, heading, description, items, note } = product.compliance;

  return (
    <section className="mx-auto max-w-content border-t border-line px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mb-4 font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {heading}
        </h2>
        <p className="text-[0.95rem] text-ink-dim">{description}</p>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.tag} className="bg-bg-soft px-6 py-8">
            <p className="mb-2 font-head text-base font-semibold">{item.tag}</p>
            <p className="text-[0.82rem] text-ink-dim">{item.description}</p>
          </div>
        ))}
      </Reveal>

      {note && (
        <Reveal className="mt-8 max-w-[680px] text-[0.82rem] italic text-ink-dim">
          <p>{note}</p>
        </Reveal>
      )}
    </section>
  );
}
