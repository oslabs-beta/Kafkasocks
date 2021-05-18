// import React, { useState } from 'react';
// import { Chart } from 'https://cdn.jsdelivr.net/npm/chart.js@3.2.1';
import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
// import "chartjs-plugin-streaming";
import { Chart } from 'chart.js';

// import "./App.css";

const DataDisplay = (props) => {

  // var myChart = new Chart(ctx, {...});

  // const canvas = document.createElement('canvas');
  // document.body.append(canvas);
  return (
   <div className="testing-canvas" border="2px" height="50" borderColor>
  <canvas id='myChart' width="200" height="100" bordercolor="red" border="10px">this is a canvas</canvas>
 </div>
 )


  // return (
  //   <div>
  //     <Line
  //       data={{
  //         datasets: [
  //           {
  //             label: "Dataset 1",
  //             borderColor: "rgb(255, 99, 132)",
  //             backgroundColor: "rgba(255, 99, 132, 0.5)",
  //             borderDash: [8, 4],
  //           },
  //           {
  //             label: "Dataset 2",
  //             borderColor: "rgb(54, 162, 235)",
  //             backgroundColor: "rgba(54, 162, 235, 0.5)",
  //             cubicInterpolationMode: "monotone",
  //           },
  //         ],
  //       }}
  //       options={{
  //         scales: {
  //           x: {
  //             realtime: {
  //               onRefresh: function (chart) {
  //                 chart.data.datasets.forEach(function (dataset) {
  //                   dataset.data.push({
  //                     x: Date.now(),
  //                     y: Math.random(),
  //                   });
  //                 });
  //               },

  //               delay: 2000,
  //             },
  //           },
  //         },
  //       }}
  //     />
  //   </div>
  // );
};

export default DataDisplay;
