import React from "react";
import ButtonsContainer from "./ButtonsContainer";
import LowerCellsContainer from "../Cells/LowerCellsContainer";
import UpperCellsContainer from "../Cells/UpperCellsContainer";

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
