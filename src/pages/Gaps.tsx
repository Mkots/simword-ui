import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import GapsCard from "components/gaps/GapsCard";
import LoadingOrError from "components/LoadingOrError";

import { getGap } from "api";

export default function GapsPage(): ReactElement {
  const [gapId, setGapId] = useState(uuid());

  const { isLoading, isError, error, data } = useQuery(["gapId", gapId], () =>
    getGap(gapId)
  );

  const nextHandler = () => {
    setGapId(uuid());
  };

  if (isLoading || isError || !data) {
    return <LoadingOrError error={error as Error} />;
  }

  return (
    <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
      <GapsCard gap={data} nextHandler={nextHandler} />
    </div>
  );
}
