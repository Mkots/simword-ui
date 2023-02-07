import React, { useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import TabHead from "../components/Head";
import ScoreContext from "../contexts/ScoreContext";
import LoadingOrError from "../components/LoadingOrError";
import ScoreBoard from "../components/ScoreBoard";
import PairsCard from "../components/pairs/PairsCard";
import { getPair } from "../api";

const Pairs: React.FC = () => {
  const [pairsId, setPairsId] = useState(uuid());
  const scoreState = useState(0);
  const [score] = scoreState;

  const nextHandler = () => {
    setPairsId(uuid());
  };

  const { isLoading, isError, error, data } = useQuery(
    ["pairsId", pairsId],
    () => getPair(pairsId)
  );

  return (
    <>
      <TabHead title={`Score: ${score}`} />
      <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
        <ScoreContext.Provider value={scoreState}>
          {isLoading || isError || !data ? (
            <LoadingOrError error={error as Error} />
          ) : (
            <PairsCard exercise={data} nextHandler={nextHandler} />
          )}
        </ScoreContext.Provider>
      </div>
      <ScoreBoard score={score} />
    </>
  );
};

export default Pairs;
