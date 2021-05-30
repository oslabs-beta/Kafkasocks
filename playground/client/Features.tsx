import * as React from "react";
import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import theme from "./theme";
import { flattenDiagnosticMessageText } from "typescript";

const Features = () => {
  const useStyles = makeStyles((theme: any) =>
    createStyles({
      main: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      },
      col: {
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        alignItems: "center",
      },
      text: {
        display: "flex",
        alignContent: "center",
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
    })
  );
  const classes = useStyles();

  return (
    <Card className={classes.img}>
      {/* <CardMedia
        component="img"
        alt="What Matters"
        height="200"
        image="\playground\client\TeamFocus.jpg"
        title="What Matters"
      /> */}
      <CardContent>
        <Typography align="center">
          <img
            alt="profilePhoto"
            style={{
              height: "12vh",
              paddingBottom: "1vh",
              borderRadius: "50%",
            }}
            src={details.photo}
          />
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          Focus on What Matters
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Build by developers with developers in mind. Giving you freedom to //
          make decision on how you handle streaming data.
        </Typography>
      </CardContent>
    </Card>

    // <Container className={classes.main}>
    //   <div className={classes.features}>
    //     <h3>Easy to Use</h3>
    //     <img
    //       src="./images/Kafkasocks-full-logo.png"
    //       width="200px"
    //       height="200px"
    //     />
    //     <p>
    //       Kafka Socks is a simple npm install package that allows you to easily
    //       connect your Kafka cluster to Websockets
    //     </p>
    //     <h3>Focus on What Matters</h3>
    //     <p>
    //       Build by developers with developers in mind. Giving you freedom to
    //       make decision on how you handle streaming data.
    //     </p>
    //     <h3>Quick set up</h3>
    //     <p>
    //       After you enter your Kafka key, secret and bootstrap in the .env file,
    //       you have the power toonnect your producer, consumer and websocket in 3
    //       easy lines of code.
    //     </p>
    //   </div>
    // </Container>
  );
};

export default Features;
