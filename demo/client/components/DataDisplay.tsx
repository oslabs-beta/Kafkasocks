import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ReactDOM from 'react-dom';
// import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const socket = io('http://localhost:5050', {
  transports: ['websocket', 'polling']
});

const DataDisplay = ({}) => {
  const [data, setData] = useState([]);
  // 1. listen for a cpu event and update the state
  useEffect(() => {
    socket.on('cpu', cpuPercent => {
      setData(currentData => [...currentData, cpuPercent]);
    });
  }, []);

  // 2. render the line chart using the state
  return (
    <div>
      <h1>Real Time CPU Usage</h1>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" />
      </LineChart>
    </div>
  );

};

export default DataDisplay;
