export interface IExercise {
  id?: number;
  en: string;
  correct: string;
  variants: string[];
}

export interface IWord {
  exercise: IExercise;
}
