import React, { useState } from "react";
import { IGrammar } from "../../types";
import GrammarVariant from "./GrammarVariant";
import RightAnswerContext from "../../contexts/RightAnswerContext";
import Card from "../Card";

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
      nextHandler={nextHandler}
      isRightAnswerClicked={isRightAnswerClicked}
      cardTitle={task}
      badgeText={tag}
    >
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
    </Card>
  );
};

export default GrammarCard;
