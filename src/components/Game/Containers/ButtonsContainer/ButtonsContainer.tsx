import React from "react";
import DrawMoreButton from "../../Buttons/DrawMoreButton";
import EnoughButton from "../../Buttons/EnoughButton";
import "./ButtonsContainer.scss";

const ButtonsCointainer = () => {
  return (
    <div className="buttons-container">
      <DrawMoreButton />
      <EnoughButton />
    </div>
  );
};

export default ButtonsCointainer;
