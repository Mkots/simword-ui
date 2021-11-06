import React from "react";
import { IWord } from "../../types";
import QuizVariants from "./QuizVariants";

interface IProperties {
  // eslint-disable-next-line react/require-default-props
  word?: IWord;
  nextHandler: () => void;
}

const QuizCard: React.FC<IProperties> = ({ word, nextHandler }) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (!word?.exercise) return null;
  const {
    exercise: { en, correct, variants },
  } = word;
  return (
    <div
      className="card shadow flex-grow max-w-screen-lg px-4 bg-white"
      data-cy="QuizCard"
    >
      <div className="card-body">
        {/* eslint-disable-next-line react/style-prop-object */}
        <div className="card-title uppercase text-black text-center text-lg lg:text-3xl">
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
