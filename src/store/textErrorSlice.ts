import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const textErrorSlice = createSlice({
  name: "textError",
  initialState,
  reducers: {
    setTextError: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default textErrorSlice.reducer;
export const { setTextError } = textErrorSlice.actions;
