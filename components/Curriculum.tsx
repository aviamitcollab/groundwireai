import { academyCurriculum } from "@/lib/data";
import Reveal from "./Reveal";

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="mx-auto max-w-content scroll-mt-28 px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Curriculum
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          14 modules, four phases, <em>zero fluff</em>.
        </h2>
      </Reveal>

      <div className="flex flex-col gap-14">
        {academyCurriculum.map((phase, phaseIndex) => (
          <Reveal key={phase.phase} delay={phaseIndex * 0.06}>
            <div className="flex flex-col gap-6 border-t border-line pt-7 sm:flex-row sm:gap-10">
              <div className="sm:w-56 sm:shrink-0">
                <h3 className="font-head text-lg font-semibold">{phase.phase}</h3>
                <p className="text-[0.85rem] text-ink-dim">{phase.weeks}</p>
              </div>
              <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
                {phase.modules.map((module) => (
                  <div key={module.num} className="flex gap-3.5">
                    <span className="font-head text-sm text-accent">{module.num}</span>
                    <div>
                      <h4 className="mb-1.5 font-head text-[0.95rem] font-semibold">
                        {module.title}
                      </h4>
                      <p className="text-[0.85rem] text-ink-dim">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
