import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../theme/lightTheme";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps {
  Component: React.ElementType;
  pageProps: Record<string, any>;
}

const MyApp: React.FC<MyAppProps> = (props) => {
  const theme = createTheme(lightTheme);
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
