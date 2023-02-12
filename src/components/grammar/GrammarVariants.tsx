import React, { Dispatch, SetStateAction } from "react";
import RightAnswerContext from "../../contexts/RightAnswerContext";
import GrammarVariant from "./GrammarVariant";

interface IProperties {
  rightAnswerState: [boolean, Dispatch<SetStateAction<boolean>>];
  Option: Array<{
    id: number;
    Variant: string;
    Correct: boolean;
  }>;
}

const GrammarVariants: React.FC<IProperties> = ({
  rightAnswerState,
  Option,
}) => (
  <RightAnswerContext.Provider value={rightAnswerState}>
    <div className="flex flex-col space-y-3 w-auto items-stretch text-center">
      {Option.map((option) => (
        <GrammarVariant
          correct={option.Correct}
          variant={option.Variant}
          key={`${option.Variant}_${option.id}`}
        />
      ))}
    </div>
  </RightAnswerContext.Provider>
);

export default GrammarVariants;
