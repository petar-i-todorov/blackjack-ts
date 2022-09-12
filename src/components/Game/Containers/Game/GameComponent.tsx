import React from "react";
import CellsAndButtonsContainer from "../CellsAndButtonsContainer";
import GameSidebar from "../GameSidebar/GameSidebar";
import "./GameComponent.scss";

const GameComponent: React.FC<{
  setShowResultModal: (arg: boolean) => void;
}> = ({ setShowResultModal }) => {
  return (
    <div className="game">
      <CellsAndButtonsContainer setShowResultModal={setShowResultModal} />
      <GameSidebar setShowResultModal={setShowResultModal} />
    </div>
  );
};

export default GameComponent;
