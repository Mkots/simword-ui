import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactTooltip from "react-tooltip";

import GapAlert from "./GapAlert";
import { IGap } from "../../types";

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
    <div className="p-10 card bg-gray-100 min-w-full space-y-3 px-0 lg:px-4">
      <form
        className="form-control flex space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-sm lg:text-lg">
          {begin}
          <span
            contentEditable
            suppressContentEditableWarning
            className="underline outline-none text-blue-500"
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
  );
};

export default GapForm;