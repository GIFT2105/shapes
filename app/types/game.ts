export type QuestionType = 'multiple-choice' | 'true-false' | 'fill-in-blank';

export interface QuestionOption {
  text: string;
  correct: boolean;
}

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  iconComponent?: string; // React Icon component name
  options?: QuestionOption[];
  answer?: string | boolean;
  difficulty?: 'easy' | 'medium' | 'hard';
  category?: 'shapes-2d' | 'shapes-3d' | 'geometry' | 'symmetry';
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  isGameActive: boolean;
  gameScreen: 'start' | 'game' | 'end';
}

export const POINTS_PER_QUESTION = 10;