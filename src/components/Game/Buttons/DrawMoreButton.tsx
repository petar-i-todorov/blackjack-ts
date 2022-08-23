import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { addLeftLowerCard } from "../../../store/cellsSlice";
import { setCounterLower } from "../../../store/countersSlice";
import { setDeck } from "../../../store/deckSlice";
import { showErrorModal } from "../../../store/showModalsSlice";
import { setTextError } from "../../../store/textErrorSlice";

const DrawMoreButton = () => {
  const dispatch = useAppDispatch();

  const { leftLowerCards, rightLowerCard } = useAppSelector(
    (state) => state.cells
  );

  const drawMoreState = useAppSelector(
    (state) => state.unlockButtons.unlockDrawMore
  );

  const counterLower = useAppSelector((state) => state.counter.counterLower);

  const deck = useAppSelector((state) => state.deck);

  const drawRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const randomCard = deck[randomIndex];
    dispatch(
      setDeck(
        deck.filter((el) => {
          return el !== randomCard;
        })
      )
    );
    return randomCard;
  };

  return (
    <button
      className={`button ${counterLower === 21 && "hide"}`}
      onClick={() => {
        if (drawMoreState) {
          dispatch(addLeftLowerCard(drawRandomCard()));
          dispatch(setCounterLower([rightLowerCard, leftLowerCards]));
        } else {
          dispatch(setTextError("Draw More button is locked."));
          dispatch(showErrorModal(true));
        }
      }}
    >
      Draw More
    </button>
  );
};

export default DrawMoreButton;
