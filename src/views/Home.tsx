import React from "react";
import { Helmet } from "react-helmet";

import Layout from "./Layout";
import PotList from "components/PotList";

const Home = () => {
  return (
    <Layout>
      <Helmet title="Home" />
      <PotList />
    </Layout>
  );
};

export default Home;
