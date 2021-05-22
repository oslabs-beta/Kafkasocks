import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import io from "socket.io-client";
// import App from "./App";
import theme from './theme';
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const socket = io();

const socket = io("http://localhost:3333")


const socket = io("http://localhost:3333", {
  transports: ["websocket", "polling"],
});

const DataDisplay = ({}) => {
  const [data, setData] = useState([]);
  console.log('inside DataDisplay')
  // 1. listen for a cpu event and update the state
  useEffect(() => {
    socket.on("new download", (download) => {
      // setData((currentData) => [...currentData, download]);
    });
  }, []);

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <div>
        <h1>Real Time CPU Usage</h1>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="value" />
        </LineChart>
      </div>
    </ThemeProvider>,
    document.getElementById("root")
  );
};

export default DataDisplay;
// const newNode = document.createElement("div");
// // newNode.textContent = 'some more text from the tsx';

// document.body.append(newNode);
