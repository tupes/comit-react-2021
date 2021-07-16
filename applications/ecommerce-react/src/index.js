import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//import { browserHistory } from "react-router";

import { createBrowserHistory } from "history";

// import App from "./components/classComponents/App";
import App from "./App";

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router>
    <App history={customHistory} />
  </Router>,
  document.getElementById("root")
);
