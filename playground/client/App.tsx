import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { FC } from 'react';
import { Theme, createStyles, makeStyles, Typography, Container } from '@material-ui/core';
import { Element } from 'react-scroll';
import NavBar from './components/NavBar';
import Features from './components/Features';
import DataDisplay from './DataDisplay';
import theme from './theme';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    minWidth: '100vw',
    paddingLeft: '0',
    paddingRight: '0',
    paddingTop: '0'
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30vh',
    paddingBottom: '15vh',
    background: theme.palette.primary.main
  },
  segment: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5vh',
    paddingBottom: '5vh',
  },
  bold: {
    fontWeight: 9 00,
  }
}))

const App: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.topContainer} maxWidth='lg'>
      <NavBar />
      <Container className={classes.titleBox} component={Element} name='top'>
        <img alt="mainLogo" style={{ height: '25vh', paddingBottom: '5vh' }} src="/assets/ksFullLogo.png" />
        <Typography className={ classes.bold }
          variant="h3"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Kafka Socks
          </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Making connecting WebSockets with Kafka as easy as npm install kafka-socks
        </Typography>
      </Container>

         <Container className={classes.segment} component={Element} name="features">
          <Features />
        </Container>

          <Container className={classes.segment} component={Element} name="demo">
            {/* <MainContainer /> */}
          </Container>
        <Container className={classes.segment} component={Element} name="getting started">
          {/* <GettingStarted /> */}
        </Container>
        <Container className={classes.segment} component={Element} name="team">
          {/* <TeamContainer /> */}
        </Container>     
      </Container>
    )
    
  }
  
export default App;