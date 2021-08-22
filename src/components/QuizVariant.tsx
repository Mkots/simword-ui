import React, { useState } from "react";

interface Properties {
  answer: string;
  correct?: boolean;
}

const QuizVariant: React.FC<Properties> = (properties) => {
  const { answer, correct } = properties;

  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div
      className={`btn grid flex-grow text-black text-base lg:text-3xl h-32 place-items-center p-4 m-2 ${
        clicked ? (correct ? "btn-success" : "btn-error") : ""
      }`}
      onClick={() => setClicked(!clicked)}
    >
      {answer}
    </div>
  );
};

export default QuizVariant;
