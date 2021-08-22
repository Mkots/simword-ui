export interface IFruit {
  name: string;
  image: {
    author: {
      name: string;
      url: string;
    };
    color: string;
    url: string;
  };
  metadata: [
    {
      name: string;
      value: string;
    }
  ];
}

export interface IExercise {
  en: string;
  correct: string;
  variants: [string, string, string, string];
}

export interface IWord {
  exercise?: IExercise;
}
