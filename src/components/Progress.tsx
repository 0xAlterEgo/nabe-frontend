import React from "react";
import { CircularProgress, Container } from "@mui/material";

const Progress = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        display: "flex",
        "& > * + *": {
          marginLeft: (theme) => theme.spacing(2),
        },
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Progress;
