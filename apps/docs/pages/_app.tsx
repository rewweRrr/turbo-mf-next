import { UiButton } from "@repo/ui";
import type { AppProps } from "next/app";
import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({});

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <UiButton appName="docs">Click me!</UiButton>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
