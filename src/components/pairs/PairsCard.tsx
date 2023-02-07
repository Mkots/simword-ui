import React from "react";
import Card from "../common/Card";
import PairsVariants from "./PairsVariants";
import { IPair } from "../../types";

interface IProperties {
  exercise: IPair;
  nextHandler: () => void;
}

const PairsCard: React.FC<IProperties> = ({ exercise, nextHandler }) => {
  const { word, synonyms, antonyms } = exercise;
  const mode = Math.random() > 0.5 ? "synonyms" : "antonyms";
  return (
    <Card
      testId="Pairs"
      title={word}
      nextButtonOptions={{ nextButtonHandler: nextHandler }}
      badge={{ badgeContent: mode, badgeOrientation: "left" }}
    >
      <PairsVariants synonyms={synonyms} antonyms={antonyms} mode={mode} />
    </Card>
  );
};

export default PairsCard;
