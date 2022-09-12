import React from "react";
import { ICard } from "../../../classes/CardClass";
import { useAppSelector } from "../../../hooks/reduxHooks";
import CardComponent from "../Card/CardComponent";

const CellLeftUpperComponent = () => {
  const leftUpperCards = useAppSelector((state) => state.cells.leftUpperCards);

  return (
    <div className="cell">
      {leftUpperCards &&
        leftUpperCards?.map((card: ICard, index: number) => (
          <CardComponent key={index} className="stacking" card={card} />
        ))}
    </div>
  );
};

export default CellLeftUpperComponent;
