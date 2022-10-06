import React from "react";
import ResultCounter from "../../ResultCounter/ResultCounter";
import DeckComponent from "../../Deck/DeckComponent";
import PlayButton from "../../Buttons/PlayButton/PlayButton";
import "./GameSidebar.scss";

const GameSidebar = () => {
  return (
    <div className="game__sidebar">
      <ResultCounter side="upper" />
      <DeckComponent />
      <PlayButton />
      <ResultCounter side="lower" />
    </div>
  );
};

export default GameSidebar;
