import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import { getLibrary } from "utils/web3React";
import store from "state";

const Providers: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme(
    {
      palette: {
        mode: "light",
        primary: {
          light: "#735858",
          main: "#371110",
          dark: "#2a0c0c",
        },
        secondary: {
          light: "#dae6f0",
          main: "#cadbe9",
          dark: "#bdd2e3",
        },
      },
      typography: {
        fontFamily: ["Ubuntu"].join(","),
      },
    },
    [prefersDarkMode]
  );

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
        </ThemeProvider>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
