export interface ResearchSection {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  takeaway: string;
  details: string[];
}

export const researchData = {
  paperTitle: "Quantum-Driven Signal Processing for Next-Generation Communication Channels",
  authors: "Ayush Kumar Sharan et al.",
  conference: "IEEE ICRITO 2024 (11th International Conference on Reliability, Infocom Technologies and Optimization)",
  publicationStatus: "Published in IEEE Xplore Digital Library",
  awards: [
    { title: "Best Paper Award", organization: "IEEE ICRITO 2024", note: "Recognized among hundreds of international submissions for conceptual depth and rigor." },
    { title: "1st Place Winner", organization: "Technovate 2024", note: "Top technical innovation project presentation." },
    { title: "Most Promising Project Award", organization: "Tech-Genesis / InCITe 2024", note: "Selected by industry judges for transformative interdisciplinary potential." }
  ],
  abstract: "As classical wireless and optical communication networks approach Shannon capacity limits under stochastic electromagnetic interference, quantum-enhanced channel estimation offers a revolutionary paradigm. This paper investigates the mathematical formulation of parameterized quantum state superposition coupled with adaptive machine learning regression to model and counteract channel decoherence in real time.",
  executiveSummary: "In 30 seconds: When radio and optical signals travel through turbulent environments, noise distorts them. Instead of relying purely on heavy classical filter equations that lag behind, we simulated quantum entangled states whose phase changes can be estimated by lightweight neural models—restoring signal clarity with significantly higher fidelity.",
  sections: [
    {
      id: "motivation",
      title: "01 — Motivation & Problem Framing",
      subtitle: "Why classical filters hit throughput walls under turbulent noise",
      summary: "Modern high-frequency channels (6G mmWave, deep-space telemetry, avionics data links) suffer from rapidly fluctuating non-stationary noise.",
      takeaway: "Static mathematical filter baselines cannot adapt quickly enough without massive compute latency.",
      details: [
        "Electromagnetic interference causes stochastic phase jitter and amplitude degradation in wireless channels.",
        "Classical Kalman and Wiener filters assume Gaussian noise distributions, which fail under bursty multi-path scattering.",
        "High processing latency in classical filters becomes a fatal bottleneck for ultra-reliable low-latency communications (URLLC)."
      ]
    },
    {
      id: "quantum-hypothesis",
      title: "02 — The Quantum-ML Hypothesis",
      subtitle: "Using quantum state sensitivity as an ultra-fine sensor",
      summary: "Quantum states are famously fragile to environmental noise. By treating this fragility as a continuous measurement sensor rather than an obstacle, we can map channel interference profiles with extreme sensitivity.",
      takeaway: "Fragility converted into measurement resolution.",
      details: [
        "Parameterized Quantum Circuits (PQCs) encode received signal phase angles onto state vectors in Hilbert space.",
        "Phase precession under simulated noise creates deterministic trajectories across the Bloch sphere.",
        "Recurrent neural networks learn the mapping between these Bloch trajectories and actual environmental attenuation factors."
      ]
    },
    {
      id: "architecture",
      title: "03 — Hybrid Pipeline Topology",
      subtitle: "Coupling quantum state simulation with low-overhead ML regressors",
      summary: "The proposed architecture uses a dual-stage pipeline: a quantum state simulation frontend and an adaptive lightweight neural estimator.",
      takeaway: "Combines the theoretical sensitivity of quantum states with the real-time inference speed of compact neural nets.",
      details: [
        "Frontend: Multi-qubit density matrix simulation using Qiskit and optimized statevector math.",
        "Middle layer: Real-time feature extraction of expectation values ⟨σz⟩ and ⟨σx⟩ across Pauli bases.",
        "Backend: Compact recurrent neural regressor predicting phase correction offsets in sub-millisecond windows."
      ]
    },
    {
      id: "results",
      title: "04 — Experimental Results & Empirical Gains",
      subtitle: "Signal-to-Noise Ratio (SNR) improvements across simulated turbulence",
      summary: "Empirical simulations demonstrated consistent Bit Error Rate (BER) reductions compared to standard LMS and RLS adaptive filter baselines.",
      takeaway: "Demonstrated measurable fidelity recovery across high-interference synthetic channel benchmarks.",
      details: [
        "Significant gain in Signal-to-Noise Ratio (SNR) under severe non-Gaussian burst interference.",
        "Faster convergence speed during sudden channel state transitions.",
        "Validated across multiple synthetic fading channel models (Rayleigh and Rician scattering)."
      ]
    }
  ],
  simulationParams: {
    qubitCount: 4,
    coherenceTimeT2: "50 µs",
    fidelityTarget: "> 94.8%",
    noiseModels: ["Dephasing", "Depolarizing", "Thermal Relaxation", "Phase Damping"]
  }
};
