import React from "react";

import { IWord } from "types";

import QuizVariants from "./QuizVariants";
import Card from "../Card";

interface IProperties {
  word?: IWord;
  nextHandler: () => void;
}

const QuizCard: React.FC<IProperties> = ({ word, nextHandler }) => {
  if (!word?.exercise) return null;
  const {
    exercise: { en, correct, variants },
  } = word;

  return (
    <Card cardTitle={en} nextHandler={nextHandler}>
      <QuizVariants correct={correct} variants={variants} />
    </Card>
  );
};

export default QuizCard;
