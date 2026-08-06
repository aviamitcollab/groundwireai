import { pillars } from "@/lib/data";
import Reveal from "./Reveal";

export default function Programs() {
  return (
    <section
      id="pillars"
      className="mx-auto max-w-content px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          01&nbsp;&nbsp;How we help
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Three ways we help you go <em>enterprise AI-native</em>.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.id} delay={i * 0.1} className="h-full">
            <article
              id={pillar.id}
              className="flex h-full scroll-mt-28 flex-col gap-4 bg-bg p-8 transition-colors duration-300 hover:bg-bg-soft"
            >
              <span className="font-head text-sm text-ink-dim">{pillar.num}</span>
              <h3 className="font-head text-2xl font-semibold">{pillar.title}</h3>
              <p className="flex-1 text-[0.95rem] text-ink-dim">{pillar.description}</p>
              <ul className="flex flex-col gap-1.5">
                {pillar.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-[0.85rem] text-ink-dim"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={pillar.cta.href}
                  data-cursor="hover"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-ink"
                >
                  {pillar.cta.label} <span aria-hidden>→</span>
                </a>
                {pillar.id === "bootcamp" && (
                  <a
                    href="/bootcamp"
                    data-cursor="hover"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
                  >
                    View curriculum <span aria-hidden>→</span>
                  </a>
                )}
                {pillar.id === "consulting" && (
                  <a
                    href="/consulting"
                    data-cursor="hover"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
                  >
                    View services <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
