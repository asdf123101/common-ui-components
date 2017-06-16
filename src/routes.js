// src/routes.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './components/App';
import Nav from './components/Nav';
import Toggle from './components/Toggle';
import Home from './components/Home';
import Tabs from './components/Tabs';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
  	<div>
  	<App />
    <Nav />
  	<Switch>
  	<Route path="/" exact component={Home} />
    <Route path="/Toggle" component={Toggle} />
    <Route path="/tabs" component={Tabs} />
    <Route component={NotFound} />
    </Switch>
    </div>
  </Router>
);

export default Routes;