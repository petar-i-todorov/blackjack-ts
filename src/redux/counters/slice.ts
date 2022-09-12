import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../classes/CardClass";
import ICounter from "./types";

const initialState: ICounter = {
  counterLower: 0,
  counterUpper: 0,
};

export type CounterAction = [ICard | null, ICard[] | null];

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounterUpper: (state, action: PayloadAction<CounterAction>) => {
      state.counterUpper = 0;
      action.payload.forEach((el) => {
        if (Array.isArray(el)) {
          el.forEach((card) => {
            if (card.value === 11 && state.counterUpper >= 11) {
              state.counterUpper++;
            } else state.counterUpper += card.value > 11 ? 10 : card.value;
          });
        } else {
          if (el !== null) {
            if (el.value === 11 && state.counterUpper >= 11) {
              state.counterUpper++;
            } else state.counterUpper += el.value > 11 ? 10 : el.value;
          }
        }
      });
    },
    setCounterLower: (state, action: PayloadAction<CounterAction>) => {
      state.counterLower = 0;
      action.payload.forEach((el) => {
        if (Array.isArray(el)) {
          el.forEach((card) => {
            if (card.value === 11 && state.counterLower >= 11) {
              state.counterLower++;
            } else state.counterLower += card.value > 11 ? 10 : card.value;
          });
        } else {
          if (el !== null) {
            if (el.value === 11 && state.counterLower >= 11) {
              state.counterLower++;
            } else state.counterLower += el.value > 11 ? 10 : el.value;
          }
        }
      });
    },
  },
});

export default counterSlice.reducer;
export const { setCounterUpper, setCounterLower } = counterSlice.actions;
