import React, { useState } from "react";
import { Link } from "react-router-dom";

import ReviserForm from "./ReviserForm";
import Card from "../common/Card";

interface IProperties {
  id: number;
  word: string;
  translation: string;
  nextHandler: () => void;
}

const ReviserCard: React.FC<IProperties> = ({
  id,
  word,
  translation,
  nextHandler,
}) => {
  const [disabled, setDisabled] = useState<boolean | undefined>();
  return (
    <Card
      testId="Revise"
      title={translation}
      nextButtonOptions={{ nextButtonHandler: nextHandler, disabled }}
      badge={{
        badgeOrientation: "left",
        badgeContent: <Link to="/upload">Upload data</Link>,
      }}
    >
      <ReviserForm
        id={id}
        word={word}
        nextHandler={nextHandler}
        disableOptions={[disabled, setDisabled]}
      />
    </Card>
  );
};

export default ReviserCard;
