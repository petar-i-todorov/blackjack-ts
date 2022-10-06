import React from "react";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer";
import LowerCellsContainer from "../Cells/CellsContainers/LowerCellsContainer";
import UpperCellsContainer from "../Cells/CellsContainers/UpperCellsContainer";

const CellsAndButtonsContainer = () => {
  return (
    <div className="game__container">
      <UpperCellsContainer />
      <LowerCellsContainer />
      <ButtonsContainer />
    </div>
  );
};

export default CellsAndButtonsContainer;
