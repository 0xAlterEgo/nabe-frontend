import React from "react";
import { Helmet } from "react-helmet";
// import { utils } from "ethers";

import Layout from "./Layout";
import Progress from "components/Progress";
// import { CAKE_POT_ADDRESS } from "config/abi/cakePot";
// import { useCakePot, useCake } from "hooks/useContract";
import { useAppSelector, useFetchPotData } from "state/hooks";
import PotCard from "components/PotCard";
import Banner from "components/Banner";

const Home = () => {
  // const cakePotContract = useCakePot();
  // const cakeContract = useCake();

  // const [amount, setAmount] = useState("0");

  const isLoading = useAppSelector((state) => state.pots.potData.isLoading);
  const season = useAppSelector((state) => state.pots.potData.season);
  const participant = useAppSelector((state) => state.pots.potData.participant);
  const tvl = useAppSelector((state) => state.pots.potData.tvl);
  const end = useAppSelector((state) => state.pots.potData.potEnd);

  useFetchPotData();

  // const endPot = async () => {
  //   await cakePotContract.end();
  // };

  // const approvePot = async () => {
  //   await cakeContract.approve(CAKE_POT_ADDRESS, utils.parseEther(amount));
  // };

  // const enterPot = async () => {
  //   await cakePotContract.enter(utils.parseEther(amount));
  // };

  // const handleChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setAmount(event.target.value);
  // };

  if (isLoading) return <Progress />;

  return (
    <Layout>
      <Helmet title="Home" />
      <Banner />
      <PotCard season={season} participant={participant} tvl={tvl} end={end} />
    </Layout>
  );
};

export default Home;
