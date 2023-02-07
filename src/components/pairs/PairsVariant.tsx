import React, { useContext, useState } from "react";
import classNames from "classnames";

import ScoreContext from "../../contexts/ScoreContext";

interface IProperties {
  answer: string;
  correct: boolean;
}

const PairsVariant: React.FC<IProperties> = ({ correct, answer }) => {
  const [score, setScore] = useContext(ScoreContext);

  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    if (clicked) return;
    setClicked(true);
    setScore(correct ? score + 1 : score - 1);
  };
  return (
    <button
      type="button"
      className={classNames("p-auto btn mx-2", {
        "btn-success animate-pulse": clicked && correct,
        "btn-error opacity-50 hover:opacity-100 ": !correct && clicked,
        "btn-info btn-outline": !clicked,
      })}
      onClick={clickHandler}
      data-testid="PairVariant"
    >
      {answer}
    </button>
  );
};

export default PairsVariant;
