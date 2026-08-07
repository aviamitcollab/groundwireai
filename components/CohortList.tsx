import { ArrowRight } from "lucide-react";
import { cohorts, cohortTracks } from "@/lib/data";
import Reveal from "./Reveal";

function groupByTrack() {
  const groups: { trackLabel: string; cohorts: typeof cohorts }[] = [];
  for (const cohort of cohorts) {
    const existing = groups.find((g) => g.trackLabel === cohort.trackLabel);
    if (existing) {
      existing.cohorts.push(cohort);
    } else {
      groups.push({ trackLabel: cohort.trackLabel, cohorts: [cohort] });
    }
  }
  return groups;
}

export default function CohortList() {
  const groups = groupByTrack();

  return (
    <section
      id="cohorts"
      className="mx-auto max-w-content scroll-mt-28 px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      <Reveal className="mb-16 max-w-[680px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          Cohorts
        </p>
        <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Three tracks, <em>one production standard</em>.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => {
          if (group.cohorts.length === 1) {
            const cohort = group.cohorts[0];
            const accentClass = cohort.accent === "accent-2" ? "text-accent-2" : "text-accent";
            const duration = cohort.format[0];

            return (
              <Reveal key={group.trackLabel} delay={i * 0.08}>
                <a
                  href={`/bootcamp/${cohort.slug}`}
                  data-cursor="hover"
                  className="group flex h-full flex-col gap-5 rounded-card border border-line bg-bg-soft p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(23,26,43,0.08)]"
                >
                  <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.1em] ${accentClass}`}>
                    {cohort.trackLabel}
                  </p>
                  <h3 className="font-head text-xl font-semibold leading-[1.15] tracking-[-0.01em]">
                    {cohort.title}
                  </h3>
                  <p className="flex-1 text-[0.9rem] text-ink-dim">{cohort.summary}</p>
                  <div className="flex items-center justify-between border-t border-line pt-5">
                    <span className="text-[0.82rem] text-ink-dim">
                      {duration.value} {duration.label}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${accentClass}`}
                    >
                      View program
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          }

          const track = cohortTracks.find((t) => t.trackLabel === group.trackLabel);
          if (!track) return null;

          return (
            <Reveal key={group.trackLabel} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-5 rounded-card border border-line bg-bg-soft p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent">
                  {track.trackLabel}
                </p>
                <h3 className="font-head text-xl font-semibold leading-[1.15] tracking-[-0.01em]">
                  {track.heading}
                </h3>
                <p className="flex-1 text-[0.9rem] text-ink-dim">{track.summary}</p>
                <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
                  {group.cohorts.map((cohort) => {
                    const accentClass =
                      cohort.accent === "accent-2" ? "text-accent-2" : "text-accent";
                    return (
                      <a
                        key={cohort.slug}
                        href={`/bootcamp/${cohort.slug}`}
                        data-cursor="hover"
                        className="group flex items-center justify-between gap-3 bg-bg-soft px-4 py-3 transition-colors hover:bg-bg"
                      >
                        <span className="text-[0.82rem] text-ink">
                          <span className={`font-semibold ${accentClass}`}>
                            Course {cohort.sequence?.courseNumber}
                          </span>{" "}
                          — {cohort.courseName ?? cohort.title}
                        </span>
                        <ArrowRight
                          className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 ${accentClass}`}
                        />
                      </a>
                    );
                  })}
                </div>
                <p className="text-[0.78rem] text-ink-dim">{track.durationLabel}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
