import type { ModeId, EvidenceType } from './modes';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Research & AI" | "Systems & Cloud" | "Mobile & Apps" | "Creative Tech" | "Automation & Tooling";
  timeline: string;
  featured: boolean;
  summary: string;
  tags: string[];
  recognition?: string[];
  metrics?: { label: string; value: string }[];
  links?: { label: string; url: string; external?: boolean }[];
  caseStudy: {
    overview: string;
    context: string;
    challenge: string;
    architecture: string;
    implementation: string[];
    outcomes: string[];
    learned: string;
  };
  modes: ModeId[];
  evidenceType: EvidenceType;
}

export const projects: Project[] = [
  {
    slug: "quantum-signal-processing",
    title: "Quantum-Driven Signal Processing",
    subtitle: "IEEE Published Research on Quantum-ML Network Convergence",
    category: "Research & AI",
    timeline: "2023 – 2024",
    featured: true,
    summary: "Pioneered a research framework integrating quantum networking principles with machine learning algorithms to optimize high-fidelity signal transmission and mitigate noise across complex communication channels.",
    tags: ["Quantum Computing", "Machine Learning", "Signal Processing", "IEEE", "Python", "NumPy", "Qiskit"],
    recognition: [
      "Best Paper Award — ICRITO 2024 (11th International Conference on Reliability, Infocom Technologies and Optimization)",
      "Most Promising Project Award — Tech-Genesis / InCITe 2024",
      "1st Place Winner — Technovate 2024"
    ],
    metrics: [
      { label: "Paper Acceptance", value: "IEEE Xplore" },
      { label: "Awards Won", value: "3 National/Intl" }
    ],
    links: [
      { label: "View IEEE Publication", url: "https://ieeexplore.ieee.org/abstract/document/10522244", external: true },
      { label: "Case Study", url: "/projects/quantum-signal-processing" }
    ],
    caseStudy: {
      overview: "An interdisciplinary exploration at the frontier of quantum information theory and adaptive neural signal filtering.",
      context: "Contemporary communication networks face fundamental physical limits when scaling throughput under heavy electromagnetic interference. Quantum state superposition and entanglement offer theoretical channels for ultra-resilient communication, but integrating these with classical receiver pipelines requires novel processing topologies.",
      challenge: "Classical filtering methods experience exponential latency when processing non-stationary stochastic noise profiles in quantum-assisted channels. The challenge was building an adaptive model capable of state estimation without collapsing fragile entanglement states prematurely.",
      architecture: "Synthesized a hybridized classical-quantum pipeline: a quantum state simulation layer coupled to a localized recurrent neural network estimator that dynamically predicts channel decoherence and applies real-time phase compensation.",
      implementation: [
        "Modeled multi-qubit noise dissipation states using statevector simulators and parameterized quantum circuits (PQCs).",
        "Trained lightweight ML regressors to forecast channel attenuation coefficients from sparse telemetry telemetry bursts.",
        "Demonstrated significant SNR improvements across simulated turbulent communication media.",
        "Authored and defended the complete mathematical formalism, presented at IEEE ICRITO 2024."
      ],
      outcomes: [
        "Awarded Best Paper at IEEE ICRITO 2024 for technical depth and novel interdisciplinary synthesis.",
        "Received 1st Place at Technovate 2024 and Most Promising Project at InCITe 2024.",
        "Published officially in the IEEE Xplore digital library archive."
      ],
      learned: "Interdisciplinary research taught me that breakthrough solutions rarely exist inside a single silo; the most fertile territory often lies at the seams between seemingly unrelated engineering fields."
    },
    modes: ['explorer', 'engineer', 'builder', 'journey'],
    evidenceType: 'research'
  },
  {
    slug: "job-os",
    title: "JobOS & LeanJobOS",
    subtitle: "Autonomous Job Application Ecosystem",
    category: "Automation & Tooling",
    timeline: "2024",
    featured: true,
    summary: "Architected a local, privacy-first autonomous job application pipeline using SQLite, custom browser profiles, and local LLM integration to streamline and analyze the job search process.",
    tags: ["Python", "SQLite", "Local LLM", "Playwright", "Web Scraping", "Data Analytics", "Automation"],
    metrics: [
      { label: "Architecture", value: "Headless Pipeline" },
      { label: "Privacy", value: "Local First" }
    ],
    links: [
      { label: "Case Study", url: "/projects/job-os" }
    ],
    caseStudy: {
      overview: "Automating the repetitive mechanics of the job search to focus entirely on human connection and skill-building.",
      context: "The modern job search involves massive redundancy: filling out the same Workday forms, parsing identical job descriptions, and manually tracking state across spreadsheets.",
      challenge: "Building a reliable, headless pipeline capable of navigating diverse application portals, extracting context via LLMs, and maintaining session states without relying on expensive SaaS tools.",
      architecture: "A bifurcated system: JobOS (heavy client with SQLite and local LLM integration) and LeanJobOS (streamlined headless runner with automated reporting dashboards). Both rely on configured profiles and declarative YAML schemas.",
      implementation: [
        "Developed custom browser profile managers to maintain authenticated sessions across major ATS platforms.",
        "Integrated local LLMs to parse job descriptions against resume embeddings to automatically draft targeted cover letters.",
        "Built a robust SQLite schema to track application states, conversion rates, and follow-up schedules.",
        "Implemented a dynamic reporting engine to visualize pipeline health."
      ],
      outcomes: [
        "Eliminated 90% of manual data entry during the application process.",
        "Created a reusable, fault-tolerant scraping architecture."
      ],
      learned: "When you automate a personal workflow, you realize how much cognitive overhead goes into simply managing state. Real productivity isn't working faster; it's delegating mechanical state management to a machine."
    },
    modes: ['engineer', 'builder', 'explorer'],
    evidenceType: 'project'
  },
  {
    slug: "cloud-pixel-streaming",
    title: "High-Fidelity Cloud Pixel Streaming",
    subtitle: "76% Hosting Cost Optimization for Interactive 3D Workflows",
    category: "Systems & Cloud",
    timeline: "2023",
    featured: true,
    summary: "Architected dynamic GPU-accelerated cloud infrastructure on AWS and GCP to stream interactive Unreal Engine 3D applications directly to low-spec web clients with minimal latency.",
    tags: ["AWS", "GCP", "Unreal Engine 5", "WebRTC", "Docker", "GPU Instances", "Cost Optimization"],
    metrics: [
      { label: "Cost Reduction", value: "76%" },
      { label: "Stream Latency", value: "<45ms" }
    ],
    links: [
      { label: "Case Study", url: "/projects/cloud-pixel-streaming" }
    ],
    caseStudy: {
      overview: "Optimizing cloud GPU resource allocation for photorealistic real-time 3D web delivery.",
      context: "During my tenure at Tech Mahindra Makers Lab, we needed to deliver photorealistic 3D metaverse and interactive architectural twins to clients without requiring heavy local hardware or long downloads.",
      challenge: "Dedicated GPU cloud instances (AWS G4dn / GCP instances) are prohibitively expensive if kept running constantly. Idle instances drained significant budget while client traffic was bursty.",
      architecture: "Engineered an on-demand orchestration layer using WebRTC signalling servers, automated autoscaling triggers, and containerized Unreal Engine pixel streaming instances that provision and spin down dynamically based on active session heartbeat.",
      implementation: [
        "Configured custom WebRTC signalling and STUN/TURN server clusters on lightweight cloud VMs.",
        "Created customized AMI images with pre-warmed graphics drivers and headless Unreal Engine execution flags.",
        "Implemented idle session timeout triggers and spot instance scheduling algorithms."
      ],
      outcomes: [
        "Slashed continuous monthly cloud infrastructure expenditure by 76%.",
        "Delivered smooth 60fps 1080p interactive streaming with end-to-end latency below 45ms across regional connections."
      ],
      learned: "Cloud engineering is as much about economic design as it is about architectural scalability. The smartest architecture is one that balances compute performance with disciplined cost-awareness."
    },
    modes: ['engineer', 'builder', 'journey'],
    evidenceType: 'professional'
  },
  {
    slug: "savvy-ai-document-app",
    title: "Savvy: AI-Driven Document App",
    subtitle: "Interactive Local RAG PDF Application",
    category: "Research & AI",
    timeline: "2024",
    featured: true,
    summary: "Built an interactive PDF application integrating Streamlit, ChromaDB, FastEmbed, and Edge-TTS for dynamic document parsing, retrieval-augmented generation, and text-to-speech interaction.",
    tags: ["Python", "Streamlit", "ChromaDB", "FastEmbed", "Edge-TTS", "LLM", "RAG"],
    links: [
      { label: "Case Study", url: "/projects/savvy-ai-document-app" }
    ],
    caseStudy: {
      overview: "Bringing static documents to life through localized conversational AI and voice synthesis.",
      context: "Reading dense technical PDFs or long reports is time-consuming. Users need a way to instantly query documents and receive synthesized audio answers.",
      challenge: "Building a fully local RAG (Retrieval-Augmented Generation) pipeline that doesn't rely on expensive cloud vector databases or API calls for embeddings.",
      architecture: "A Streamlit frontend paired with a local ChromaDB vector store. FastEmbed processes documents into vectors locally, and Edge-TTS provides immediate audio synthesis for the generated responses.",
      implementation: [
        "Integrated FastEmbed for ultra-fast, local document embedding generation.",
        "Engineered a ChromaDB retrieval system to chunk and store PDF context for accurate LLM querying.",
        "Built a seamless Streamlit chat interface with Edge-TTS to read responses aloud."
      ],
      outcomes: [
        "Created a fully functional, privacy-first document analysis tool that runs efficiently on local hardware."
      ],
      learned: "Local AI inference is rapidly closing the gap with cloud models. You can build remarkably powerful, private AI tools using localized embeddings and vector stores."
    },
    modes: ['builder', 'explorer'],
    evidenceType: 'project'
  },
  {
    slug: "personal-universe",
    title: "The Personal Universe",
    subtitle: "A digital representation of one person containing multiple dimensions",
    category: "Creative Tech",
    timeline: "2024 – Present",
    featured: true,
    summary: "Engineered and deployed a modern web application featuring semantic navigation, spatial relationship graphs, and bespoke CSS architectures to demonstrate end-to-end frontend development and CI/CD hosting workflows.",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "CSS Architecture", "WebGL", "Framer Motion"],
    links: [
      { label: "Case Study", url: "/projects/personal-universe" }
    ],
    caseStudy: {
      overview: "This very website is a continuous engineering and design project.",
      context: "Standard portfolios are generic lists of achievements. I needed a space that reflects the complexity of human interests—where engineering, creative technology, and personal practices exist in a shared ecosystem.",
      challenge: "Building a complex spatial navigation model that degrades gracefully, maintains strict accessibility standards, and scores perfectly on performance metrics.",
      architecture: "Next.js App Router providing static generation. A custom React Context-driven graph engine computes spatial node relationships deterministically. Styling is handled via pure, bespoke CSS custom properties with scroll-driven progressive enhancement.",
      implementation: [
        "Built a 'Living Atmosphere' canvas that visualizes data relationships rather than random particles.",
        "Implemented CSS scroll-driven animations using `@supports (animation-timeline: view())`.",
        "Architected a 'Worlds and Atmospheres' framework allowing visitors to explore different facets of my identity without feeling lost.",
        "Employed AI-assisted development workflows to accelerate boilerplate and rapidly test structural concepts."
      ],
      outcomes: [
        "Deployed a highly performant, deeply personalized web application.",
        "Established a scalable semantic data model capable of ingesting years of future work without breaking UI patterns."
      ],
      learned: "A sophisticated system requires subtraction. You must have the discipline to remove generic templates, unnecessary features, and visual noise until only what is necessary remains."
    },
    modes: ['builder', 'creative', 'thinker'],
    evidenceType: 'project'
  },
  {
    slug: "lit-parking",
    title: "Lit Parking Android Platform",
    subtitle: "Real-time Smart Urban Parking Management Application",
    category: "Mobile & Apps",
    timeline: "2023",
    featured: false,
    summary: "An intuitive mobile application designed to solve urban parking congestion through real-time spot reservation, dynamic geospatial mapping, and automated occupancy verification.",
    tags: ["Android", "Kotlin", "Java", "Firebase", "Google Maps API", "Material Design", "NoSQL"],
    metrics: [
      { label: "Platform", value: "Native Android" },
      { label: "Backend", value: "Firebase Realtime" }
    ],
    links: [
      { label: "Case Study", url: "/projects/lit-parking" }
    ],
    caseStudy: {
      overview: "Solving urban transit friction through clean spatial user interfaces and real-time state synchronization.",
      context: "Urban drivers spend an average of 17 minutes circling for parking spots in high-density commercial hubs, creating unnecessary traffic jams and carbon emissions.",
      challenge: "Building a synchronized mobile experience where spot vacancy updates are propagated in sub-second intervals across hundreds of concurrent users without causing concurrency race conditions.",
      architecture: "Native Android client utilizing MVVM architecture, Firebase Realtime Database for optimistic UI updates, and Google Maps SDK for smooth geospatial visualization.",
      implementation: [
        "Engineered transactional booking queues in Firebase Cloud Functions to prevent double-booking anomalies.",
        "Designed clean Material 3 design interfaces with custom map markers, route overlays, and instant QR verification pass generation.",
        "Implemented offline caching for map tiles and active reservation details."
      ],
      outcomes: [
        "Successfully developed and showcased a fully functional working prototype with instant reservation roundtrip under 200ms."
      ],
      learned: "Designing mobile apps reinforced the primacy of user experience: when an interface handles error states gracefully and syncs instantly, users develop immediate trust."
    },
    modes: ['builder', 'creative'],
    evidenceType: 'project'
  },
  {
    slug: "mindset-app",
    title: "Mindset Personal Growth Tracker",
    subtitle: "Minimalist Reflection & Habit Formation Mobile Companion",
    category: "Mobile & Apps",
    timeline: "2022 – 2023",
    featured: false,
    summary: "A focused, distraction-free Android application built with clean UI/UX patterns to help individuals cultivate sustainable daily habits, journal reflections, and track cognitive progress.",
    tags: ["Android", "Java", "Kotlin", "Room Database", "UI/UX", "Data Visualization"],
    metrics: [
      { label: "Architecture", value: "MVVM + Room" },
      { label: "Design", value: "Minimalist UX" }
    ],
    links: [
      { label: "Case Study", url: "/projects/mindset-app" }
    ],
    caseStudy: {
      overview: "A deliberate exercise in digital calm: building a habit tool that respects user attention.",
      context: "Most modern productivity apps are overloaded with gamification gimmicks, notifications, and complex dashboards that induce cognitive fatigue rather than clarity.",
      challenge: "Creating a tool that feels calm, tactile, and rewarding to use daily without utilizing manipulative dopamine loops or intrusive analytics.",
      architecture: "Clean MVVM with offline-first Room local persistence, lightweight biometric authentication, and smooth custom canvas micro-charts for progress visualization.",
      implementation: [
        "Designed bespoke typographic and color systems prioritizing night-time reflection and optical ergonomics.",
        "Engineered zero-cloud local SQLite encryption to ensure personal reflections remain 100% private on-device.",
        "Built custom gesture-driven interactions for seamless habit logging with haptic feedback."
      ],
      outcomes: [
        "Created an elegant, dependable daily companion app that exemplifies clean code principles and thoughtful human-centered product craft."
      ],
      learned: "Restraint is a core engineering and design superpower. Subtracting unnecessary features often creates significantly more value than adding them."
    },
    modes: ['builder', 'creative', 'life'],
    evidenceType: 'project'
  }
];
