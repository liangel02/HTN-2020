import React from "react";
import ReactDOM from "react-dom";
import { LoadScript } from "@react-google-maps/api";

import Map from "./Map";
import "./styles.css";

function App() {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={"AIzaSyBX1z5nvjcjzyxSMT-QCVS3ERu6Y3iNSb0"}
      language="en"
      region="EN"
      version="weekly"
    >
      <Map />
      <Map />
      <Map />
    </LoadScript>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
