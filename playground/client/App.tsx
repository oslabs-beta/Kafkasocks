import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { FC } from 'react';
import { createStyles, makeStyles, Typography, Container } from '@material-ui/core';
import { Element } from 'react-scroll';
import NavBar from './components/NavBar';
import Features from './components/Features';
import DataDisplay from './DataDisplay';

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30vh',
    paddingBottom: '15vh',
  },
  segment: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5vh',
    paddingBottom: '5vh',
  },
}))

const App: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth='lg'>
      <NavBar />
      <Container className={classes.titleBox} component={Element} name='top'>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Kafka Socks
          </Typography>
        <img alt="mainLogo" style={{ height: '30vh', paddingBottom: '5vh' }} src="/assets/Kafkasocks-full-logo.png" />

      </Container>
      
      </Container>
    )
    
  }
  
export default App;