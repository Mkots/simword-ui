import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import TabHead from "components/Head";
import QuizCard from "components/QuizCard";
import LoadingOrError from "components/LoadingOrError";

import getWord from "api/getWord";
import getTagsList from "../api/getTagsList";
import ScoreContext from "../contexts/ScoreContext";
import { TagList } from "../types";

export default function WordPage(): ReactElement {
  const [wordId, setWordId] = useState(uuid());
  const [difficult, setDifficult] = useState(1);
  const [score, setScore] = useState(0);

  const { isLoading, isError, error, data } = useQuery(
    ["word", wordId, "tag", difficult],
    () => getWord(wordId, difficult)
  );

  const {
    isLoading: isTagsLoading,
    isError: isTagsError,
    error: tagsError,
    data: tagsData,
  } = useQuery(["list", 0], () => getTagsList());

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

  if (isLoading || isError) {
    return <LoadingOrError error={error as Error} />;
  }

  if (isTagsLoading || isTagsError) {
    return <LoadingOrError error={tagsError as Error} />;
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
