import React from "react";

interface Properties {
  clickHandler: () => void;
}

const NextCardButton: React.FC<Properties> = ({ clickHandler, children }) => (
  <button
    type="button"
    className="btn btn-outline btn-accent my-4"
    onClick={clickHandler}
  >
    {children || "Next"}
  </button>
);

export default NextCardButton;
