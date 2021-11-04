export interface IExercise {
  id?: number;
  en: string;
  correct: string;
  variants: string[];
}

export interface IWord {
  exercise: IExercise;
}

export interface TagList {
  tags: Array<number>;
}
