import React, { Dispatch, SetStateAction } from "react";

const RightAnswerContext = React.createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

export default RightAnswerContext;
