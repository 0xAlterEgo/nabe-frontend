import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "state";
import { ModalState } from "state/types";

const initialState: ModalState = {
  isAmountModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAmountModal: (state) => {
      state.isAmountModal = !state.isAmountModal;
    },
  },
});

export const { toggleAmountModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
