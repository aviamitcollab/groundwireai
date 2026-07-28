import { Linkedin } from "lucide-react";
import { founders } from "@/lib/data";
import Reveal from "./Reveal";

export default function Mentors() {
  return (
    <section
      id="mentors"
      className="mx-auto max-w-content scroll-mt-28 px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-14 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Certification & Instructors
        </p>
        <h2 className="mb-4 font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Taught by the people who <em>build</em> this stuff.
        </h2>
        <p className="text-[0.95rem] text-ink-dim">
          Certification is earned, not handed out — it requires passing
          module evaluations and presenting a working capstone project to
          program instructors.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {founders.map((founder, i) => (
          <Reveal key={founder.name} delay={i * 0.08}>
            <div className="flex h-full flex-col gap-4 rounded-card border border-line bg-bg-soft p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink font-head text-sm font-semibold text-bg">
                  {founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-head text-base font-semibold">{founder.name}</h3>
                  <p className="text-[0.82rem] text-ink-dim">{founder.title}</p>
                </div>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label={`${founder.name} on LinkedIn`}
                  className="ml-auto text-ink-dim transition-colors hover:text-accent"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <p className="text-[0.88rem] text-ink-dim">{founder.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
