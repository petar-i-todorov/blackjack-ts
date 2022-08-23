import React from "react";
import ResultCounter from "../ResultCounter";
import DeckComponent from "../DeckComponent";
import PlayButton from "../Buttons/PlayButton";

const GameSidebar: React.FC<{
  setShowResultModal: (arg: boolean) => void;
}> = ({ setShowResultModal }) => {
  return (
    <div className="game__sidebar">
      <ResultCounter side="upper" />
      <DeckComponent />
      <PlayButton setShowResultModal={setShowResultModal} />
      <ResultCounter side="lower" />
    </div>
  );
};

export default GameSidebar;
