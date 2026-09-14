import type { ModeId, EvidenceType } from './modes';

export interface InterestStory {
  id: string;
  theme: string;
  statement: string;
  narrative: string;
  disciplines: string[];
  modes: ModeId[];
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
      narrative: "Music is applied mathematics wrapped in emotion. I listen widely—from Hip Hop and Soul to Indian Classical, and classical piano/violin composers like Beethoven and Paganini. Whether analyzing audio dynamics, acoustic textures, or harmonic progressions, listening attentively teaches you about cadence, harmony, and the value of silence between notes.",
      disciplines: ["Acoustics", "Audio Dynamics", "Classical", "Hip Hop", "Rhythm & Harmony"],
      modes: ['life', 'creative', 'thinker']
    },
    {
      id: "drawing-painting",
      theme: "Observational Drawing & Watercolor",
      statement: "Learning to see negative space and deliberate color theory.",
      narrative: "In software engineering, you can edit code indefinitely. On paper, watercolor pigment spreads permanently. Drawing from observation trains the mind to see what is actually in front of you—not what you assume is there.",
      disciplines: ["Watercolor", "Charcoal", "Visual Ergonomics", "Patience"],
      modes: ['creative', 'life']
    },
    {
      id: "psychology-behavior",
      theme: "Psychology & Human Behavior",
      statement: "Understanding the underlying motivations and cognitive patterns.",
      narrative: "I am fascinated by psychology, personality traits, and history. Understanding why people act the way they do, and how historical contexts shape human behavior, directly influences how I design software interfaces and understand team dynamics. It is all about pattern recognition in human systems.",
      disciplines: ["Psychology", "History", "Cognitive Patterns", "Empathy"],
      modes: ['life', 'thinker']
    },
    {
      id: "astrology-patterns",
      theme: "Astrology, Palmistry & Gemstones",
      statement: "Ancient frameworks for understanding human patterns.",
      narrative: "I study Vedic astrology, palmistry, and the properties of gemstones. I approach this not as a debate against modern science, but as a deeply personal curiosity—a different kind of system for understanding people. I explore these practices to help individuals navigate their paths, never to invoke fear.",
      disciplines: ["Vedic Astrology", "Palmistry", "Gemology", "Counseling"],
      modes: ['life']
    },
    {
      id: "economics-systems",
      theme: "Economics & Complex Incentive Systems",
      statement: "Incentive design, game theory, and resource allocation under constraints.",
      narrative: "Studying economics (NPTEL Principles of Economics) fundamentally altered how I analyze software architecture. Large distributed systems behave remarkably like macroeconomic markets: queuing bottlenecks, trade-offs between throughput and latency, and optimizing scarce compute resources.",
      disciplines: ["Game Theory", "Resource Allocation", "Market Dynamics", "Cost Modeling"],
      modes: ['thinker', 'explorer']
    },
    {
      id: "media-narrative",
      theme: "Narrative, Movies & Lore",
      statement: "Deconstructing storytelling, world-building, and immersive experiences.",
      narrative: "I love watching movies and writing reviews on them. Deconstructing how a story is told, pacing, and visual communication is fascinating. I'm also heavily invested in rich narrative worlds, like the Witcher games and literature, analyzing how lore and interaction build deep immersion.",
      disciplines: ["Film Critique", "Creative Writing", "Game Lore", "World Building"],
      modes: ['life', 'creative']
    },
    {
      id: "design-presentation",
      theme: "Visual Communication & Design",
      statement: "Crafting clear, persuasive, and aesthetically sound presentations.",
      narrative: "I have cultivated an expertise in crafting presentations—from structuring complex Word documents to designing compelling PowerPoint decks and Canva posters/logos. I believe that an idea's presentation is as critical as its technical merit.",
      disciplines: ["Graphic Design", "Typography", "Presentation", "Information Architecture"],
      modes: ['creative', 'builder']
    }
  ],
  curiosities: [
    "How physical ergonomics translate into cognitive ease on digital screens",
    "Decoherence mitigation in quantum key distribution networks",
    "Designing fault-tolerant systems that fail gracefully without cascading",
    "The chemistry and light absorption of mineral watercolor pigments",
    "How constraint-based optimization yields cleaner software architectures",
    "The psychological impact of UI micro-interactions on user trust",
    "Mapping historical economic shifts to modern distributed computing trends"
  ]
};
