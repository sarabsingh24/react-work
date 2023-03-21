import React from "react";
import Login from "./Login";

import Admin from "./Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}
