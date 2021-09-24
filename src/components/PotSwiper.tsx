import React, { useEffect, useState } from "react";
import { Grid, Typography, Tooltip } from "@mui/material";
import moment from "moment";

const PotSwiper: React.FC = () => {
  const targetTime = moment("2035-01-01");

  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tooltip title="cooking time">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <img src="/logo512.png" alt="Logo" height={50} />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            {timeBetween.hours()}:{timeBetween.minutes()}:
            {timeBetween.seconds()}
          </Typography>
        </Grid>
      </Grid>
    </Tooltip>
  );
};

export default PotSwiper;
