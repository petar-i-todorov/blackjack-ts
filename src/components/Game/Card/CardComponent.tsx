import React from "react";
import { ICard } from "../../../classes/CardClass";
import "./CardComponent.scss";

const CardComponent: React.FC<{
  card: ICard;
  className?: string;
}> = ({ card, className }) => {
  let realCardValue: string | number;

  if (card.value >= 2 && card.value <= 10) realCardValue = card.value;
  else {
    switch (card.value) {
      case 11:
        realCardValue = "A";
        break;
      case 12:
        realCardValue = "J";
        break;
      case 13:
        realCardValue = "Q";
        break;
      case 14:
        realCardValue = "K";
        break;
      default:
        realCardValue = 0;
    }
  }

  return (
    <div
      className={`card ${className} ${
        card.suit === "♠" || card.suit === "♣" ? "black" : "red"
      }`}
    >
      <div className="card__upper">
        {realCardValue} {card.suit}
      </div>
      <div className="card__suit">{card.suit}</div>
      <div className="card__lower">
        {realCardValue} {card.suit}
      </div>
    </div>
  );
};

export default CardComponent;
