import React from "react";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer";
import LowerCellsContainer from "../Cells/CellsContainers/LowerCellsContainer";
import UpperCellsContainer from "../Cells/CellsContainers/UpperCellsContainer";

const CellsAndButtonsContainer: React.FC<{
  setShowResultModal: (arg: boolean) => void;
}> = ({ setShowResultModal }) => {
  return (
    <div className="game__container">
      <UpperCellsContainer />
      <LowerCellsContainer />
      <ButtonsContainer setShowResultModal={setShowResultModal} />
    </div>
  );
};

export default CellsAndButtonsContainer;
