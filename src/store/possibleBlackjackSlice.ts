import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

const possibleBlackjackSlice = createSlice({
  name: "possibleBlackjack",
  initialState,
  reducers: {
    setPossibleBlackjack: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export default possibleBlackjackSlice.reducer;
export const { setPossibleBlackjack } = possibleBlackjackSlice.actions;
