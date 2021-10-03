import React from "react";
import { Helmet } from "react-helmet";

import Layout from "./Layout";

const MyPot = () => {
  return (
    <Layout>
      <Helmet title="Home" />
      MyPot
    </Layout>
  );
};

export default MyPot;
