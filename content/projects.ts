export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Research & AI" | "Systems & Cloud" | "Mobile & Apps" | "Creative Tech";
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
      { label: "View Research Blueprint", url: "/research" },
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
    }
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
    }
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
    }
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
    }
  }
];
