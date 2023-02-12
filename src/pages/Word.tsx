import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import { getWord } from "api";

import TabHead from "components/Head";
import QuizCard from "components/quiz/QuizCard";
import LoadingOrError from "components/LoadingOrError";
import ScoreBoard from "components/ScoreBoard";

import ScoreContext from "contexts/ScoreContext";

export default function WordPage(): ReactElement {
  const [wordId, setWordId] = useState(uuid());
  const scoreState = useState(0);
  const [score] = scoreState;

  const { isLoading, isError, error, data } = useQuery(["word", wordId], () =>
    getWord(wordId)
  );

  const nextHandler = () => {
    setWordId(uuid());
  };

  return (
    <>
      <TabHead title={`Score: ${score}`} />
      <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
        <ScoreContext.Provider value={scoreState}>
          {isLoading || isError ? (
            <LoadingOrError error={error as Error} />
          ) : (
            <QuizCard word={data} nextHandler={nextHandler} />
          )}
        </ScoreContext.Provider>
      </div>
      <ScoreBoard score={score} />
    </>
  );
}
