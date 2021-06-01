"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const react_syntax_highlighter_1 = __importDefault(require("react-syntax-highlighter"));
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const SystemUpdateAlt_1 = __importDefault(require("@material-ui/icons/SystemUpdateAlt"));
const GettingStarted = () => {
    const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
        main: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: '1vh',
            backgroundColor: theme.palette.primary.main,
            paddingTop: '1vh',
            paddingBottom: '1vh',
            width: 'auto',
            borderRadius: '5px'
        },
        button: {
            margin: '1rem 1rem 1rem 1rem',
        },
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
        },
        buttonsContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        icon: {
            color: theme.palette.secondary.main,
            fontSize: '5vh',
            padding: '1vh',
        },
        codeBlock: {
            borderRadius: '5px'
        }
    }));
    const installCodeBlock = 'npm install kafka-socks';
    const importCodeBlock = 'import { Consumer, Confluent, Subject } from \'kafka-socks\';';
    const classes = useStyles();
    return (react_1.default.createElement(core_1.Container, { className: classes.wrapper },
        react_1.default.createElement(core_1.Typography, { variant: "h4", color: "textPrimary", align: "center", gutterBottom: true }, "Getting Started"),
        react_1.default.createElement(core_1.Container, { className: classes.main },
            react_1.default.createElement(core_1.Typography, { color: "textPrimary", gutterBottom: true }, "Simply install from npm and import into your project"),
            react_1.default.createElement(SystemUpdateAlt_1.default, { className: classes.icon }),
            react_1.default.createElement(react_syntax_highlighter_1.default, { language: "javascript", style: prism_1.materialLight, className: classes.codeBlock }, installCodeBlock),
            react_1.default.createElement(react_syntax_highlighter_1.default, { language: "javascript", style: prism_1.materialLight, className: classes.codeBlock }, importCodeBlock),
            react_1.default.createElement(core_1.Container, { className: classes.buttonsContainer, maxWidth: "md" },
                react_1.default.createElement(core_1.Button, { className: classes.button, variant: "contained", color: "secondary", href: "https://github.com/oslabs-beta/Kafkasocks#readme" }, "Documentation"),
                react_1.default.createElement(core_1.Button, { className: classes.button, variant: "contained", color: "secondary", href: "https://github.com/oslabs-beta/Kafkasocks" }, "Github")))));
};
exports.default = GettingStarted;
