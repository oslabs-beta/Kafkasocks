import * as React from 'react';
import { FC } from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Icon,
  Theme,
} from '@material-ui/core';
import { Link } from 'react-scroll';

const mini = '/assets/ksMini.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      padding: '0',

    },
    appBar: {
      maxHeight: '10vh',
      background: theme.palette.primary.dark
    },
    landingButtons: {
      display: "flex",
      justifyContent: "flex-start",
    },
    logo: {
      alignSelf: "flex-start",
    },
    button: {
      margin: "1rem 1rem 1rem 1rem",
    },
  })
);

const GlobalCss = withStyles({
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
})(() => null);

const NavBar: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GlobalCss />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.landingButtons}>
          <IconButton className={classes.button}>
            <Icon component={Link} to="top" activeClass="active" spy smooth>
              <img alt="miniNavLogo" src="playground/client/assets/ksMini.png"/>
            </Icon>
          </IconButton>
          <Button
            className={classes.button}
            component={Link}
            to="features"
            activeClass="active"
            spy
            offset={-75}
            smooth
            color="inherit"
          >
            Features
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="demo"
            activeClass="active"
            spy
            offset={-75}
            smooth
            color="inherit"
          >
            Demo
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="getting started"
            activeClass="active"
            spy
            offset={-75}
            smooth
            color="inherit"
          >
            Getting Started
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="team"
            activeClass="active"
            spy
            offset={-75}
            smooth
            color="inherit"
          >
            Team
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
