"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const Features = ({ details, }) => {
    const useStyles = core_1.makeStyles(() => core_1.createStyles({
        root: {
            display: 'flex',
            alignItems: 'top',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '1rem 1rem 1rem 1rem',
            margin: '1rem 1rem 1rem 1rem',
            // minWidth: '20vw',
            // width: 'auto',
            // border: 'none',
        },
    }));
    const classes = useStyles();
    return (react_1.default.createElement(core_1.Card, { className: classes.root },
        react_1.default.createElement(core_1.CardContent, null,
            react_1.default.createElement(core_1.Typography, { align: "center" },
                react_1.default.createElement("img", { alt: "featureImg", style: {
                        width: '90%',
                        height: 'auto',
                        paddingBottom: '1vh',
                    }, src: details.image })),
            react_1.default.createElement(core_1.Typography, { color: "textPrimary", style: { fontWeight: 700 }, align: "center", gutterBottom: true }, details.subheading),
            react_1.default.createElement(core_1.Typography, { align: "center" },
                react_1.default.createElement("p", null, details.body)))));
};
// ++++++++++++++++++++++++
/*
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: '1rem 1rem 1rem 1rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    marginTop: '5vh',
    marginBottom: '5vh',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    background: theme.palette.background.default,
  },
  icon: {
    fontSize: '7vh',
    color: theme.palette.primary.light,
    padding: '2vh',
  },
  text: {
    display: 'flex',
    alignContent: 'center',
  },
  features: {
    display: "flex",
    alignitems: "center",
    padding: "2rem 0",
    width: "100%",
  },
  img: {
    height: "200px",
    width: "200px",
  },
}))

const Features2: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant='h3' color='textPrimary' align='center'>
        Features (placeholder title)
     </Typography>
    </Container>
  )
}

*/
////////////////////////////////
// const Features = () => {
//   const useStyles = makeStyles((theme: any) =>
//     createStyles({
//       main: {
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         alignContent: "center",
//       },
//       col: {
//         display: "flex",
//         flexDirection: "row",
//         justifyItems: "center",
//         alignItems: "center",
//       },
//       text: {
//         display: "flex",
//         alignContent: "center",
//       },
//       features: {
//         display: "flex",
//         alignitems: "center",
//         padding: "2rem 0",
//         width: "100%",
//       },
//       img: {
//         height: "200px",
//         width: "200px",
//       },
//     })
//   );
//   const classes = useStyles();
//   return (
//     <Card className={classes.img}>
//       {/* <CardMedia
//         component="img"
//         alt="What Matters"
//         height="200"
//         image="\playground\client\TeamFocus.jpg"
//         title="What Matters"
//       /> */}
//       <CardContent>
//         <Typography align="center">
//           <img
//             alt="profilePhoto"
//             style={{
//               height: "12vh",
//               paddingBottom: "1vh",
//               borderRadius: "50%",
//             }}
//             src={details.photo}
//           />
//         </Typography>
//         <Typography gutterBottom variant="h5" component="h2">
//           Focus on What Matters
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Build by developers with developers in mind. Giving you freedom to //
//           make decision on how you handle streaming data.
//         </Typography>
//       </CardContent>
//     </Card>
//     // <Container className={classes.main}>
//     //   <div className={classes.features}>
//     //     <h3>Easy to Use</h3>
//     //     <img
//     //       src="./images/Kafkasocks-full-logo.png"
//     //       width="200px"
//     //       height="200px"
//     //     />
//     //     <p>
//     //       Kafka Socks is a simple npm install package that allows you to easily
//     //       connect your Kafka cluster to Websockets
//     //     </p>
//     //     <h3>Focus on What Matters</h3>
//     //     <p>
//     //       Build by developers with developers in mind. Giving you freedom to
//     //       make decision on how you handle streaming data.
//     //     </p>
//     //     <h3>Quick set up</h3>
//     //     <p>
//     //       After you enter your Kafka key, secret and bootstrap in the .env file,
//     //       you have the power toonnect your producer, consumer and websocket in 3
//     //       easy lines of code.
//     //     </p>
//     //   </div>
//     // </Container>
//   );
// };
exports.default = Features;
