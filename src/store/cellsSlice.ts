import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../classes/CardClass";

interface ICellCards {
  leftLowerCards: null | ICard[];
  leftUpperCards: null | ICard[];
  rightLowerCard: null | ICard;
  rightUpperCard: null | ICard;
}

const initialState: ICellCards = {
  leftLowerCards: [],
  leftUpperCards: [],
  rightLowerCard: null,
  rightUpperCard: null,
};

const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    addLeftLowerCard: (state, action: PayloadAction<ICard>) => {
      state.leftLowerCards?.push(action.payload);
    },
    resetLeftLowerCards: (state) => {
      state.leftLowerCards = [];
    },
    addLeftUpperCard: (state, action: PayloadAction<ICard>) => {
      state.leftUpperCards?.push(action.payload);
    },
    resetLeftUpperCards: (state) => {
      state.leftUpperCards = [];
    },
    generateRightLowerCard: (state, action) => {
      state.rightLowerCard = action.payload;
    },
    generateRightUpperCard: (state, action) => {
      state.rightUpperCard = action.payload;
    },
  },
});

export default cellsSlice.reducer;
export const {
  addLeftLowerCard,
  addLeftUpperCard,
  generateRightLowerCard,
  generateRightUpperCard,
  resetLeftLowerCards,
  resetLeftUpperCards,
} = cellsSlice.actions;
