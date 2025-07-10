"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme";

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
