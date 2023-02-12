import React from "react";
import CardTitle from "./CardTitle";
import NextCardButton from "../NextCardButton";

interface IProperties {
  testId: string;
  title: string;
  // eslint-disable-next-line react/require-default-props
  badge?: {
    badgeContent: React.ReactElement | string;
    badgeOrientation: "left" | "right";
  };
  nextButtonOptions?: {
    nextButtonHandler?: () => void;
    disabled?: boolean;
  };
}

const Card: React.FC<IProperties> = ({
  testId,
  title,
  badge,
  nextButtonOptions,
  children,
}) => (
  <div
    className="card shadow flex-grow max-w-screen-lg px-4 bg-white overflow-visible"
    data-cy={`Card-${testId}`}
  >
    {!!badge && (
      <div
        className={`badge badge-accent absolute ${
          badge.badgeOrientation === "right"
            ? "right-8 -top-2"
            : "left-8 -top-2"
        }`}
      >
        {badge.badgeContent}
      </div>
    )}
    <CardTitle>{title}</CardTitle>
    {children}
    {nextButtonOptions?.nextButtonHandler ? (
      <NextCardButton
        clickHandler={nextButtonOptions.nextButtonHandler}
        disabled={nextButtonOptions.disabled}
      />
    ) : null}
  </div>
);

export default Card;
