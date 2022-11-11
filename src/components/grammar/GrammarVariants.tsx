import React, { Dispatch, SetStateAction } from "react";
import RightAnswerContext from "../../contexts/RightAnswerContext";
import GrammarVariant from "./GrammarVariant";

interface IProperties {
  rightAnswerState: [boolean, Dispatch<SetStateAction<boolean>>];
  variants: Array<string>;
  correct: string;
}

const GrammarVariants: React.FC<IProperties> = ({
  rightAnswerState,
  variants,
  correct,
}) => (
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
);

export default GrammarVariants;
