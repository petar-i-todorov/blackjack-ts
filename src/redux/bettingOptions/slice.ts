import { createSlice } from "@reduxjs/toolkit";
import IBettingOptions from "./types";

const initialState: IBettingOptions = {
  fiftyStatus: true,
  hundredStatus: false,
  twoHundredFiftyStatus: false,
};

const bettingOptionsSlice = createSlice({
  name: "chips",
  initialState,
  reducers: {
    choose50: (state) => {
      state.fiftyStatus = true;
      state.hundredStatus = false;
      state.twoHundredFiftyStatus = false;
    },
    choose100: (state) => {
      state.hundredStatus = true;
      state.fiftyStatus = false;
      state.twoHundredFiftyStatus = false;
    },
    choose250: (state) => {
      state.twoHundredFiftyStatus = true;
      state.fiftyStatus = false;
      state.hundredStatus = false;
    },
  },
});

export default bettingOptionsSlice.reducer;
export const { choose50, choose100, choose250 } = bettingOptionsSlice.actions;
