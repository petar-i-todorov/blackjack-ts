import { ICard } from "../../classes/CardClass";

export default interface ICellCards {
  leftLowerCards: null | ICard[];
  leftUpperCards: null | ICard[];
  rightLowerCard: null | ICard;
  rightUpperCard: null | ICard;
}
