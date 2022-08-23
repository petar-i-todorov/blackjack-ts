import Card from "../classes/CardClass";

const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function freshDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(value, suit);
    });
  });
}

export default freshDeck;
