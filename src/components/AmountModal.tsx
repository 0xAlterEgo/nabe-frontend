import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "state/hooks";
import { toggleAmountModal } from "state/modal";

const AmountModal: React.FC = () => {
  const open = useAppSelector((state) => state.modal.isAmountModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleAmountModal());
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{ paddingTop: 10, height: "80%" }}
    >
      <DialogTitle>ENTER AMOUNT</DialogTitle>
      <DialogContent>
        <TextField placeholder="Enter CAKE amount" size="small" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Deposit
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AmountModal;
