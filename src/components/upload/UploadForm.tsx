import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { database } from "../../api/database/database";

import CardTitle from "../CardTitle";

interface DictionaryBulk {
  bulkWords: string;
}

const onSubmit: SubmitHandler<DictionaryBulk> = async (data) => {
  if (!data.bulkWords) return;
  await database.dictionary.bulkAdd(
    data.bulkWords.split(/\n/).map((entry) => {
      const [word, translation] = entry.split("-");
      return { word, translation, progress: 0 };
    })
  );
};

export const UploadForm: React.FC = () => {
  const { register, handleSubmit } = useForm<DictionaryBulk>();

  return (
    <div
      className="card shadow flex-grow max-w-screen-lg px-4 bg-white overflow-visible"
      data-cy="UploadForm"
    >
      <div className="card-body p-0 text-black relative">
        <Link to="/dictionary" className="btn glass absolute right-8 -top-5">
          Dictionary
        </Link>
      </div>
      <CardTitle>Upload data for reviser</CardTitle>
      <form
        className="form-control flex justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          placeholder="Dictionary in 'word - translation' format"
          className="input w-full max-w-xs text-black text-center"
          {...register("bulkWords")}
        />
        <button className="btn btn-primary mx-4 my-4 w-full" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};
