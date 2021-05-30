import React, { FC } from 'react';
import {
  Container, Typography, makeStyles, createStyles, Button, Theme,
} from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const GettingStarted: FC = () => {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: '5vh',
      backgroundColor: theme.palette.background.default,
      paddingTop: '3vh',
      paddingBottom: '3vh',
      width: 'auto',
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
    divider: {
      height: '1px',
    },
    icon: {
      color: theme.palette.secondary.light,
      fontSize: '5vh',
      padding: '2vh',
    },
  }));
  const installCode = 'npm install kafka-penguin';
  const importCode = 'import { DeadLetterQueue } from \'kafka-penguin\';';
  const classes = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Typography variant="h3" color="textPrimary" align="center" gutterBottom>
        GETTING STARTED
      </Typography>
      <Divider className={classes.divider} variant="middle" flexItem />
      <Container className={classes.main}>
        <Typography color="textSecondary" gutterBottom>
          Simply install from npm and import into your project
        </Typography>
        <GetAppRoundedIcon className={classes.icon} />
        <SyntaxHighlighter
          language="javascript"
          style={materialLight}
        >
          { installCode }
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="javascript"
          style={materialLight}
        >
          { importCode }
        </SyntaxHighlighter>
        <Container className={classes.buttonsContainer} maxWidth="md">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href="https://app.gitbook.com/@kafka-penguin-1/s/kafka-penguin/"
          >
            Documentation
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href="https://github.com/oslabs-beta/kafka-penguin"
          >
            Github
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default GettingStarted;
