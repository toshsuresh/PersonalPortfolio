---
title: Portfolio Revamp
type: feat
status: active
date: 2026-06-28
origin: docs/brainstorms/2026-06-23-portfolio-revamp-requirements.md
---

# Portfolio Revamp

## Summary

Rebuilds the single-page portfolio as a recruiter-targeted credibility surface in a polished-agency aesthetic. Each page section is extracted into its own component, the dark + gradient styling is replaced with a Geist-typed neutral-dark theme on a single muted purple accent, Framer Motion is reduced to restrained scroll reveals and hover affordances, and the heavy 3D/particle dependency stack is removed.

---

## Problem Frame

The site already serves as a post-click credibility surface for Big Tech SWE recruiters, but today's visual treatment (Vanta dots, custom cursor, particle effects, pervasive purple-pink gradient) reads as experimental student portfolio rather than polished engineer, the hero buries the candidate's signal under a generic three-discipline label with no proof line, and there is no resume CTA anywhere on the page. See origin: `docs/brainstorms/2026-06-23-portfolio-revamp-requirements.md`.

---

## Requirements

- R1. Hero presents name, single-line positioning, one credibility line, and three above-the-fold CTAs (Resume / GitHub / Email) on a restrained background.
- R2. Six projects render as scannable cards with title, one-sentence description, stack chips, role/year, and a primary metric where one exists. Cards link out when a destination exists; cards without a destination do not pretend to be clickable.
- R3. Jarvis project card uses `public/jarvis.png`. Amazon SDE Intern (AWS Security, Herndon VA, June 2026 – August 2026) is the first entry in the experience list and visibly marked as current.
- R4. Experience renders as a compact list (company · role · location · date range · short description), replacing the existing vertical timeline.
- R5. About section is reduced to roughly one paragraph; the duplicate mobile/desktop prose split is removed.
- R6. Navbar reflects only sections that exist (no stale "Services" link); the contact form is removed and replaced with direct CTAs (email, LinkedIn, GitHub).
- R7. Theme is dark across the site; typography is a refined sans pairing with no gradient-clipped headline text; motion is restrained throughout (no persistent backgrounds, no custom cursor, no per-card particle effects); the existing purple/pink gradient is reduced to a single accent or removed.

---

## Scope Boundaries

- No case study pages; all projects stay as cards.
- No blog, MDX, or other writing surface.
- No SEO or discoverability work; the site optimizes for post-click conversion.
- No light theme.
- No multi-page architecture.
- No working contact form backend.
- No 3D / WebGL effects, React Three Fiber, Vanta, or particle libraries on the page.
- No animated custom cursor.
- No rebuild of the "Services" section; the section and its nav link are removed.

### Deferred to Follow-Up Work

- Resume PDF placement at `public/resume.pdf`: the CTA renders and links to that path, but the user must drop the actual file in afterward for the link to resolve. Not blocking the visual revamp.

---

## Context & Research

### Relevant Code and Patterns

- `app/page.tsx` — current single-page composition with all sections inline; target for refactor into a thin composition root over per-section components.
- `components/navbar.tsx` — current navbar with stale "Services" link and pink/purple gradient underline; refactored in place.
- `components/about-me.tsx` — current combined About + Experience timeline; split into `about-section.tsx` and `experience-list.tsx` and deleted.
- `tailwind.config.js` and `app/globals.css` — Tailwind theme uses HSL CSS variables defined in `globals.css`. New tokens slot into the existing variable pattern so shadcn-style components in `components/ui/*` keep working.
- `components/ui/button.tsx` — reused for hero and contact CTAs.
- Existing file-naming convention is kebab-case (`navbar.tsx`, `about-me.tsx`); new components follow.

### Institutional Learnings

- None applicable (no `docs/solutions/` in this repo).

### External References

- `next/font/google` ships Geist as a first-party option in Next.js 14; preferred over CDN font links for self-hosting and minimized FOIT.

---

## Key Technical Decisions

- **Per-section component extraction.** Each section (hero, selected-work, experience-list, about-section, contact-footer) becomes its own component file. Keeps `app/page.tsx` as a thin composition root and gives each implementation unit a focused diff.
- **Geist Sans + Geist Mono via `next/font`.** Self-hosted, zero external script. Sans for body and headings; Mono used sparingly for year/role metadata and stack tags — its technical feel signals "engineer" without becoming a gimmick.
- **Single muted purple accent, no recurring gradient.** Background is a deep neutral dark (zinc-950 range); foreground is a warm off-white. One accent color in the violet range is used for links, focus states, hover affordances, and small badges. The purple→pink gradient is dropped as a recurring treatment.
- **Restrained motion budget.** Framer Motion limited to (a) fade-up reveals on sections entering viewport, (b) hover lift on project cards, (c) a single tasteful fade-in for the hero on first paint. No mouse-follow, no parallax, no persistent backgrounds, no custom cursor, no per-card particle effects.
- **Resume CTA opens in a new tab** (`target="_blank"`), not forced download. Convention for SWE recruiter funnels; lower friction; the portfolio tab stays open.
- **Aggressive dependency cleanup.** Heavy unused deps (`vanta`, `three`, `@react-three/drei`, `@react-three/fiber`, `react-tsparticles`, `tsparticles-engine`, `tsparticles-slim`, `expo*`, `react-native`, `react-scroll`) are uninstalled in U1 alongside deletion of the unused motion components. Keeps the dep tree honest and prevents accidental re-import.
- **Replace `react-scroll` with native smooth scroll.** CSS `scroll-behavior: smooth` on the document plus standard anchor links. Native, no dep, accessible by default.

---

## Open Questions

### Resolved During Planning

- Typeface pairing → Geist Sans + Geist Mono via `next/font`.
- Accent palette → single muted purple, no recurring gradient.
- Signature motion → fade-up reveals + hover-lift, no parallax or mouse-follow.
- Resume CTA behavior → opens in new tab.

### Deferred to Implementation

- Exact accent shade (e.g., `violet-400` vs `violet-500` vs a custom HSL value) — resolved against rendered contrast during U1.
- Whether the candidate name in the hero keeps a single subtle gradient or strips it entirely — resolved against the rendered hero during U3.
- Exact hover-lift translate distance and easing curve — resolved by feel during U4.

---

## Implementation Units

### U1. Visual foundation reset

**Goal:** Clear the old aesthetic stack and install the new type/color tokens so every downstream unit renders in the correct system.

**Requirements:** R7

**Dependencies:** None

**Files:**
- Modify: `app/layout.tsx` — load Geist Sans + Geist Mono via `next/font`, apply font CSS variables to `<body>`, refresh the metadata description.
- Modify: `app/globals.css` — replace existing CSS variables with the new dark-theme palette (zinc-950 background, warm off-white foreground, single muted purple accent); add `scroll-behavior: smooth` on `html`.
- Modify: `tailwind.config.js` — add `fontFamily` tokens routed to the Geist CSS variables; extend color tokens for the new accent.
- Modify: `package.json` — remove `vanta`, `three`, `@react-three/drei`, `@react-three/fiber`, `react-tsparticles`, `tsparticles-engine`, `tsparticles-slim`, `expo`, `expo-asset`, `expo-file-system`, `expo-gl`, `react-native`, `react-scroll`.
- Delete: `components/ParticleAnimation.tsx`, `components/particles-animation.tsx`, `components/ParticleBackground.tsx`, `components/AnimatedBoxes.tsx`, `components/AnimatedBoxes3D.tsx`, `components/three-scene.tsx`, `components/header-particles.tsx`, `components/custom-cursor.tsx`, `components/InteractiveShapes.tsx`, `components/interactive-shapes.tsx`, `components/SkillCard.tsx`, `components/contact-email.tsx`, `components/loading.tsx`.

**Approach:**
- Load Geist via `next/font/google`; expose both Sans and Mono as CSS variables (`--font-sans`, `--font-mono`); wire them into Tailwind's `fontFamily.sans` and `fontFamily.mono` so existing utility classes pick them up.
- Keep the existing shadcn token names (`--background`, `--foreground`, `--accent`, `--border`, etc.) so any reused `components/ui/*` continues to render correctly. Only the values change.
- All `react-scroll` import sites are inside components being deleted in this unit, so no migration shim is needed.

**Patterns to follow:**
- Existing Tailwind config already routes colors through CSS variables — new tokens slot into the same pattern.

**Test scenarios:**
- Test expectation: none — pure config + dead-code removal. Behavior is verified by downstream units rendering correctly on top of this foundation.

**Verification:**
- `npm run dev` boots without errors. The page may render unstyled or partially broken at this stage (subsequent units fix it), but the dev server must not crash.
- `npm run build` succeeds.
- Grep for each deleted component name returns no `.tsx` import sites outside the deleted files themselves.
- `package.json` no longer lists any of the removed deps.

---

### U2. Navbar refresh

**Goal:** Simplify the navbar — remove the stale "Services" link, restyle to match the new aesthetic, keep the GitHub/LinkedIn icons.

**Requirements:** R6

**Dependencies:** U1

**Files:**
- Modify: `components/navbar.tsx`

**Approach:**
- Reduce navLinks to `Home`, `About`, `Work`, `Contact` (drop `Services`).
- Drop the gradient underline on hover; replace with a simple color shift to the accent color on hover.
- Keep the existing scroll-darkening behavior (background opacity on scroll), but route through the new neutral background token.
- Replace `react-scroll` `<ScrollLink>` usage with native anchor tags (`<a href="#section">`); the document-level `scroll-behavior: smooth` handles smoothness.

**Patterns to follow:**
- Existing scroll-listener `useEffect` in `navbar.tsx` — keep as-is.

**Test scenarios:**
- Happy path: Each nav link scrolls to its corresponding section when clicked.
- Edge case: On mobile widths (`md` and below), the menu toggle opens the mobile overlay; tapping a link closes the overlay and scrolls.
- Test expectation: visual verification in browser; no unit tests added.

**Verification:**
- Navbar renders with 4 links + GitHub + LinkedIn icons.
- No "Services" link visible anywhere.
- Clicking each link smoothly scrolls to its section on desktop and mobile.

---

### U3. Hero section

**Goal:** Replace the current hero with a minimal credibility-surface hero: name, positioning line, credibility line, and three CTAs (Resume / GitHub / Email).

**Requirements:** R1

**Dependencies:** U1

**Files:**
- Create: `components/hero.tsx`
- Modify: `app/page.tsx` — compose `<Hero />` in place of the current inline hero block; remove the Vanta script-loading `useEffect` and the `vantaRef`.

**Approach:**
- Centered single column. Generous vertical padding so the hero claims the full first viewport without competing with anything else.
- Content order:
  - Name as the dominant element in Geist Sans, tight tracking.
  - Single-line positioning beneath (e.g., "Software engineer building products people use.").
  - Credibility line in Geist Mono small caps with mid-grey color (e.g., "CS @ Maryland · SDE Intern @ Amazon (AWS Security) · 1k+ downloads on ReachSearch").
  - Three CTAs as a horizontal row: Resume (`<a href="/resume.pdf" target="_blank">`), GitHub (links to `https://github.com/toshsuresh`, new tab), Email (`mailto:santossuresh005@gmail.com`).
- Motion: one fade-up on initial mount. No continuous animation. No background effect.
- Background: solid neutral dark, no Vanta, no particles, no animated cursor. May include one extremely subtle gradient or noise overlay as a directional choice during execution — implementer's judgment.

**Patterns to follow:**
- `components/ui/button.tsx` for the CTA buttons; use the `outline` variant on two of the three to avoid CTA over-emphasis (Resume as primary, GitHub + Email as outline).

**Test scenarios:**
- Happy path: All three CTAs render with correct hrefs; Resume opens `/resume.pdf` in a new tab; GitHub opens the profile URL in a new tab; Email opens the system mail client.
- Edge case: On viewport widths below `sm`, the three CTAs wrap (vertical stack acceptable) and the name scales down to remain readable on a single line where possible.
- Test expectation: visual verification in browser; no unit tests added.

**Verification:**
- Hero renders name, positioning line, credibility line, and three CTAs above the fold on a 1440x900 viewport.
- No Vanta or particle effect in the background. No custom cursor.
- The credibility line names the current Amazon role.

---

### U4. Selected Work grid

**Goal:** Replace the current project grid with refined cards for the 6 projects, including new metadata (role/year, stack chips, metrics) and the new Jarvis card.

**Requirements:** R2, R3

**Dependencies:** U1

**Files:**
- Create: `components/selected-work.tsx`
- Modify: `app/page.tsx` — replace the inline work section with `<SelectedWork />`.

**Approach:**
- Project data lives in a typed `projects` array at the top of the component file: `{ title, blurb, stack[], role, year, metric?, image, link? }`.
- Order: ReachSearch, Jarvis, FireSync, NPOConnect, SkyCast, SaveAPlate. ReachSearch leads (shipped iOS app, real adoption); Jarvis is second (most recent + technically deepest + Hackathon Finalist).
- Grid: 2 columns on `md`, 3 on `lg`.
- Card anatomy:
  - Image (16:9, rounded, `object-cover`) at top.
  - Title in Geist Sans semibold, accent color on hover when the card is clickable.
  - One-sentence blurb in body color.
  - Stack chips in Geist Mono, small, muted background, rounded.
  - Footer row: `role · year` left, primary metric right (e.g., "1k+ downloads", "81% precision", "84% audit time saved", "Hackathon Finalist").
- Hover: subtle lift (~4px translate) + border lightens to accent. Only clickable cards get `cursor-pointer`; non-clickable cards do not animate as if interactive.
- Jarvis card uses `public/jarvis.png`; the other 5 cards keep their existing Vercel Blob image URLs.

**Project data (titles, blurbs, stack, links, metrics):**

| Title | Blurb | Stack | Metric | Link |
|---|---|---|---|---|
| ReachSearch | Published iOS app helping students discover and reach out to research-matching professors faster, with Firebase auth and resume integration. | Swift, Xcode, Firebase, MongoDB, AWS, Node.js | 1k+ downloads | App Store URL |
| Jarvis | 4-stage spatial reasoning pipeline fusing depth, hand, and tool signals for jobsite hazard analysis; localize-and-zoom inference with 2s temporal majority voting; Voice AI agent surfaces cited reports in under 2 seconds. | OpenCV, MiDaS, MediaPipe, YOLOv8, Voice AI | 81% precision on high-severity events | — (Hackathon Finalist badge) |
| FireSync | Full-stack platform matching volunteers with wildfire relief tasks via a DeepSeek-backed RAG model that ranks on skills and availability. | React.js, Node.js, Express, MongoDB, Leaflet.js | — | — |
| NPOConnect | Platform automating matching between emerging leaders and nonprofit board positions via weighted skill-based algorithms. Built for JPMC Code for Good. | Flask, React.js, JavaScript, SQLite, OpenAI API | JPMC Code for Good | — |
| SkyCast | Web app predicting flight delays from adverse weather to improve travel planning. | Python, React.js, MySQL, Flask, SciKit-Learn | — | — |
| SaveAPlate | Minimizes dining hall food waste by scraping real-time menu data and forecasting waste with ML based on historical data, weekdays, and student traffic. | Python, HTML, CSS, SQL, Flask, SciKit-Learn | — | — |

**Patterns to follow:**
- Existing inline `ProjectCard` in `app/page.tsx` — adapt the structure but replace gradient borders/chips with single-color accent treatment, and add the new role/year + metric row.

**Test scenarios:**
- Happy path: All 6 cards render in the order above; ReachSearch and Jarvis occupy the first row on `lg` widths.
- Happy path: Clicking the ReachSearch card opens its App Store URL in a new tab; clicking a card with no `link` does nothing.
- Edge case: On `sm` widths, cards stack to a single column; metric/role rows wrap gracefully if too wide.
- Edge case: Metric is omitted gracefully for projects that don't have one (footer row collapses to just role · year).
- Test expectation: visual verification in browser; no unit tests added.

**Verification:**
- 6 project cards visible; Jarvis card renders `public/jarvis.png`.
- ReachSearch card links to App Store; non-clickable cards don't show pointer cursor or hover-lift.
- All stack chips visible; all metrics surfaced where present.

---

### U5. Experience list

**Goal:** Replace the existing vertical timeline with a compact list, with the current Amazon role first.

**Requirements:** R3, R4

**Dependencies:** U1

**Files:**
- Create: `components/experience-list.tsx`
- Modify: `app/page.tsx` — compose `<ExperienceList />` in the About section (or as its own section beneath About — implementer chooses; the brainstorm folded experience under "About" originally).

**Approach:**
- Experience data lives in a typed `experiences` array: `{ company, role, location, dateRange, description, current?, logo? }`.
- Layout: vertical list, one row per role. On `md+`: header line `company · role · location · date range` on one line, description on the next. On `sm`: header wraps to multiple lines, description follows.
- The Amazon entry is first and renders a small "Current" pill in the accent color near the date range.
- No timeline rail. No per-row card chrome. No per-entry `motion.div` with stagger delay. Just a clean list with tight vertical rhythm.
- Logos optional; if kept, render small (16-20px) and left-aligned next to the company name.

**Experience data (top to bottom):**

1. **Amazon** — SDE Intern, AWS Security — Herndon, VA — June 2026 – August 2026 — *Current* — "Building Spring Boot APIs in Kotlin for Amazon's internal rule evaluation service governing 100k+ Amazon teams; shipped a Boolean algebra reduction engine and a natural-language rule translation API that cut stakeholder audit time by 84%."
2. **JPMorgan Chase & Co** — Software Engineer Intern — Wilmington, DE — June 2025 – August 2025 — "Part of the CIB Finance LOB, working with the Genie LLM in Databricks to optimize workflow processes and enhance data-driven decision making across financial operations."
3. **University of Maryland** — Undergraduate Researcher — College Park, MD — January 2025 – Present — "Built the server-side training interface for the Geneva Censorship Team, improving testing efficiency by 45% and supporting 200+ daily monitoring operations."
4. **Pfizer** — SAP Technical Developer — Collegeville, PA — May 2024 – June 2025 — "Built SAP solutions in ABAP and Python that improved data management efficiency by 15%; evaluated SAP Data Intelligence Modeler features."
5. **UT-Dallas Internship Program** — Big Data Analytics Intern — Dallas, TX — June 2022 – August 2022 — "Applied regression, clustering, and neural networks to Kaggle datasets under Dr. Khan."
6. **UT-Dallas Internship Program** — Concurrent Computing Intern — Dallas, TX — June 2021 – August 2021 — "Implemented multi-threaded Java projects, improving processing efficiency by 40%."

**Patterns to follow:**
- None directly; this is a new component shape. Keep it lighter than the existing timeline.

**Test scenarios:**
- Happy path: 6 experience entries render in the order above.
- Happy path: Amazon shows the "Current" pill in the accent color.
- Edge case: On `sm` widths, the meta line (company · role · location · date) wraps gracefully without overflowing the container.
- Test expectation: visual verification in browser; no unit tests added.

**Verification:**
- 6 experience entries render; Amazon is first and shows "Current".
- Total vertical height of the experience section is meaningfully shorter than the current timeline.

---

### U6. About, Contact, Footer

**Goal:** Compress the About section to one paragraph, replace the contact form with direct-link CTAs, simplify the footer, and finalize the composition root.

**Requirements:** R5, R6

**Dependencies:** U1

**Files:**
- Create: `components/about-section.tsx`
- Create: `components/contact-footer.tsx`
- Modify: `app/page.tsx` — compose `<AboutSection />`, `<ExperienceList />` (from U5), and `<ContactFooter />`; remove the inline contact form, the inline footer, and the existing `<AboutMe />` import.
- Delete: `components/about-me.tsx` (replaced by AboutSection + ExperienceList).
- Delete: `components/social-icon.tsx` (replaced inline in contact-footer).

**Approach:**
- AboutSection: a single short paragraph (~3-4 sentences) in a content column with a constrained max-width (around 60-70 characters). Optional small portrait inline using the existing Vercel Blob URL — kept if it adds warmth, dropped if it adds noise.
- ContactFooter: a section heading (e.g., "Get in touch"), a one-line lead-in ("The fastest way to reach me:"), then three buttons in a horizontal row: Email (`mailto:santossuresh005@gmail.com`), LinkedIn (new tab), GitHub (new tab). Below the buttons: a small copyright line and nothing else.
- No `<form>`, no inputs, no `onSubmit` handler.
- Section IDs preserved: `#about`, `#contact` so the navbar anchors still resolve.

**Patterns to follow:**
- `components/ui/button.tsx` for the contact CTAs.

**Test scenarios:**
- Happy path: About section is one paragraph; no experience timeline inside it.
- Happy path: Contact section has exactly three buttons; Email opens `mailto:`, LinkedIn opens its URL in a new tab, GitHub opens its URL in a new tab.
- Edge case: On `sm` widths, the three contact buttons stack vertically without overflowing.
- Test expectation: visual verification in browser; no unit tests added.

**Verification:**
- About section is visibly shorter than today.
- No `<form>` element anywhere on the page.
- Three contact buttons render with correct hrefs.
- Footer shows a copyright line and no social-icon component import.

---

## System-Wide Impact

- **Interaction graph:** No external integrations, no callbacks, no middleware. Pure client-rendered single page.
- **Error propagation:** N/A; no async data, no error boundaries beyond Next.js defaults.
- **State lifecycle risks:** N/A; no persisted state.
- **API surface parity:** N/A; no API.
- **Integration coverage:** Visual verification covers cross-section composition in `app/page.tsx`.
- **Unchanged invariants:** `components/ui/*` (shadcn) keep working because new CSS variables reuse the existing token names. Build setup (`next.config.mjs`, `postcss.config.mjs`, `tsconfig.json`, `components.json`) is unchanged.

---

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Resume PDF not provided; Resume CTA returns a 404 | CTA still renders with `target="_blank"`. User drops `public/resume.pdf` post-execution. Flagged in handoff. |
| Vercel Blob image URLs eventually rotate or 404 | Out of scope for this revamp; existing URLs preserved. If they break later, swap to local files in `public/`. |
| Dep uninstall breaks an unexpected import | Verified during U1 via grep of all deleted component names plus `npm run build`. All known import sites are inside components being deleted in the same unit. |
| Geist font causes visible flash on first paint | `next/font` self-hosts and inlines critical CSS, so FOIT is minimized by default. Acceptable. |
| Component naming convention drift (kebab-case vs PascalCase) | All new components use kebab-case filenames to match `navbar.tsx`, `about-me.tsx`, and the shadcn `components/ui/*` convention. |

---

## Documentation / Operational Notes

- Update `app/layout.tsx` metadata: the current description references "Computer Science and Economics student" — this is stale. Replace with a current description grounded in the brainstorm (CS at Maryland, SWE focus, current Amazon AWS Security role).
- After execution, the user must drop `public/resume.pdf` to make the Resume CTA functional.
- User confirmed at plan time that they want to see the dev server running on localhost after execution completes — `ce-work` should start `npm run dev` and report the local URL.

---

## Sources & References

- **Origin document:** `docs/brainstorms/2026-06-23-portfolio-revamp-requirements.md`
- Related code: `app/page.tsx`, `components/about-me.tsx`, `components/navbar.tsx`, `tailwind.config.js`, `app/globals.css`
