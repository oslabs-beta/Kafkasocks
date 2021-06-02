// import * as React from "react";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Container, Button } from "@material-ui/core";


import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

//initiate websocket on port


// const DataDisplay = () => {
  
//   const message = () => {
//    console.log("Hello World!") 
//   }
  
//   return (
//   <button onClick={message}> Press me to print a message! </button>
//     );
//   }

const DataDisplay = ({}) => {
  // let currentValue: any[] = [];
  // let index = 0;
  const [running, setRunning] = useState(false);

  
  // data object for chartjs
  useEffect(() => {
    console.log('in useffect')
    console.log(running)
    if(running){
      fetch('http://localhost:3001/consume')
      const socket = io("http://localhost:3001/trucks", {
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
    }

  })
  
 
    
  
  const data = {
    datasets: [
      {
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        lineTension: 0.4,
        cubicInterpolationMode: "monotone",
        data: [],
      },
    ],
  };

  
  const message = () => {
    console.log("Hello World!") 
   }

  //options for chartjs
  const options = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            onRefresh: null,
            // onRefresh: function () {
            //   // index++;
            //   // data.datasets[0].data.push({
            //   //   x: Date.now(),
            //   //   y: currentValue[index],
            //   // });

            // },
            delay: 2000,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };


  return (
    // <ThemeProvider theme={theme}>
    <Container>
    <div>
      <h1>Demo</h1>
      <h1>Kafkasocks Live Downloads</h1>
      <button onClick={() => setRunning(true)} >Consume</button>
      <Line data={data} options={options} />
    </div>
    </Container>
  );
};

export default DataDisplay;
