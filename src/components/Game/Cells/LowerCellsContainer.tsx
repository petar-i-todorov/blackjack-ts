import React from "react";
import LeftLowerCell from "./LeftLowerCell";
import RightLowerCell from "./RightLowerCell";

const LowerCellsContainer = () => {
  return (
    <div className="cells-container">
      <LeftLowerCell />
      <RightLowerCell />
    </div>
  );
};

export default LowerCellsContainer;
