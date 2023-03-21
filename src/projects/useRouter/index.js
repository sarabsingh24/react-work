import React from 'react';
import {BrowserRouter as Router,Route,Switch} from  'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from "./About";
import People from "./People";
import SinglePerson from "./SinglePerson";
 
export default function Index() {
    return (
      <Router>
<Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route  path="/people" component={People} />
          <Route path="/person/:id" component={SinglePerson} />
        </Switch>
      </Router>
    );
}
