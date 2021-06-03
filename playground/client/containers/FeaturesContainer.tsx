import React, { FC } from 'react';
import {
    makeStyles, createStyles, Container, Divider, Typography,
} from '@material-ui/core';
import Features from '../components/Features';

const FeaturesContainer: FC = () => {
    const useStyles = makeStyles(() => createStyles({
        containerHorizontal: {
            paddingTop: '5vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
        },
        containerVertical: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          // flexDirection: 'row',
            // display: 'inline',
            justifyContent: 'center',
        },
    }))
    const easyToUse = {
        image: require('./../assets/data-collection.svg'),
        subheading: 'Easy to Use',
        body: 'Kafka Socks is a simple npm package that allows you to easily connect your Kafka cluster to Websockets.',
    }
       const focus = {
        image: require('./../assets/programing.svg'),
        subheading: 'Focus on What Matters',
        body: 'Built by developers with the developer in mind. Giving you freedom to make decisions on how you handle streaming data.',
    }
       const setUp = {
        image: require('./../assets/code.svg'),
        subheading: 'Quick Set Up',
        body: 'After you enter your Kafka key, secret and bootstrap in the .env file, you have the power to create your producers, consumers and subject in any way your application needs.',
    }

    const classes = useStyles();

    return (
    <Container>
      <Container className={classes.containerHorizontal}>
        <Container className={classes.containerVertical}>
          <Features details={easyToUse} />
          <Features details={focus} />
          <Features details={setUp} />
        </Container>
      </Container>
    </Container>
  );
}

export default FeaturesContainer;