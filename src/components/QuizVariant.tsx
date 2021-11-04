import React, { useContext, useState } from "react";
import ScoreContext from "../contexts/ScoreContext";

interface Properties {
  answer: string;
  correct?: boolean;
}

const QuizVariant: React.FC<Properties> = (properties) => {
  const { answer, correct } = properties;

  const [score, setScore] = useContext(ScoreContext);

  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    if (clicked) return;
    setClicked(!clicked);
    if (correct) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div
      className={`btn grid flex-grow text-white text-base lg:text-3xl h-32 place-items-center p-4 m-2 ${
        clicked ? (correct ? "btn-success" : "btn-error") : ""
      }`}
      onClick={clickHandler}
      data-cy="QuizVariant"
    >
      {answer}
    </div>
  );
};

export default QuizVariant;
