import React, { FC } from 'react';
import {
  Container, Typography, makeStyles, createStyles, Button, Theme,
} from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

const GettingStarted: FC = () => {
  const useStyles = makeStyles((theme: Theme) => createStyles({
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
  return (
    <Container className={classes.wrapper}>
      <Typography variant="h4" color="textPrimary" align="center" gutterBottom>
        Getting Started
      </Typography>
      <Container className={classes.main}>
        <Typography color="textPrimary" gutterBottom>
          Simply install from npm and import into your project
        </Typography>
        <SystemUpdateAltIcon className={classes.icon} />
        <SyntaxHighlighter
          language="javascript"
          style={materialLight}
          className={classes.codeBlock}
        >
          { installCodeBlock }
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="javascript"
          style={materialLight}
          className={classes.codeBlock}
        >
          { importCodeBlock }
        </SyntaxHighlighter>
        <Container className={classes.buttonsContainer} maxWidth="md">
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            href="https://github.com/oslabs-beta/Kafkasocks#readme"
           
          >
            Documentation
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            href="https://github.com/oslabs-beta/Kafkasocks"
          >
            Github
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default GettingStarted;
