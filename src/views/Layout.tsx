import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";

import Header from "components/Header";
import Footer from "components/Footer";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div>
      <Helmet defaultTitle="Nabe.Finance" titleTemplate="%s | Nabe.Finance" />
      <Header />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "center",
          justifyItems: "center",
          padding: "8rem 2.5rem",
        }}
      >
        {children!}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
