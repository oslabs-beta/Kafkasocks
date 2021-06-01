"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const GitHub_1 = __importDefault(require("@material-ui/icons/GitHub"));
const LinkedIn_1 = __importDefault(require("@material-ui/icons/LinkedIn"));
const TeamMember = ({ details, }) => {
    const useStyles = core_1.makeStyles(() => core_1.createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '1rem 1rem 1rem 1rem',
            margin: '0rem 2rem 2rem 2rem',
            width: '23%',
            height: '45vh'
        },
    }));
    const classes = useStyles();
    return (react_1.default.createElement(core_1.Card, { className: classes.root },
        react_1.default.createElement(core_1.CardContent, null,
            react_1.default.createElement(core_1.Typography, { align: "center" },
                react_1.default.createElement("img", { alt: "profilePhoto", style: {
                        height: '12vh',
                        paddingBottom: '1vh',
                        borderRadius: '50%',
                    }, src: details.photo })),
            react_1.default.createElement(core_1.Typography, { color: "textPrimary", align: "center", gutterBottom: true }, details.name),
            react_1.default.createElement(core_1.Typography, { align: "center" },
                react_1.default.createElement("a", { href: details.github },
                    react_1.default.createElement(GitHub_1.default, { color: "primary" })),
                react_1.default.createElement("a", { href: details.linkedIn },
                    react_1.default.createElement(LinkedIn_1.default, { color: "primary" }))))));
};
exports.default = TeamMember;
