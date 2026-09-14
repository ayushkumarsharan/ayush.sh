import { ModeId } from './modes';

export interface Thought {
  id: string;
  text: string;
  category: 'question' | 'observation' | 'principle';
  modes: ModeId[];
}

export const thoughts: Thought[] = [
  // Questions
  {
    id: "tq1",
    text: "What happens when speed becomes the default expectation instead of a deliberate choice?",
    category: "question",
    modes: ["thinker"]
  },
  {
    id: "tq2",
    text: "Does automation remove the burden of work, or does it eventually remove our understanding of the underlying system?",
    category: "question",
    modes: ["thinker", "engineer", "explorer"]
  },
  {
    id: "tq3",
    text: "Where exactly does engineering end and design begin? Or are they just different languages for structural integrity?",
    category: "question",
    modes: ["thinker", "creative"]
  },
  {
    id: "tq4",
    text: "What does 'knowing' a tool actually mean? Knowing its syntax, or knowing its failure modes?",
    category: "question",
    modes: ["thinker", "engineer"]
  },
  {
    id: "tq5",
    text: "What is the relationship between unstructured curiosity and structured competence?",
    category: "question",
    modes: ["thinker", "life"]
  },
  {
    id: "tq6",
    text: "Do we build our tools, or do our tools eventually dictate how we build?",
    category: "question",
    modes: ["thinker", "builder"]
  },
  {
    id: "tq7",
    text: "Is specialization a path to mastery, or a self-imposed boundary on systems thinking?",
    category: "question",
    modes: ["thinker", "explorer"]
  },
  {
    id: "tq8",
    text: "How much of learning is just accumulating different ways to recover from failure?",
    category: "question",
    modes: ["thinker", "journey"]
  },
  {
    id: "tq9",
    text: "What is the delta between a carefully curated resume and the reality of midnight debugging sessions?",
    category: "question",
    modes: ["thinker", "journey"]
  },
  {
    id: "tq10",
    text: "What makes a person 'technical'? Is it the stack they know, or their threshold for persisting through ambiguity?",
    category: "question",
    modes: ["thinker", "engineer"]
  },
  {
    id: "tq11",
    text: "If AI can write the syntax, does the definition of 'coding' elevate to pure system architecture?",
    category: "question",
    modes: ["thinker", "explorer", "engineer"]
  },
  {
    id: "tq12",
    text: "What is the difference between operating technology and comprehending it?",
    category: "question",
    modes: ["thinker"]
  },

  // Observations
  {
    id: "to1",
    text: "The same structural patterns recur everywhere. A macroeconomy, a distributed cloud cluster, and a musical composition are all just ways of managing tension and flow.",
    category: "observation",
    modes: ["thinker", "creative", "explorer", "life"]
  },
  {
    id: "to2",
    text: "The most capable engineers I've met are rarely the most dogmatic. They are the most curious.",
    category: "observation",
    modes: ["thinker", "journey"]
  },
  {
    id: "to3",
    text: "Deep debugging is less about knowing the code and more about systematic detective work: isolating variables until the truth has nowhere to hide.",
    category: "observation",
    modes: ["thinker", "engineer"]
  },
  {
    id: "to4",
    text: "Interdisciplinary knowledge doesn't just add up; it compounds. Learning 3D spatial design changes how you think about network topologies.",
    category: "observation",
    modes: ["thinker", "explorer", "creative"]
  },
  {
    id: "to5",
    text: "Complexity is surprisingly easy to create. True simplicity—the kind that survives edge cases—is grueling work.",
    category: "observation",
    modes: ["thinker", "builder"]
  },

  // Principles
  {
    id: "tp1",
    text: "Understand the system. Find the problem. Build the solution. Make it useful.",
    category: "principle",
    modes: ["thinker", "engineer", "builder", "journey"]
  },
  {
    id: "tp2",
    text: "You cannot deeply learn a system by just studying its documentation. You have to build it, break it, and fix it.",
    category: "principle",
    modes: ["thinker", "builder"]
  },
  {
    id: "tp3",
    text: "Honest competence is always more compelling than exaggerated credentials.",
    category: "principle",
    modes: ["thinker", "journey"]
  },
  {
    id: "tp4",
    text: "Mastery is a static illusion. Continuous exploration is the only viable long-term strategy.",
    category: "principle",
    modes: ["thinker", "life", "explorer"]
  }
];
