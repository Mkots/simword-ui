import React, { Dispatch, SetStateAction } from "react";

const ScoreContext = React.createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);

export default ScoreContext;
