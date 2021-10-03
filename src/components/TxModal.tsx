import React from "react";
import {
  Backdrop,
  Dialog,
  DialogTitle,
  DialogContent,
  LinearProgress,
} from "@mui/material";
import { useAppSelector } from "state/hooks";

const TxModal = () => {
  const open = useAppSelector((state) => state.modal.isTxModal);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Dialog open={open}>
        <DialogTitle>Transaction...</DialogTitle>
        <DialogContent>
          <img src="images/tx.png" alt="Logo" width="256" />
          <LinearProgress />
        </DialogContent>
      </Dialog>
    </Backdrop>
  );
};

export default TxModal;
