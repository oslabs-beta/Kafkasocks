// import * as React from "react";
import React, { useState, useEffect, FC } from "react";
import io from "socket.io-client";
import { Container, Button, Typography, makeStyles, createStyles, Theme } from "@material-ui/core";


import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import "chartjs-plugin-streaming";

//initiate websocket on port



const DataDisplay: FC = ({ }) => {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: '1vh',
      backgroundColor: theme.palette.background.default,
      paddingTop: '1vh',
      // width: 'auto',
      // border: 'none',
      height: '80%',

    },
    button: {
      margin: '1rem 1rem 1rem 1rem',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
      alignItems: 'center',
      height: '500vh',
    }
  }))

  // let currentValue: any[] = [];
  // let index = 0;
  const [running, setRunning] = useState("DEAD");
  const [started, setStarted] = useState(false);

  
  // data object for chartjs
  useEffect(() => {
    console.log('in useffect')
    console.log(running)
    switch (running) {
      case "STARTED":
        console.log('in started')
        fetch('http://localhost:3000/consume')
        break;
      case "RESUMED":
        console.log("in resume")
        fetch('http://localhost:3000/resume')
        break;
      case "PAUSED":
        console.log('in paused')
        // fetch('http://localhost:3000/pause')
        break; 
    }
    
 
  }) 
  
  const data = {
    datasets: [
      {
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        //backgroundColor: "",
        lineTension: 1,
        cubicInterpolationMode: "monotone",
        fill: false,
        borderDash: [8, 4],
        data: [],
      },
      {
        label: "Dataset 2",
        borderColor: "rgb(65,105,225)",
       // backgroundColor: "",
        lineTension: 1,
        cubicInterpolationMode: "monotone",
        fill: false,
        borderDash: [8, 4],
        data: [],
      },
      
    ],
  };

  const socket = io("http://localhost:3000/trucks", {
    transports: ["websocket"],
    upgrade: false,
    });
    socket.on('truck message-1', msg => {
      let objMsg = JSON.parse(msg);
  
      data.datasets[0].data.push({
        x: Date.now(),
        y: objMsg.speed
      })
    })
    socket.on('truck message-2', msg => {
      let objMsg = JSON.parse(msg);
  
      data.datasets[1].data.push({
        x: Date.now(),
        y: objMsg.speed
      })
    })





  const options = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            duration: 20000,
            refresh: 500,
            delay: 500,
            onRefresh: null
          },
        },
      ],

    },
    interaction: {
      intersect: false
    },
    plugins: {
      title: {
        display: true,
        text: 'Truck Average RPM'
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      line: {
        tension: 0.4
      }
    }
 
  };

  const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
    <Container className={ classes.wrapper }>
      <Typography variant="h4" color="textPrimary" align="center" gutterBottom>Demo</Typography>
      <Container className={ classes.main }>
      <Line data={data} options={options} />
        <Container className={ classes.buttonsContainer}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {
                if(!started){
                  setStarted(true);
                  setRunning("STARTED")
                }
                else {
                  setRunning("RESUMED")
                }
        
      }}> Start </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {

        fetch('http://localhost:3000/resume')
      }
        }> Resume </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {
        fetch('http://localhost:3000/pause')
        //setRunning("PAUSED")
            }}> Stop </Button>
          </Container>
      </Container>
    </Container>
  );
};

export default DataDisplay;
