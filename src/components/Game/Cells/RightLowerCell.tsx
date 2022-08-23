import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import CardComponent from "../CardComponent";

const RightLowerCell = () => {
  const rightLowerCard = useAppSelector((state) => state.cells.rightLowerCard);
  return (
    <div className="cell">
      {rightLowerCard && <CardComponent card={rightLowerCard} />}
    </div>
  );
};

export default RightLowerCell;
