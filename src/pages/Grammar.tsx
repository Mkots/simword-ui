import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import { getGrammar } from "../api";

import GrammarCard from "../components/grammar/GrammarCard";
import LoadingOrError from "../components/LoadingOrError";
import ScoreBoard from "../components/ScoreBoard";
import TabHead from "../components/Head";

import ScoreContext from "../contexts/ScoreContext";

export default function GrammarPage(): ReactElement {
  const [grammarId, setGrammarId] = useState(uuid());
  const scoreState = useState(0);
  const [score] = scoreState;

  const { isLoading, isError, error, data } = useQuery(
    ["grammarId", grammarId],
    () => getGrammar(grammarId)
  );

  const nextHandler = () => {
    setGrammarId(uuid());
  };

  return (
    <>
      <TabHead title={`Score: ${score}`} />
      <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
        <ScoreContext.Provider value={scoreState}>
          {isLoading || isError || !data ? (
            <LoadingOrError error={error as Error} />
          ) : (
            <GrammarCard {...data} nextHandler={nextHandler} />
          )}
        </ScoreContext.Provider>
      </div>
      <ScoreBoard score={score} />
    </>
  );
}
