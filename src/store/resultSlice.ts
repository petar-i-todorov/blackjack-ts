import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export default resultSlice.reducer;
export const { setResult } = resultSlice.actions;
