import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { database } from "../api/database/database";

const DictionaryList: React.FC = () => {
  const dictionary = useLiveQuery(() =>
    database.dictionary.where("progress").above(0).toArray()
  );
  // eslint-disable-next-line no-console
  const exportHandler = () =>
    console.log(
      dictionary
        ?.map((entry) => `${entry.word} - ${entry.translation}`)
        .join("\n")
    );
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-4 w-full h-screen">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={exportHandler}
      >
        Export
      </button>
      <div className="card shadow max-h-80 flex-grow max-w-screen-lg px-4 bg-white overflow-scroll">
        {dictionary?.map((entry) => (
          <div
            key={entry.id}
            className="flex items-baseline text-left justify-between text-black"
          >
            <div>{entry.word}</div>
            <div>{entry.translation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DictionaryList;
