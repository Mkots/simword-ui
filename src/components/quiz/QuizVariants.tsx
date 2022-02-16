import React from "react";

import { IExercise } from "types";

import QuizVariant from "./QuizVariant";

type Properties = Omit<IExercise, "en">;

const QuizVariants: React.FC<Properties> = (properties) => {
  const { variants, correct } = properties;
  const correctId = variants.indexOf(correct);
  return (
    <div
      className="p-0 grid grid-cols-2 grid-flow-row gap-0"
      data-testid="QuizVariants"
    >
      {variants.map((answer, index) => (
        <QuizVariant
          key={`answer_${answer}`}
          answer={answer}
          correct={index === correctId}
          tabIndex={index + 1}
        />
      ))}
    </div>
  );
};

export default QuizVariants;
