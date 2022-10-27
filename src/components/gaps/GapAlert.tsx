import React, { useMemo } from "react";

interface Properties {
  variant: "error" | "success";
  // eslint-disable-next-line react/require-default-props
  rightAnswer?: string;
}

const GapAlert: React.FC<Properties> = ({ variant, rightAnswer }) => {
  const fail = useMemo(() => variant === "error", [variant]);

  return (
    <div role="alert" className="my-1.5">
      <div
        className={`${
          fail ? "bg-red-500" : "bg-green-500"
        } text-white font-bold rounded-t px-4 py-2`}
      >
        {variant === "error" ? "Wrong!" : "Congratulation"}
      </div>
      {variant === "error" && (
        <div
          className={`border border-t-0 ${
            fail ? "border-red-400" : "border-green-400"
          } rounded-b ${fail ? "bg-red-100" : "bg-green-100"} px-4 py-3 ${
            fail ? "text-red-700" : "text-green-700"
          }`}
        >
          <p>
            Right answer is:{" "}
            <span className="text-green-600">{rightAnswer}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default GapAlert;
