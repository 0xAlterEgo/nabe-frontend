import React from "react";
import { Grid } from "@mui/material";
import PotSwiper from "./PotSwiper";
import PotCard from "./PotCard";

const PotList: React.FC = () => {
  return (
    <>
      <Grid container flexDirection="row" justifyContent="center" spacing={5}>
        <Grid item xs={12}>
          <PotSwiper />
        </Grid>
        <Grid item>
          <PotCard end={true} />
        </Grid>

        <Grid item>
          <PotCard end={false} />
        </Grid>
      </Grid>
    </>
  );
};

export default PotList;
