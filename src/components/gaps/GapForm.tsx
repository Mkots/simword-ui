import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactTooltip from "react-tooltip";

import { IGap } from "types";

import GapAlert from "./GapAlert";

type Properties = Omit<IGap, "sentence">;

interface GapField {
  gapField: string;
}

const GapForm: React.FC<Properties> = ({ task, word, answer }) => {
  const [correct, setCorrect] = useState<boolean | undefined>();
  const { register, handleSubmit, setValue, watch } = useForm<GapField>();

  const onSubmit: SubmitHandler<GapField> = (data) => {
    if (!data.gapField) return;
    if (data.gapField.toLowerCase() === answer.toLowerCase()) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  const [begin, end] = task.split("___");

  return (
    <div className="justify-center card-actions uppercase text-black text-center text-lg lg:text-3xl">
      <div className="p-10 card bg-gray-100 min-w-full space-y-3 px-0 lg:px-4">
        <form
          className="form-control flex space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="text-lg lg:text-3xl">
            {begin}
            <span
              contentEditable
              suppressContentEditableWarning
              className="underline outline-none text-primary"
              data-tip={word}
              onInput={(formEvent) => {
                setValue("gapField", formEvent.currentTarget.textContent || "");
              }}
              onKeyDown={(keyEvent) => {
                if (keyEvent.key === "Enter") {
                  keyEvent.preventDefault();
                  onSubmit({ gapField: watch("gapField") });
                }
              }}
              {...register("gapField")}
            >
              {word}
            </span>
            {end}
          </span>
          <button className="btn btn-primary mx-4" type="submit">
            Check
          </button>
        </form>
        {correct === false && <GapAlert variant="error" rightAnswer={answer} />}
        {correct === true && <GapAlert variant="success" />}
        <ReactTooltip
          place="top"
          type="info"
          effect="solid"
          offset={{ top: 20 }}
          event="focusin"
          eventOff="focusout"
        />
      </div>
    </div>
  );
};

export default GapForm;
