import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Layout from "../components/Layout";
import Notes from "./Notes.js";
import EditNote from "./EditNote.js";

export default function Pages() {
  return (
    <Router>
      <Layout>
        <Route exact path="/notes">
          <Notes />
        </Route>
        <Route path="/note/:id">
          <EditNote />
        </Route>

        <Redirect to="/notes" />
      </Layout>
    </Router>
  );
}
