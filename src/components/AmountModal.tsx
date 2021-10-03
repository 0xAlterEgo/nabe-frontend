import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { utils } from "ethers";
import { CAKE_POT_ADDRESS } from "config/abi/cakePot";
import { useCakePot, useCake } from "hooks/useContract";
import { useDispatch } from "react-redux";
import { useAppSelector } from "state/hooks";
import { toggleAmountModal } from "state/modal";

const AmountModal: React.FC = () => {
  const cakePotContract = useCakePot();
  const cakeContract = useCake();

  const [amount, setAmount] = useState("0");

  const open = useAppSelector((state) => state.modal.isAmountModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleAmountModal());
  };

  const approvePot = async () => {
    await cakeContract.approve(CAKE_POT_ADDRESS, utils.parseEther(amount));
  };

  const enterPot = async () => {
    await cakePotContract.enter(utils.parseEther(amount));
  };

  const depositPot = async () => {
    approvePot();
    enterPot();
    handleClose();
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAmount(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{ paddingTop: 10, height: "80%" }}
    >
      <DialogTitle>ENTER AMOUNT</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ marginTop: 1 }}
          label="Enter Amount"
          size="small"
          value={amount}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={depositPot} autoFocus color="success">
          Deposit
        </Button>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AmountModal;
