import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Banner: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ marginBottom: (theme) => theme.spacing(3) }}
    >
      <Grid
        item
        sx={{
          maxWidth: 500,
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <Box>
          <Typography variant="caption">TOTAL DEPOSITS</Typography>
          <Typography variant="h6" color="primary">
            123,412$
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <img src="./logo512.png" alt="Logo" height={100} />
      </Grid>
    </Grid>
  );
};

export default Banner;
