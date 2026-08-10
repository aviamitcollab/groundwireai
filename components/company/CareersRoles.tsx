import { careers, contactEmail } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CareersRoles() {
  return (
    <section className="mx-auto max-w-content border-t border-line px-5 py-24 sm:px-8 md:px-16 md:py-32">
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Open roles
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Where we&rsquo;re hiring.
        </h2>
      </Reveal>

      {careers.openRoles.length === 0 ? (
        <Reveal>
          <div className="rounded-card border border-line bg-bg-soft px-8 py-14 text-center">
            <p className="mx-auto max-w-[480px] text-[0.95rem] text-ink-dim">
              {careers.noRolesNote}
            </p>
            <a
              href={`mailto:${contactEmail}?subject=GroundwireAI%20-%20Open%20to%20Future%20Roles`}
              data-cursor="hover"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_10px_30px_rgba(51,87,232,0.25)]"
            >
              Introduce yourself
            </a>
          </div>
        </Reveal>
      ) : (
        <div className="flex flex-col border-t border-line">
          {careers.openRoles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.06}>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-6">
                <div>
                  <h3 className="font-head text-base font-semibold">{role.title}</h3>
                  <p className="text-[0.82rem] text-ink-dim">{role.location}</p>
                </div>
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                    `GroundwireAI - ${role.title} Application`
                  )}`}
                  data-cursor="hover"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  Apply
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
