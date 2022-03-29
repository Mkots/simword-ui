import React from "react";
import { TabIndexes } from "../constants/tabIndexes";

interface Properties {
  clickHandler: () => void;
}

const NextCardButton: React.FC<Properties> = ({ clickHandler, children }) => (
  <button
    type="button"
    className="btn btn-outline btn-accent my-4 mx-8"
    onClick={clickHandler}
    tabIndex={TabIndexes.nextCard}
    aria-label="Next"
  >
    {children || "Next"}
  </button>
);

export default NextCardButton;
