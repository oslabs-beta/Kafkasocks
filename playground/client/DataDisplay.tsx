import * as React from "react";
import io from "socket.io-client";
import { ThemeProvider } from "@material-ui/core/styles";

import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

//initiate websocket on port
const socket = io("http://localhost:3001/trucks", {
  transports: ["websocket"],
  upgrade: false,
});

const DataDisplay = ({}) => {
  let currentValue: any[] = [];
  let index = 0;
  // listening for "new download" event on websocket. Then parses the data and pushes into currentValue array.
  socket.on("new download", (download) => {
    const jsonParse = JSON.parse(download);
    currentValue.push(jsonParse["kafka-socks-downloads"]);
  });

  // data object for chartjs
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

  //options for chartjs
  const options = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            onRefresh: function () {
              index++;
              data.datasets[0].data.push({
                x: Date.now(),
                y: currentValue[index],
              });
            },
            delay: 2000,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };

  return (
    // <ThemeProvider theme={theme}>
    <div>
      <h1>Demo</h1>
      <h1>Kafkasocks Live Downloads</h1>
      <Line data={data} options={options} />
    </div>
    // </ThemeProvider>
  );
};

export default DataDisplay;
