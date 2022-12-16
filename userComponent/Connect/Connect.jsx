import React from "react";
import ControlConnect from "./ControlConnect";
import FilterConnect from "./FilterConnect";
import Header from "./Header";

const Connect = () => {
  return (
    <div className="mx-10">
      <Header />
      <ControlConnect />
    </div>
  );
};

export default Connect;
