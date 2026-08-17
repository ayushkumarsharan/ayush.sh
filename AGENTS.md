# AGENTS.md — Maintenance & Architecture Guide for AI Agents

> **Context**: This document provides strict architectural principles and instructions for any AI coding assistant modifying or extending Ayush Kumar Sharan's personal digital home & archive.

---

## 1. Core Architectural Philosophy

- **"Let them discover him"**: The site reveals Ayush in progressive layers (Recruiter: 30s, Technical: 5m, Curious: 15m).
- **The Quiet Confidence Rule**: Never boast or use marketing buzzwords ("visionary", "10x", "passionate developer"). Use factual evidence: "Deployed AWS/GCP pixel streaming infrastructure and reduced continuous hosting costs by 76%."
- **Zero Generic Templates**: Pure bespoke CSS custom properties (tokens) with clean semantic React components. No Tailwind, no Bootstrap, no shadcn/ui. Every pixel is intentional.
- **Single Source of Truth**: All personal data, projects, research, work history, and creative items live in the `/content` directory as typed TypeScript models.

---

## 2. Directory Structure

```
d:/Anitgravity/My Website/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Global layout with SEO, Schema, fonts, and providers
│   ├── page.tsx              # Primary home narrative page
│   ├── research/page.tsx     # IEEE Quantum research deep-dive blueprint
│   ├── lab/page.tsx          # Living experimental archive & status sandbox
│   ├── now/page.tsx          # Current active focus & operating principles
│   ├── projects/[slug]/      # Dynamic case study pages
│   └── globals.css           # Global imports & micro-interactions
├── components/
│   ├── layout/               # Navigation, Footer, CommandPalette, ScrollProgress
│   ├── sections/             # Hero, Signal, Workbench, Intersection, Toolkit, Shelf, etc.
│   ├── features/             # AskAyush (AI Assistant), QuantumCanvas (Signal Simulator)
│   └── ui/                   # Button, Card, Badge, SectionHeading, ThemeToggle, CustomCursor
├── content/                  # All data-driven typed models
│   ├── profile.ts            # Personal coordinates, wordmark, narrative
│   ├── experience.ts         # Career chapters (M2P, Thales, Makers Lab)
│   ├── projects.ts           # Case studies with architecture & outcomes
│   ├── research.ts           # IEEE paper mathematical formalism & awards
│   ├── skills.ts             # Capability taxonomy (Build, Automate, Systems, etc.)
│   ├── education.ts          # Academic Gold Medal, Baljit Shastri Award, certifications
│   ├── creative.ts           # 3D spatial tech, watercolor studies, design systems
│   ├── interests.ts          # Music, economics, analog practices
│   ├── lab.ts                # Experiments with status flags
│   ├── now.ts                # Current focus updates
│   ├── site.ts               # Navigation routes, social links
│   └── ai-knowledge.ts       # Factual zero-hallucination QA engine
├── styles/                   # Pure CSS design token architecture
│   ├── tokens.css            # Dark/light theme color palette & spacing
│   ├── reset.css             # Modern CSS reset
│   ├── base.css              # Custom scrollbars, grain texture, selection
│   ├── animations.css        # Keyframes and prefers-reduced-motion
│   └── layout.css            # Responsive containers & grid helpers
└── public/                   # Static assets (favicons, SVG social preview cards)
```

---

## 3. How to Perform Common Updates

### A. Updating Professional Work / New Role
1. Open `content/experience.ts`.
2. Add a new object following the `Experience` interface (company, role, period, frame, summary, tags, highlights).
3. If this is the current role, set `current: true` and update the previous role's `current: false`.

### B. Adding a New Project & Case Study
1. Open `content/projects.ts`.
2. Add an entry to the `projects` array with a unique `slug`.
3. Include the complete `caseStudy` structure (`overview`, `context`, `challenge`, `architecture`, `implementation`, `outcomes`, `learned`).
4. Next.js will automatically generate the `/projects/[slug]` route statically via `generateStaticParams()`.

### C. Adding an Experiment to The Lab
1. Open `content/lab.ts`.
2. Add a new item to `labExperiments` with status: `'Idea' | 'Exploring' | 'Building' | 'Experiment' | 'Completed'`.

### D. Changing Colors & Theme Palette
1. Open `styles/tokens.css`.
2. Modify `--accent-primary`, `--accent-warm`, `--bg-primary`, or `--bg-surface`.
3. Do not hard-code hex codes inside individual component files.

### E. Updating the "Now" Page
1. Open `content/now.ts`.
2. Update `lastUpdated` and the specific activity under `working`, `learning`, `reading`, or `building`.

---

## 4. Engineering Quality Rules for Agents

1. **Accessibility**: Always provide `aria-label` for icon-only buttons, maintain high color contrast ratios meeting WCAG AA, and respect `prefers-reduced-motion`.
2. **Performance**: All pages must pre-render statically. Optimize images, avoid heavy external script CDNs.
3. **No Hallucinations**: Never fabricate credentials, employment dates, or awards. The uploaded resume is the authoritative source.
