import React, { FC } from 'react';
import {
  makeStyles, createStyles, Container, Typography,
} from '@material-ui/core';
import TeamMember from '../components/TeamMembers';

const TeamContainer: FC = () => {
  const useStyles = makeStyles(() => createStyles({
    containerHorizontal: {
      // height: '80vh',
      paddingTop: '2%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    containerVertical: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

    },
  }));
  const vinit = {
    name: 'Vinit Patel',
    linkedIn: 'https://www.linkedin.com/in/vinit-za/',
    github: 'https://github.com/v-za',
    photo: require('./../assets/vinit.jpeg'),
  };
  const allison = {
    name: 'Allison Jacobs',
    linkedIn: 'https://www.linkedin.com/in/allison-j/',
    github: 'https://github.com/allisonIsCoding',
    photo: require('./../assets/allison.jpg'),
  };
  const jenessa  = {
    name: 'Jenessa Chapalamadugu',
    linkedIn: 'https://www.linkedin.com/in/jenessachap/',
    github: 'https://github.com/jenessachap',
    photo: require('./../assets/jenessa.jpg'),
  };
  const jason = {
    name: 'Jason Fricano',
    linkedIn: 'https://www.linkedin.com/in/jasonfricano/',
    github: 'https://github.com/jfricano',
    photo: require('./../assets/jason.jpg'),
  };

  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" color="textPrimary" align="center" gutterBottom>
        Team
      </Typography>
      <Container className={classes.containerHorizontal}>
        <Container className={classes.containerVertical}>
          <TeamMember details={vinit} />
          <TeamMember details={allison} />
        </Container>
        <Container className={classes.containerVertical}>
          <TeamMember details={jenessa} />
          <TeamMember details={jason} />
        </Container>
      </Container>
    </Container>
  );
};

export default TeamContainer;