export interface ICard {
  value: number;
  suit: string;
}

export default class Card {
  value: number;
  suit: string;
  constructor(value: number, suit: string) {
    this.value = value;
    this.suit = suit;
  }
}
