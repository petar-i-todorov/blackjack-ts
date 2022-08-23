import React from "react";
import BetOptionsContainer from "./BetOptionsContainer";
import GameComponent from "./GameComponent";

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
