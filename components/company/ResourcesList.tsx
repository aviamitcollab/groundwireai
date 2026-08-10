import { resources } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ResourcesList() {
  return (
    <section className="mx-auto max-w-content border-t border-line px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, i) => (
          <Reveal key={resource.title} delay={i * 0.05}>
            <a
              href={resource.href}
              data-cursor="hover"
              className="group flex h-full flex-col rounded-card border border-line bg-bg-soft p-7 transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <span className="mb-4 inline-block w-fit rounded-full border border-line px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-accent">
                {resource.type}
              </span>
              <h3 className="mb-2 font-head text-base font-semibold">{resource.title}</h3>
              <p className="text-[0.85rem] text-ink-dim">{resource.description}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
