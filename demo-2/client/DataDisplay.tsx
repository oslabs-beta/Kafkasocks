import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// import { render } from "react-dom";

// const socket = io();

// const socket = io("http://localhost:3333")


// const socket = io("http://localhost:3333", {
//   transports: ["websocket", "polling"],
// });

const socket = io("http://localhost:3333/trucks", {
  transports: ["websocket"],
  upgrade: false,
});


const DataDisplay = ({}) => {
  const [data, setData] = useState([]);
  console.log('inside DataDisplay')
  // 1. listen for a cpu event and update the state
  const currentTime = () => new Date().toLocaleTimeString(); // 11:18:48 AM
  useEffect(() => {
    socket.on("new download", (download) => {
      const jsonParse = JSON.parse(download);
      const createChart = {
        name: currentTime(),
        value: jsonParse['kafka-socks-downloads']
      }
      setData((currentData) => [...currentData, createChart]);
    });
  }, []);

  return(
      <div>
        <h1>Are we using react yet?</h1>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="value" />
        </LineChart>
      </div>
  );
};

export default DataDisplay;
// const newNode = document.createElement("div");
// // newNode.textContent = 'some more text from the tsx';

// document.body.append(newNode);
