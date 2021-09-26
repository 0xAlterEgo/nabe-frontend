import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Grid,
  IconButton,
  Drawer,
  List,
  Link,
  ListItem,
  ListItemText,
  Badge,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

import { connectorsByName, ConnectorNames } from "utils/web3React";
import useEagerConnect from "hooks/useEagerConnect";
import useInactiveListener from "hooks/useInactiveListener";
import truncateWalletAddress from "utils/truncateWalletAddress";

const link = {
  textDecoration: "none",
  color: "gray",
  "&:hover": {
    color: "#735858",
    fontWeight: "bold",
  },
  "&:active": {
    color: "#735858",
    fontWeight: "bold",
  },
};

const Header = () => {
  const { t } = useTranslation("");
  const { active, connector, account, activate, deactivate, error } =
    useWeb3React();

  const [activatingConnector, setActivatingConnector] = useState<any>();
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawer(open);
  };

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  const Logo = () => {
    return (
      <Link href="/" underline="none">
        <Grid container spacing={2} alignItems="center" alignContent="center">
          <Grid item>
            <img src="./logo512.png" alt="Logo" height={30} />
          </Grid>
          <Grid item>
            <Typography color="textPrimary" variant="h6">
              Nabe.Finance
            </Typography>
          </Grid>
        </Grid>
      </Link>
    );
  };

  const ConnectButton = () => {
    return (
      <Badge
        color={active ? "success" : error ? "error" : "warning"}
        variant="dot"
      >
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          {account === undefined ? (
            <Button
              variant="outlined"
              sx={{ margin: (theme) => theme.spacing(0, 0, 0, 2) }}
              onClick={() => {
                activate(
                  connectorsByName[ConnectorNames.Injected],
                  async (error: Error) => {
                    console.log(error);
                  }
                );
              }}
            >
              {t("Connect Wallet")}
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                deactivate();
              }}
            >
              {account === null
                ? "-"
                : account
                ? `${truncateWalletAddress(account)}`
                : "account is null."}
            </Button>
          )}
        </Box>
      </Badge>
    );
  };

  const SectionDesktop = () => {
    return (
      <Box sx={{ display: { md: "block", xs: "none" }, marginRight: 3 }}>
        <Grid container spacing={3}>
          <Grid item>
            <Link href="/" underline="none" sx={link}>
              {t("NabePot")}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/MyPot" underline="none" sx={link}>
              {t("My Pots")}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/Docs" underline="none" sx={link}>
              {t("Docs")}
            </Link>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const SectionMobile = () => {
    return (
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        {account === undefined ? (
          <Button
            onClick={() => {
              activate(
                connectorsByName[ConnectorNames.Injected],
                async (error: Error) => {
                  console.log(error);
                }
              );
            }}
          >
            {t("Connect Wallet")}
          </Button>
        ) : (
          <Button
            onClick={() => {
              deactivate();
            }}
          >
            {account === null
              ? "-"
              : account
              ? `${truncateWalletAddress(account)}`
              : "account is null."}
          </Button>
        )}
        <IconButton
          onClick={() => {
            toggleDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    );
  };

  const MobileDrawer = () => {
    return (
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        <List style={{ width: 250 }}>
          <Link href="/" underline="none">
            <ListItem button>
              <ListItemText>Swap</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    );
  };

  return (
    <>
      <AppBar color="transparent" position="static" elevation={1}>
        <Toolbar variant="dense">
          <Logo />
          <div style={{ flexGrow: 1 }} />
          <SectionDesktop />
          <SectionMobile />
          <ConnectButton />
        </Toolbar>
      </AppBar>
      <MobileDrawer />
    </>
  );
};

export default Header;
