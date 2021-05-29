import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import DataDisplay from "./DataDisplay";
import Features from "./components/Features";
import { features } from "process";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Features />
    <DataDisplay />
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);
