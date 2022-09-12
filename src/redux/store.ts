import { configureStore } from "@reduxjs/toolkit";
import cellsReducer from "./cells/slice";
import showModalsReducer from "./modals/slice";
import resultReducer from "./result/slice";
import counterReducer from "./counters/slice";
import unlockButtonsReducer from "./buttons/slice";
import textErrorReducer from "./errorText/slice";
import showUpperLeftReducer from "./upperLeftStatus/slice";
import deckReducer from "./deck/slice";
import chipsBalanceReducer from "./chipsBalance/slice";
import bettingOptionsReducer from "./bettingOptions/slice";
import possibleBlackjackReducer from "./possibleBlackjack/slice";

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
