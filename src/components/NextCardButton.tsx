import React from "react";
import { TabIndexes } from "../constants/tabIndexes";

type Properties = {
  clickHandler: () => void;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
};

const NextCardButton: React.FC<Properties> = ({
  clickHandler,
  disabled,
  children,
}) => (
  <button
    type="button"
    className="btn btn-info opacity-75 hover:opacity-100 mt-8 mb-4 mx-2"
    onClick={clickHandler}
    tabIndex={TabIndexes.nextCard}
    aria-label="Next"
    disabled={disabled}
  >
    {children || "Next"}
  </button>
);

export default NextCardButton;
