 import React, { FC } from 'react';
import {
  makeStyles, createStyles, Card, CardContent, Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

interface Props {
 details: {
    name: string,
    linkedIn: string,
    github: string,
    photo: string
  }
}

const TeamMember: FC<Props> = ({
  details,
}: Props) => {
  const useStyles = makeStyles(() => createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      padding: '1rem 1rem 1rem 1rem',
      margin: '0rem 2rem 2rem 2rem',
      width: '23%',
      height: '45vh'
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align="center">
          <img
            alt="profilePhoto"
            style={{
              height: '12vh',
              paddingBottom: '1vh',
              borderRadius: '50%',
            }}
            src={details.photo}
          />
        </Typography>
        <Typography color="textPrimary" align="center" gutterBottom>
          {details.name}
        </Typography>
        <Typography align="center">
          <a href={details.github}>
            <GitHubIcon color="primary" />
          </a>
          <a href={details.linkedIn}>
            <LinkedInIcon color="primary" />
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;