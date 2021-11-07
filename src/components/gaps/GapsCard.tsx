import React from "react";

import { IGap } from "types";

import GapForm from "./GapForm";
import CardTitle from "../CardTitle";
import NextCardButton from "../NextCardButton";

interface Properties {
  gap: IGap;
  nextHandler: () => void;
}

const GapsCard: React.FC<Properties> = ({ gap, nextHandler }) => {
  const { answer, task, word, sentence } = gap;

  return (
    <div className="card shadow flex-grow max-w-screen-lg px-4 bg-white">
      <div className="card-body px-0 lg:px-4">
        <CardTitle>{sentence}</CardTitle>
        <div className="justify-center card-actions uppercase text-black text-center text-lg lg:text-3xl">
          <GapForm task={task} word={word} answer={answer} />
        </div>
        <NextCardButton clickHandler={nextHandler} />
      </div>
    </div>
  );
};

export default GapsCard;
