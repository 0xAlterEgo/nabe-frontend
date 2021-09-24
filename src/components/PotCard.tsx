import React from "react";
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
import { toggleAmountModal } from "state/modal";
import AmountModal from "./AmountModal";

type PotCardProp = {
  season?: string;
  participant?: string;
  tvl?: string;
  end: boolean;
};

const PotCard: React.FC<PotCardProp> = ({ season, participant, tvl, end }) => {
  const dispatch = useDispatch();

  const openAmountModal = () => {
    dispatch(toggleAmountModal());
  };

  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {end ? (
                <Typography variant="caption">ENDED</Typography>
              ) : (
                <Typography variant="caption">LIVE</Typography>
              )}
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="caption">#33</Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant="determinate" value={30} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Participants</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography>300</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">SSR Prize</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography>$1,132,512</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActionArea>
          <Tooltip title="The odds for the winner are as follows: SSR 3%, SR 7%, R 15%, N 75%">
            {end ? (
              <Button fullWidth variant="contained" disabled>
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
      <AmountModal />
    </>
  );
};

export default PotCard;
