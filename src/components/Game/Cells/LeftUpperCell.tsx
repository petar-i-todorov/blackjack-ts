import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import CardComponent from "../CardComponent";

const CellLeftUpperComponent = () => {
  const leftUpperCards = useAppSelector((state) => state.cells.leftUpperCards);

  return (
    <div className="cell">
      {leftUpperCards &&
        leftUpperCards?.map((card, index) => (
          <CardComponent key={index} className="stacking" card={card} />
        ))}
    </div>
  );
};

export default CellLeftUpperComponent;
