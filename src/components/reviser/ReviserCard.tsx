import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import CardTitle from "../CardTitle";
import NextCardButton from "../NextCardButton";
import GapAlert from "../gaps/GapAlert";
import ScoreContext from "../../contexts/ScoreContext";
import { TabIndexes } from "../../constants/tabIndexes";
import { database } from "../../api/database/database";

interface IProperties {
  id: number;
  word: string;
  translation: string;
  nextHandler: () => void;
}

interface GapField {
  gapField: string;
}

const setLearningPoint = (id: number, amount: number) => {
  void database.dictionary.get(id).then((entity) => {
    const current = entity?.progress || 0;
    void database.dictionary
      .update(id, { progress: current + amount })
      .then((updated) => {
        if (updated) console.log(`Progress of ${id} is increased`);
        else
          console.log(
            `Nothing was updated - there were no words with primary key: ${id}`
          );
      });
  });
};

const ReviserCard: React.FC<IProperties> = ({
  id,
  word,
  translation,
  nextHandler,
}) => {
  const [correct, setCorrect] = useState<boolean | undefined>();
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useContext(ScoreContext);
  const { register, handleSubmit } = useForm<GapField>();

  const onSubmit: SubmitHandler<GapField> = (data) => {
    if (!data.gapField) return;
    if (disabled) {
      nextHandler();
      return;
    }
    setDisabled(true);
    if (data.gapField.trim().toLowerCase() === word.trim().toLowerCase()) {
      setCorrect(true);
      setScore(score + 1);
      setLearningPoint(id, 1);
    } else {
      setCorrect(false);
      setScore(score - 1);
      setLearningPoint(id, -1);
    }
  };

  return (
    <div
      className="card shadow flex-grow max-w-screen-lg px-4 bg-white overflow-visible"
      data-cy="ReviserCard"
    >
      <div className="card-body p-0 text-black relative">
        <Link
          to="/upload"
          className="badge badge-secondary absolute left-8 -top-2"
        >
          Upload data
        </Link>
      </div>
      <CardTitle>{translation}</CardTitle>
      <form
        className="form-control flex space-y-3 justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          autoFocus
          placeholder="Type here"
          className="input w-full max-w-xs text-black text-center"
          tabIndex={TabIndexes.nextCard - 1}
          {...register("gapField")}
        />
        <button className="btn btn-primary mx-4 w-full" type="submit">
          Check
        </button>
      </form>
      {correct === false && <GapAlert variant="error" rightAnswer={word} />}
      {correct === true && <GapAlert variant="success" />}
      <NextCardButton clickHandler={nextHandler} disabled={!disabled} />
    </div>
  );
};

export default ReviserCard;
