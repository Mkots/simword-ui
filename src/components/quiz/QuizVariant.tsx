import React, { useContext, useState } from "react";
import ScoreContext from "../../contexts/ScoreContext";

interface Properties {
  answer: string;
  // eslint-disable-next-line react/require-default-props
  correct?: boolean;
}

const QuizVariant: React.FC<Properties> = ({ answer, correct }) => {
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
      className={`btn grid flex-grow text-white text-base lg:text-3xl h-32 place-items-center p-4 m-2 ${
        clicked ? (correct ? "btn-success" : "btn-error") : ""
      }`}
      onClick={clickHandler}
      data-cy="QuizVariant"
    >
      {answer}
    </button>
  );
};

export default QuizVariant;