import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";
import LoadingOrError from "../components/LoadingOrError";
import ScoreBoard from "../components/quiz/ScoreBoard";
import ScoreContext from "../contexts/ScoreContext";
import TabHead from "../components/Head";
import getRevise from "../api/getRevise";
import ReviserCard from "../components/reviser/ReviserCard";

export default function ReviserPage(): ReactElement {
  const [reviseId, setReviseId] = useState(uuid());
  const scoreState = useState(0);
  const [score] = scoreState;

  const { isLoading, isError, error, data } = useQuery(
    ["reviseId", reviseId],
    () => getRevise(reviseId)
  );

  const nextHandler = () => {
    setReviseId(uuid());
  };

  return (
    <>
      <TabHead title={`Score: ${score}`} />
      <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
        <ScoreContext.Provider value={scoreState}>
          {isLoading || isError || !data ? (
            <LoadingOrError error={error as Error} />
          ) : (
            <ReviserCard
              word={data.word}
              translation={data.translation}
              nextHandler={nextHandler}
            />
          )}
        </ScoreContext.Provider>
      </div>
      <ScoreBoard score={score} />
    </>
  );
}
