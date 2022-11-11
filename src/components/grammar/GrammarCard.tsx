import React, { useState } from "react";
import { IGrammar } from "../../types";
import GrammarVariants from "./GrammarVariants";
import Card from "../common/Card";

type IProperties = IGrammar & { nextHandler: () => void };

const GrammarCard: React.FC<IProperties> = ({
  task,
  correct,
  variants,
  tag,
  nextHandler,
}) => {
  const rightAnswerState = useState(false);
  const [isRightAnswerClicked] = rightAnswerState;

  return (
    <Card
      testId="Grammar"
      title={task}
      nextButtonOptions={{
        nextButtonHandler: nextHandler,
        disabled: !isRightAnswerClicked,
      }}
      badge={{ badgeContent: tag || "Coming soon", badgeOrientation: "right" }}
    >
      <GrammarVariants
        rightAnswerState={rightAnswerState}
        variants={variants}
        correct={correct}
      />
    </Card>
  );
};

export default GrammarCard;
