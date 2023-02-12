import React, { useState } from "react";
import { StrapiGrammar } from "../../types";
import GrammarVariants from "./GrammarVariants";
import Card from "../common/Card";

type IProperties = StrapiGrammar & { nextHandler: () => void };

const GrammarCard: React.FC<IProperties> = ({ data, nextHandler }) => {
  const rightAnswerState = useState(false);
  const [isRightAnswerClicked] = rightAnswerState;
  if (!data) {
    return (
      <Card
        testId="Grammar"
        title="There is no data"
        nextButtonOptions={{
          nextButtonHandler: nextHandler,
          disabled: false,
        }}
        badge={{ badgeContent: 0 || "Coming soon", badgeOrientation: "right" }}
      />
    );
  }
  const { Task, Option } = data?.attributes;

  return (
    <Card
      testId="Grammar"
      title={Task}
      nextButtonOptions={{
        nextButtonHandler: nextHandler,
        disabled: !isRightAnswerClicked,
      }}
      badge={{ badgeContent: "Coming soon", badgeOrientation: "right" }}
    >
      <GrammarVariants rightAnswerState={rightAnswerState} Option={Option} />
    </Card>
  );
};

export default GrammarCard;
