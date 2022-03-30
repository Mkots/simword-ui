import React, { useState } from "react";
import CardTitle from "../CardTitle";
import { IGrammar } from "../../types";
import GrammarVariant from "./GrammarVariant";
import NextCardButton from "../NextCardButton";
import RightAnswerContext from "../../contexts/RightAnswerContext";

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
    <div className="card shadow flex-grow max-w-screen-lg px-4 bg-base-100 overflow-visible">
      <div className="card-body p-0 text-black relative">
        <div className="badge badge-accent absolute right-8 -top-2">
          {tag || "Coming soon"}
        </div>
        <CardTitle>{task}</CardTitle>
        <RightAnswerContext.Provider value={rightAnswerState}>
          <div className="flex flex-col space-y-3 w-auto items-stretch text-center">
            {variants.map((variant) => (
              <GrammarVariant
                correct={variant === correct}
                variant={variant}
                key={variant.slice(0, 3)}
              />
            ))}
          </div>
        </RightAnswerContext.Provider>
        <NextCardButton
          clickHandler={nextHandler}
          disabled={!isRightAnswerClicked}
        />
      </div>
    </div>
  );
};

export default GrammarCard;
