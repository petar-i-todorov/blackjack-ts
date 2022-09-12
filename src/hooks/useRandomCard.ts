import { setDeck } from "../redux/deck/slice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const useRandomCard = () => {
  const deck = useAppSelector((state) => state.deck);

  const dispatch = useAppDispatch();

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
