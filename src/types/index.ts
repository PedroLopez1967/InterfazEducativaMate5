// Tipos principales de la aplicación

export interface Problem {
  id: string;
  objective: 1 | 2 | 3 | 4 | 5;
  scenario: string;
  statement: string;
  parameters: {
    beta: number;
  };
  correctAnswer: any;
  hints: Hint[];
  points: number;
}

export interface Hint {
  level: number;
  content: string;
  cost: number;
}

export interface UserProgress {
  userId: string;
  completedObjectives: number[];
  scenarioProgress: Map<string, number>;
  achievements: string[];
  totalPoints: number;
  hintsUsed: number;
}

export interface ScenarioInfo {
  id: string;
  name: string;
  route: string;
  icon: string;
  color: string;
  objective: number;
  description: string;
  difficulty: 'Básica' | 'Media' | 'Alta' | 'Muy Alta';
}

export interface Series {
  expression: (n: number, beta: number) => number;
  type: 'convergence' | 'power' | 'fourier';
  terms: number[];
  partialSums: number[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}
