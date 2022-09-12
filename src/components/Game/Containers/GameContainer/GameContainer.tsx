import React from "react";
import BetOptionsContainer from "../BetOptionsContainer/BetOptionsContainer";
import GameComponent from "../Game/GameComponent";
import "./GameContainer.scss";

const GameContainer: React.FC<{
  setShowResultModal: (arg: boolean) => void;
}> = ({ setShowResultModal }) => {
  return (
    <div className="game-container">
      <GameComponent setShowResultModal={setShowResultModal} />
      <BetOptionsContainer />
    </div>
  );
};

export default GameContainer;
