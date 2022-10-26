import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import CardTitle from "../CardTitle";
import NextCardButton from "../NextCardButton";
import GapAlert from "../gaps/GapAlert";
import ScoreContext from "../../contexts/ScoreContext";

interface IProperties {
  word: string;
  translation: string;
  nextHandler: () => void;
}

interface GapField {
  gapField: string;
}

const ReviserCard: React.FC<IProperties> = ({
  word,
  translation,
  nextHandler,
}) => {
  const [correct, setCorrect] = useState<boolean | undefined>();
  const [score, setScore] = useContext(ScoreContext);
  const { register, handleSubmit } = useForm<GapField>();

  const onSubmit: SubmitHandler<GapField> = (data) => {
    if (!data.gapField) return;
    if (
      data.gapField.trim().toLowerCase() === translation.trim().toLowerCase()
    ) {
      setCorrect(true);
      setScore(score + 1);
    } else {
      setCorrect(false);
      setScore(score - 1);
    }
  };

  return (
    <div
      className="card shadow flex-grow max-w-screen-lg px-4 bg-white"
      data-cy="ReviserCard"
    >
      <CardTitle>{word}</CardTitle>
      <form
        className="form-control flex space-y-3 justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs text-black text-center"
          {...register("gapField")}
        />
        <button className="btn btn-primary mx-4 w-full" type="submit">
          Check
        </button>
      </form>
      {correct === false && (
        <GapAlert variant="error" rightAnswer={translation} />
      )}
      {correct === true && <GapAlert variant="success" />}
      <NextCardButton clickHandler={nextHandler} />
    </div>
  );
};

export default ReviserCard;
