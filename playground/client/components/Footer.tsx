import * as React from "react";
import { FC } from "react";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import Icon from '@mdi/react'
import { mdiNpm } from '@mdi/js'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      height: "20vh",
      padding: "0",
      bottom: "0",
      background: theme.palette.primary.main,
    },
    appBar: {
      maxHeight: "10vh",
      background: theme.palette.secondary.light,
    },
    landingButtons: {
      display: "flex",
      justifyContent: "space-between",
    },
    logo: {
      alignSelf: "flex-start",
      display: "flex",
    },
    button: {
      // margin: "0.5rem 0.5rem 0.5rem /0.5rem",
      color: theme.palette.text.primary,
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {" "}
      <BottomNavigationAction
        label="install kafka-socks"
        value="npm"
        href="https://www.npmjs.com/package/kafka-socks"
        target="_blank" 
        rel="noopener noreferrer"
        icon={<Icon path={mdiNpm} size={2}/>}
      />
      <BottomNavigationAction
        label="Github"
        value="github"
        href="https://github.com/oslabs-beta/Kafkasocks#readme"
        target="_blank" 
        rel="noopener noreferrer"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        value="linkedin"
        href="https://linkedin.com/company/kafka-socks"
        target="_blank" 
        rel="noopener noreferrer"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        label="Contact Us"
        value="contactus"
        href="mailto:admin@kafka-socks.io"
        icon={<AlternateEmailIcon />}
      />
    </BottomNavigation>
  );
}
