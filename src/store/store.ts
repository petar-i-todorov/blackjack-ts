import { configureStore } from "@reduxjs/toolkit";
import cellsReducer from "./cellsSlice";
import showModalsReducer from "./showModalsSlice";
import resultReducer from "./resultSlice";
import counterReducer from "./countersSlice";
import unlockButtonsReducer from "./unlockButtons";
import textErrorReducer from "./textErrorSlice";
import showUpperLeftReducer from "./showUpperLeftSlice";
import deckReducer from "./deckSlice";
import chipsBalanceReducer from "./chipsBalanceSlice";
import bettingOptionsReducer from "./bettingOptionsSlice";
import possibleBlackjackReducer from "./possibleBlackjackSlice";

export const store = configureStore({
  reducer: {
    cells: cellsReducer,
    modal: showModalsReducer,
    result: resultReducer,
    counter: counterReducer,
    unlockButtons: unlockButtonsReducer,
    textError: textErrorReducer,
    showUpperLeft: showUpperLeftReducer,
    deck: deckReducer,
    chipsBalance: chipsBalanceReducer,
    bettingOptions: bettingOptionsReducer,
    possibleBlackjack: possibleBlackjackReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
