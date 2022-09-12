import React from "react";
import LeftUpperCell from "../LeftUpperCell";
import RightUpperCell from "../RightUpperCell";

const UpperCellsContainer = () => {
  return (
    <div className="cells-container">
      <LeftUpperCell />
      <RightUpperCell />
    </div>
  );
};

export default UpperCellsContainer;
