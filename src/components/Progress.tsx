import React from "react";
import { LinearProgress, Box } from "@mui/material";

const Progress = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <img src="./images/loading.png" alt="Logo" />
      <LinearProgress />
    </Box>
  );
};

export default Progress;
