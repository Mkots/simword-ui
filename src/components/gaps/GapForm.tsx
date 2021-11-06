import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import GapAlert from "./GapAlert";
import { IGap } from "../../types";

type Properties = Omit<IGap, "sentence">;

interface GapField {
  gapField: string;
}

const GapForm: React.FC<Properties> = ({ task, word, answer }) => {
  const [correct, setCorrect] = useState<boolean | undefined>();
  const { register, handleSubmit } = useForm<GapField>();
  const onSubmit: SubmitHandler<GapField> = (data) => {
    if (data.gapField === answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  const [begin, end] = task.split("___");

  return (
    <div className="p-10 card bg-base-200">
      <form className="form-control flex" onSubmit={handleSubmit(onSubmit)}>
        <span className="label-text">
          {begin}
          <input
            id="gap"
            type="text"
            placeholder={word}
            className="input input-ghost text-center"
            {...register("gapField")}
          />
          {end}
        </span>
        <button className="btn btn-primary" type="submit">
          Check
        </button>
      </form>
      {correct === false && (
        <GapAlert variant="error">Wrong. Correct answer is {answer}</GapAlert>
      )}
    </div>
  );
};

export default GapForm;
