import "../public/global.css";
import React, { createContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/theme";
import AppContext from "src/context";

export default function MyApp(props: AppProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { Component, pageProps } = props;

  const controlSearchOpen = (value: boolean) => {
    setSearchOpen(value);
    console.log(value);
  };

  return (
    <AppContext.Provider
      value={{
        searchOpen,
        controlSearchOpen,
      }}
    >
      <Head>
        <title>Anime</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
