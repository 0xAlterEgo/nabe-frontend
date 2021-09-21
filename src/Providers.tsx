import { Web3ReactProvider } from "@web3-react/core";
import { ThemeProvider, createTheme } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import { getLibrary } from "utils/web3React";

const Providers: React.FC = ({ children }) => {
  const theme = createTheme(
    {
      palette: {
        mode: "dark",
        primary: {
          light: "#00262F",
          main: "#476369",
          dark: "#26474E",
        },
        secondary: {
          light: "#609CD4",
          main: "#448acc",
          dark: "#3E82C7",
        },
      },
      typography: {
        fontFamily: ["Ubuntu"].join(","),
      },
    },
    []
  );

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
        </ThemeProvider>
    </Web3ReactProvider>
  );
};

export default Providers;