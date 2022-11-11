import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TabIndexes } from "../../constants/tabIndexes";
import GapAlert from "../gaps/GapAlert";
import ScoreContext from "../../contexts/ScoreContext";
import { database } from "../../api/database/database";

interface GapField {
  gapField: string;
}

interface IProperties {
  id: number;
  word: string;
  nextHandler: () => void;
  disableOptions: [
    boolean | undefined,
    Dispatch<SetStateAction<boolean | undefined>>
  ];
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

const ReviserForm: React.FC<IProperties> = ({
  id,
  word,
  nextHandler,
  disableOptions,
}) => {
  const { register, handleSubmit } = useForm<GapField>();
  const [correct, setCorrect] = useState<boolean | undefined>();
  const [score, setScore] = useContext(ScoreContext);
  const [disabled, setDisabled] = disableOptions;

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
    <>
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
    </>
  );
};

export default ReviserForm;
