export interface IExercise {
  en: string;
  correct: string;
  variants: [string, string, string, string];
}

export interface IWord {
  exercise?: IExercise;
}
