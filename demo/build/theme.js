"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            light: '#72cff8',
            main: '#4fc3f7',
            dark: '#3788ac',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        background: {
            default: '#f4f4f4',
        },
        text: {
            primary: '#404040',
            secondary: '#696969',
            disabled: '#a3a3a3',
            hint: '#a3a3a3',
        },
    },
    typography: {
        fontSize: 14,
        fontFamily: [
            'Montserrat',
        ].join(','),
    },
});
exports.default = theme;
//# sourceMappingURL=theme.js.map