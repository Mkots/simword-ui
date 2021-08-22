import React, { ReactElement } from "react";

interface Properties {
  error?: Error;
}
export default function LoadingOrError({ error }: Properties): ReactElement {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl" data-cy="LoadingOrError">
        {error ? (
          error.message
        ) : (
          <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500" />
          </div>
        )}
      </h1>
    </div>
  );
}
LoadingOrError.defaultProps = {
  error: undefined,
};
