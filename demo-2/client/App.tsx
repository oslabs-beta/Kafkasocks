import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import DataDisplay from "./DataDisplay";




const App = () => {
  return(
    <DataDisplay />
    );
};

export default App;
