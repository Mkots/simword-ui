import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import Head from "components/Head";
import QuizCard from "components/QuizCard";
import LoadingOrError from "components/LoadingOrError";

import getWord from "api/getWord";

export default function WordPage(): ReactElement {
  const [wordId, setWordId] = useState(uuid());

  const { isLoading, isError, error, data } = useQuery(["word", wordId], () =>
    getWord(wordId)
  );
  if (isLoading || isError) {
    return <LoadingOrError error={error as Error} />;
  }

  return (
    <>
      <Head title="Simword" />
      <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
        <QuizCard word={data} nextHandler={() => setWordId(uuid())} />
      </div>
    </>
  );
}
