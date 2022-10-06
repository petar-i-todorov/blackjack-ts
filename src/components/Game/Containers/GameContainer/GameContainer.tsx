import React from "react";
import BetOptionsContainer from "../BetOptionsContainer/BetOptionsContainer";
import GameComponent from "../Game/GameComponent";
import "./GameContainer.scss";

const GameContainer = () => {
  return (
    <div className="game-container">
      <GameComponent />
      <BetOptionsContainer />
    </div>
  );
};

export default GameContainer;
