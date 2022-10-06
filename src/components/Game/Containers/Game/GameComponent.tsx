import React from "react";
import CellsAndButtonsContainer from "../CellsAndButtonsContainer";
import GameSidebar from "../GameSidebar/GameSidebar";
import "./GameComponent.scss";

const GameComponent = () => {
  return (
    <div className="game">
      <CellsAndButtonsContainer />
      <GameSidebar />
    </div>
  );
};

export default GameComponent;
