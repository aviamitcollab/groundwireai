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
          06&nbsp;&nbsp;Let&rsquo;s talk
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Ready to go enterprise AI-native? <em>Let&rsquo;s talk.</em>
        </h2>
        <p className="mt-4 max-w-[520px] text-ink-dim">
          Tell us about your team or organization — we&rsquo;ll scope the right
          path across Academy, Consulting or Products, and an AI expert follows
          up within one business day.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${contactEmail}?subject=Join%20Next%20Cohort`}
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_10px_30px_rgba(51,87,232,0.25)]"
          >
            Join Next Cohort
          </a>
          <a
            href={`mailto:${contactEmail}?subject=AI%20Strategy%20Call`}
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Talk to an AI Expert
          </a>
        </div>
      </Reveal>
    </section>
  );
}
