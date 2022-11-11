import React from "react";

import { IGap } from "types";

import GapForm from "./GapForm";
import Card from "../common/Card";

interface Properties {
  gap: IGap;
  nextHandler: () => void;
}

const GapsCard: React.FC<Properties> = ({ gap, nextHandler }) => {
  const { answer, task, word, sentence } = gap;

  return (
    <Card
      testId="Gap"
      title={sentence}
      nextButtonOptions={{ nextButtonHandler: nextHandler }}
    >
      <GapForm task={task} word={word} answer={answer} />
    </Card>
  );
};

export default GapsCard;
