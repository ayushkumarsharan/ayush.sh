export interface InterestStory {
  id: string;
  theme: string;
  statement: string;
  narrative: string;
  disciplines: string[];
}

export const interestsData: {
  headline: string;
  intro: string;
  stories: InterestStory[];
  curiosities: string[];
} = {
  headline: "Things That Keep the Mind Moving",
  intro: "Engineering is where I build; curiosity is what fuels the building. These are the practices, questions, and mediums that shape how I look at systems.",
  stories: [
    {
      id: "music-rhythm",
      theme: "Music & Acoustic Architecture",
      statement: "Rhythm, frequency modulation, and structural composition.",
      narrative: "Music is applied mathematics wrapped in emotion. Whether analyzing audio dynamics, acoustic textures, or harmonic progressions, listening attentively teaches you about cadence, harmony, and the value of silence between notes.",
      disciplines: ["Acoustics", "Audio Dynamics", "Rhythm & Harmony"]
    },
    {
      id: "drawing-painting",
      theme: "Observational Drawing & Watercolor",
      statement: "Learning to see negative space and deliberate color theory.",
      narrative: "In software engineering, you can edit code indefinitely. On paper, watercolor pigment spreads permanently. Drawing from observation trains the mind to see what is actually in front of you—not what you assume is there.",
      disciplines: ["Watercolor", "Charcoal", "Visual Ergonomics", "Patience"]
    },
    {
      id: "economics-systems",
      theme: "Economics & Complex Incentive Systems",
      statement: "Incentive design, game theory, and resource allocation under constraints.",
      narrative: "Studying economics (NPTEL Principles of Economics) fundamentally altered how I analyze software architecture. Large distributed systems behave remarkably like macroeconomic markets: queuing bottlenecks, trade-offs between throughput and latency, and optimizing scarce compute resources.",
      disciplines: ["Game Theory", "Resource Allocation", "Market Dynamics", "Cost Modeling"]
    },
    {
      id: "interdisciplinary-exploration",
      theme: "Interdisciplinary Exploration",
      statement: "Connecting ideas across seemingly unrelated territories.",
      narrative: "The most interesting breakthroughs happen when you borrow concepts from one field and apply them where people don't expect them—like using quantum state simulation to improve signal noise reduction, or using game engine pipelines to optimize web rendering.",
      disciplines: ["Quantum Information", "3D Graphics", "API Resiliency", "System Design"]
    }
  ],
  curiosities: [
    "How physical ergonomics translate into cognitive ease on digital screens",
    "Decoherence mitigation in quantum key distribution networks",
    "Designing fault-tolerant systems that fail gracefully without cascading",
    "The chemistry and light absorption of mineral watercolor pigments",
    "How constraint-based optimization yields cleaner software architectures"
  ]
};
