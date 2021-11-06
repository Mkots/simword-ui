import React, { useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import GapsCard from "../components/gaps/GapsCard";
import getGap from "../api/getGap";
import LoadingOrError from "../components/LoadingOrError";

const Gaps: React.FC = () => {
  const [gapId, setGapId] = useState(uuid());

  const { isLoading, isError, error, data } = useQuery(["word"], () =>
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
};

export default Gaps;
