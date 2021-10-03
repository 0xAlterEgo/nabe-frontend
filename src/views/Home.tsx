import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";

import Layout from "./Layout";
import Progress from "components/Progress";
import { useAppSelector, useFetchPotData } from "state/hooks";
import PotCard from "components/PotCard";
import AmountModal from "components/AmountModal";
import TxModal from "components/TxModal";

const Home = () => {
  const isLoading = useAppSelector((state) => state.pots.potData.isLoading);
  const season = useAppSelector((state) => state.pots.potData.season);
  const participant = useAppSelector((state) => state.pots.potData.participant);
  const tvl = useAppSelector((state) => state.pots.potData.tvl);
  const end = useAppSelector((state) => state.pots.potData.potEnd);
  const nextDraw = useAppSelector((state) => state.pots.potData.nextDraw);

  useFetchPotData();

  if (isLoading) return <Progress />;

  return (
    <Layout>
      <Helmet title="Home" />
      <Grid container spacing={5}>
        <Grid item>
          <PotCard
            image="pancake"
            title="Cake Pot"
            season={season}
            participant={participant}
            tvl={tvl}
            end={end}
            nextDraw={nextDraw}
          />
        </Grid>
        <Grid item>
          <PotCard
            image="nabe"
            title="Nabe Pot"
            season={season}
            participant={participant}
            tvl={tvl}
            end={end}
            nextDraw={nextDraw}
          />
        </Grid>
      </Grid>
      <AmountModal />
      <TxModal />
    </Layout>
  );
};

export default Home;
