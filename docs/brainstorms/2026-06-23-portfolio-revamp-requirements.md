---
date: 2026-06-23
topic: portfolio-revamp
---

# Portfolio Revamp

## Summary

A rebuilt single-page dark portfolio optimized as a post-click credibility surface for Big Tech SWE recruiters, replacing the current high-motion design with a restrained polished-agency aesthetic. Refreshes the hero with sharper positioning and direct CTAs, presents six projects (including the new Jarvis system) as scannable cards with real metrics, and reorganizes the experience timeline into a compact list led by the current Amazon AWS Security role.

---

## Problem Frame

The current portfolio site exists, but it isn't earning its job. The audience is Big Tech SWE recruiters at companies like Amazon, Pinterest, Bloomberg, Palantir, Jane Street, Two Sigma, Capital One, Microsoft, Airbnb, and Duolingo — recruiters who reach the site *after* deciding from a resume or application that the candidate is worth a closer look, and who spend roughly thirty seconds confirming whether to proceed. The site is the credibility checkpoint, not a discovery surface.

Today the site fights that job in three concrete ways:

1. **The hero buries the signal.** The headline reads "Software Engineer | Data Scientist | Cybersecurity Specialist" with no proof attached — no current role, no shipped-product callout, no credibility line. A recruiter has to scroll to learn anything.
2. **There is no resume CTA anywhere on the site.** A recruiter scanning the site cannot reach a resume without leaving and finding one elsewhere.
3. **The visual treatment signals the wrong genre.** Vanta dots, custom cursor, particle animations, and gradient-clipped text read as "early portfolio experimentation," not as the polished engineer that the underlying experience — Amazon AWS Security, JPMC, a shipped iOS app with 1k+ downloads, Geneva censorship research, and a recent Hackathon Finalist — actually represents.

The cost: every recruiter visit that closes the tab without finding the resume, GitHub, or a sharp project signal is a leak in a funnel that the candidate's own application work paid to create.

---

## Requirements

**Hero**
- R1. The hero presents the candidate name, a single-line positioning statement, and one line of concrete credibility (current role, school, and one shipped-product or hackathon callout).
- R2. The hero exposes three primary CTAs visible without scrolling: download/view resume, GitHub profile, and direct email.
- R3. The hero background uses restrained styling — no animated particle system, no gradient-clipped headline text, no custom cursor. A single subtle motion moment (reveal, hover, or similar) is acceptable for personality.

**Selected work**
- R4. Six projects are presented as cards in a grid: ReachSearch, Jarvis, FireSync, NPOConnect, SkyCast, SaveAPlate. Ordering favors recent and high-signal work — ReachSearch leads (shipped iOS app with adoption), Jarvis follows (most recent, technically deepest, Hackathon Finalist).
- R5. Each card surfaces scannable metadata: title, one-sentence description, stack chips, role/year, and a primary metric where one exists (downloads, precision, time savings, etc.).
- R6. Cards link out to the live product or repo when one exists. Cards without an external destination do not pretend to be clickable.
- R7. The Jarvis project card uses the screenshot provided by the candidate (saved at `public/jarvis.png`). Brief description: a four-stage spatial reasoning pipeline (OpenCV, MiDaS, MediaPipe, YOLOv8) processing 8+ hours of jobsite footage in 15 minutes for hand-tool interaction and hazard analysis; localize-and-zoom inference with temporal majority voting reduced hallucinated detections by 42% and achieved 81% precision on high-severity safety events; Voice AI agent delivers cited reports in under two seconds.

**Experience**
- R8. Experience is presented as a compact list (company · role · location · date range · one-sentence description), not the current vertical timeline.
- R9. The Amazon SDE Intern role (AWS Security, Herndon VA, June 2026 – August 2026) is listed first and visibly marked as current. Brief description: building Spring Boot APIs in Kotlin for Amazon's internal rule evaluation service governing 100k+ Amazon teams; shipped a Boolean algebra reduction engine and a natural-language rule translation API that cut stakeholder audit time by 84%.
- R10. Existing roles preserved: JPMorgan Chase (Software Engineer Intern, CIB Finance, June 2025 – August 2025), University of Maryland (Undergraduate Researcher, Geneva Censorship Team, January 2025 – present), Pfizer (SAP Technical Developer, May 2024 – June 2025), and UT-Dallas Internship Program (Big Data Analytics Intern, Summer 2022; Concurrent Computing Intern, Summer 2021).

**About**
- R11. The about section is reduced to approximately one paragraph. The duplicate mobile/desktop prose split and the long lead-in are removed.

**Navigation and footer**
- R12. The navbar reflects only sections that exist; the stale "Services" link is removed.
- R13. The contact form is removed. Direct contact options (email, LinkedIn, GitHub) are presented as buttons in a footer-style section.

**Visual system**
- R14. Theme is dark across the site.
- R15. Typography is a refined sans pairing with an intentional weight and spacing scale. No gradient-clipped headline text.
- R16. Motion is restrained throughout: subtle reveals on scroll, hover affordances, and at most one signature interaction. No persistent animated backgrounds, no custom cursor, no per-card particle effects.
- R17. The current purple/pink gradient is reconsidered as the dominant treatment. If retained, it appears sparingly as an accent rather than the default treatment for headlines, buttons, badges, and section transitions.

---

## Success Criteria

- A recruiter landing on the site for the first time can identify the candidate's current role, school, one shipped product, and the path to the resume within five seconds.
- The aesthetic reads as polished engineer, not as experimental student portfolio — self-judgment (or peer review) against reference sites like Rauno Freiberg, Emil Kowalski, and Brian Lovin confirms the genre shift.
- All six projects are visible above unrelated content, with at least one concrete metric surfaced on each card.
- Resume, GitHub, and email are reachable in one click from above the fold.
- The site loads quickly — no heavy WebGL or particle libraries loading at runtime.
- A downstream planner (ce-plan) can break this brainstorm into implementation units without inventing product behavior, copy, or scope.

---

## Scope Boundaries

- No case study pages; all projects stay as cards.
- No blog or other writing surface.
- No SEO or discoverability work; the site optimizes for post-click conversion, not inbound traffic.
- No light theme.
- No multi-page architecture; the site remains single-page.
- No new projects beyond the six named in R4.
- No functional contact form backend; contact is direct-link only.
- No 3D / WebGL effects, React Three Fiber, Vanta, or particle libraries on the page (dependency cleanup can happen during execution but is not the primary goal).
- No rebuild of the "Services" section — the section and its nav link are removed.
- No animated custom cursor.
- No MDX or case study scaffolding for future writeups.

---

## Key Decisions

- **Single-page over multi-page.** Recruiters spend ~30 seconds on a credibility check; a single scannable page outperforms a multi-page site for this funnel and reduces maintenance.
- **Minimal credibility surface over editorial / narrative.** Selected in dialogue. The funnel rewards signal density, not personality. The optional "Now line" borrow from the editorial approach was also rejected.
- **Dark theme over light.** Selected in dialogue. Aligns with the Rauno end of the polished-agency reference set; also a lower-risk visual delta relative to the current dark site.
- **Full motion reset over incremental.** Vanta dots, custom cursor, and particle animations conflict with the polished-agency aesthetic. Half-measures (keep one heavy element) were considered and rejected.
- **Hero credibility line leads with Amazon, not JPMC.** Amazon is the current role (started June 2026) and is a brand-name peer to most companies in the target recruiter set.
- **Sharper cards over case studies.** Reduces writing burden, matches recruiter scanning behavior, and avoids investing in content recruiters won't read.
- **Remove the contact form, do not fix it.** The current form does not submit anywhere; a backend would add maintenance for a feature recruiters don't use.

---

## Dependencies / Assumptions

- **Resume PDF.** Execution depends on a current resume PDF being provided by the candidate. Without it, the Resume CTA cannot be wired up.
- **Existing project copy and metrics are factually accurate.** Execution may sharpen wording and surface metrics already present in the source (e.g., 1k+ ReachSearch downloads, 81% Jarvis precision, 42% hallucination reduction, 84% Amazon audit-time savings) but will not invent metrics.
- **Brand color.** The current purple/pink gradient is assumed available as a single accent. If the candidate wants a different accent palette (or none), that should be flagged before execution.
- **Image hosting.** Existing project and profile images stay on their current Vercel Blob storage URLs. The new Jarvis image lives locally at `public/jarvis.png`.
- **Tech stack remains Next.js 14 + TypeScript + Tailwind + Framer Motion.** No framework migration.

---

## Outstanding Questions

### Resolve Before Planning

*None.*

### Deferred to Planning

- [Affects R3, R16][Technical] Specific signature motion moment for the hero — what restrained interaction (parallax, text reveal, hover glow) best fits the polished-agency aesthetic without reintroducing heavy motion.
- [Affects R15][Technical] Specific typeface pairing — candidate fonts include Inter, Geist, and a monospace accent; planner selects based on aesthetic fit and loading cost.
- [Affects R17][Technical] Concrete accent palette decision — preserve the existing purple-pink gradient as a single accent versus shift to a more neutral system.
- [Affects R2][Needs research] Whether the resume CTA opens the PDF inline (new tab) or triggers a download. Both are acceptable; planner picks based on UX convention for the target audience.
