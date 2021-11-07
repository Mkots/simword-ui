import React from "react";

import { IWord } from "types";

import QuizVariants from "./QuizVariants";
import CardTitle from "../CardTitle";
import NextCardButton from "../NextCardButton";

interface IProperties {
  // eslint-disable-next-line react/require-default-props
  word?: IWord;
  nextHandler: () => void;
}

const QuizCard: React.FC<IProperties> = ({ word, nextHandler }) => {
  if (!word?.exercise) return null;
  const {
    exercise: { en, correct, variants },
  } = word;

  return (
    <div
      className="card shadow flex-grow max-w-screen-lg px-4 bg-white"
      data-cy="QuizCard"
    >
      <CardTitle>{en}</CardTitle>
      <QuizVariants correct={correct} variants={variants} />
      <NextCardButton clickHandler={nextHandler} />
    </div>
  );
};

export default QuizCard;
