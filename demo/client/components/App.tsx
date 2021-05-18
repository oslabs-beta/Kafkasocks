// import useState next to FunctionComponent
import React from "react";
import DataDisplay from "./DataDisplay";

// our components props accept a number for the initial value
// const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
const App = () => {
  return (
    <div>
      <DataDisplay />
      
    </div>
  );
};

export default App;
