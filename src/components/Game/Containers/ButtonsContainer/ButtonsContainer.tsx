import React from "react";
import DrawMoreButton from "../../Buttons/DrawMoreButton";
import EnoughButton from "../../Buttons/EnoughButton";
import "./ButtonsContainer.scss";

const ButtonsCointainer: React.FC<{
  setShowResultModal: (arg: boolean) => void;
}> = ({ setShowResultModal }) => {
  return (
    <div className="buttons-container">
      <DrawMoreButton />
      <EnoughButton setShowResultModal={setShowResultModal} />
    </div>
  );
};

export default ButtonsCointainer;
