import React from "react";
import ReactDOM from "react-dom";
import { BrowserRoute } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRoute>
    <App />
  </BrowserRoute>,
  document.getElementById("root")
);
