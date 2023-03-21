import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import List from './List';
import Single from './single'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducer/rootReducer'

const store = createStore(rootReducer);

console.log(store)
export default function Index() {
    return (
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/:id" component={Single} />
          </Switch>
        </Provider>
      </Router>
    );
}
