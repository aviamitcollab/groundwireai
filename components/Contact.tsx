import { contactEmail } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-content px-5 py-24 text-center sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mx-auto flex max-w-[680px] flex-col items-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          04&nbsp;&nbsp;Let&rsquo;s talk
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Have a cohort in mind? <em>Let&rsquo;s design it.</em>
        </h2>
        <p className="mt-4 max-w-[520px] text-ink-dim">
          Tell us about your students or team — we&rsquo;ll scope the right
          format and a program lead follows up within one business day.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${contactEmail}?subject=College%20AI%20Workshop`}
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_10px_30px_rgba(51,87,232,0.25)]"
          >
            Book a college workshop
          </a>
          <a
            href={`mailto:${contactEmail}?subject=Enterprise%20AI%20Cohort`}
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Start an enterprise cohort
          </a>
        </div>
      </Reveal>
    </section>
  );
}
