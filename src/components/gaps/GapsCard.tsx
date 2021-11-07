import React from "react";
import { IGap } from "../../types";
import GapForm from "./GapForm";

interface Properties {
  gap: IGap;
  nextHandler: () => void;
}

const GapsCard: React.FC<Properties> = ({ gap, nextHandler }) => {
  const { answer, task, word, sentence } = gap;

  return (
    <div className="card shadow flex-grow max-w-screen-lg px-4 bg-white">
      <div className="card-body px-0 lg:px-4">
        <div className="card-title uppercase text-black text-center text-lg lg:text-3xl">
          {sentence}
          <div className="justify-center card-actions">
            <GapForm task={task} word={word} answer={answer} />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline btn-accent my-8"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GapsCard;
