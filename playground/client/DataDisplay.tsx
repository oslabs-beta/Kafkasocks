// import * as React from "react";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Container, Button } from "@material-ui/core";


import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import "chartjs-plugin-streaming";

//initiate websocket on port



const DataDisplay = ({}) => {
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
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4
      }
    }
 
  };


  return (
    // <ThemeProvider theme={theme}>
    <Container>
    <div>
      <h1>Demo</h1>
      <h1>Kafkasocks Live Downloads</h1>
      <Line data={data} options={options} />
      <button onClick = {()=>{
                if(!started){
                  setStarted(true);
                  setRunning("STARTED")
                }
                else {
                  setRunning("RESUMED")
                }
        
      }}> START </button>
      <button onClick={()=> {

        fetch('http://localhost:3000/resume')
      }
        }> RESUME</button>
      <button onClick = {()=>{
        fetch('http://localhost:3000/pause')
        //setRunning("PAUSED")
      }}> STOP </button>
    </div>
    </Container>
  );
};

export default DataDisplay;
