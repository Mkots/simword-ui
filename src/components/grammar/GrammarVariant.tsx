import React, { useContext, useState } from "react";
import classNames from "classnames";
import confetti from "canvas-confetti";

import ScoreContext from "../../contexts/ScoreContext";
import RightAnswerContext from "../../contexts/RightAnswerContext";

interface IProperties {
  correct: boolean;
  variant: string;
}

const GrammarVariant: React.FC<IProperties> = ({ variant, correct }) => {
  const [score, setScore] = useContext(ScoreContext);
  const [, setRightAnswerClicked] = useContext(RightAnswerContext);

  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    if (clicked) return;
    setClicked(true);
    setScore(correct ? score + 1 : score - 1);
    if (correct) {
      void confetti({
        angle: 90,
        spread: 180,
        startVelocity: 20,
        gravity: 0.25,
        ticks: 100,
      });
      setRightAnswerClicked(true);
    }
  };
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={classNames("p-auto btn mx-2", {
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
