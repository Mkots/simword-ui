import React from "react";
import { IWord } from "../types";
import QuizVariants from "./QuizVariants";

interface IProperties {
  word?: IWord;
  nextHandler: () => void;
}

const QuizCard: React.FC<IProperties> = (properties) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (!properties.word?.exercise) return null;
  const {
    word: {
      exercise: { en, correct, variants },
    },
    nextHandler,
  } = properties;
  return (
    <div className="card shadow flex-grow max-w-screen-lg px-4 bg-white">
      <div className="card-body">
        <div className="card-title uppercase text-center text-lg lg:text-3xl">
          {en}
        </div>
      </div>
      <QuizVariants correct={correct} variants={variants} />
      <div className="justify-center card-actions">
        <button
          type="button"
          className="btn btn-outline btn-accent my-8"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
