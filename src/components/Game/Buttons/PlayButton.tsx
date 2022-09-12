import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  addLeftLowerCard,
  generateRightLowerCard,
  generateRightUpperCard,
} from "../../../redux/cells/slice";
import { useEffect } from "react";
import { ICard } from "../../../classes/CardClass";
import {
  setCounterLower,
  setCounterUpper,
} from "../../../redux/counters/slice";
import {
  lockPlay,
  unlockDrawMore,
  unlockEnough,
} from "../../../redux/buttons/slice";
import { setTextError } from "../../../redux/errorText/slice";
import { showErrorModal } from "../../../redux/modals/slice";
import { setDeck } from "../../../redux/deck/slice";
import { setChipsBalance } from "../../../redux/chipsBalance/slice";
import { setPossibleBlackjack } from "../../../redux/possibleBlackjack/slice";

const PlayButton: React.FC<{
  setShowResultModal: (arg: boolean) => void;
}> = ({ setShowResultModal }) => {
  const dispatch = useAppDispatch();

  const { leftLowerCards, leftUpperCards, rightUpperCard, rightLowerCard } =
    useAppSelector((state) => state.cells);

  const playState = useAppSelector((state) => state.unlockButtons.unlockPlay);

  useEffect(() => {
    dispatch(setCounterLower([rightLowerCard, leftLowerCards]));
  }, [leftLowerCards, rightLowerCard]);

  useEffect(() => {
    dispatch(setCounterUpper([rightUpperCard, leftUpperCards]));
  }, [leftUpperCards, rightUpperCard]);

  const deck = useAppSelector((state) => state.deck);

  const drawRandomCard = (deck: ICard[]) => {
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

  const leftLowerCardRef = useRef<ICard>();
  const rightUpperCardRef = useRef<ICard>();
  const rightLowerCardRef = useRef<ICard>();
  const { fiftyStatus, hundredStatus } = useAppSelector(
    (state) => state.bettingOptions
  );
  const chipsBalance = useAppSelector((state) => state.chipsBalance);
  let chosenBetOption: number;
  if (fiftyStatus) {
    chosenBetOption = 50;
  } else if (hundredStatus) {
    chosenBetOption = 100;
  } else {
    chosenBetOption = 250;
  }
  return (
    <button
      className="button sidebar__play-button"
      onClick={() => {
        if (playState) {
          if (chipsBalance < chosenBetOption) {
            dispatch(showErrorModal(true));
            dispatch(setTextError("Your balance is too low."));
          } else {
            dispatch(setChipsBalance(chipsBalance - chosenBetOption));
            leftLowerCardRef.current = drawRandomCard(deck);
            const deckAfterDrawing1 = deck.filter(
              (el: ICard) => el !== leftLowerCardRef.current
            );
            dispatch(addLeftLowerCard(leftLowerCardRef.current));
            rightLowerCardRef.current = drawRandomCard(deckAfterDrawing1);
            const deckAfterDrawing2 = deckAfterDrawing1.filter(
              (el: ICard) => el !== rightLowerCardRef.current
            );
            dispatch(generateRightLowerCard(rightLowerCardRef.current));
            rightUpperCardRef.current = drawRandomCard(deckAfterDrawing2);
            dispatch(generateRightUpperCard(rightUpperCardRef.current));
            if (
              (leftLowerCardRef.current.value === 11 ||
                rightLowerCardRef.current.value === 11) &&
              (rightLowerCardRef.current.value > 11 ||
                rightLowerCardRef.current.value === 10 ||
                leftLowerCardRef.current.value > 11 ||
                leftLowerCardRef.current.value === 10)
            ) {
              // dispatch(setResult("WIN-BLACKJACK"));
              // setShowResultModal(true);
              dispatch(setPossibleBlackjack(true));
            }
            dispatch(lockPlay());
            dispatch(unlockDrawMore());
            dispatch(unlockEnough());
          }
        } else {
          dispatch(setTextError("Play button is locked."));
          dispatch(showErrorModal(true));
        }
      }}
    >
      Play
    </button>
  );
};

export default PlayButton;
