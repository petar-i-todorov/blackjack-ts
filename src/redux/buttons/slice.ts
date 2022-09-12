import { createSlice } from "@reduxjs/toolkit";
import IUnlockButtons from "./types";

const initialState: IUnlockButtons = {
  unlockPlay: true,
  unlockDrawMore: false,
  unlockEnough: false,
};

const unlockButtonsSlice = createSlice({
  name: "unlockButtons",
  initialState,
  reducers: {
    unlockPlay: (state) => {
      state.unlockPlay = true;
    },
    lockPlay: (state) => {
      state.unlockPlay = false;
    },
    unlockDrawMore: (state) => {
      state.unlockDrawMore = true;
    },
    lockDrawMore: (state) => {
      state.unlockDrawMore = false;
    },
    unlockEnough: (state) => {
      state.unlockEnough = true;
    },
    lockEnough: (state) => {
      state.unlockEnough = false;
    },
  },
});

export default unlockButtonsSlice.reducer;
export const {
  unlockPlay,
  lockPlay,
  unlockDrawMore,
  lockDrawMore,
  unlockEnough,
  lockEnough,
} = unlockButtonsSlice.actions;
