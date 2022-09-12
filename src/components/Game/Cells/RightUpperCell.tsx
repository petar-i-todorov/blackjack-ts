import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import CardComponent from "../Card/CardComponent";

const RightUpperCell = () => {
  const rightUpperCard = useAppSelector((state) => state.cells.rightUpperCard);
  return (
    <div className="cell">
      {rightUpperCard && <CardComponent card={rightUpperCard} />}
    </div>
  );
};

export default RightUpperCell;
