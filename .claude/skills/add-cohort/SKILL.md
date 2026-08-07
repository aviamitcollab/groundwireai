---
name: add-cohort
description: Add a new cohort/course to the GroundwireAI Bootcamp (content/bootcamp/cohorts.json), following the same template and content bar as the enterprise-ai-cohort reference page. Use whenever asked to add, create, or draft a new cohort, course, or track.
---

# Add a Bootcamp cohort

This site's cohort pages (`/bootcamp/[slug]`) are entirely data-driven — one entry in `content/bootcamp/cohorts.json` per cohort, rendered through a shared template (`app/bootcamp/[slug]/page.tsx` + `components/cohort/*`). Adding a cohort is a **content task, not a code task**: don't touch component code unless the new cohort genuinely needs a new visual pattern the template can't express.

Follow every rule below. This is what keeps a new cohort page held to the same bar as `enterprise-ai-cohort`, the reference implementation — skipping a rule is how pages drift into looking like a lower tier of content.

## 1. Schema — every cohort entry needs these fields

```json
{
  "slug": "kebab-case-url-slug",
  "trackLabel": "X Track",
  "courseName": "Formal Course Name",
  "accent": "accent" | "accent-2",
  "eyebrow": "Cohorts opening soon · X Track",
  "title": "Punchy, outcome-focused headline — not a course-catalog name.",
  "summary": "One sentence, used on the /bootcamp card preview.",
  "description": "2-3 sentence hero paragraph — the fuller pitch.",
  "ctaSubject": "X Cohort - Early Access",
  "stats": [ /* 4 items — see RULE 1 below, this is the one most often gotten wrong */ ],
  "buildHeading": "...",
  "buildDescription": "...",
  "pillars": [ /* 4 items: {icon, label, description} — icon is 1-2 chars */ ],
  "programArc": [ /* 3 phases: {weeks, goal, capstone?} — see RULE 3 for pacing */ ],
  "whoFor": { "yes": [/* 4 */], "no": [/* 3 */] },
  "whyHeading": "...",
  "whyDescription": "...",
  "whyUs": [ /* 6 items: {title, description} */ ],
  "format": [ /* 4 items: {value, label} — duration, cadence, capstone count, one differentiator */ ],
  "closingHeadline": "..."
}
```

Plus exactly one of these two relationship fields (see RULE 2):

```json
"crossLink": { "slug": "...", "label": "..." }
```
```json
"sequence": {
  "trackName": "X Track",
  "courseNumber": 1,
  "totalCourses": 2,
  "nextSlug": "...", "nextTitle": "...",   // course 1 only
  "prevSlug": "...", "prevTitle": "..."     // course 2+ only
}
```

`courseName` is only needed on cohorts that share a `trackLabel` with another cohort (i.e. cohorts using `sequence`) — it's the short formal name shown in the grouped track card's sub-links on `/bootcamp` (e.g. "Core Playwright & Testing Frameworks"), separate from the punchier marketing `title`.

## RULE 1 — `stats` must be real, sourced, EXTERNAL market data. Never internal program facts.

The single most common mistake: filling `stats` with restated facts about the course itself ("12 modules", "1 capstone") instead of *why this matters right now* to the target learner. Compare:

- **Wrong** (what the Playwright cohorts originally shipped with, and had to be fixed): `"12 modules, built around one evolving application"`, `"1 graded capstone"` — this is just the `format` section's content duplicated.
- **Right** (the standard, set by `enterprise-ai-cohort`): `"87%"` — "of AI projects stall between proof-of-concept and production", `"340%"` — "year-over-year rise in prompt injection attacks (OWASP, 2026)".

Before writing `stats` for a new cohort:
1. Run a `WebSearch` for current market/industry data relevant to the cohort's subject (adoption rates, cost of the problem this course solves, market size, growth rate — whatever makes "why this course, why now" concrete).
2. Prefer numbers tied to a named, citable source, with the source in a short parenthetical (e.g. `(TestGuild, 2026)`, `(OWASP, 2026)`, `(Sembi, 2026)`).
3. Report the sources to the user in your reply (markdown links), same as any other WebSearch use.
4. Never fabricate a statistic. If you can't find real sourced data for a claim, don't invent one — use a real program fact instead (module count, capstone count) rather than a made-up market number. A true-but-modest stat beats a false-but-impressive one.
5. 4 stats total, matching the existing visual rhythm.

## RULE 2 — `crossLink` (parallel/alternative) vs `sequence` (prerequisite/follow-on)

These render completely different framing in the hero footer (`components/cohort/CohortHero.tsx`) — picking the wrong one misleads the learner about the relationship between cohorts.

- **`crossLink`**: the two cohorts are *alternatives* — a learner picks one or the other (e.g. Builder Track vs Field-Readiness Track). Renders as "Looking for the **X** instead?"
- **`sequence`**: the two (or more) cohorts are *sequential courses in one track* — a learner is expected to take them in order (e.g. QA Track's Core → Advanced). Renders as "Continue to **Course 2: X**" (from course 1) or "New to **Track**? Start with **Course 1: X**" (from course 2+).

If a new cohort is course 2+ of an existing multi-course track, give it the **same `trackLabel`** as its predecessor(s) — `components/CohortList.tsx` groups cohorts by `trackLabel` automatically and renders any group of 2+ as one combined track card with per-course sub-links. If you add a course to an *existing* multi-course track, also update (or add) the matching entry in `content/bootcamp/tracks.json` (`heading`, `summary`, `durationLabel`) to reflect the new total duration and course count.

## RULE 3 — Duration & pacing

Default pace: **2 modules/week**, plus **1 dedicated buffer week near the end reserved for the capstone** (not squeezed into a content week). Total weeks = `ceil(module_count / 2) + buffer`, then round to a clean number.

Reference point set for the QA Track: 12-module course → 8 weeks; 14-module course → 8 weeks. If module count differs meaningfully, recompute rather than reusing 8 by default — state the math to the user (weeks of content vs. buffer) the way it was worked out for the QA Track, since duration is a real tradeoff (shorter feels punchier/more differentiated from other tracks; longer allows more depth) and is worth surfacing rather than silently picking a number.

`programArc` (3 phases) should map to this: split modules into 3 roughly-proportional phases, with the final phase's week range including the buffer week and the `capstone` tag.

## RULE 4 — `programArc.goal` must state the outcome established, not the activities covered

Write each phase's `goal` as the milestone reached by the end of that week range — what the learner will have shipped or established — not a list of topics/verbs covered along the way. Someone should be able to read just the `goal` line and know what they'll walk away with at that checkpoint.

- **Wrong** (activity-list framing): `"Set up Playwright, master locator strategy, and structure every test with the Page Object Model from day one."`
- **Right** (outcome framing, the standard set by `enterprise-ai-cohort`): `"Ship a grounded assistant that can take a first real action."` / `"Make it robust: multi-agent, fine-tuned, evaluated, security-hardened."` / `"Make it live: gated CI/CD deployment and production monitoring."`

Pattern to follow: **[imperative verb phrase stating the outcome]**, optionally followed by **`: ` + a short elaboration list**. Lead with "Ship," "Make it [state]," "Extend it," or similar — not "Learn," "Cover," or "Set up." The last phase's goal should read as a clear finish line (often literally naming what's "complete" or "done"), since it's paired with the `capstone` tag.

## RULE 5 — Code changes are (usually) not needed

`generateStaticParams`, `app/sitemap.ts`, and `CohortList.tsx`'s grouping all iterate over `cohorts` / `cohortTracks` already — a new entry in `cohorts.json` (and `tracks.json` if it's joining a multi-course track) is picked up automatically with zero component or route changes. Only touch `components/cohort/*` if the new cohort needs a genuinely new section type the existing template can't express — and if so, treat that as a separate, explicit decision to raise with the user, not something to do silently while "just adding a cohort."

## RULE 6 — A reference example illustrates a concept, not a literal section to add

When the user shows a screenshot or link to another course's marketing page (a Udemy-style bullet checklist, a competitor's layout, etc.), treat it as illustrating *what they mean* by an idea — not a literal instruction to bolt a new section onto the template. Confirm what specifically should carry over before adding a new section type or field; don't infer it from the reference image alone.

Case in point: a screenshot of a Udemy-style "What you'll learn" granular bullet checklist was shown alongside "at the end of week 3 what will I established." The actual intent was RULE 4's outcome-framing for `programArc.goal` — not a request for a new, separate bullet-list section. A `CohortLearn` component and `whatYoullLearn` field were built to match the screenshot, then had to be fully reverted once the user clarified: *"I just gave that as a guidance for outcome, not necessary to follow as it is."* If a genuinely new section is wanted later, treat it as its own explicit decision (per RULE 5), not something to infer from a reference image.

## RULE 7 — Verify before shipping

1. `python3 -m json.tool content/bootcamp/cohorts.json` (and `tracks.json` if touched) — must parse.
2. `npx tsc --noEmit` — must be clean.
3. `npm run build` — must generate a static page for the new slug.
4. Load the new page locally (`preview_start` the `groundwireai` launch config) and read through it — check the grouped track card if applicable, the `sequence`/`crossLink` footer line, and that `stats` actually shows sourced external data, not restated facts.
5. Do **not** run `npx vercel --prod` or push to git unless the user has explicitly asked you to publish — treat a new cohort exactly like any other content change awaiting review, per this project's normal workflow.
