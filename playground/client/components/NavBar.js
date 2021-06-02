"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const react_scroll_1 = require("react-scroll");
const miniLogo = require('../assets/Kafkasocks-mini-logo.svg');
// playground\client\assets\ks-logo-full.svg
const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
    root: {
        width: '100vw',
        padding: '0',
    },
    appBar: {
        maxHeight: '10vh',
        background: theme.palette.secondary.light
    },
    landingButtons: {
        display: "flex",
        justifyContent: "flex-start",
    },
    logo: {
        alignSelf: "flex-start",
        display: 'flex',
    },
    button: {
        // margin: "0.5rem 0.5rem 0.5rem /0.5rem",
        color: theme.palette.text.primary
    },
}));
const GlobalCss = core_1.withStyles({
    "@global": {
        "html, body": {
            margin: 0,
            padding: 0,
        },
    },
})(() => null);
const NavBar = () => {
    const classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(GlobalCss, null),
        React.createElement(core_1.AppBar, { className: classes.appBar },
            React.createElement(core_1.Toolbar, { className: classes.landingButtons },
                React.createElement(core_1.IconButton, { className: classes.button },
                    React.createElement(core_1.Icon, { component: react_scroll_1.Link, to: "top", activeClass: "active", spy: true, smooth: true },
                        React.createElement("img", { alt: "miniNavLogo", style: { height: '95%' }, src: miniLogo }))),
                React.createElement(core_1.Button, { className: classes.button, component: react_scroll_1.Link, to: "features", activeClass: "active", spy: true, offset: -75, smooth: true }, "Features"),
                React.createElement(core_1.Button, { className: classes.button, component: react_scroll_1.Link, to: "demo", activeClass: "active", spy: true, offset: -75, smooth: true }, "Demo"),
                React.createElement(core_1.Button, { className: classes.button, component: react_scroll_1.Link, to: "getting started", activeClass: "active", spy: true, offset: -75, smooth: true }, "Getting Started"),
                React.createElement(core_1.Button, { className: classes.button, component: react_scroll_1.Link, to: "team", activeClass: "active", spy: true, offset: -75, smooth: true }, "Team")))));
};
exports.default = NavBar;
