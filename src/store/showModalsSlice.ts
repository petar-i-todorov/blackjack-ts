import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModals {
  rulesModal: boolean;
  resultModal: boolean;
  errorModal: boolean;
}

const initialState: IModals = {
  rulesModal: false,
  resultModal: false,
  errorModal: false,
};

const showModalsSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showRulesModal: (state, action: PayloadAction<boolean>) => {
      state.rulesModal = action.payload;
    },
    showResultModal: (state, action: PayloadAction<boolean>) => {
      state.resultModal = action.payload;
    },
    showErrorModal: (state, action: PayloadAction<boolean>) => {
      state.errorModal = action.payload;
    },
  },
});

export default showModalsSlice.reducer;
export const { showRulesModal, showResultModal, showErrorModal } =
  showModalsSlice.actions;
