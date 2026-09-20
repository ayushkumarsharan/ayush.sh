# AYUSH — PERSONAL UNIVERSE
## TECHNICAL REALIZATION, STACK, FLUIDITY, SELF-TESTING & BENCHMARK SPECIFICATION

**Document role:** Third companion specification to the Product Concept and Design/Content specifications.

**This document answers one question:**

> How should the product be engineered so that the intended Ayush Personal Universe becomes a seamless, exceptional, fluid, resilient real-world experience?

This is a **technical realization specification**, not a new product concept.

The previous two documents define **what the product is** and **what it should feel/look like**.

This document defines:

- technology choices
- architecture
- rendering strategy
- animation/motion strategy
- 2D/3D strategy
- asset strategy
- state and data architecture
- responsive behavior
- performance discipline
- accessibility
- testing
- visual regression
- browser/device coverage
- edge cases
- deployment/CI
- self-review procedure
- benchmark/reference-study process
- implementation stages
- definition of done

The agent must treat all three documents as one specification.

---

# 0. NON-NEGOTIABLE PRINCIPLE

## TECHNICAL SOPHISTICATION MUST SERVE THE EXPERIENCE

The site is not being built to demonstrate:

- WebGL
- React
- animation libraries
- shaders
- particle systems
- complex state management
- fancy transitions

Those are means.

The objective is to create a website that feels:

**alive, fluid, authored, intelligent, human, exploratory, tactile and unusually well considered.**

If a technically impressive implementation makes the experience less clear, less accessible, slower, less human or more generic, the technically impressive implementation is the wrong implementation.

---

# 1. TECHNOLOGY PHILOSOPHY

The technical architecture should follow this hierarchy:

```text
CONTENT
  ↓
MEANING
  ↓
RELATIONSHIPS
  ↓
INTERACTION
  ↓
MOTION
  ↓
VISUAL EFFECTS
  ↓
RENDERING TECHNOLOGY
```

Never reverse this order.

Do not begin with:

> “What cool Three.js effect can we put here?”

Begin with:

> “What should the visitor discover here?”

Then decide whether the correct implementation is:

- HTML
- CSS
- SVG
- Canvas
- WebGL / Three.js
- audio
- a combination

---

# 2. RECOMMENDED PRIMARY STACK

Use the following as the default technical stack unless an existing project constraint makes a specific substitution necessary.

## Core application

### Next.js
Use the current stable Next.js release with the **App Router**.

Why:

- strong React integration
- routing
- metadata/SEO
- image/font optimization
- server/client component separation
- static and dynamic rendering flexibility
- deployment compatibility with Vercel

Do not use Pages Router for a new architecture unless the existing application makes migration unjustifiably expensive.

Official documentation:
nextjs.org/docs

---

## React

Use **React 19.x**, with the latest stable release supported by the chosen Next.js version.

As of this specification, React 19.3 is the current stable release and includes stable View Transition support.

Relevant React feature to evaluate:

### View Transitions

Use native/React View Transitions where they genuinely improve:

- route changes
- artifact expansion
- world transitions
- image/object continuity

Do not add them everywhere simply because they are available.

React 19.3 source:
react.dev/versions
react.dev/blog/2026/09/09/react-19-3

---

## TypeScript

TypeScript is mandatory.

Use strict typing for:

- content
- project registry
- worlds
- atmospheres
- artifacts
- relationships
- navigation
- visibility
- interaction states

Avoid broad `any` usage.

Content should be structured strongly enough that a future version of Ayush can edit content without hunting through arbitrary UI components.

---

## Styling

### Tailwind CSS 4+

Use Tailwind for utility-level layout and responsive styling where it improves maintainability.

Use normal CSS for:

- custom visual systems
- complex atmospheric effects
- keyframes
- custom properties
- masks
- blend modes
- layered gradients
- specialized art-direction rules

Do not attempt to encode the entire creative direction into utility classes.

A central CSS variable system should control:

- colors
- spacing
- typography
- radii
- shadows
- surfaces
- atmospheric parameters
- transition timings
- motion strength
- content density

Tailwind should support the design system, not become the design system.

---

# 3. ANIMATION STACK

## PRIMARY: Motion for React

Use **Motion for React** (`motion/react`) as the default animation system.

Motion is currently the primary replacement/name for what was historically called Framer Motion.

Use it for:

- component entry/exit
- hover/tap gestures
- layout transitions
- shared layout transitions
- small state changes
- artifact expansion
- navigation transitions
- element choreography
- lightweight scroll-linked effects
- springs
- drag where meaningful

Official documentation:
motion.dev/docs/react

Motion supports declarative animation, gestures, layout animation and scroll-driven interactions while remaining appropriate for React applications.

---

## SECONDARY: GSAP + ScrollTrigger

Use GSAP **only when Motion/CSS/native browser animation is insufficient**.

Good use cases:

- complex long-form scroll choreography
- timeline-driven storytelling
- pinned sequences
- synchronized multi-element sequences
- complex scrub behavior
- advanced SVG animation

Do not use both GSAP and Motion for the same animation unnecessarily.

Preferred hierarchy:

```text
CSS / native browser animation
        ↓
Motion
        ↓
GSAP / ScrollTrigger
        ↓
custom requestAnimationFrame
        ↓
WebGL shader logic
```

The lower the layer, the stronger the justification required.

GSAP ScrollTrigger:
gsap.com/docs/v3/Plugins/ScrollTrigger/

---

# 4. 3D / WEBGL

## Three.js + React Three Fiber

Use:

- Three.js for 3D primitives/rendering
- React Three Fiber for React integration
- Drei selectively for helpers

Official Three.js:
threejs.org/docs

React Three Fiber:
r3f.docs.pmnd.rs

### Important rule

WebGL is a **specialized renderer**, not the global page renderer.

Use it where 3D provides actual experiential value:

### Good

- quantum system visualization
- spatial research object
- 3D engineering system
- aircraft/IFE object
- cloud/streaming system representation
- selected creative experiments
- tactile 3D artifact

### Bad

- giant full-screen rotating geometry behind all content
- decorative particles
- meaningless star fields
- WebGL because it looks “advanced”
- replacing accessible text with canvas graphics

---

# 5. 2D VISUALIZATION

Before reaching for WebGL, consider:

### SVG

Best for:

- diagrams
- system architecture
- flow diagrams
- logos
- line illustrations
- quantum circuits
- aircraft schematics
- relationship diagrams
- small interactive illustrations

### Canvas

Best for:

- large visual fields
- waveform rendering
- controlled particle simulation when truly justified
- drawing-based experiences
- audio-reactive visuals

### DOM/CSS

Best for:

- typography
- layout
- ordinary UI
- text transitions
- cards when cards actually make sense
- accessible interaction

Preferred rendering rule:

> Use the simplest rendering technology that can express the idea beautifully.

---

# 6. STATE ARCHITECTURE

The semantic model already established for the Universe should remain.

Core concepts:

```text
Person
World
Atmosphere
Artifact
Project
Experience
Technology
Relationship
Visibility
Interaction
```

The runtime state may include:

```text
activeWorld
activeAtmosphere
activeNode
hoveredNode
selectedArtifact
relatedNodes
cameraTarget
focusTarget
lowSignal
reducedMotion
```

Do not allow state to become scattered across dozens of components.

---

## Existing Context Architecture

The existing `UniverseContext` / world-state approach can remain if it continues to satisfy the requirements.

Do not introduce a global state library merely because “large apps use one.”

If Context becomes difficult to reason about because of:

- frequent unrelated updates
- deep provider trees
- cross-route coordination
- difficult state subscriptions

then consider Zustand.

Otherwise:

> Keep the simpler architecture.

---

# 7. CONTENT ARCHITECTURE

Content must be separated from presentation.

Create/retain typed registries such as:

```text
content/
  profile.ts
  experience.ts
  projects.ts
  research.ts
  technologies.ts
  worlds.ts
  atmospheres.ts
  artifacts.ts
  thoughts.ts
  awards.ts
  education.ts
  certifications.ts
  easterEggs.ts
  site.ts
```

Exact structure may differ, but the principle is mandatory.

Changing:

> “M2P description”

should not require editing a presentation component.

Changing:

> “Cosmos atmosphere”

should not require rewriting project data.

---

# 8. ARTIFACT DATA MODEL

Artifacts are the primary visual/content object.

Conceptual schema:

```ts
type Artifact = {
  id: string
  type:
    | "image"
    | "screenshot"
    | "diagram"
    | "system"
    | "research"
    | "code"
    | "illustration"
    | "3d"
    | "audio"
    | "writing"
    | "document"
    | "photograph"

  title: string
  context?: string
  description?: string

  source?: string
  href?: string

  visibility: "public" | "selective" | "private"

  worlds: WorldId[]
  atmospheres?: AtmosphereId[]

  relationships?: Relationship[]

  interaction?: ArtifactInteractionConfig
}
```

The actual implementation may be simpler.

The key principle is:

> **Artifacts are first-class objects, not decorative content blocks.**

---

# 9. RELATIONAL GRAPH

The semantic graph may remain as an underlying relationship model.

Relationship examples:

```text
M2P
  → uses → Playwright

M2P
  → uses → TypeScript

M2P
  → validates → fintech systems

Tech Mahindra
  → built → Pixel Streaming infrastructure

Pixel Streaming
  → uses → AWS

Pixel Streaming
  → uses → Unreal Engine

Quantum Research
  → uses → Qiskit

Quantum Research
  → published-as → IEEE

Research
  → connects-to → Thinker

Art
  → connects-to → Creative
```

The graph should support discovery.

It should NOT force the interface to become a node graph.

---

# 10. RELATIONSHIP EXPRESSION

Prefer:

- contextual links
- proximity
- typography
- shared visual language
- transitions
- object transformations
- related-artifact trails
- “You Are Here”
- contextual recommendations

Avoid:

- hundreds of lines
- glowing network graphs
- floating dots everywhere
- visual spaghetti
- graph dashboards

The relationship system is the **logic**.

It is not the aesthetic.

---

# 11. TECHNOLOGY / TOOL ECOSYSTEM

This website must represent the real technology ecosystem, but as evidence.

## Programming

- Python
- TypeScript
- Java
- C
- SQL
- JSON
- HTML
- CSS

## QA / Automation

- Playwright
- Postman
- API testing
- E2E automation
- regression/sanity/exploratory testing
- browser DevTools
- POM architecture
- prompt-driven backend/API workflows

## Cloud / Infrastructure

- AWS
- GCP
- Azure
- Linux
- Docker
- Kubernetes
- Argo CD
- CI/CD

## Backend / Data / Systems

- MongoDB
- Kafka
- Git
- Jira
- DataDog
- PRTG
- DevTools
- PuTTY where relevant to actual work

## AI / ML / Emerging

- AI/ML concepts
- LLM dataset operations
- localized/regional-language data
- Qiskit
- IBM Quantum Composer
- quantum networking concepts

## Creative Technology

- Unity
- Unreal Engine
- Blender
- Figma
- Canva
- Android Studio
- Firebase

Do not show this as one giant skills wall.

The actual visualization should connect tools to:

- work
- projects
- outcomes
- research
- artifacts

---

# 12. BRAND / TOOL ICON SYSTEM

Use recognizable real logos where appropriate.

Preferred sources:

- official brand assets where permitted
- Simple Icons
- Devicon
- carefully licensed local SVG assets

Avoid invented logos.

Avoid generic circles containing text.

Avoid combining unrelated products into a single icon.

For example:

- Figma ≠ Canva
- AWS ≠ GCP
- Playwright ≠ Selenium
- Unity ≠ Unreal
- Qiskit ≠ IBM Quantum Composer

Tool icons should be:

- sharp
- recognizable
- appropriately scaled
- accessible
- locally available where practical
- tied to evidence

---

# 13. THE TOOL LANDSCAPE

Do not build:

```text
[AWS]
[Docker]
[Playwright]
[Python]
[Qiskit]
```

as generic cards.

Instead create meaningful clusters.

Conceptual example:

```text
                PLAYWRIGHT
                    │
             M2P / AUTOMATION
                    │
       TYPESCRIPT ──┼── POSTMAN
                    │
                 MONGODB


AWS ───── PIXEL STREAMING ───── UNREAL
 │                              │
GCP                         TECH MAHINDRA


                 QISKIT
                    │
             QUANTUM RESEARCH
                    │
                  IEEE
```

Visually, these relationships can be represented through:

- scale
- spatial hierarchy
- visual grouping
- object linking
- hover state
- artifact expansion
- contextual transitions

not literal graph lines.

---

# 14. IMAGE / ASSET STRATEGY

Use real assets whenever available.

Preferred:

- real project screenshots
- actual research pages
- award certificates
- system diagrams
- actual UI
- real sketches
- genuine artwork
- real 3D renders
- real photographs
- real paper excerpts
- real interface experiments

Do not manufacture fake screenshots that imply something was actually built.

When there is no real visual asset:

> Create an abstract visualization of the actual idea/system.

Never create fake evidence.

---

# 15. IMAGE OPTIMIZATION

Use Next.js image tooling where appropriate.

Requirements:

- fixed aspect ratios when known
- explicit dimensions to prevent layout shifts
- responsive image sizes
- appropriate compression
- WebP/AVIF when appropriate
- lazy-load below-the-fold content
- eagerly load only the true hero/LCP visual
- avoid oversized source images
- use `srcset`/responsive image behavior through the framework

Important Core Web Vital principle:

> Never allow images to cause avoidable layout shift.

---

# 16. FONTS

Use `next/font` for production fonts.

Preferred architecture:

### Primary UI face
Modern, highly legible sans-serif.

### Optional editorial face
A complementary serif/display face for selected Atmospheres.

Possible style direction:

- restrained
- modern
- futuristic without being sci-fi
- calm
- readable
- human

Do not load 5–8 font families.

Avoid novelty fonts that make the website harder to read.

Typography must remain excellent before motion is enabled.

---

# 17. VISUAL MATERIAL SYSTEM

The site may use:

- soft gradients
- atmospheric light
- grain/noise
- blur
- masks
- translucency
- layered surfaces
- subtle shadows
- reflections
- color transitions
- blend modes

But each effect must have an explicit job.

Example:

### Grain

Can add physicality to Paper/Archive/Art.

### Blur

Can create depth or focus transitions.

### Translucency

Can communicate Material/Future environments.

### Gradient

Can provide light or atmospheric transition.

### Glow

Can indicate focus or spatial energy.

The rule:

> Effects should create material, depth, focus or atmosphere.

Not:

> Effects should prove that the developer knows CSS.

---

# 18. CSS EFFECTS TO FAVOR

Prefer performant properties:

- transform
- opacity
- filter only when bounded/controlled
- clip-path when appropriate
- CSS custom properties
- background gradients
- pseudo-elements
- containment
- will-change only where measured and necessary

Avoid animating expensive layout properties continuously:

- width
- height
- top
- left
- margin
- padding

unless there is a strong reason.

Prefer transform/opacity for motion.

---

# 19. POINTER / CURSOR INTERACTIONS

Desktop pointer interaction may be used for:

- object inspection
- attraction
- subtle parallax
- artifact focus
- cursor-relative lighting
- object manipulation

But:

- no cursor-following particle cloud
- no giant custom cursor that blocks normal interaction
- no hover-only critical information
- no interaction that becomes unusable on touch devices
- no interaction that causes excessive motion

Touch must have a direct equivalent.

Apple's guidance emphasizes supporting familiar standard gestures and offering alternative interaction paths rather than relying on custom motion alone.

Reference:
developer.apple.com/design/human-interface-guidelines/gestures

---

# 20. RESPONSIVE DESIGN

Responsive design is not:

> desktop version shrunk to mobile.

The experience must be deliberately redesigned for:

- large desktop
- standard desktop/laptop
- tablet
- mobile portrait
- mobile landscape

Define layout states rather than simply relying on CSS collapse.

For example:

### Desktop

Can support:

- layered composition
- cursor interactions
- larger artifact relationships
- multi-column editorial layout
- 3D objects

### Tablet

Reduce:

- simultaneous visual density
- interaction complexity
- side-by-side content

### Mobile

Prefer:

- focused narratives
- vertical relationships
- large touch targets
- simpler motion
- no dependence on hover
- reduced WebGL complexity
- compact atmospheric effects

---

# 21. TOUCH INTERACTION REQUIREMENTS

Every interactive feature must answer:

> What happens without hover?

For every hover interaction, define:

- tap behavior
- focus behavior
- keyboard behavior
- touch equivalent
- screen-reader equivalent where relevant

Do not build an experience that silently assumes a mouse.

---

# 22. ACCESSIBILITY

Target **WCAG 2.2 AA** as the baseline.

WCAG 2.2 is a W3C Recommendation and provides current guidance for accessible web content.

Reference:
w3.org/WAI/standards-guidelines/wcag/

Must cover:

- keyboard navigation
- visible focus
- semantic HTML
- heading hierarchy
- sufficient contrast
- accessible names
- labels
- form semantics if any
- alt text
- reduced motion
- touch target sizing
- screen-reader compatibility
- non-hover alternatives
- logical reading order
- no information conveyed only by color

---

# 23. ACCESSIBILITY TEST AUTOMATION

Use:

### `@axe-core/playwright`

Run automated accessibility checks through Playwright.

This is appropriate for:

- pages
- visible states
- modals
- menus
- open artifact panels
- alternate atmosphere states
- expanded project views

Important:

Axe does not test invisible UI states automatically. Therefore the test suite must **open interactive states before auditing them**.

Reference:
deque.com/axe/core-documentation/api-documentation/

---

# 24. REDUCED MOTION

Implement:

```text
prefers-reduced-motion
```

as a first-class system state.

When reduced motion is requested:

- disable unnecessary parallax
- stop decorative looping
- simplify transitions
- reduce 3D camera motion
- reduce scroll choreography
- reduce shader animation
- preserve hierarchy
- preserve content
- preserve meaningful state changes

The reduced-motion version must still look intentionally designed.

It must not look like a broken version of the site.

---

# 25. LOW-SIGNAL / LOW-PERFORMANCE MODE

The site should have a performance-aware fallback.

Potential signals:

- mobile
- low memory/device capability
- reduced motion
- low frame rate
- WebGL unavailable
- user preference
- network constraints

Fallback strategy:

```text
Full Experience
      ↓
Enhanced Experience
      ↓
Lightweight Experience
      ↓
Editorial Static Experience
```

At every level:

**content remains complete.**

---

# 26. WEBGL DEGRADATION

If WebGL is unsupported, unavailable, disabled or too expensive:

Do not show:

> blank region

Do not show:

> broken canvas

Instead show:

- SVG representation
- static image
- DOM illustration
- simplified diagram
- text explanation

The experience must degrade gracefully.

---

# 27. AUDIO

Audio is optional.

Requirements:

- OFF by default
- never autoplay unexpectedly
- obvious state
- volume control if enabled
- mute always available
- keyboard accessible
- touch accessible
- no essential information exclusively in audio
- transcript for speech/rap/writing artifacts where applicable

The Sound Atmosphere should remain meaningful even when silent.

---

# 28. ROUTING

Every meaningful object should be shareable where reasonable.

Examples:

```text
/projects/quantum-driven-signal-processing
/projects/savvy
/projects/leanjobos
/experience/m2p
/experience/thales
/experience/tech-mahindra
/research/quantum
/worlds/engineer
/worlds/explorer
```

Exact route structure may differ.

Requirements:

- direct URL loading works
- refresh works
- browser back works
- browser forward works
- copied URL opens the same content
- deep links do not depend on previous navigation
- 404 page is designed
- navigation does not leave stale state behind

---

# 29. SHARED TRANSITIONS

Where a visitor moves:

```text
home → project
tool → project
world → artifact
artifact → research
experience → technology
```

try to preserve continuity.

Examples:

- same image expands
- same object transforms
- typography remains visually related
- accent material persists briefly
- breadcrumb retains origin

The transition should feel like:

> entering the object

rather than:

> navigating to another webpage.

---

# 30. “YOU ARE HERE”

Implement a subtle contextual coordinate when helpful.

Concept:

```text
Universe
→ Engineer
→ M2P
→ Automation
→ Playwright
```

This must feel like:

- gallery signage
- editorial metadata
- an exploration coordinate

not:

- debug UI
- developer dashboard
- path inspector

---

# 31. NAVIGATION TECHNICAL PRINCIPLE

Keep navigation:

- semantic
- predictable
- keyboard accessible
- direct
- responsive
- lightweight

Avoid building a giant dashboard navigation.

Use progressive disclosure.

Primary navigation should expose only what people frequently need.

Deep navigation can become contextual.

---

# 32. SEARCH / DISCOVERY

A global search is optional.

If implemented, search should work semantically across:

- projects
- experience
- technologies
- research
- artifacts
- writing

Results should explain context.

Example:

```text
Playwright
M2P
E2E Automation
```

not simply:

```text
Playwright
```

Search should never become required for basic navigation.

---

# 33. ANIMATION PRINCIPLES

Every animation should answer at least one of:

- What changed?
- What became important?
- What is related?
- Where did this come from?
- What can I inspect?
- What is happening now?
- What should I look at next?

If the answer is:

> “It looks cool.”

the animation needs justification.

---

# 34. SPRING / FLUID MOTION

Use springs for physical-feeling transformations:

- object movement
- card expansion
- camera changes
- pointer attraction
- smooth focus changes

Avoid excessive overshoot.

Motion should feel:

- soft
- weighted
- responsive
- immediate
- controlled

The desired emotion is more:

> intelligent physical object

than:

> game UI.

---

# 35. SCROLL DESIGN

Scrolling can become an interaction medium.

Good uses:

- project storytelling
- system diagrams unfolding
- archive pages revealing
- timeline progression
- object transformation
- atmosphere transitions
- narrative pacing

Bad:

- every section pinning for 6000px
- scroll hijacking
- preventing natural movement
- excessive scroll-jacking
- animations so heavy that the user loses content orientation

Native scroll behavior should remain intuitive.

---

# 36. SMOOTH SCROLL

Do not add a smooth-scroll library by default.

Use native browser scrolling unless a carefully evaluated implementation provides a real experiential advantage.

If a smooth-scroll library such as Lenis is introduced:

- verify keyboard behavior
- verify reduced motion
- verify touch
- verify nested scroll
- verify focus
- verify browser find
- verify accessibility
- verify performance
- verify back/forward behavior

Smooth scrolling is optional.

Excellent interaction is mandatory.

---

# 37. PERFORMANCE MODEL

Performance must be part of design from the beginning.

Core Web Vitals:

### LCP
Target:

**≤ 2.5 seconds**

### INP
Target:

**≤ 200 ms**

### CLS
Target:

**≤ 0.1**

These are the “good” thresholds recommended by web.dev, measured at the 75th percentile and segmented by mobile and desktop.

References:
web.dev/articles/vitals
web.dev/articles/inp
web.dev/articles/lcp
web.dev/articles/cls

---

# 38. PERFORMANCE BUDGETS

Set project-level budgets and adjust only based on measured evidence.

Suggested starting targets:

### Initial critical JavaScript
Aim to keep the initial route lightweight.

Do not eagerly ship:

- Three.js
- large WebGL scenes
- heavy icon libraries
- audio engines
- unused animation libraries

### Initial visual payload
The opening viewport should be deliberately lightweight.

### 3D
Lazy-load 3D scenes.

### Below-the-fold
Defer large assets until they are needed.

### Fonts
Load only required weights.

### Icons
Do not import an entire icon universe when only a few icons are needed.

---

# 39. LAZY LOADING

Lazy-load:

- large images
- large project artifacts
- WebGL scenes
- audio
- secondary worlds
- experimental modules

But do not lazy-load:

- critical hero text
- primary navigation
- initial professional context
- essential resume links
- the main LCP element

---

# 40. CODE SPLITTING

Route and feature boundaries should naturally create code splitting.

In particular:

```text
Core shell
+
Professional content
+
Artifact engine
+
Atmosphere engine
+
WebGL modules
+
Audio modules
+
Experimental worlds
```

Do not make a giant client-side bundle because “everything is interactive.”

---

# 41. SERVER / CLIENT BOUNDARIES

Keep content/layout components server-renderable whenever possible.

Use client components only where necessary:

- interaction
- animation
- gestures
- WebGL
- audio
- browser APIs
- stateful experience logic

Do not mark entire page trees `"use client"` unnecessarily.

---

# 42. SEO

Every important route should have:

- title
- description
- canonical URL where applicable
- Open Graph data
- social image
- sensible headings
- meaningful text
- structured metadata where appropriate
- sitemap
- robots configuration

Important project pages should be indexable unless there is a reason not to expose them.

---

# 43. RESUME

Resume requirements:

- online viewing path
- direct downloadable PDF
- clear file name
- works on desktop
- works on mobile
- no broken PDF link
- no navigation dead-end

Example conceptual action:

**View Resume**
**Download PDF**

Do not hide the resume behind the creative experience.

---

# 44. EXTERNAL LINKS

Verify all links:

- GitHub
- LinkedIn
- IEEE publication
- live projects
- project repositories
- resume
- relevant professional links

External links should:

- open correctly
- use secure URLs
- provide clear labels
- not point to stale or placeholder destinations

---

# 45. EDUCATION / AWARDS / CERTIFICATION DATA

The website must distinguish:

## Completed

versus

## In Progress

versus

## Exam Preparation

versus

## Continuous Learning

For example:

> AWS Certified SysOps Administrator Associate — In Progress

must never become:

> AWS Certified SysOps Administrator

unless the credential has actually been earned.

Likewise, award claims must be tied to the correct project/context.

---

# 46. CURRENT PROFESSIONAL CONTENT TO SUPPORT

The technical implementation must be capable of presenting at least:

## M2P FINTECH

- QA & Automation
- production fintech environment
- sanity/regression/exploratory testing
- test planning/execution/validation
- API testing
- Postman
- Playwright
- TypeScript
- Page Object Model
- dynamic UI automation
- MUI DataGrid
- MongoDB
- Argo CD
- Jira
- browser debugging
- backend/API automation
- AI-assisted implementation/review where actually applicable
- build → break → understand → fix → verify

## THALES

- technical operations
- aviation / inflight entertainment
- deployment
- troubleshooting
- monitoring
- reliability

## TECH MAHINDRA MAKERS LAB

- AWS
- GCP
- Linux
- Pixel Streaming
- Unity
- Unreal Engine
- Blender
- cloud infrastructure
- 76% hosting-cost reduction
- India-focused LLM dataset operations
- regional dialect data

---

# 47. PROJECT CONTENT TO SUPPORT

The implementation must be able to represent:

### Quantum-Driven Signal Processing for Classical Communication Enhancement

- quantum networking
- Qiskit
- IBM Quantum Composer
- quantum circuit concepts
- classical communication
- ML-driven communication/routing concepts as supported by actual work
- IEEE publication
- Best Paper Award at ICRITO 2024
- Most Promising Project Award at Tech-Genesis / InCITe 2024
- Technovate 2024 first place in IT department

### Savvy

- document workflow
- embeddings/retrieval
- ChromaDB
- FastEmbed
- Edge-TTS
- Streamlit
- AI/document interaction

### LeanJobOS

- system/workbench concept
- job-search organization
- automation/workflow concepts actually implemented

### Personal Universe

This website itself.

Eventually it may expose:

- evolution
- design decisions
- architecture
- experiments
- lessons

### Lit Parking

- mobile/product artifact
- Android
- Firebase
- relevant UI/product story

### Mindset

- mobile/product artifact
- project-focused treatment
- no unnecessary medical claims

### QA Automation Framework

- real automation architecture
- workflows
- maintainability
- verification
- API/UI relationship

Do not invent functionality.

---

# 48. EDUCATION / RECOGNITION DATA

Support:

## Amity University

B.Tech in Information Technology and Computer Science.

2020–2024.

CGPA:

**8.81 / 10.00**

Recognition:

- University Gold Medallist
- First Division with Distinction
- Shree Baljit Shastri Award for human/traditional values

---

# 49. CERTIFICATIONS / LEARNING

Support the following categories with status clearly represented:

## Cloud

- AWS Certified SysOps Administrator Associate — In Progress
- AZ-900 — Exam Preparation

## Cisco / Networking

- Cisco CyberOps Associate
- CCNAv7
- CCNA / Enterprise Networking

## NPTEL / IIT

- Introduction to Machine Learning
- Understanding Design — Top 2%
- Principles of Economics

Do not present exam preparation as completed certification.

---

# 50. DESIGN SYSTEM ARCHITECTURE

Create a centralized token model:

```text
Color
Typography
Spacing
Radius
Shadow
Material
Motion
Duration
Easing
Atmosphere
Density
Z-index
Breakpoints
```

Each Atmosphere may override selected values.

Example:

```text
COSMOS
  spatialLight
  deepBackground
  spectralAccent
  highDepth
  lowDensity

ARCHIVE
  paperTexture
  warmSurface
  editorialType
  annotationColor
  highInformationDensity
```

The implementation must avoid duplicating values throughout components.

---

# 51. ATMOSPHERE ENGINE

Atmospheres should be compositional.

Each atmosphere should be able to influence:

```text
palette
material
type
layout treatment
illustration treatment
motion profile
interaction vocabulary
ambient effects
transition behavior
information density
```

Not merely:

```text
backgroundColor
accentColor
```

---

# 52. ATMOSPHERE QUALITY CHECK

When changing from:

> Cosmos → Archive

the visitor should be able to say:

> “This feels like a different way of looking at the same thing.”

not:

> “The website changed from purple to beige.”

That distinction is mandatory.

---

# 53. COSMOS

Implementation vocabulary:

- depth
- controlled spatial movement
- atmospheric light
- restrained ultraviolet
- large negative space
- subtle perspective
- research objects

Do not turn it into:

- star wallpaper
- sci-fi dashboard
- particle universe
- constellation network

---

# 54. ARCHIVE / PAPER

Implementation vocabulary:

- paper texture
- editorial grid
- margins
- notes
- annotations
- dates
- document unfolding
- citations
- image crops
- serif display where appropriate

Could be used for:

- research
- certificates
- historical material
- essays
- notes

---

# 55. MATERIAL

Implementation vocabulary:

- tactile surfaces
- depth
- controlled translucency
- soft reflections
- dimensional objects
- restrained glass

Avoid:

- everything glass
- translucent cards everywhere
- “glassmorphism because it is modern”

---

# 56. FUTURE

Implementation vocabulary:

- precision
- refined light
- clean systems
- responsive geometry
- quiet technology

Avoid:

- cyberpunk
- HUD overload
- neon grids
- fake terminal UI everywhere

---

# 57. ART

Implementation vocabulary:

- collage
- asymmetry
- painterly textures
- expressive scale
- mixed media
- irregular framing
- visual interruption

This world is allowed to break the strictness of the engineering world.

---

# 58. SOUND

Implementation vocabulary:

- waveform
- rhythm
- timing
- responsive amplitude
- transcript
- audio object

Audio remains optional and off by default.

---

# 59. MIND

Implementation vocabulary:

- white space
- typography
- questions
- diagrams
- observations
- conceptual relationships

Avoid:

- therapy-dashboard aesthetics
- clinical visual language
- diagnostic claims

---

# 60. MINIMAL

Implementation vocabulary:

- typography
- spacing
- hierarchy
- almost no atmospheric effects

This mode should prove the content is strong without visual effects.

---

# 61. INTERACTIVE ILLUSTRATION SYSTEM

Create reusable support for interactive illustrations such as:

### Cloud

Hover/select components:

```text
client
stream
compute
network
render
```

### Quantum

Manipulate or inspect:

- states
- paths
- circuits
- relationships

### Aviation

Explore an aircraft/IFE subsystem.

### QA

Interact with:

```text
Build
→ Break
→ Diagnose
→ Fix
→ Verify
```

### Archive

Unfold:

- papers
- annotations
- dates
- artifacts

### Sound

Scrub through a waveform.

### Astrology (only if intentionally published)

An interactive chart can exist as a personal-practice artifact, not as evidence of scientific validity.

It must not be automatically published.

---

# 62. EASTER EGG TECHNICAL SYSTEM

Implement approximately 3–5 meaningful discoveries.

Every Easter egg must have:

```text
trigger
discovery
content
exit path
accessibility fallback
mobile fallback
reduced-motion behavior
```

Do not create:

- arbitrary click counters
- Konami code
- typing gimmicks
- secret developer badges

unless a future concept genuinely turns them into a meaningful personal reference.

---

# 63. ERROR HANDLING

Every dynamic/interactive area must have a graceful failure mode.

Examples:

### WebGL fails

Show static/SVG fallback.

### Image fails

Show graceful placeholder with context.

### Audio fails

Show transcript/visual artifact.

### State fails

Return to a safe default.

### Route not found

Show designed 404.

### LocalStorage corrupted

Reset to default state.

### Unsupported feature

Hide the enhancement rather than break the content.

---

# 64. LOCAL STORAGE / USER PREFERENCES

If storing:

- selected atmosphere
- reduced motion preference
- sound preference
- last explored world

then:

- validate parsed values
- handle missing values
- handle malformed values
- provide safe defaults
- never make content inaccessible because of local storage

Private content must never be unlocked solely through client-side tricks.

---

# 65. BACK / FORWARD / REFRESH TESTING

Every significant navigation flow must be tested using:

```text
click
→ back
→ forward
→ refresh
→ direct URL
→ open in new tab
```

State should remain coherent.

No stale “active node” should survive into unrelated routes.

---

# 66. BROWSER SUPPORT

Test:

### Chromium
Primary desktop rendering.

### Firefox
Layout, animation and accessibility differences.

### WebKit / Safari
Important because:

- rendering differs
- fonts differ
- touch behavior differs
- some CSS/animation capabilities differ

Playwright can run projects across Chromium, Firefox and WebKit.

---

# 67. VISUAL REGRESSION TESTING

Use Playwright screenshot assertions.

Examples:

```ts
await expect(page).toHaveScreenshot("home.png")
```

Capture visual baselines for:

- homepage
- M2P
- Thales
- Tech Mahindra
- Quantum
- projects
- worlds
- atmosphere states
- mobile
- tablet
- desktop

Playwright officially supports screenshot comparisons through `toHaveScreenshot()`.

Reference:
playwright.dev/docs/next/test-snapshots

---

# 68. VISUAL REGRESSION RULE

Do not blindly accept a new screenshot baseline.

The agent must inspect the diff and decide:

### Expected difference

or

### Regression

Possible regressions:

- changed spacing
- broken type scale
- clipped content
- missing artifacts
- collapsed layout
- broken atmosphere
- visual jump
- hidden button
- mobile overflow
- unexpected color drift

---

# 69. FUNCTIONAL TESTING

Playwright should test:

### Navigation

- all main routes
- deep links
- back/forward
- external links

### Interactions

- artifact open/close
- hover/focus/tap
- atmosphere transitions
- world transitions
- menu
- search if implemented

### Media

- image fallback
- audio toggle
- video if any

### Accessibility

- keyboard flows
- focus
- axe scans

### Reduced motion

- same content
- reduced effects

---

# 70. PLAYWRIGHT UI MODE

Use Playwright UI Mode during development when helpful for rapid debugging and visual inspection.

Reference:
playwright.dev/docs/test-ui-mode

The test process should capture traces for difficult interaction failures.

---

# 71. UNIT / COMPONENT TESTING

Use a lightweight unit/component test system such as:

- Vitest
- React Testing Library

Test:

- content transformations
- utility functions
- relationship resolution
- atmosphere selection
- visibility rules
- state transformations
- artifact filtering
- route metadata helpers

Do not unit-test every presentational component merely to inflate coverage.

Test logic.

---

# 72. ACCESSIBILITY TEST MATRIX

At minimum test:

```text
Homepage
M2P
Experience routes
Project route
Artifact modal/panel
World selector/explorer
Atmosphere control
Navigation/menu
Search if present
404
```

For each:

- axe
- keyboard
- focus
- screen-reader semantics
- reduced motion
- color/contrast
- touch equivalent

---

# 73. PERFORMANCE TESTING

Use:

### Lighthouse

for:

- performance
- accessibility
- best practices
- SEO

### Lighthouse CI

to run automated performance assertions over time.

Lighthouse CI supports continuous runs and assertions against results.

Reference:
github.com/GoogleChrome/lighthouse-ci

---

# 74. CORE WEB VITAL TESTING

Measure:

- LCP
- INP
- CLS

Understand that:

### LCP
Measures perceived loading of the primary content.

### INP
Measures interaction responsiveness.

### CLS
Measures unexpected visual movement.

Use both:

- lab testing
- field measurement where available

Do not treat one Lighthouse run as proof of real-world performance.

Reference:
web.dev/articles/vitals
web.dev/articles/vitals-measurement-getting-started

---

# 75. PERFORMANCE TEST SCENARIOS

Run at least:

### Desktop Fast

Modern desktop with fast network.

### Desktop Throttled

Slower network/CPU.

### Mobile Fast

High-end phone simulation.

### Mobile Constrained

Slower CPU/network.

### WebGL Unavailable

Experience must still function.

### Reduced Motion

No visual breakage.

---

# 76. DEVTOOLS PERFORMANCE CHECK

Use browser DevTools to identify:

- long tasks
- layout thrashing
- excessive JS
- paint storms
- unnecessary style recalculation
- GPU overload
- texture memory spikes
- frequent re-renders
- expensive blur/filter usage
- oversized assets

Do not optimize blindly.

Measure first.

---

# 77. FRAME RATE

For animated experiences:

Track:

- average visual fluidity
- frame drops
- spikes during interaction
- GPU pressure

A beautiful design that stutters on ordinary hardware is not finished.

The first action when frame rate drops should be:

> Reduce unnecessary work.

Not:

> Add another optimization package.

---

# 78. WEBGL PERFORMANCE

For 3D scenes:

- use reasonable geometry
- use compressed textures
- avoid unnecessary real-time shadows
- avoid unlimited device pixel ratio
- use demand-based rendering where appropriate
- lazy-mount scenes
- dispose geometries/materials/textures when removed
- pause animations when off-screen
- avoid rendering invisible scenes
- use instancing for repeated geometry where needed

---

# 79. MEMORY LEAK CHECKS

Watch for:

- repeated event listeners
- abandoned animation frames
- stale ResizeObservers
- unremoved pointer events
- WebGL resource leaks
- audio contexts never released
- duplicated subscriptions
- repeated scene creation

Every effect with a subscription/observer/listener must have a cleanup path.

---

# 80. CONSOLE CLEANLINESS

Production candidate must have:

- no unhandled exceptions
- no hydration mismatch warnings
- no repeated React warnings
- no broken image errors
- no failed network requests caused by the application
- no deprecated APIs where avoidable
- no debug logs left accidentally

Intentional development diagnostics must be disabled or gated.

---

# 81. HYDRATION

Because Next.js/React may render server + client:

Test for:

- deterministic initial markup
- no time-dependent random layout
- no random IDs that mismatch SSR
- no browser-only APIs during server render
- no canvas differences that cause hydration errors

Never use uncontrolled randomness for essential layout.

---

# 82. DETERMINISTIC VISUALS

Prefer deterministic composition.

Do not randomly place:

- objects
- stars
- nodes
- text
- artifacts

because random layouts make:

- screenshots unstable
- visual regression impossible
- UX inconsistent
- storytelling less intentional

Controlled variation may be encoded deliberately.

---

# 83. RANDOMNESS RULE

Randomness is allowed only for:

- subtle texture
- atmospheric noise
- non-semantic background variation

Even then:

- seed where practical
- avoid frame-to-frame random recalculation
- keep it cheap

---

# 84. RESPONSIVE EDGE CASE MATRIX

Explicitly test:

- 320px wide
- 360px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px
- very wide desktop

Also test:

- browser zoom 200%
- text scaling
- portrait
- landscape
- high DPI
- ultrawide

---

# 85. TEXT EDGE CASES

Check:

- long project title
- long company name
- long technology name
- unusually large font scaling
- missing optional description
- missing image
- very long artifact title
- line wrapping
- multilingual text if ever added

The layout must not depend on one exact sentence length.

---

# 86. INPUT EDGE CASES

Test:

- keyboard only
- tab navigation
- Enter
- Escape
- Space
- arrow keys where relevant
- touch
- trackpad
- mouse
- no mouse
- screen reader navigation

---

# 87. FOCUS MANAGEMENT

When opening:

- modal
- artifact viewer
- navigation drawer
- search

focus should move correctly.

When closing:

focus should return to the invoking control where appropriate.

Escape should close dismissible overlays.

Background content must not become accidentally interactive while a modal is active.

---

# 88. MODAL / OVERLAY EDGE CASES

Ensure:

- no body scroll trap bugs
- no accidental background clicks
- correct stacking order
- correct viewport sizing
- mobile safe-area support
- keyboard accessibility
- content remains scrollable
- closing works reliably

---

# 89. SAFE AREA / MOBILE NOTCHES

When fullscreen or edge-to-edge UI is used:

support:

- safe-area insets
- bottom browser UI
- mobile viewport changes
- keyboard viewport changes

Do not place critical controls underneath system UI.

---

# 90. 404 EXPERIENCE

404 should not be generic.

It can be a small contextual artifact.

Example:

> You wandered beyond the map.

Then:

**Return to the Universe**

But keep it usable.

---

# 91. LOADING STATES

Do not make loading screens elaborate by default.

Prefer:

- skeleton only where needed
- quiet transitions
- meaningful placeholders
- progressive reveal

Never hide core content behind an unnecessary preloader.

---

# 92. NO “GATEKEEPER” EXPERIENCE

The previous failure must never return.

Do not make the user:

- select a world first
- click “Enter Universe”
- wait through cinematic loading
- choose a mode before seeing work
- understand the graph before understanding Ayush

Professional content must be visible immediately.

---

# 93. DESIGN BENCHMARK / INSPIRATION STUDY

The agent must actively study high-quality web experiences before making major design decisions.

Do not copy them.

Study **principles**.

Recommended benchmark groups:

---

## VERCEL

Study:

- design-engineering relationship
- typography
- grid discipline
- responsive systems
- developer-facing clarity
- materials
- interaction polish

Vercel's design site explicitly emphasizes design systems, interaction craft, and a consistent web design language.

References:

vercel.com/design
vercel.com/geist

---

## LINEAR

Study:

- information hierarchy
- restraint
- density control
- motion
- navigation
- interaction feedback
- polished product feel
- reduction of visual noise

Linear's redesign work is particularly useful for understanding how hierarchy and density can be refined without adding clutter.

References:

linear.app
linear.app/now/how-we-redesigned-the-linear-ui

---

## APPLE

Study:

- hierarchy
- materials
- typography
- motion
- standard interaction patterns
- accessibility
- responsive thinking
- confidence through restraint

Do not copy Apple's aesthetics.

Study their design reasoning.

References:

developer.apple.com/design/
developer.apple.com/design/human-interface-guidelines/

---

## STRIPE

Study:

- information architecture
- progressive disclosure
- modular composition
- component clarity
- interaction feedback
- complex information made understandable

Stripe is particularly useful as a benchmark for turning technically complicated systems into understandable interfaces.

Reference:

stripe.com

---

## FRAMER

Study:

- motion
- interactive presentation
- responsive design
- visual storytelling
- expressive composition
- transitions

Do not copy Framer's visual identity.

Reference:

framer.com

---

## AWWWARDS

Use for:

- experimental interaction
- creative direction
- unusual compositions
- scrolling
- WebGL
- illustration
- transition ideas

Important:

Awwwards is an inspiration/benchmark source, not a quality certificate.

Study specific interactions.

Do not copy whole sites.

Reference:

awwwards.com

---

## SITEINSPIRE

Use to study:

- typography
- portfolios
- unusual layouts
- art direction
- interactive experiences
- minimalism
- editorial web design

Siteinspire currently categorizes large sets of portfolio, unusual, typographic, interactive and art-direction examples.

References:

siteinspire.com
siteinspire.com/websites/category/portfolio
siteinspire.com/websites/category/web-and-interactive-design
siteinspire.com/websites/category/design-and-art-direction

---

# 94. REFERENCE STUDY METHOD

Do not tell the agent:

> “Make it like Linear.”

Instead create a reference matrix:

```text
Reference
→ what is excellent
→ why it works
→ which principle applies to Ayush
→ what should NOT be copied
```

Example:

```text
Linear
Excellent:
hierarchy + restrained motion

Apply:
professional work navigation

Do not copy:
product UI identity
```

Another:

```text
Awwwards portfolio
Excellent:
unusual composition

Apply:
Creative World

Do not copy:
exact visual concept
```

Another:

```text
Apple
Excellent:
clarity + material restraint

Apply:
header / controls / accessibility

Do not copy:
Apple branding
```

---

# 95. BENCHMARK CATEGORIES

Before final approval, benchmark the site against examples for:

### Typography

### Navigation

### Responsive behavior

### Motion

### Scroll storytelling

### Micro-interactions

### Material design

### Editorial composition

### Portfolio storytelling

### Accessibility

### Loading performance

### Mobile experience

### Art direction

### 3D/immersive interaction

The goal is not to win every category.

The goal is to understand what excellent execution looks like.

---

# 96. “BENCHMARK AGAINST THE BEST”

At each major phase the agent should ask:

> “Where is this implementation weaker than the best examples I can find?”

This is a stronger question than:

> “Does this technically work?”

Technical correctness is necessary.

It is not enough.

---

# 97. SELF-CRITIQUE LOOP

After every meaningful visual phase:

### Step 1
Run the application.

### Step 2
Open the actual page in a browser.

### Step 3
Interact like a first-time visitor.

### Step 4
Take screenshots.

### Step 5
Compare against the intended visual direction.

### Step 6
Inspect functional behavior.

### Step 7
Run automated tests.

### Step 8
Review accessibility.

### Step 9
Review performance.

### Step 10
Identify the 3 most important weaknesses.

### Step 11
Fix those weaknesses.

### Step 12
Repeat.

Do not continuously add features without a critique loop.

---

# 98. AGENT SELF-REVIEW QUESTIONS

The agent must answer these after each milestone:

## Identity

> Can someone tell this is Ayush without reading the name?

## Substance

> Is there real work on screen?

## Authorship

> Could this design belong to another developer?

## Human quality

> Does this feel designed by a person rather than generated by a UI system?

## Interaction

> Does interaction reveal anything meaningful?

## Restraint

> Does the design remain good with effects disabled?

## Performance

> Is the experience responsive on ordinary hardware?

## Accessibility

> Can the experience be used without a mouse or motion?

## Mobile

> Does the design remain intentional on a phone?

## Discovery

> Does the visitor know where they are and what they can explore next?

---

# 99. THE “EFFECTS DISABLED” TEST

This test is mandatory.

Disable:

- particles
- WebGL
- blur
- parallax
- atmospheric animation
- custom cursor
- transitions

The site should still feel:

- structured
- beautiful
- personal
- readable
- interesting

If the design becomes empty:

the underlying composition is not strong enough.

---

# 100. THE “SLOW COMPUTER” TEST

On constrained hardware:

The site should gracefully simplify.

The correct response to low performance is:

```text
reduce effects
reduce scene complexity
reduce simultaneous animation
preserve content
preserve interaction
```

Never:

```text
show blank page
```

---

# 101. THE “FIRST-TIME VISITOR” TEST

Someone who has never seen the site should be able to answer within moments:

> Who is this?

> What does he do?

> What has he worked on?

> What can I explore?

They should not need an explanation of:

- Worlds
- Atmospheres
- graph architecture
- nodes
- modes

---

# 102. THE “RECRUITER” TEST

A recruiter should be able to:

```text
arrive
→ understand role
→ see experience
→ see projects
→ open resume
→ contact
```

without learning any unusual interaction.

---

# 103. THE “CURIOUS VISITOR” TEST

A curious visitor should be able to:

```text
work
→ tool
→ artifact
→ project
→ research
→ world
→ atmosphere
→ another artifact
```

and feel:

> “I discovered something.”

---

# 104. THE “MOBILE” TEST

On a phone:

- no horizontal overflow
- no broken WebGL canvas
- no tiny unreadable text
- no hover-dependent content
- no giant empty hero
- no inaccessible controls
- no huge asset download
- no runaway animations
- no awkward sticky controls

The mobile site should feel designed, not compressed.

---

# 105. THE “BACK BUTTON” TEST

Every meaningful transition must survive:

```text
Explore
→ go deeper
→ press Back
→ previous state feels correct
```

No broken history.

No route mismatch.

No content disappearing.

---

# 106. THE “SHAREABLE URL” TEST

A visitor copies a URL from:

- Quantum
- M2P
- a project
- an artifact

opens it in a new browser.

The correct content must load directly.

---

# 107. THE “NO JAVASCRIPT / FAILURE” PRINCIPLE

Where technically possible:

Core content should remain meaningful if enhancement JavaScript fails.

That means:

- semantic HTML
- real links
- real text
- normal document structure

Canvas/WebGL should enhance rather than contain all meaning.

---

# 108. CI PIPELINE

Preferred CI stages:

```text
Install
 ↓
Typecheck
 ↓
Lint
 ↓
Unit tests
 ↓
Build
 ↓
Playwright E2E
 ↓
Visual regression
 ↓
Accessibility
 ↓
Lighthouse CI
 ↓
Deploy preview
```

A failure in a foundational stage must stop the pipeline.

---

# 109. GIT DISCIPLINE

Keep changes understandable.

Prefer commits such as:

```text
feat: rebuild arrival experience
feat: add artifact system
feat: add atmosphere engine
feat: add quantum artifact
feat: add M2P system visualization
fix: mobile navigation overflow
fix: reduced motion transitions
perf: lazy load 3d scenes
test: add project route snapshots
```

Avoid giant commits called:

```text
final
final2
final-final
```

---

# 110. DEVELOPMENT TOOLS

Recommended:

- VS Code / equivalent editor
- TypeScript
- ESLint
- Prettier
- Git
- Playwright
- Vitest
- React Testing Library
- Lighthouse
- Lighthouse CI
- axe-core / @axe-core/playwright
- Chrome DevTools
- Firefox DevTools
- Safari Web Inspector when possible

No tool should be introduced without a clear purpose.

---

# 111. OPTIONAL LIBRARIES — ADD ONLY WHEN JUSTIFIED

Potentially useful:

- `motion`
- `gsap`
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `@axe-core/playwright`
- `vitest`
- `@testing-library/react`
- `simple-icons`
- a small audio helper if genuinely needed

Potentially unnecessary:

- giant UI libraries
- multiple carousel libraries
- multiple animation libraries
- multiple global state libraries
- large icon packs imported wholesale
- heavy particle libraries
- full CMS
- complex database
- authentication

This is a personal site.

Do not accidentally engineer a startup platform.

---

# 112. DEPLOYMENT

Recommended deployment target:

### Vercel

Because of natural Next.js support.

Use:

- preview deployment
- production deployment
- environment separation
- deployment checks
- rollback capability where available

Official:
vercel.com/frameworks/nextjs

---

# 113. FREE / LOW-COST DESIGN PRINCIPLE

The architecture should not require expensive infrastructure.

Prefer:

- static content
- server rendering where useful
- local assets
- Vercel-compatible deployment
- GitHub-based workflow
- no database unless genuinely necessary

External services must have a justified role.

---

# 114. NO UNNECESSARY BACKEND

The site does not need a backend merely because it is “advanced.”

A backend is only justified for:

- genuine dynamic content
- analytics requiring server processing
- contact processing
- future CMS
- private authenticated functionality

Otherwise keep the system static / server-rendered.

---

# 115. SECURITY BASICS

Even though this is a personal website:

- do not expose secret keys
- do not place private data in client bundles
- validate any query parameters
- validate local storage values
- sanitize externally sourced content
- avoid unsafe HTML injection
- use secure external links
- keep dependencies updated
- audit dependencies before release

---

# 116. CONTENT SECURITY / PRIVACY

Personal/private content must be excluded at source.

Do not rely on:

```text
if (!userClickedSecretThing) showPrivateContent()
```

to protect private information.

If something is private, it should not be shipped to the public client unnecessarily.

---

# 117. ANALYTICS

Analytics are optional.

If added:

Prefer privacy-conscious lightweight analytics.

Track useful product signals such as:

- page visits
- project opens
- resume clicks
- contact clicks
- world exploration

Do not track unnecessary personal behavior.

Do not let analytics scripts meaningfully damage performance.

---

# 118. DEBUG MODE

A development-only Universe Debug mode may remain.

For example:

```text
Ctrl + Shift + D
```

But it must never appear in production.

Debug information may show:

- active world
- atmosphere
- selected artifact
- current renderer
- frame rate
- reduced motion
- low-signal status

It is a developer tool, not user-facing design.

---

# 119. STAGED IMPLEMENTATION PLAN

The project should be implemented in controlled stages.

---

## STAGE 0 — AUDIT CURRENT IMPLEMENTATION

Before changing code:

- inspect existing routes
- inspect state architecture
- inspect content
- inspect dependencies
- inspect rendering layers
- inspect current styles
- inspect asset tree
- identify reusable code
- identify code to delete
- identify architecture worth keeping

Do not rebuild blindly.

Deliver:

> architectural audit + visual failure list + keep/remove decision.

---

## STAGE 1 — VISUAL FOUNDATION

Build only:

- header
- arrival
- first professional block
- one real work artifact
- one project/research artifact
- transition toward Multitudes
- closing connection

Focus on:

- typography
- spacing
- composition
- material
- visual identity

No major WebGL.

No huge atmosphere engine.

No Easter eggs.

No complex world selector.

Goal:

> The opening must already feel like the correct product.

---

## STAGE 2 — ARTIFACT ENGINE

Implement:

- artifact data model
- reusable artifact components
- screenshots
- diagrams
- system objects
- research objects
- interactive artifact shell

Goal:

> Work becomes visually tangible.

---

## STAGE 3 — PROFESSIONAL UNIVERSE

Implement:

- M2P
- Thales
- Tech Mahindra
- education
- awards
- certifications
- resume
- GitHub
- LinkedIn
- email

Goal:

> Professional utility is excellent without requiring creative exploration.

---

## STAGE 4 — PROJECT UNIVERSE

Implement:

- Quantum
- Savvy
- LeanJobOS
- Personal Universe
- Lit Parking
- Mindset
- QA Automation
- supporting project artifacts

Goal:

> Projects feel like things entered and explored, not cards opened.

---

## STAGE 5 — TOOL ECOSYSTEM

Implement:

- real technology logos
- tool relationships
- evidence links
- tool → project transitions

Goal:

> Technologies become evidence.

---

## STAGE 6 — WORLDS

Implement:

- Engineer
- Builder
- Explorer
- Creative
- Thinker
- Life

Goal:

> The visitor discovers additional dimensions naturally.

---

## STAGE 7 — ATMOSPHERES

Implement:

- Cosmos
- Archive/Paper
- Material
- Future
- Art
- Sound
- Mind
- Minimal

Goal:

> Atmospheres genuinely change perception, not just color.

---

## STAGE 8 — ADVANCED INTERACTIONS

Implement only the interactions that earned their place:

- system manipulation
- project transformations
- interactive diagrams
- archive unfolding
- 3D objects
- audio
- contextual relationships
- meaningful Easter eggs

Goal:

> Interaction increases discovery.

---

## STAGE 9 — PERFORMANCE / ACCESSIBILITY

Complete:

- reduced motion
- low-signal
- WebGL fallback
- keyboard
- touch
- screen reader
- axe
- Lighthouse
- Core Web Vitals
- mobile performance

---

## STAGE 10 — FULL QA / REGRESSION

Run:

- build
- typecheck
- lint
- unit tests
- E2E
- visual snapshots
- browser matrix
- accessibility
- performance
- broken links
- route tests
- deep-link tests

Only after this should the site be considered release candidate.

---

# 120. DO NOT BUILD THE WHOLE UNIVERSE AT ONCE

This is mandatory.

The agent must not jump from:

> architecture

to:

> 25 pages + 8 atmospheres + 3D + audio + Easter eggs

without validating the first experience.

Use this loop:

```text
BUILD SMALL
→ LOOK
→ TEST
→ CRITIQUE
→ FIX
→ THEN EXPAND
```

---

# 121. VISUAL APPROVAL GATES

At the end of each stage, use a gate:

### Gate A — Composition

Does the page look good without effects?

### Gate B — Content

Is real material visible?

### Gate C — Identity

Does it feel specifically Ayush?

### Gate D — Interaction

Does interaction reveal meaning?

### Gate E — Performance

Does it remain fluid?

### Gate F — Accessibility

Does it remain usable?

### Gate G — Mobile

Does it survive responsive transformation?

A stage does not pass merely because the code builds.

---

# 122. SELF-TEST REPORT

At the end of each major milestone, the agent should produce a small internal report containing:

```text
VISUAL
What improved?
What still feels weak?

FUNCTIONAL
Which interactions passed?
Which failed?

ACCESSIBILITY
What axe issues remain?

PERFORMANCE
LCP:
INP:
CLS:
TBT:
Bundle/asset observations:

BROWSER
Chromium:
Firefox:
WebKit:

MOBILE
Pass/fail:

REGRESSION
Unexpected screenshot changes:

NEXT 3 FIXES
1.
2.
3.
```

Do not hide weaknesses.

The purpose is iterative quality improvement.

---

# 123. FINAL RELEASE CHECKLIST

Before release, verify:

## Brand / Identity

- [ ] AYUSH KUMAR SHARAN visible
- [ ] Engineer / Builder / Problem Solver positioning clear
- [ ] site feels authored
- [ ] site does not feel generic

## Professional

- [ ] M2P
- [ ] Thales
- [ ] Tech Mahindra
- [ ] projects
- [ ] education
- [ ] awards
- [ ] certifications/status
- [ ] resume
- [ ] GitHub
- [ ] LinkedIn
- [ ] email

## Evidence

- [ ] real artifacts
- [ ] real links
- [ ] no fabricated evidence
- [ ] technology-to-work relationships

## Worlds

- [ ] Engineer
- [ ] Builder
- [ ] Explorer
- [ ] Creative
- [ ] Thinker
- [ ] Life

## Atmospheres

- [ ] Cosmos
- [ ] Archive/Paper
- [ ] Material
- [ ] Future
- [ ] Art
- [ ] Sound
- [ ] Mind
- [ ] Minimal

## Interactions

- [ ] meaningful
- [ ] touch equivalent
- [ ] keyboard equivalent
- [ ] reduced motion
- [ ] graceful fallback

## Technical

- [ ] typecheck
- [ ] lint
- [ ] build
- [ ] unit tests
- [ ] Playwright
- [ ] visual regression
- [ ] accessibility
- [ ] Lighthouse
- [ ] browser matrix
- [ ] mobile
- [ ] deep links
- [ ] 404
- [ ] no console errors

## Performance

- [ ] LCP target
- [ ] INP target
- [ ] CLS target
- [ ] no obvious long tasks
- [ ] WebGL lazy loaded
- [ ] images optimized
- [ ] fonts optimized
- [ ] unnecessary scripts removed

---

# 124. FINAL QUALITY GATE — THE FIVE QUESTIONS

The agent must not declare success until it can honestly answer:

### 1.
> Does this feel like a carefully authored digital place rather than a portfolio template?

### 2.
> Does the website still feel beautiful if the atmospheric effects are turned off?

### 3.
> Does the visitor encounter real evidence of Ayush's work?

### 4.
> Can both a recruiter and a curious visitor use the site naturally?

### 5.
> Does the implementation feel technically invisible?

That last question is important.

The visitor should not admire:

> React + Three.js + Motion + GSAP.

They should admire:

> **the experience.**

---

# 125. FINAL TECHNICAL NORTH STAR

The implementation should achieve:

```text
NEXT.JS
+
REACT
+
TYPESCRIPT
+
TAILWIND
+
MOTION
+
OPTIONAL GSAP
+
SVG
+
OPTIONAL THREE.JS / R3F
+
PLAYWRIGHT
+
AXE
+
LIGHTHOUSE CI
+
GOOD WEB ARCHITECTURE
+
REAL CONTENT
+
REAL ARTIFACTS
```

But the final output should feel like none of those technologies individually.

It should feel like:

> **a coherent world.**

---

# 126. THE FINAL PRODUCT EQUATION

The technical system should realize:

```text
PERSON
    ↓
WORLDS
    ↓
ARTIFACTS
    ↓
RELATIONSHIPS
    ↓
ATMOSPHERES
    ↓
INTERACTION
    ↓
DISCOVERY
```

The technical implementation behind that is:

```text
CONTENT MODEL
    +
SEMANTIC GRAPH
    +
RESPONSIVE DOM
    +
SVG / CANVAS
    +
SELECTIVE WEBGL
    +
MOTION
    +
VIEW TRANSITIONS
    +
ACCESSIBILITY
    +
PERFORMANCE
    +
AUTOMATED TESTING
```

This is the engineering foundation of the Personal Universe.

---

# 127. FINAL INSTRUCTION TO THE AGENT

You are not merely implementing a website.

You are translating a very specific personal concept into a real digital experience.

Do not optimize for:

> maximum technology

Optimize for:

> maximum meaning per interaction

Do not optimize for:

> maximum effects

Optimize for:

> maximum sense of presence

Do not optimize for:

> maximum feature count

Optimize for:

> maximum coherence

Do not optimize for:

> “looks futuristic”

Optimize for:

> **feels like Ayush.**

Before adding any technology, library, animation or effect, ask:

> **What does this allow the visitor to discover?**

Before finishing any stage, ask:

> **Can I defend every major visual and technical decision in terms of the user's experience?**

Before release, ask:

> **Would I be proud to show this to a world-class designer, engineer, recruiter and curious stranger without having to explain what they are supposed to appreciate?**

If not:

**keep iterating.**

---

# REFERENCE INDEX

## Product / Design foundations

- Next.js Docs — nextjs.org/docs
- React — react.dev
- Motion — motion.dev/docs/react
- Three.js — threejs.org/docs
- Tailwind CSS — tailwindcss.com/docs
- GSAP ScrollTrigger — gsap.com/docs/v3/Plugins/ScrollTrigger/
- Vercel Next.js — vercel.com/frameworks/nextjs

## Testing / Quality

- Playwright — playwright.dev
- Playwright visual snapshots — playwright.dev/docs/next/test-snapshots
- Playwright UI Mode — playwright.dev/docs/test-ui-mode
- Axe-core — deque.com/axe/core-documentation/api-documentation/
- Lighthouse CI — github.com/GoogleChrome/lighthouse-ci
- Web Vitals — web.dev/articles/vitals
- WCAG — w3.org/WAI/standards-guidelines/wcag/

## Benchmark / inspiration

- Vercel Design — vercel.com/design
- Vercel Geist — vercel.com/geist
- Linear — linear.app
- Linear UI redesign — linear.app/now/how-we-redesigned-the-linear-ui
- Apple Design — developer.apple.com/design/
- Apple HIG — developer.apple.com/design/human-interface-guidelines/
- Stripe — stripe.com
- Framer — framer.com
- Awwwards — awwwards.com
- Siteinspire — siteinspire.com

---

# FINAL STATEMENT

The first two specifications define the **soul and experience**.

This third specification defines the **engineering discipline required to make that experience real**.

Do not let the technology become the identity.

Do not let the architecture become the visual language.

Do not let animation hide weak content.

Do not let visual ambition destroy usability.

Build a system where:

**the content is real,  
the relationships are meaningful,  
the interactions are intentional,  
the visuals are expressive,  
the motion is fluid,  
the experience is accessible,  
the performance is measurable,  
and the implementation can evolve for years.**

The technical success criterion is not:

> “The website has WebGL.”

It is:

> **“Everything feels naturally connected, immediately responsive, visually coherent, and unexpectedly alive.”**
