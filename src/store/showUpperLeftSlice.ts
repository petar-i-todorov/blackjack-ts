import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

const showUpperLeftSlice = createSlice({
  name: "showUpperLeft",
  initialState,
  reducers: {
    setShowUpperLeft: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export default showUpperLeftSlice.reducer;
export const { setShowUpperLeft } = showUpperLeftSlice.actions;
