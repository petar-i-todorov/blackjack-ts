import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../classes/CardClass";
import freshDeck from "../utils/deck";

const initialState: ICard[] = freshDeck();

const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    setDeck: (state, action: PayloadAction<ICard[]>) => {
      return (state = action.payload);
    },
  },
});

export default deckSlice.reducer;
export const { setDeck } = deckSlice.actions;
