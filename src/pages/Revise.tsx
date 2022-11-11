import React, { ReactElement, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

import ScoreContext from "../contexts/ScoreContext";
import TabHead from "../components/Head";
import ReviserCard from "../components/reviser/ReviserCard";
import { database } from "../api/database/database";
import ScoreBoard from "../components/ScoreBoard";

export default function ReviserPage(): ReactElement {
  const [reviseId, setReviseId] = useState(1);
  const scoreState = useState(0);
  const [score] = scoreState;

  const nextHandler = () => {
    setReviseId(reviseId + 1);
  };
  const data = useLiveQuery(async () => {
    // const count = await database.dictionary.count()
    const ex = await database.dictionary.where("id").equals(reviseId).toArray();
    return ex[0];
  }, [reviseId]);
  return (
    <>
      <TabHead title={`Score: ${score}`} />
      <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
        <ScoreContext.Provider value={scoreState}>
          <ReviserCard
            key={reviseId}
            id={data?.id || 0}
            word={data?.word || ""}
            translation={data?.translation || ""}
            nextHandler={nextHandler}
          />
        </ScoreContext.Provider>
      </div>
      <ScoreBoard score={score} />
    </>
  );
}
