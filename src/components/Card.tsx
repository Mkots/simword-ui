import React from "react";
import CardTitle from "./CardTitle";
import NextCardButton from "./NextCardButton";

interface IProperties {
  badgeText?: string;
  cardTitle?: string;
  nextHandler: () => void;
  isRightAnswerClicked?: boolean;
}

const Card: React.FC<IProperties> = ({
  badgeText,
  cardTitle,
  children,
  nextHandler,
  isRightAnswerClicked,
}) => (
  <div className="card shadow flex-grow max-w-screen-lg px-4 bg-base-100 overflow-visible">
    <div className="card-body p-0 text-black relative">
      {!!badgeText && (
        <div className="badge badge-accent absolute right-8 -top-2">
          {badgeText}
        </div>
      )}
      {!!cardTitle && <CardTitle>{cardTitle}</CardTitle>}
      {children}
      <NextCardButton
        clickHandler={nextHandler}
        disabled={
          isRightAnswerClicked === undefined ? false : !isRightAnswerClicked
        }
      />
    </div>
  </div>
);

export default Card;
