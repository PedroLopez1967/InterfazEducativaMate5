import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress } from '../types';

interface ProgressStore extends UserProgress {
  addPoints: (points: number) => void;
  completeObjective: (objective: number) => void;
  updateScenarioProgress: (scenario: string, progress: number) => void;
  unlockAchievement: (achievementId: string) => void;
  useHint: () => void;
  resetProgress: () => void;
}

const initialState: UserProgress = {
  userId: 'student-' + Math.random().toString(36).substr(2, 9),
  completedObjectives: [],
  scenarioProgress: new Map(),
  achievements: [],
  totalPoints: 0,
  hintsUsed: 0,
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      ...initialState,

      addPoints: (points: number) =>
        set((state) => ({
          totalPoints: state.totalPoints + points,
        })),

      completeObjective: (objective: number) =>
        set((state) => ({
          completedObjectives: state.completedObjectives.includes(objective)
            ? state.completedObjectives
            : [...state.completedObjectives, objective],
        })),

      updateScenarioProgress: (scenario: string, progress: number) =>
        set((state) => {
          const newProgress = new Map(state.scenarioProgress);
          newProgress.set(scenario, progress);
          return { scenarioProgress: newProgress };
        }),

      unlockAchievement: (achievementId: string) =>
        set((state) => ({
          achievements: state.achievements.includes(achievementId)
            ? state.achievements
            : [...state.achievements, achievementId],
        })),

      useHint: () =>
        set((state) => ({
          hintsUsed: state.hintsUsed + 1,
        })),

      resetProgress: () => set(initialState),
    }),
    {
      name: 'matematica5-progress',
    }
  )
);
