import { enterpriseProjects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Capstone() {
  return (
    <section
      id="capstone"
      className="mx-auto max-w-content scroll-mt-28 px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Capstone project
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Ship a <em>real</em> agent system, not a toy demo.
        </h2>
        <p className="mt-4 max-w-[520px] text-ink-dim">
          In Module 14 you&rsquo;ll build and present a capstone modeled on
          one of these production use cases.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {enterpriseProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05} className="h-full">
            <div className="flex h-full flex-col gap-2.5 bg-bg p-6 transition-colors duration-300 hover:bg-bg-soft">
              <span className="w-fit rounded-full border border-line px-2.5 py-0.5 text-[0.68rem] font-medium uppercase tracking-[0.04em] text-ink-dim">
                {project.tag}
              </span>
              <h3 className="font-head text-[0.95rem] font-semibold">{project.name}</h3>
              <p className="text-[0.82rem] text-ink-dim">{project.meta}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
