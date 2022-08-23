import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 1000;

const chipsBalanceSlice = createSlice({
  name: "chipsBalance",
  initialState,
  reducers: {
    setChipsBalance: (state, action: PayloadAction<number>) => {
      return (state = action.payload);
    },
  },
});

export default chipsBalanceSlice.reducer;
export const { setChipsBalance } = chipsBalanceSlice.actions;
