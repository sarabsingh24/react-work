import React from "react";
import Navigation from "./component/common/Navigation";
import About from "./component/pages/AboutUs";
import Contact from "./component/pages/Contactus";
import ItemList from "./component/pages/ItemList";
import ItemDetail from "./component/pages/ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Project1Home() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/itemlist" exact component={ItemList} />
          <Route path="/itemlist/:id" component={ItemDetail} />
        </Switch>
      </Router>
    </div>
  );
}
