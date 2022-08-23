import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import CardComponent from "../CardComponent";

const LeftLowerCell = () => {
  const leftLowerCards = useAppSelector((state) => state.cells.leftLowerCards);

  return (
    <div className="cell">
      {leftLowerCards &&
        leftLowerCards?.map((card, index) => (
          <CardComponent key={index} className="stacking" card={card} />
        ))}
    </div>
  );
};

export default LeftLowerCell;
