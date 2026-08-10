import { founderQuote } from "@/lib/data";
import Reveal from "./Reveal";

export default function FounderQuote() {
  return (
    <section className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mx-auto max-w-[760px] rounded-card border border-line bg-bg-soft px-8 py-14 text-center sm:px-14">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          {founderQuote.eyebrow}
        </p>
        <p className="mb-8 font-head text-[clamp(1.3rem,2.4vw,1.7rem)] font-medium leading-[1.4] tracking-[-0.01em]">
          &ldquo;{founderQuote.quote}&rdquo;
        </p>
        <p className="text-sm font-semibold text-ink">{founderQuote.attribution}</p>
        <p className="text-[0.82rem] text-ink-dim">{founderQuote.attributionSub}</p>
      </Reveal>
    </section>
  );
}
