import { consultingServices } from "@/lib/data";
import Reveal from "./Reveal";

export default function ConsultingServices() {
  return (
    <section
      id="services"
      className="mx-auto max-w-content scroll-mt-28 px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Services
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Six ways we get you to <em>production</em>.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {consultingServices.map((service, i) => (
          <Reveal key={service.num} delay={i * 0.06} className="h-full">
            <div className="flex h-full flex-col gap-3.5 bg-bg p-7 transition-colors duration-300 hover:bg-bg-soft">
              <span className="font-head text-sm text-ink-dim">{service.num}</span>
              <h3 className="font-head text-lg font-semibold">{service.title}</h3>
              <p className="text-[0.88rem] text-ink-dim">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
