import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "state";
import { ModalState } from "state/types";

const initialState: ModalState = {
  isAmountModal: false,
  isTxModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAmountModal: (state) => {
      state.isAmountModal = !state.isAmountModal;
    },
    toggleTxModal: (state) => {
      state.isTxModal = !state.isTxModal;
    },
  },
});

export const { toggleAmountModal, toggleTxModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
