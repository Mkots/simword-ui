import React, { useContext, useState } from "react";
import classNames from "classnames";
import confetti from "canvas-confetti";

import ScoreContext from "../../contexts/ScoreContext";

interface IProperties {
  correct: boolean;
  variant: string;
}

const GrammarVariant: React.FC<IProperties> = ({ variant, correct }) => {
  const [score, setScore] = useContext(ScoreContext);

  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    if (clicked) return;
    setClicked(true);
    setScore(correct ? score + 1 : score - 1);
    if (correct)
      void confetti({
        angle: 90,
        spread: 180,
        startVelocity: 20,
        gravity: 0.25,
        ticks: 100,
      });
  };
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={classNames("p-auto btn z-auto", {
        "btn-success animate-pulse": clicked && correct,
        "btn-error opacity-50 hover:opacity-100 ": !correct && clicked,
        "btn-info btn-outline": !clicked,
      })}
    >
      {variant}
    </button>
  );
};

export default GrammarVariant;
