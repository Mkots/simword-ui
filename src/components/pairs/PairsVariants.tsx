import React from "react";
import PairsVariant from "./PairsVariant";

interface IProperties {
  synonyms: Array<string>;
  antonyms: Array<string>;
  mode: "synonyms" | "antonyms";
}

const PairsVariants: React.FC<IProperties> = ({ synonyms, antonyms, mode }) => (
  <div
    className="flex flex-col space-y-3 w-auto items-stretch text-center"
    data-testid="PairsVariants"
  >
    {synonyms.map((variant) => (
      <PairsVariant
        answer={variant}
        correct={mode === "synonyms"}
        key={variant}
      />
    ))}
    {antonyms.map((variant) => (
      <PairsVariant
        answer={variant}
        correct={mode === "antonyms"}
        key={variant}
      />
    ))}
  </div>
);

export default PairsVariants;
