import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Banner: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ marginBottom: (theme) => theme.spacing(5) }}
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
          <Typography variant="body2">TOTAL DEPOSITS</Typography>
          <Typography variant="h3" color="primary">
            123,412$
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
