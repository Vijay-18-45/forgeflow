# ForgeFlow Studio

# FORGEFLOW AI — MASTER BUILD PROMPT

## ROLE

Act as a world-class Product Designer, Brand Designer, Motion Designer, and Senior React Frontend Engineer. Build the official **ForgeFlow AI** website: a premium, calm, product-first digital experience.

**Feel:** Calm. Precise. Intelligent. Premium. Technical.

**Test:** Users should want to stay because the site feels comfortable and well-designed — not because it demands attention.

---

## 1. BRAND IMAGE & BACKGROUND SYSTEM

**Asset:** `https://res.cloudinary.com/prfxdvsk/image/upload/v1787065753/forgeflow.jpg`

Treat this as a **responsive atmospheric background layer**, not a content image — the environment the ForgeFlow interface lives in.

**Rules:**

- `background-size: cover; background-position: center; background-repeat: no-repeat;` — never stretch, tile, distort, or leave gaps/overflow.

- Adjust focal position per breakpoint if needed (e.g. `55% center` on mobile) to keep branding visible; crop more aggressively on mobile if required.

- Layer order: **Image → Dark Overlay → Subtle Blue/Cyan Ambient Layer → Content**

  ```css

  background: linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.78)),

              url("[forgeflow.jpg]");

  ```

- Visibility balance: image present but quiet — noticed order is branding → content → interface → atmosphere, never the reverse.

- Maintain visual continuity between sections (no jarring background swaps). Product sections may use solid surfaces (`#000000`, `#080B12`, `#0A1018`) but should still feel part of the same environment.

- Build a single reusable `BackgroundLayer` component (desktop/mobile positioning, overlay opacity, section-specific darkness, reduced-motion behavior) rather than duplicating background logic.

- Optimize loading: no duplicate downloads, don't block initial render, cache appropriately.

---

## 2. COLOR SYSTEM

**Primary**

`Forge Black #000000` · `Forge Surface #080B12` · `Deep Blue #024FE5` · `Primary Blue #0271F2` · `Electric Blue #038CF4` · `Bright Blue #03A7F5` · `Cyan #03C4F6` · `Bright Cyan #03D0F0`

**Text**

`Primary White #F0F0F0` · `Secondary #D9E1EA` · `Body #A7B0C0` · `Muted #6F7B8C`

**UI**

`Border #12304A` · `Subtle Border #0D2032` · `Hover Surface #0C1420` · `Elevated Surface #0A1018`

**Brand gradient** (use sparingly — CTAs, highlights, active states, intelligent actions, progress indicators only):

```css

linear-gradient(135deg, #024FE5 0%, #0271F2 35%, #03A7F5 70%, #03D0F0 100%);

```

**Balance:** Dark/image atmosphere 70–80% · Neutral text 10–15% · Blue/cyan accents 5–10%. Blue/cyan signals _action + intelligence_, not decoration.

---

## 3. PAGE STRUCTURE & CONTENT

### Navbar

`FORGEFLOW AI` · Platform · Verticals · Approach · About · **Talk to us**

Transparent/minimal at top → dark translucent + blur + thin border on scroll. Keep it minimal, never bulky.

### Hero

- Eyebrow: `FORGEFLOW AI`

- Headline: **Intelligence built for your industry.**

- Subcopy: _We build AI-native software around complex industry workflows — starting with education._

- CTAs: **Explore ForgeFlow EDU** (primary) / **Talk to ForgeFlow** (secondary)

- Process line: `Understand → Structure → Intelligence → Integrate → Improve`

- Background image prominent here, with overlay + subtle blue/cyan lighting; no unrelated hero illustration.

- Include a conceptual ForgeFlow EDU dashboard visual (see §Product Concept), clearly labeled **PRODUCT CONCEPT**. Leave visible background around cards — don't cover the image entirely.

### Generic AI Isn't Enough

Heading: **Generic AI isn't enough.**

Copy: _Every industry has its own language, processes, constraints and decisions. We build around those realities instead of forcing businesses into generic software._

Three principles: **01 Understand** → **02 Structure** → **03 Intelligence** (short descriptions). Use typography/dividers, not heavy cards.

### Verticals

Heading: **Built vertically.** / _We go deep before we go wide._

- **Education — ForgeFlow EDU** — _Intelligent operating software for study-abroad consultancies._ Status: **BUILDING** (strongest visual emphasis)

- Healthcare / Semiconductor / Financial Services / Logistics — Status: **EXPLORING** (visually muted)

### ForgeFlow EDU (First Vertical)

Label: `FIRST VERTICAL` · Heading: **ForgeFlow EDU** · _An intelligent operating layer for study-abroad consultancies._

**Workflow:**

`LEAD → STUDENT PROFILE → ELIGIBILITY → UNIVERSITY MATCHING → DOCUMENTS → APPLICATION → FOLLOW-UP`

Inactive `#12304A` · Active `#0271F2` · Intelligence `#03C4F6` · Highlight `#03D0F0`. Subtle connectors — no glow, no neon tubes.

**Product Concept (demo dashboard):**

```

FORGEFLOW EDU — Student Application     [PRODUCT CONCEPT]




Student Profile

  Academic Score      82%

  English Score       7.5

  Budget               ₹25L

  Preferred Country     UK




AI MATCH

  University A   94%

  University B   89%

  University C   84%




DOCUMENT STATUS

  ✓ Passport   ✓ Transcript   ⚠ Financial Proof




NEXT ACTION: Schedule counsellor review

```

Colors: `#080B12 #0A1018 #12304A #0271F2 #03C4F6 #F0F0F0`

**Full Dashboard:** Nav — Overview / Students / Applications / Documents / Follow-ups.

Metrics (label **DEMO DATA**): Students 1,284 · Applications 426 · Documents 3,891 · Follow-ups 127.

Interactive tabs (Students, Applications, Documents, Follow-ups, University Matching) with calm state transitions — no heavy animation.

### Our Approach

Heading: **We don't start with AI.**

`01 Find the workflow → 02 Find the bottleneck → 03 Design the system → 04 Add intelligence → 05 Measure the outcome`

Visual: `Problem → Workflow → Product → Intelligence → Outcome`

### Why Vertical

Heading: **Depth beats breadth.**

Generic path: `Many industries → Generic workflows → Generic features`

ForgeFlow path: `One industry → Deep workflow knowledge → Industry-specific product → Better outcomes`

### Future Vision

Heading: **One vertical at a time.**

List (muted styling): Education · Healthcare · Semiconductors · Financial Services · Logistics

Copy: _We will only enter a new vertical after earning the right through customer understanding and product-market validation._

### Team

Heading: **Built by people who care about the workflow.**

Roles only, minimal: Founder / Product & AI · CTO / Full-Stack Engineering · Growth / Marketing & Distribution

### Final CTA

Heading: **Have a workflow worth rebuilding?**

Copy: _Tell us where your team spends time, makes decisions, or loses information. We'll start there._

CTAs: **Talk to ForgeFlow** / **Explore our approach** — ForgeFlow image subtly reintroduced behind, sufficiently darkened.

### Footer

Background `#000000`, border `#12304A`.

`FORGEFLOW AI` · _Vertical intelligence for real-world industries._ · Platform / Verticals / Approach / About / Contact · LinkedIn · Instagram · © 2026 ForgeFlow AI. All rights reserved.

---

## 4. ANIMATION PHILOSOPHY

**Use:** fade, tiny translation, subtle opacity shifts, gentle hover, smooth state changes.

**Avoid:** particles, cursor tracking, spinning 3D, aggressive parallax, scroll hijacking, excessive gradients, constant motion, bouncing, giant transitions.

Background image stays visually stable — no continuous zoom/rotation/distortion; any motion must be extremely slow, subtle, low amplitude.

**Calm Test:** Disable all animation — the site must still look excellent. Enable it — the experience should feel _slightly more alive_, not different. If it only impresses with animation on, fix typography/spacing/composition/color hierarchy/product UI/background treatment instead of adding motion.

Respect `prefers-reduced-motion: reduce` — strip non-essential animation, keep background static.

---

## 5. RESPONSIVE & ACCESSIBILITY

- Full atmospheric composition on desktop/laptop; preserved readability on tablet; responsive cropping on mobile (adjust `background-position` as needed, never distort).

- Mobile: hamburger nav (`FORGEFLOW AI ☰`), vertical workflow, stacked dashboard, full-width but not oversized cards, darker background overlay for readability. No horizontal overflow, clipped text, tiny touch targets, or hover-only interactions.

- Semantic HTML, correct heading hierarchy, keyboard navigation, visible focus states, accessible buttons/mobile menu, sufficient contrast.

---

## 6. TECHNICAL ARCHITECTURE

**Stack:** React + Vite + Tailwind CSS

```

src/

├── components/

│   ├── Navbar.jsx          ├── Workflow.jsx

│   ├── BackgroundLayer.jsx ├── ProductDashboard.jsx

│   ├── Hero.jsx            ├── StudentProfile.jsx

│   ├── HeroProduct.jsx     ├── UniversityMatching.jsx

│   ├── Principles.jsx      ├── Documents.jsx

│   ├── Verticals.jsx       ├── FollowUps.jsx

│   ├── Approach.jsx        ├── WhyVertical.jsx

│   ├── FutureVision.jsx    ├── Team.jsx

│   ├── CTA.jsx             └── Footer.jsx

├── data/forgeflowData.js

├── pages/Home.jsx

├── assets/

├── App.jsx

└── main.jsx

```

Background architecture: `App → Global Background Layer → Overlay Layer → Ambient Accent Layer → Main Content` (single consistent implementation, not per-section duplication).

---

## 7. CONTENT INTEGRITY

Never invent customers, testimonials, funding, partnerships, revenue, awards, real users, or real student data. Dashboard content is explicitly **DEMO DATA**; unbuilt verticals are explicitly **EXPLORING**.

---

## 8. SEO

- Title: _ForgeFlow AI — Vertical Intelligence for Real-World Industries_

- Description: _ForgeFlow AI builds intelligent software around complex industry workflows, starting with education._

- Semantic HTML, metadata, Open Graph tags, favicon, descriptive alt text.

---

## 9. BUILD ORDER

1. **Foundation** — design tokens → background system → typography → navbar

2. **Hero** — hero → product concept visual → CTA

3. **Positioning** — generic AI section → principles → verticals

4. **Core Product** — ForgeFlow EDU → workflow → dashboard

5. **Narrative** — approach → why vertical → future → team

6. **Close** — final CTA → footer

7. **QA** — responsive check → accessibility → performance → animation refinement → final build

---

## 10. FINAL QA CHECKLIST

- [ ] Background image feels naturally integrated, not slapped on

- [ ] Covers desktop without distortion; crop preserves brand identity on mobile

- [ ] Every section is comfortably readable over the image

- [ ] Black + deep blue + electric blue + cyan identity is consistent throughout

- [ ] Animations are subtle enough to go unnoticed individually

- [ ] ForgeFlow EDU dashboard reads as real software, not a mockup screenshot

- [ ] A first-time visitor understands what ForgeFlow does within seconds

- [ ] Passes the Calm Test (§4) and Reduced Motion (§5)

---

## BRAND SYSTEM SUMMARY

```

Logo → Supplied Image → Black Background → Deep Blue → Electric Blue → Cyan → Product UI → Workflow → AI Intelligence

```

One unified system: **Black as environment. Deep blue as structure. Electric blue as interaction. Cyan as intelligence. White as clarity.**

Experience arc: `See → Understand → Explore → Interact → Trust → Stay → Act` — never `See → Animation → Animation → Confusion`.

**Guiding principles:**

Less motion, more meaning. Less decoration, more product. Less neon, more precision. Less noise, more clarity. Less AI hype, more intelligence.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://forgeflows.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/15376f5a-6e8b-47b8-82f8-74b2a7a7dd9b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
