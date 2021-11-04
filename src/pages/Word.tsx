import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import TabHead from "components/Head";
import QuizCard from "components/QuizCard";
import LoadingOrError from "components/LoadingOrError";

import getWord from "api/getWord";
import ScoreContext from "../contexts/ScoreContext";

export default function WordPage(): ReactElement {
  const [wordId, setWordId] = useState(uuid());
  const [difficult, setDifficult] = useState(1);
  const [score, setScore] = useState(0);

  const { isLoading, isError, error, data } = useQuery(
    ["word", wordId, "tag", difficult],
    () => getWord(wordId, difficult)
  );

  const nextHandler = () => {
    setWordId(uuid());
    if (score > 5) {
      setDifficult(2);
    } else if (score > 10) {
      setDifficult(3);
    }
  };

  if (isLoading || isError) {
    return <LoadingOrError error={error as Error} />;
  }

  return (
    <>
      <TabHead title={`Score: ${score}`} />
      <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
        <ScoreContext.Provider value={[score, setScore]}>
          <QuizCard word={data} nextHandler={nextHandler} />
        </ScoreContext.Provider>
      </div>
    </>
  );
}
