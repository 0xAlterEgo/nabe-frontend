import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Tooltip,
  LinearProgress,
  CardActionArea,
} from "@mui/material";
import { useDispatch } from "react-redux";
import moment from "moment";

import { toggleAmountModal } from "state/modal";

type PotCardProp = {
  title: string;
  season: string;
  participant: string;
  tvl: string;
  end: boolean;
};

const PotCard: React.FC<PotCardProp> = ({
  title,
  season,
  participant,
  tvl,
  end,
}) => {
  const targetTime = moment("2035-01-01");
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  const openAmountModal = () => {
    dispatch(toggleAmountModal());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">{title}</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="subtitle1">#{season}</Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant="determinate" value={30} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Participants</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography>{participant}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">SSR Prize</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography>${tvl}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Next Draw</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography>
                {timeBetween.days()}d {timeBetween.hours()}h{" "}
                {timeBetween.minutes()}m {timeBetween.seconds()}s
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActionArea>
          <Tooltip title="The odds for the winner are as follows: SSR 3%, SR 7%, R 15%, N 75%">
            {end ? (
              <Button
                fullWidth
                variant="contained"
                onClick={openAmountModal}
                // disabled
              >
                ENDED POT
              </Button>
            ) : (
              <Button fullWidth variant="contained" onClick={openAmountModal}>
                Enter amount
              </Button>
            )}
          </Tooltip>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PotCard;
