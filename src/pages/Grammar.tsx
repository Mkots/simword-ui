import React, { ReactElement, useContext, useState } from "react";
import { useQuery } from "react-query";

import GrammarCard from "../components/grammar/GrammarCard";
import LoadingOrError from "../components/LoadingOrError";
import TabHead from "../components/Head";
import ScoreBoard from "../components/ScoreBoard";
import { getGrammar } from "../api";
import ScoreContext from "../contexts/ScoreContext";
import { AuthContext } from "../contexts/AuthContext";

export default function GrammarPage(): ReactElement {
  const [grammarId, setGrammarId] = useState(2);
  const scoreState = useState(0);
  const [score] = scoreState;

  const { state: userData } = useContext(AuthContext);
  const { token } = userData;

  const { isLoading, isError, error, data } = useQuery(
    ["grammarId", grammarId],
    () => getGrammar(grammarId, token)
  );

  const nextHandler = () => {
    setGrammarId(grammarId + 1);
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
