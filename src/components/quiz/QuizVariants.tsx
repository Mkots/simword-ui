import React from "react";

import QuizVariant from "./QuizVariant";

import { IExercise } from "../../types";

type Properties = Omit<IExercise, "en">;

const QuizVariants: React.FC<Properties> = (properties) => {
  const { variants, correct } = properties;
  const correctId = variants.indexOf(correct);
  return (
    <div
      className="card-actions grid grid-cols-2 grid-flow-row gap-0"
      data-cy="QuizVariants"
    >
      {variants.map((answer, index) => (
        <QuizVariant
          key={`answer_${answer}`}
          answer={answer}
          correct={index === correctId}
        />
      ))}
    </div>
  );
};

export default QuizVariants;
