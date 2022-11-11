import React from "react";

import { IWord } from "types";

import QuizVariants from "./QuizVariants";
import Card from "../common/Card";

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
    <Card
      testId="Quiz"
      title={en}
      nextButtonOptions={{ nextButtonHandler: nextHandler }}
    >
      <QuizVariants correct={correct} variants={variants} />
    </Card>
  );
};

export default QuizCard;
