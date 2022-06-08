import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import { getWord, getTagList } from "api";

import TabHead from "components/Head";
import QuizCard from "components/quiz/QuizCard";
import LoadingOrError from "components/LoadingOrError";
import ScoreBoard from "components/ScoreBoard";

import ScoreContext from "contexts/ScoreContext";
import { TagList } from "types";

export default function WordPage(): ReactElement {
  const [wordId, setWordId] = useState(uuid());
  const [difficult, setDifficult] = useState<number | undefined>();
  const scoreState = useState(0);
  const [score] = scoreState;

  const { isLoading, isError, error, data } = useQuery(
    ["word", wordId, "tag", difficult],
    () => getWord(wordId, difficult)
  );

  const {
    isLoading: isTagsLoading,
    isError: isTagsError,
    error: tagsError,
    data: tagsData,
  } = useQuery(["list", 0], () => getTagList());

  const getDifficult = (tagsListObject?: TagList): number => {
    if (!tagsListObject) return 1;
    if (Math.floor(score / 10) > tagsListObject?.tags.length - 1) {
      return tagsListObject.tags[tagsListObject?.tags.length - 1];
    }
    return tagsListObject.tags[Math.floor(score / 10)];
  };

  const nextHandler = () => {
    setWordId(uuid());

    setDifficult(getDifficult(tagsData));
  };

  if (isTagsLoading || isTagsError) {
    return <LoadingOrError error={tagsError as Error} />;
  }

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
