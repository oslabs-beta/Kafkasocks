import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#D0E0F5",
      main: "#BFDBF7", //<-- main fromset palette
      dark: "#ABCFEA",
      contrastText: "#fff",
    },
    secondary: {
      light: "#6FABC2",
      main: "#1F7A8C",
      dark: "#115363",
      contrastText: "#000",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: "#404040",
      secondary: "#696969",
      disabled: "#a3a3a3",
      hint: "#a3a3a3",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ["Montserrat"].join(","),
  },
});

export default theme;
