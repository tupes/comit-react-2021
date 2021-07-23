import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TimersProvider from "./providers/TimersProvider";

ReactDOM.render(
  <TimersProvider>
    <App />
  </TimersProvider>,
  document.getElementById("root")
);
