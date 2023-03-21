import React from "react";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Items from "./Items";
import ItemDetail from "./ItemDetail";

import PageNotFound from "./PageNotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/items" exact component={Items} />
        <Route path="/items/:id" component={ItemDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
