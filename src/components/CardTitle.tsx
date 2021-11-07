import React from "react";

const CardTitle: React.FC = ({ children }) => (
  <div className="card-title mt-4 uppercase text-black text-center text-lg lg:text-3xl">
    {children}
  </div>
);

export default CardTitle;
